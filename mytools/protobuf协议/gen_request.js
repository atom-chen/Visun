// 异步读取 readFile
const fs = require("fs");

var arguments = process.argv.splice(2);
console.log('所传递的参数是：', arguments);
var mudname = arguments[0];

//-----------------------------------------------------------------
// 第一步： 解析 消息cmd 和 结构体 以及 在protobuf网络包中的字段名
//-----------------------------------------------------------------

var filepath = "in/" + mudname + ".proto";
const data = fs.readFileSync(filepath, 'utf8').split('\n');

//一、将 "message Request" 和 "message Response" 解析出来
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
			for(var jj=startRequest; jj<data.length; jj++) {
				if(data[jj].match('}')){
					endFlag++;
					if (endFlag==2) {
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
			for(var jj=startResponse; jj<data.length; jj++) {
				if(data[jj].match('}')){
					endFlag++;
					if (endFlag==2) {
						endResponse = jj;
						break;
					}
				}
			}
			console.log("Response定义区间：", startResponse+1, endResponse+1);
		}
	}
}

var reqArray;
var respArray;
var originLen = data.length;
if(startRequest>startResponse){
	reqArray = data.splice(startRequest, endRequest-startRequest+1);
	respArray = data.splice(startResponse, endResponse-startResponse+1);
}
else {
	respArray = data.splice(startResponse, endResponse-startResponse+1);
	reqArray = data.splice(startRequest, endRequest-startRequest+1);
}
console.log("------", originLen, data.length, reqArray.length, respArray.length);

function findInArray(target, value, times){
	var cur = 0;
	var idx = -1;
	for(var x=0, l=target.length; x<l; x++){
		if(target[x]==value){
			cur++;
			if(cur==times){
				idx = x;
				break;
			}
		}
	}
	return idx;
}

function getEnumInfo(whichArr){
	var lenReq = whichArr.length;
	for(var nn = lenReq-1; nn>=0; nn--) {
		if(whichArr[nn].indexOf("//")) {
			whichArr[nn] = whichArr[nn].slice(0, whichArr[nn].indexOf('//'));  //去注释
		}
		whichArr[nn] = whichArr[nn].replace(';', ' ');  //去分号
	}

	var reqStr = "";
	lenReq = whichArr.length;
	for(var nnn = 0; nnn < lenReq; nnn++) {
		reqStr += whichArr[nnn];
	}
	var itemArr = reqStr.split(/\s+/);

	var second1 = findInArray(itemArr, "{", 2);
	var second2 = findInArray(itemArr, "}", 1);
	var enumList = itemArr.splice(second1, second2-second1+1);

	var cmdInfo = {};
	for(var v=0; v<enumList.length; v++){
		if(enumList[v]=="="){
			cmdInfo[enumList[v-1]] = { enumKey:enumList[v-1], enumValue:enumList[v+1] };
		}
	}

	var fieldInfo = {};
	for(var v=0; v<itemArr.length; v++){
		if(itemArr[v]=="="){
			fieldInfo[itemArr[v-1]] = { structName:itemArr[v-2], fieldName:itemArr[v-1], fieldTag:itemArr[v+1] };
		}
	}

	return { cmdInfo : cmdInfo, fieldInfo:fieldInfo };
}

var reqInfo = getEnumInfo(reqArray);
var respInfo = getEnumInfo(respArray);

function getFieldName(whitchInfo, structName){
	for(var fieldName in whitchInfo.fieldInfo) {
		if(whitchInfo.fieldInfo[fieldName].structName == structName) {
			return fieldName;
		}
	}
}

//二、解析出所有的 message， 以及所绑定的 cmd
var allStructs = {};
for(var i=0, len=data.length; i<len; i++) {
	// // int DELAY_CHECK_REQ = 20010
	// message c2s_delayCheck
	if(data[i].match("message") && data[i-1].match("=") && data[i-1].match("//")) {
		// 提取message定义
		var structName;
		var arr = data[i].split(/\s+/); 	//去空白字符
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
			allStructs[structName] = true;

			for(var mm=1; mm<=20; mm++) {
				if( data[i-mm].match('=') && data[i-mm].match("//") ) {
					var str = data[i-mm];
					if(str.indexOf(';')>=0){
						str = str.slice(0, str.indexOf(';')); //去分号
					}
					str = str.replace(/\/+/, ' '); 	//去注释
					var arr = str.split(/\s+/); 	//去空白字符
					var enumKey;
					var enumValue;
					for(var j=0; j<arr.length; j++) {
						if(arr[j] == '='){
							enumKey = arr[j-1];
							enumValue = arr[j+1];
						}
					}

					if(reqInfo.cmdInfo[enumKey] && reqInfo.cmdInfo[enumKey].enumValue==enumValue)
					{
						reqInfo.cmdInfo[enumKey].structName = structName;
						reqInfo.cmdInfo[enumKey].fieldName = getFieldName(reqInfo, structName);
						console.log("+++++", enumKey, enumValue, structName, reqInfo.cmdInfo[enumKey].fieldName);
					}
					else if(respInfo.cmdInfo[enumKey] && respInfo.cmdInfo[enumKey].enumValue==enumValue)
					{
						respInfo.cmdInfo[enumKey].structName = structName;
						respInfo.cmdInfo[enumKey].fieldName = getFieldName(respInfo, structName);
						console.log("-----", enumKey, enumValue, structName, respInfo.cmdInfo[enumKey].fieldName);
						break;
					}
				}
				else {
					break;
				}
			}
		}
	}
}

console.log("================================")


//-----------------------------------------------------------------
// 第二步： 生成代码
//-----------------------------------------------------------------
var outpath = "../../assets/common/script/proxy/net_" + mudname + ".ts";
var outstr = "//---------------------------------\n";
outstr += "//该文件自动生成，请勿手动更改\n";
outstr += "//---------------------------------\n";
outstr += "import { " + mudname + " } from \"../proto/" + mudname + "\";\n";
outstr += "import PacketDefine from \"../../../kernel/net/PacketDefine\";\n";
outstr += "import ChannelDefine from \"../definer/ChannelDefine\";\n\n\n";

// PackageDefine
outstr += "export class " + mudname + "_packet_define {\n";
var infos = reqInfo.cmdInfo;
for(var enumKey in infos) {
	var curDef = infos[enumKey];
	if(curDef.fieldName != undefined){
		outstr += "    public static " + enumKey + " = new PacketDefine(" + mudname + ", " + mudname+".Request.CMD."+curDef.enumKey+", "+mudname+"."+curDef.structName+", \""+curDef.fieldName+"\", \""+curDef.structName+"\");\n";
	}
	else{
		outstr += "    // public static " + enumKey + " = new PacketDefine(" + mudname + ", " + mudname+".Request.CMD."+curDef.enumKey+", "+mudname+"."+curDef.structName+", \""+curDef.fieldName+"\", \""+curDef.structName+"\");\n";
	}
}
// infos = respInfo.cmdInfo;
// for(var enumKey in infos) {
// 	var curDef = infos[enumKey];
// 	outstr += "    public static " + enumKey + " = new PacketDefine(" + mudname + ", " + mudname+".Request.CMD."+curDef.enumKey+", "+mudname+"."+curDef.structName+", \""+curDef.fieldName+"\", \""+curDef.structName+"\");\n";
// }
outstr += "}\n\n";

// Request Functions
outstr += "export class "+mudname+"_request {\n";
infos = reqInfo.cmdInfo;
for(var enumKey in infos) {
	var curDef = infos[enumKey];
	if(curDef.fieldName != undefined){
		outstr += "    public static "+enumKey+"(data:any, bIsPbObj:boolean) : void \n";
		outstr += "    {\n";
		outstr += "        "+ mudname+"_packet_define."+enumKey+".sendToChannel(ChannelDefine.game, data, bIsPbObj);\n";
		outstr += "    }\n";
	}
	else {
		outstr += "//    public static "+enumKey+"(data:any, bIsPbObj:boolean) : void \n";
		outstr += "//    {\n";
		outstr += "//        "+ mudname+"_packet_define."+enumKey+".sendToChannel(ChannelDefine.game, data, bIsPbObj);\n";
		outstr += "//    }\n";
	}
}
outstr += "}\n";

//写入文件
fs.writeFileSync(outpath, outstr, 'utf8');