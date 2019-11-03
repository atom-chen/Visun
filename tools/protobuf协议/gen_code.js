const fs = require("fs");
const { exec } = require('child_process');


//要生成的pb文件
var pbfiles = [
	{ 
		name:"login", 
		router:"login", 
	},
	{ 
		name:"configure", 
		router:"login",
	},
	{ 
		name:"gamecomm", 
		router:"game",
	},
	{ 
		name:"brcowcow", 
		router:"game",
	},
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

function isRequest(msgName) {
	return msgName.slice(0, 4) === "Req";
}

function isResponse(msgName) {
	return msgName.slice(0, 5) === "Resp";
}

function isNotify(msgName) {
	return msgName.slice(0, 7) === "Notify";
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

function write2file(filepath, str) {
	try {
		fs.writeFileSync(filepath, str, 'utf8');
	} catch (err) {
		console.log(err);
	}
}

function doGenerate() {
	//server begin
	var serverPkgName = "go";

	var outServerMsg = "D:/go/src/vision/appqp/msg/msg.go";
	var outRouter = "D:/go/src/vision/appqp/gate/router.go";
	var outServerHandler = "d:/handler.go";
	var outHandleFunc = "d:/handlerFunc.go";

	var msgStr = "";
	var routerStr = "";
	var handStr = "";
	var funcStr = "";


	msgStr = "//---------------------------------\n";
	msgStr += "//该文件自动生成，请勿手动更改\n";
	msgStr += "//---------------------------------\n";
	msgStr += "package msg\n\n"
	msgStr += "import (\n"
	msgStr += '    "sync"\n'
	msgStr += '    "github.com/golang/protobuf/proto"\n'
	msgStr += '    "vision/leaf/network/json"\n'
	msgStr += '    "vision/leaf/network/protobuf"\n'
	msgStr += '    protoMsg "vision/appqp/msg/ptopb"\n'
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
	msgStr += "func init() {"

	
	routerStr = "//---------------------------------\n";
	routerStr += "//该文件自动生成，请勿手动更改\n";
	routerStr += "//---------------------------------\n";
	routerStr += "package gate\n\n";
	routerStr += 'import (\n';
	routerStr += '    "vision/appqp/game"\n';
	routerStr += '    "vision/appqp/login"\n';
	routerStr += '    "vision/appqp/msg"\n';
	routerStr += '    protoMsg "vision/appqp/msg/ptopb"\n';
	routerStr += ')\n\n';
	routerStr += '//路由模块分发消息【模块间使用 ChanRPC 通讯，消息路由也不例外】\n';
	routerStr += '//注:需要解析的结构体才进行路由分派，即用客户端主动发起的)\n';
	routerStr += "func init() {";
	//server end


	for(var iii in pbfiles) {
		var cfg = pbfiles[iii];
		var pbfilename = cfg.name;
		var curRouter = cfg.router;  //for server
		var filepath = "in/" + pbfilename + ".proto";
		var line_list = fs.readFileSync(filepath, 'utf8').split('\n');


		//client begin
		var mudname = getPackageName(line_list);
		var channelName = "game";
		var outClient = "../../assets/common/script/proto/net_" + pbfilename + ".ts";
		var outClientHandler = null;
		//client end


		// json file geretated by probuf lib
		var jsonFile = "tmps/" + pbfilename+".json";
		var jsonStr = fs.readFileSync(jsonFile, 'utf8');
		var ptoJs = JSON.parse(jsonStr);
		ptoJs = ptoJs["nested"][mudname]["nested"];
		// console.log(ptoJs);
		// fs.unlinkSync(jsonFile);
		
		
		//client begin
		var clientHandleStr = "//---------------------------------\n";
		clientHandleStr += "// " + pbfilename + "响应句柄\n"
		clientHandleStr += "//---------------------------------\n";
		clientHandleStr += 'import { ' + mudname +'_msgs } from "../../../../common/script/proto/net_' + pbfilename + '"\n\n';
		clientHandleStr += "var proxy_" + mudname + " = {\n\n";

		var outstr = "//---------------------------------\n";
		outstr += "//该文件自动生成，请勿手动更改\n";
		outstr += "//---------------------------------\n";
		outstr += "import { " + mudname + " } from \"./" + pbfilename + "\";\n";
		outstr += "import ChannelDefine from \"../definer/ChannelDefine\";\n";
		outstr += "import LeafWsPacket from \"../../../kernel/net/packet/LeafWsPacket\";\n\n\n";
		var enumStr = "export enum " + mudname + "_msgs {\n";
		var cmdTblStr = "export var " + mudname + "_packet_define = {\n";
		var reqStr = "export class "+mudname+"_request {\n";
		//client end


		//server begin
		msgStr += "\n    //" + pbfilename + "文件生成的代码\n";
		handStr += "\n    //" + pbfilename + "文件生成的代码\n";
		routerStr += "\n    //" + pbfilename + "文件生成的代码\n";
		funcStr += "//-----------------------------------------------\n";
		funcStr += "//" + pbfilename + "文件生成的代码\n";
		funcStr += "//-----------------------------------------------\n";
		//server end


		//遍历proto文件中的message定义
		for(var msgName in ptoJs) {
			var cmdId = getCmdId();
			var argInfo = ptoJs[msgName];
	
			//client begin
			enumStr += "    " + msgName + " = " + cmdId + ",\n";
	
			cmdTblStr += "    " + cmdId + ": new LeafWsPacket(" + cmdId + ", " + mudname+"."+msgName + "),\n";
			
			reqStr += "    public static "+msgName+"( data:"+getRequestParam(argInfo)+" ) ";
			reqStr += "{ ";
			reqStr += mudname+"_packet_define["+cmdId+"].sendToChannel(ChannelDefine."+channelName+", data, false); ";
			reqStr += "}\n";

			clientHandleStr += "    [" + mudname+"_msgs"+"."+msgName + "] : function(param: any) {\n";
			clientHandleStr += "\n";
			clientHandleStr += "    },\n\n"
			//client end


			//server begin
			msgStr += "    RegisterMessage(&protoMsg." + msgName + "{})\n";

			routerStr += "    msg.ProcessorProto.SetRouter(&protoMsg."+ msgName +"{}, "+ curRouter +".ChanRPC)\n";

			handStr += "    handleMsg(&protoMsg." +msgName+ "{}, handle" + msgName + ")\n";

			funcStr += "// \n";
			funcStr += "func handle"+msgName+"(args []interface{}) {\n";
			funcStr += "    m := args[0].(*protoMsg."+msgName+")\n";
			funcStr += "    a := args[1].(gate.Agent)\n";
			funcStr += '    log.Debug("[receive]'+msgName+':->%v", m)\n';
			funcStr += "\n}\n\n";
			//server end
		}
	
		//client begin
		enumStr += "}\n\n";
		cmdTblStr += "}\n\n";
		reqStr += "}\n\n";
		outstr += enumStr + cmdTblStr + reqStr;
		write2file(outClient, outstr);

		clientHandleStr += "}\n\n";
		clientHandleStr += "export default proxy_"+mudname+";\n";
		if(outClientHandler) {
			if(!fs.existsSync(outClientHandler)){
				write2file(outClientHandler, clientHandleStr);
			}
		}
		//client end
	}
	
	//server begin
	routerStr += "}\n\n"
	msgStr += "}\n"
	
	write2file(outServerMsg, msgStr);
	write2file(outServerHandler, handStr);
	write2file(outRouter, routerStr);
	write2file(outHandleFunc, funcStr);
	//server end
}


//执行生产
// if(!fs.existsSync("./out")){
// 	fs.mkdirSync("./out")
// }

var waitCnt = pbfiles.length;
for(var iii in pbfiles) {
	var pbfilename = pbfiles[iii].name;
	var filepath = "in/" + pbfilename + ".proto";
	exec("pbjs -t json " + filepath + " -o tmps/" + pbfilename + ".json", ()=>{
		waitCnt--;
		console.log("waiting count: ", waitCnt);
		if(waitCnt <= 0) {
			doGenerate();
		}
	});
}