

const fs = require("fs");

var arguments = process.argv.splice(2);
var pbfilename = arguments[0];
var channelName = arguments[1] || "game";
var headFlag = arguments[2] || "false";
console.log('所传递的参数是：', pbfilename, channelName, headFlag);

//检查import关系
function getImportMud(data) {
	var tmp = null;
	var len = data.length;
	if(len > 10) { len = 10 }
	for(var n=0; n<len; n++) {
		if(data[n].match("import") && !data[n].match("//")) {
			tmp = data[n].slice(0, data[n].indexOf('\.'));
			tmp = tmp.slice(tmp.indexOf("\"")+1, tmp.length);
			break;
		}
	}
	return tmp;
}

function getPackageName(data) {
	for(var i=0, len=data.length; i<len; i++) {
		var str = data[i];
		str = str.replace(';', ' ');  //去分号
		var arr = str.split(/\s+/); 	//去空白字符
		if(arr[0].match("//") || (arr[0]=="" && arr[1] && arr[1].match("//"))){
			//是一个注释
		}
		else {
			//解析 "message Request"
			if( arr[0]=="package" && arr[1].indexOf("\.")<0 ) {
				return arr[1];
			}
			else if( arr[0]=="" && arr[1]=="package" && arr[2].indexOf("\.")<0 ){
				return arr[2];
			}
		}
	}
	return null;
}

//-----------------------------------------------------------------
// 第一步： 解析 消息cmd 和 结构体 以及 在protobuf网络包中的字段名
//-----------------------------------------------------------------

var filepath = "in/" + pbfilename + ".proto";
const line_list = fs.readFileSync(filepath, 'utf8').split('\n');

var depMud = getImportMud(line_list);
console.log("import ",  depMud);
var mudname = getPackageName(line_list);
if(!mudname) { mudname = pbfilename; }

// from json
var jsonFile = "tmps/" + pbfilename+".json";
var jsonStr = fs.readFileSync(jsonFile, 'utf8');
var ptoJs = JSON.parse(jsonStr);
ptoJs = ptoJs["nested"][mudname]["nested"];
// console.log(ptoJs);
// fs.unlinkSync(jsonFile);


//一、将 "message Request" 和 "message Response" 解析出来
function parseRequestAndResponse(data) {
	var startRequest = 0;
	var endRequest = 0;
	var startResponse = 0;
	var endResponse = 0;
	for(var i=0, len=data.length; i<len; i++) {
		var str = data[i];
		var arr = str.split(/\s+/); 	//去空白字符
		if(arr[0].match("//") || (arr[0]=="" && arr[1] && arr[1].match("//"))){
			//是一个注释
		}
		else {
			//解析 "message Request"
			if( (arr[0]=="message" && arr[1]=="Request") || (arr[1]=="message" && arr[2]=="Request") ) {
				startRequest = i;
				endRequest = startRequest;
				var endFlag = 0;
				var hasCmd = false;
				for(var jj=startRequest; jj<data.length; jj++) {
					if(data[jj].match("enum CMD")){
						hasCmd = true;
					}
					if(data[jj].match('}')){
						endFlag++;
						if (endFlag==2 || !hasCmd) {
							endRequest = jj;
							break;
						}
					}
				}
				console.log("Request定义区间：", startRequest+1, endRequest+1);
			}
			//解析 "message Response"
			else if( (arr[0]=="message" && arr[1]=="Response") || (arr[1]=="message" && arr[2]=="Response") ) {
				startResponse = i;
				endResponse = startResponse;
				var endFlag = 0;
				var hasCmd = false;
				for(var jj=startResponse; jj<data.length; jj++) {
					if(data[jj].match("enum CMD")){
						hasCmd = true;
					}
					if(data[jj].match('}')){
						endFlag++;
						if (endFlag==2 || !hasCmd) {
							endResponse = jj;
							break;
						}
					}
				}
				console.log("Response定义区间：", startResponse+1, endResponse+1);
			}
		}
	}
	return {
		startRequest : startRequest,
		endRequest : endRequest,
		startResponse : startResponse,
		endResponse : endResponse
	};
}

var tmpInfo = parseRequestAndResponse(line_list);
var reqArray;
var respArray;
var originLen = line_list.length;
if(tmpInfo.startRequest > tmpInfo.startResponse) {
	reqArray = line_list.splice(tmpInfo.startRequest, tmpInfo.endRequest-tmpInfo.startRequest+1);
	respArray = line_list.splice(tmpInfo.startResponse, tmpInfo.endResponse-tmpInfo.startResponse+1);
}
else {
	respArray = line_list.splice(tmpInfo.startResponse, tmpInfo.endResponse-tmpInfo.startResponse+1);
	reqArray = line_list.splice(tmpInfo.startRequest, tmpInfo.endRequest-tmpInfo.startRequest+1);
}
var msgArray = line_list;
console.log("------", originLen, msgArray.length, reqArray.length, respArray.length);


function getEnumInfo(){
	var enumInfo = ptoJs.Request.nested.CMD.values;

	var cmdInfo = {};
	for(var kk in enumInfo) {
		cmdInfo[kk] = { enumKey:kk, enumValue:enumInfo[kk] };
	}

	var fieldInfo = {};
	var fields = ptoJs.Request.fields;
	for(var fieldName in fields) {
		if(fields[fieldName].type != "CMD") {
			fieldInfo[fieldName] = { structName:fields[fieldName].type, fieldName:fieldName };
		}
	}

	return { cmdInfo : cmdInfo, fieldInfo:fieldInfo };
}

var reqInfo = getEnumInfo();
console.log(reqInfo);

function getFieldName(whitchInfo, structName){
	for(var fieldName in whitchInfo.fieldInfo) {
		if(whitchInfo.fieldInfo[fieldName].structName == structName) {
			return fieldName;
		}
	}
}

//二、解析出所有的 message， 以及所绑定的 cmd
function parseMessages(msgArray, reqInfo) {
	for(var i=0, len=msgArray.length; i<len; i++) {
		// // int DELAY_CHECK_REQ = 20010
		// message c2s_delayCheck
		if(msgArray[i].match("message") && msgArray[i-1].match("=") && msgArray[i-1].match("//")) {
			// 提取message定义
			var structName;
			var arr = msgArray[i].split(/\s+/); 	//去空白字符
			if( arr[0] == "message" )
			{
				structName = arr[1];
				if(structName.match('{')) {
					structName = structName.slice(0, structName.indexOf('{'));
				}
				if(structName.match('//')) {
					structName = structName.slice(0, structName.indexOf('//'));
				}
			}
			else if( arr[1] == "message" && !arr[0].match("//") )
			{
				structName = arr[2];
				if(structName.match('{')) {
					structName = structName.slice(0, structName.indexOf('{'));
				}
				if(structName.match('//')) {
					structName = structName.slice(0, structName.indexOf('//'));
				}
			}

			// 提取使用该struct作为数据的cmd
			if( structName ) {
				for(var mm=1; mm<=20; mm++) {
					if( msgArray[i-mm].match('=') && msgArray[i-mm].match("//") ) {
						var str = msgArray[i-mm];
						if(str.indexOf(';')>=0){
							str = str.slice(0, str.indexOf(';')); //去分号
						}
						str = str.replace(/\/+/, ' '); 	//去注释
						str = str.replace('=', ' = ')
						var arr = str.split(/\s+/); 	//去空白字符
						var enumKey;
						var enumValue;
						for(var j=0; j<arr.length; j++) {
							if(arr[j] == '='){
								enumKey = arr[j-1];
								enumValue = arr[j+1];
							}
						}

						//if(reqInfo.cmdInfo[enumKey] && reqInfo.cmdInfo[enumKey].enumValue==enumValue)
						if(reqInfo.cmdInfo[enumKey])
						{
							reqInfo.cmdInfo[enumKey].structName = structName;
							reqInfo.cmdInfo[enumKey].fieldName = getFieldName(reqInfo, structName);
							console.log("+++++", enumKey, enumValue, structName, reqInfo.cmdInfo[enumKey].fieldName);
						}
					}
					else {
						break;
					}
				}
			}
		}
	}
}
parseMessages(msgArray, reqInfo);

console.log("================================")


//-----------------------------------------------------------------
// 第二步： 生成代码
//-----------------------------------------------------------------
var outpath = "../../assets/common/script/proxy/net_" + pbfilename + ".ts";
var outstr = "//---------------------------------\n";
outstr += "//该文件自动生成，请勿手动更改\n";
outstr += "//---------------------------------\n";
outstr += "import { " + mudname + " } from \"./" + pbfilename + "\";\n";
outstr += "import ChannelDefine from \"../definer/ChannelDefine\";\n";
outstr += "import PacketDefine from \"../../../kernel/net/PacketDefine\";\n\n\n";

// Enum
outstr += "export enum " + mudname + "_msgs {\n";
var infos = reqInfo.cmdInfo;
for(var enumKey in infos) {
	outstr += "    " + enumKey + " = " + infos[enumKey].enumValue + ",\n";
}
outstr += "}\n\n";

// PackageDefine
outstr += "export class " + mudname + "_packet_define {\n";
var infos = reqInfo.cmdInfo;
for(var enumKey in infos) {
	var curDef = infos[enumKey];
	if(curDef.fieldName != undefined){
		outstr += "    public static " + enumKey + " = new PacketDefine(" + mudname + ", " + mudname+".Request.CMD."+curDef.enumKey+", "+mudname+"."+curDef.structName+", \""+curDef.fieldName+"\", \""+curDef.structName+"\", "+headFlag+");\n";
	}
	else{
		outstr += "    // public static " + enumKey + " = new PacketDefine(" + mudname + ", " + mudname+".Request.CMD."+curDef.enumKey+", "+mudname+"."+curDef.structName+", \""+curDef.fieldName+"\", \""+curDef.structName+"\", "+headFlag+");\n";
	}
}
outstr += "}\n\n";

// Request Functions
//找到cmd对应的message定义
function getStructName(enumK) {
	return infos[enumKey].structName;
}
function getRequestParam(enumK) {
	var structName = getStructName(enumK);
	var argInfo = ptoJs[structName]
	if(!argInfo) { return "any"; }
	var fields = argInfo.fields || {};
	var desc = "{";
	for(var fieldName in fields) {
		var typeStr = fields[fieldName].type;
		if(typeStr.indexOf("int") >= 0){
			typeStr = "number";
		}
		else if(typeStr == "string") {
			typeStr = "string";
		}
		else {
			typeStr = "any";
		}
		if(desc=="{")
			desc += " " + fieldName + ":" + typeStr;
		else
			desc += ", " + fieldName + ":" + typeStr;
	}
	desc += " }";
	if(desc=="{ }") { desc = "{}"; }
	return desc;
}
outstr += "export class "+mudname+"_request {\n";
infos = reqInfo.cmdInfo;
for(var enumKey in infos) {
	var curDef = infos[enumKey];
	if(curDef.fieldName != undefined){
		outstr += "    public static "+enumKey+"(data:"+getRequestParam(enumKey)+", bIsPbObj:boolean = false) : void \n";
		outstr += "    {\n";
		outstr += "        "+ mudname+"_packet_define."+enumKey+".sendToChannel(ChannelDefine."+channelName+", data, bIsPbObj);\n";
		outstr += "    }\n";
	}
	else {
		outstr += "//    public static "+enumKey+"(data:any, bIsPbObj:boolean = false) : void \n";
		outstr += "//    {\n";
		outstr += "//        "+ mudname+"_packet_define."+enumKey+".sendToChannel(ChannelDefine."+channelName+", data, bIsPbObj);\n";
		outstr += "//    }\n";
	}
}
outstr += "}\n";

//写入文件
fs.writeFileSync(outpath, outstr, 'utf8');