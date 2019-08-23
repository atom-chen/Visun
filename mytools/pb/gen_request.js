// 异步读取 readFile
const fs = require("fs");

var arguments = process.argv.splice(2);
console.log('所传递的参数是：', arguments);
var mudname = arguments[0];

//-----------------------------------------------------------------
// 第一步： 解析 消息cmd 和 结构体 以及 在protobuf网络包中的字段名
//-----------------------------------------------------------------
var infos = {};

var filepath = "in/" + mudname + ".proto";
const data = fs.readFileSync(filepath, 'utf8').split('\n');
for(var i=0, len=data.length; i<len; i++) {
	// // int DELAY_CHECK_REQ = 20010
	// message c2s_delayCheck
	if(data[i].match("message") && data[i-1].match("=")) {
		for(var mm=1; mm<=20; mm++){
			if(data[i-mm].match('=')) {
				var str = data[i-mm];
				str = str.slice(0, str.indexOf(';')); //去分号
				str = str.replace(/\/+/, ' '); //去注释
				var arr = str.split(/\s+/); //去空白字符
				//console.log(arr, arr.length);
				var enumKey = '';
				var enumValue = 0;
				for(var j=0; j<arr.length; j++) {
					if(arr[j] == '='){
						enumKey = arr[j-1];
						enumKey = enumKey.replace(/\/+/, '');
						enumValue = arr[j+1];
					}
				}

				if(!enumValue || !parseInt(enumValue) || parseInt(enumValue) < 0){
					break;
				}
		
				var msg = data[i];
				msg = msg.replace("message", "");
				msg = msg.slice(0, msg.indexOf('//'));
				msg = msg.slice(0, msg.indexOf('{'));
				msg = msg.replace(/[\s\uFEFF\xA0]+/g,'');
				var structName = msg;
				console.log(enumKey, enumValue, structName);
				infos[enumKey] = {enumKey:enumKey, enumValue:enumValue, structName:structName};
			}
			else {
				break;
			}
		}
	}
}

console.log("================================")

for(var i=0, len=data.length; i<len; i++) {
	for(var enumKey in infos) {
		if(data[i].match('=') && data[i].match(infos[enumKey].structName)){
			var fieldName = data[i];
			fieldName = fieldName.slice(0, fieldName.indexOf('='));
			var arr = fieldName.split(/\s+/);
			//console.log(arr);
			if(arr[0]=='') {
				fieldName = arr[2];
			}
			else {
				fieldName = arr[1];
			}
			infos[enumKey].fieldName = fieldName; 
			console.log(enumKey, infos[enumKey].enumValue, infos[enumKey].structName, fieldName);
			continue;
		}
	}
}

console.log("================================")


//-----------------------------------------------------------------
// 第二步： 生成代码
//-----------------------------------------------------------------
var outpath = "../../assets/common/scripts/proxy/net_" + mudname + ".ts";
var outstr = "//---------------------------------\n";
outstr += "//该文件自动生成，请勿手动更改\n";
outstr += "//---------------------------------\n";
outstr += "import { " + mudname + " } from \"../proto/" + mudname + "\";\n";
outstr += "import { ChannelDefine } from \"../definer/GlobalDefine\";\n";
outstr += "import PacketDefine from \"../../../framework/net/PacketDefine\";\n\n\n";

outstr += "export class " + mudname + "_packet_define {\n";
for(var enumKey in infos) {
	var curDef = infos[enumKey];
	outstr += "    public static " + enumKey + " = new PacketDefine("+mudname+".Request.CMD."+curDef.enumKey+", "+mudname+"."+curDef.structName+", \""+curDef.fieldName+"\", \""+curDef.structName+"\");\n";
}
outstr += "}\n\n";

outstr += "export class "+mudname+"_packet {\n";
for(var enumKey in infos) {
	outstr += "    public static "+enumKey+"(data:any, bIsPbObj:boolean) : any \n";
	outstr += "    {\n";
	outstr += "        var packDef = "+mudname+"_packet_define."+enumKey+";\n";
	outstr += "        var req = "+mudname+".Request.create();\n";
	outstr += "        req.cmd = packDef.cmd;\n";
	outstr += "        if(bIsPbObj) { req[packDef.fieldName] = data; } else { req[packDef.fieldName] = packDef.data_struct.create(data); }\n";
	outstr += "        return req;\n"
	outstr += "    }\n";
}
outstr += "}\n\n";

outstr += "export class "+mudname+"_request {\n";
for(var enumKey in infos) {
	outstr += "    public static "+enumKey+"(data:any, bIsPbObj:boolean) : void \n";
	outstr += "    {\n";
	outstr += "        var channel_game:bb.WsChannel = bb.ChannelMgr.instance().getChannel(ChannelDefine.game);\n";
	outstr += "        if(!channel_game) { return; }\n";
	outstr += "        var req = "+mudname+"_packet."+enumKey+"(data, bIsPbObj);\n";
	outstr += "        channel_game.sendMessage(req.cmd, req);\n"
	outstr += "    }\n";
}
outstr += "}\n";

//写入文件
fs.writeFileSync(outpath, outstr, 'utf8');
