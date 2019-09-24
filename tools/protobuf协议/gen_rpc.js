

const fs = require("fs");

var arguments = process.argv.splice(2);
var pbfilename = arguments[0];
var channelName = arguments[1] || "game";
console.log('所传递的参数是：', pbfilename, channelName);

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


//-----------------------------------------------------------------
// 第一步： 解析 消息cmd 和 结构体 以及 在protobuf网络包中的字段名
//-----------------------------------------------------------------

var filepath = "in/" + pbfilename + ".proto";
const line_list = fs.readFileSync(filepath, 'utf8').split('\n');

var depMud = getImportMud(line_list);
console.log("import ",  depMud);
var RpcPairName = "HallMsgId";

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

function parseRpcPair(data) {
	var startLine = -1;
	var endLine = -1;
	for(var i=0, len=data.length; i<len; i++) {
		var str = data[i];
		var arr = str.split(/\s+/); 	//去空白字符
		if(arr[0].match("//") || (arr[0]=="" && arr[1] && arr[1].match("//"))){
			//是一个注释
		}
		else {
			//解析 "message Request"
			if( (arr[0]=="enum" && arr[1]==RpcPairName) || (arr[0]=="" && arr[1]=="enum" && arr[2]==RpcPairName) ) {
				startLine = i;
				endLine = startLine;
				for(var jj=startLine; jj<data.length; jj++) {
					if(data[jj].match('}')){
						endLine = jj;
						break;
					}
				}
				console.log("RpcPair定义区间：", startLine+1, endLine+1);
			}
		}
	}
	return {
		startLine : startLine,
		endLine : endLine
	};
}

function getEnumInfo(whichArr){
	var lenReq = whichArr.length;
	var cmdInfo = {};
	for(var nn = 0; nn<lenReq; nn++) {
		var strL = whichArr[nn];
		if(strL.indexOf("//") >= 0) {
			strL = strL.slice(0, strL.indexOf('//'));  //去注释
		}
		strL = strL.replace('=', ' = ')
		strL = strL.replace(';', '');  //去分号
		var items = strL.split(/\s+/);
		for(var vv=0; vv<items.length; vv++) {
			if(items[vv] == '=') {
				cmdInfo[items[vv-1]] = items[vv+1];
			}
		}
	}

	return cmdInfo;
}

var mudname = getPackageName(line_list);
if(!mudname) { mudname = pbfilename; }
console.log("package name: ", mudname);
var tmpInfo = parseRpcPair(line_list);
var pairArray = [];
if (tmpInfo.startLine>=0 && tmpInfo.endLine>=0){
	pairArray = line_list.splice(tmpInfo.startLine, tmpInfo.endLine-tmpInfo.startLine+1);
} 
var msgArray = line_list;
console.log("------", msgArray.length, pairArray.length);

var pairInfo = getEnumInfo(pairArray);
console.log(pairInfo);

console.log("================================")

// from json
var jsonFile = "tmps/" + pbfilename+".json";
var jsonStr = fs.readFileSync(jsonFile, 'utf8');
var jsObj = JSON.parse(jsonStr);
jsObj = jsObj["nested"][mudname]["nested"];
// console.log(jsObj);
// fs.unlinkSync(jsonFile);


//-----------------------------------------------------------------
// 第二步： 生成代码
//-----------------------------------------------------------------
var outpath = "../../assets/common/script/proxy/net_" + pbfilename + ".ts";
var outstr = "//---------------------------------\n";
outstr += "//该文件自动生成，请勿手动更改\n";
outstr += "//---------------------------------\n";
outstr += "import { " + mudname + " } from \"../proto/" + pbfilename + "\";\n";
outstr += "import ChannelDefine from \"../definer/ChannelDefine\";\n";
outstr += "import NetPacket from \"../../../kernel/net/NetPacket\";\n\n\n";

// Enum
outstr += "export enum " + mudname + "_msgs {\n";
var infos = pairInfo;
for(var enumKey in infos) {
	outstr += "    " + enumKey + " = " + infos[enumKey] + ",\n";
}
outstr += "}\n\n";

// PackageDefine
outstr += "export var " + mudname + "_packet_define = {\n";
var infos = pairInfo;
for(var enumKey in infos) {
	if(infos[enumKey] != "0" && infos[enumKey] != 0) {
		//var idName = mudname+"."+RpcPairName+"."+enumKey;
		var idName = infos[enumKey];
		var structName = enumKey.replace("Msg_", "");
		outstr += "    " + idName + ": new NetPacket(" + idName + ", " + mudname+"."+structName + "),\n";
	}
}
outstr += "}\n\n";

// Request Functions
function isRequest(enumK) {
	var len = enumK.length;
	return enumK.slice(len-3)=="Req" || enumK.slice(len-7)=="Request";
}
function getRequestParam(enumK) {
	var structName = enumKey.replace("Msg_", "");
	var argInfo = jsObj[structName]
	if(!argInfo) { return "any"; }
	var fields = argInfo.fields;
	var desc = "{";
	for(var fieldName in fields) {
		var typeStr = fields[fieldName].type;
		if(typeStr.indexOf("int")>=0){
			typeStr = "number"
		}
		else if(typeStr == "string") {
			typeStr = "string"
		}
		if(desc=="{")
			desc += " " + fieldName + ":" + typeStr;
		else
			desc += " ," + fieldName + ":" + typeStr;
	}
	desc += " }";
	if(desc=="{ }") { desc = "{}"; }
	return desc;
}
outstr += "export class "+mudname+"_request {\n";
infos = pairInfo;
for(var enumKey in infos) {
	if(infos[enumKey] != "0" && infos[enumKey] != 0 && isRequest(enumKey)) {
		//var idName = mudname+"."+RpcPairName+"."+enumKey;
		var idName = infos[enumKey];
		outstr += "    public static "+enumKey+"( data:"+getRequestParam(enumKey)+" ) : void \n";
		outstr += "    {\n";
		outstr += "        "+ mudname+"_packet_define["+idName+"].sendToChannel(ChannelDefine."+channelName+", data, false);\n";
		outstr += "    }\n";
	}
}
outstr += "}\n";

//写入文件
fs.writeFileSync(outpath, outstr, 'utf8');