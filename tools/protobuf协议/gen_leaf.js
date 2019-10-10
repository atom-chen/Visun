

const fs = require("fs");

var arguments = process.argv.splice(2);
var pbfilename = arguments[0];
var channelName = arguments[1] || "game";
console.log('所传递的参数是：', pbfilename, channelName);

var jsfile = "./in/"+pbfilename;
var jsCont = { RpcDefine:{} };
if( fs.existsSync(jsfile+".js") ) {
	jsCont = require(jsfile);
}



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


function getCmdId(enumK) {
	return jsCont.RpcDefine[enumK][0];
}

function getStructName(enumK) {
	return jsCont.RpcDefine[enumK][1];
}

function getMainId(enumK) {
	return jsCont.RpcDefine[enumK][2];
}

function getSubId(enumK) {
	return jsCont.RpcDefine[enumK][3];
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
console.log("package name: ", mudname);

// from json
var jsonFile = "tmps/" + pbfilename+".json";
var jsonStr = fs.readFileSync(jsonFile, 'utf8');
var ptoJs = JSON.parse(jsonStr);
ptoJs = ptoJs["nested"][mudname]["nested"];
// console.log(ptoJs);
// fs.unlinkSync(jsonFile);


//-----------------------------------------------------------------
// 第二步： 生成代码
//-----------------------------------------------------------------
var outpath = "../../assets/common/script/proto/net_" + pbfilename + ".ts";
var outstr = "//---------------------------------\n";
outstr += "//该文件自动生成，请勿手动更改\n";
outstr += "//---------------------------------\n";
outstr += "import { " + mudname + " } from \"./" + pbfilename + "\";\n";
outstr += "import ChannelDefine from \"../definer/ChannelDefine\";\n";
outstr += "import LeafPacket from \"../../../kernel/net/LeafPacket\";\n\n\n";

// Enum
outstr += "export enum " + mudname + "_msgs {\n";
var infos = jsCont.RpcDefine;
for(var enumKey in infos) {
	outstr += "    " + enumKey + " = " + getCmdId(enumKey) + ",\n";
}
outstr += "}\n\n";

// PackageDefine
outstr += "export var " + mudname + "_packet_define = {\n";
var infos = jsCont.RpcDefine;
for(var enumKey in infos) {
	var cmdId = getCmdId(enumKey);
	var structName = getStructName(enumKey);
	var mainid = getMainId(enumKey);
	var subid = getSubId(enumKey);
	if(structName === "") {
		outstr += "    " + cmdId + ": new LeafPacket(" + cmdId + ", " + "null" + ", " + mainid + ", " + subid + "),\n";
	}
	else {
		outstr += "    " + cmdId + ": new LeafPacket(" + cmdId + ", " + mudname+"."+structName + ", " + mainid + ", " + subid + "),\n";
	}
}
outstr += "}\n\n";

// Request Functions
function isRequest(enumK) {
	if(jsCont.RpcDefine[enumK][2]===2) {
		return false;
	}
	return true;
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
infos = jsCont.RpcDefine;
for(var enumKey in infos) {
	if(isRequest(enumKey)) {
		var cmdId = getCmdId(enumKey);
		outstr += "    public static "+enumKey+"( data:"+getRequestParam(enumKey)+" ) ";
		outstr += "{ ";
		outstr += mudname+"_packet_define["+cmdId+"].sendToChannel(ChannelDefine."+channelName+", data, false); ";
		outstr += "}\n";
	}
}
outstr += "}\n";

//写入文件
fs.writeFileSync(outpath, outstr, 'utf8');