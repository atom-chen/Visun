const fs = require("fs");
const { exec } = require('child_process');


//要生成的pb文件
var pbfiles = [
	"login",
	"gamecomm",
	"baccarat",
	"fishLord",
	"landLords",
	"mahjong"
]



var g_CMDID = -1;
function getCmdId() {
	g_CMDID++;
	return g_CMDID;
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

function getRequestParam(argInfo) {
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

function doGenerate() {
	var serverPkgName = "go";
	var outServerMsg = "./out/msg.go"
	var outServerHandler = "./out/handler.go"

	var msgStr = "";
	msgStr = "//---------------------------------\n";
	msgStr += "//该文件自动生成，请勿手动更改\n";
	msgStr += "//---------------------------------\n";
	msgStr += "package msg\n"
	msgStr += "import (\n"
	msgStr += '    "fmt"\n'
	msgStr += '    "reflect"\n'
	msgStr += '    "sync"\n'
	msgStr += '    protoMsg "github.com/appqp/msg/go"\n'
	msgStr += '    jsonMsg "github.com/appqp/msg/json"\n'
	msgStr += '    "github.com/leaf/network/json"\n'
	msgStr += '    "github.com/leaf/network/protobuf"\n'
	msgStr += '    "github.com/golang/protobuf/proto"\n'
	msgStr += ')\n\n'
	msgStr += "// 使用默认的 JSON 消息处理器（默认还提供了 protobuf 消息处理器）\n"
	msgStr += "var ProcessorJson = json.NewProcessor()\n"
	msgStr += "var ProcessorProto = protobuf.NewProcessor()\n\n"
	msgStr += "//对外接口 【这里的注册函数并非线程安全】\n"
	msgStr += "func RegisterMessage(message proto.Message) {\n"
	msgStr += "    var wg sync.WaitGroup\n"
	msgStr += "    wg.Add(1)\n"
	msgStr += "    ProcessorProto.Register(message)\n"
	msgStr += "    wg.Done()\n"
	msgStr += "}\n\n"
	msgStr += "func init() {\n"

	var handStr = "";

	for(var iii in pbfiles) {
		var pbfilename = pbfiles[iii];
		var channelName = "game";
		var filepath = "in/" + pbfilename + ".proto";
		var line_list = fs.readFileSync(filepath, 'utf8').split('\n');
		var mudname = getPackageName(line_list);
	
		var outpath = "../../assets/common/script/proto/net_" + pbfilename + ".ts";
		
		var outstr = "//---------------------------------\n";
		outstr += "//该文件自动生成，请勿手动更改\n";
		outstr += "//---------------------------------\n";
		outstr += "import { " + mudname + " } from \"./" + pbfilename + "\";\n";
		outstr += "import ChannelDefine from \"../definer/ChannelDefine\";\n";
		outstr += "import LeafWsPacket from \"../../../kernel/net/packet/LeafWsPacket\";\n\n\n";
		var enumStr = "export enum " + mudname + "_msgs {\n";
		var cmdTblStr = "export var " + mudname + "_packet_define = {\n";
		var reqStr = "export class "+mudname+"_request {\n";
	
		// from json
		var jsonFile = "tmps/" + pbfilename+".json";
		var jsonStr = fs.readFileSync(jsonFile, 'utf8');
		var ptoJs = JSON.parse(jsonStr);
		ptoJs = ptoJs["nested"][mudname]["nested"];
		// console.log(ptoJs);
		// fs.unlinkSync(jsonFile);
	
		msgStr += "\n//" + pbfilename + "文件生成的代码\n"
		for(var msgName in ptoJs) {
			var cmdId = getCmdId();
			var argInfo = ptoJs[msgName];
	
			enumStr += "    " + msgName + " = " + cmdId + ",\n";
	
			cmdTblStr += "    " + cmdId + ": new LeafWsPacket(" + cmdId + ", " + mudname+"."+msgName + "),\n";
			
			reqStr += "    public static "+msgName+"( data:"+getRequestParam(argInfo)+" ) ";
			reqStr += "{ ";
			reqStr += mudname+"_packet_define["+cmdId+"].sendToChannel(ChannelDefine."+channelName+", data, false); ";
			reqStr += "}\n";
	
			msgStr += "    RegisterMessage(&protoMsg." + msgName + "{})\n";
			handStr += "    handleMsg(&protoMsg." +msgName+ "{}, handle" + msgName + ")\n";
		}
	
		enumStr += "}\n\n";
		cmdTblStr += "}\n\n";
		reqStr += "}\n\n";
		outstr += enumStr + cmdTblStr + reqStr;
	
		//写入文件
		fs.writeFileSync(outpath, outstr, 'utf8');
	}
	
	msgStr += "}\n"
	
	fs.writeFileSync(outServerMsg, msgStr, 'utf8');
	fs.writeFileSync(outServerHandler, handStr, 'utf8');
}



if(!fs.existsSync("./out")){
	fs.mkdirSync("./out")
}

var waitCnt = pbfiles.length;
for(var iii in pbfiles) {
	var pbfilename = pbfiles[iii];
	var filepath = "in/" + pbfilename + ".proto";
	exec("pbjs -t json " + filepath + " -o tmps/" + pbfilename + ".json", ()=>{
		waitCnt--;
		console.log("waiting count: ", waitCnt);
		if(waitCnt <= 0) {
			doGenerate();
		}
	});
}