"use strict";

const fs = require("fs");

var arguments = process.argv.splice(2);
console.log('所传递的参数是：', arguments);
var mudname = arguments[0];

//-----------------------------------------------------------------
// 第一步： 解析 消息cmd 和 结构体 以及 在protobuf网络包中的字段名
//-----------------------------------------------------------------
var infos = {};

infos = {
	enumKey_1 : {
		enumKey:"enumKey_1",
		enumValue:"enumValue_1",
		fieldName:"fieldName_1",
		structName:"structName_1"
	},
	enumKey_2 : {
		enumKey:"enumKey_2",
		enumValue:"enumValue_2",
		fieldName:"fieldName_2",
		structName:"structName_2"
	},
	enumKey_3 : {
		enumKey:"enumKey_3",
		enumValue:"enumValue_3",
		fieldName:"fieldName_3",
		structName:"structName_3"
	}
}

console.log("================================")
console.log(infos);


//-----------------------------------------------------------------
// 第二步： 生成代码
//-----------------------------------------------------------------
var outpath = "../../assets/common/script/proxy/net_" + mudname + ".ts";
var outstr = "//---------------------------------\n";
outstr += "//该文件自动生成，请勿手动更改\n";
outstr += "//---------------------------------\n";
outstr += "import { " + mudname + " } from \"../proto/" + mudname + "\";\n";
outstr += "import { ChannelDefine } from \"../definer/GlobalDefine\";\n";
outstr += "import PacketDefine from \"../../../framework/net/PacketDefine\";\n\n\n";

outstr += "export class " + mudname + "_packet_define {\n";
for(var enumKey in infos) {
	var curDef = infos[enumKey];
	outstr += "    public static " + enumKey + " = new PacketDefine(" + mudname + ", " + mudname+".Request.CMD."+curDef.enumKey+", "+mudname+"."+curDef.structName+", \""+curDef.fieldName+"\", \""+curDef.structName+"\");\n";
}
outstr += "}\n\n";

// outstr += "export class "+mudname+"_packet {\n";
// for(var enumKey in infos) {
// 	outstr += "    public static "+enumKey+"(data:any, bIsPbObj:boolean) : any \n";
// 	outstr += "    {\n";
// 	outstr += "        var packDef = "+mudname+"_packet_define."+enumKey+";\n";
// 	outstr += "        var req = "+mudname+".Request.create();\n";
// 	outstr += "        req.cmd = packDef.cmd;\n";
// 	outstr += "        if(bIsPbObj) { req[packDef.fieldName] = data; } else { req[packDef.fieldName] = packDef.data_struct.create(data); }\n";
// 	outstr += "        return req;\n"
// 	outstr += "    }\n";
// }
// outstr += "}\n\n";

outstr += "export class "+mudname+"_request {\n";
for(var enumKey in infos) {
	// outstr += "    public static "+enumKey+"(data:any, bIsPbObj:boolean) : void \n";
	// outstr += "    {\n";
	// outstr += "        var channel_game:bb.WsChannel = bb.ChannelMgr.instance().getChannel(ChannelDefine.game);\n";
	// outstr += "        if(!channel_game) { return; }\n";
	// outstr += "        var req = "+mudname+"_packet_define."+enumKey+".createPacket(data, bIsPbObj);\n";
	// outstr += "        channel_game.sendMessage(req.cmd, req);\n"
	// outstr += "    }\n";
	outstr += "    public static "+enumKey+"(data:any, bIsPbObj:boolean) : void \n";
	outstr += "    {\n";
	outstr += "        "+ mudname+"_packet_define."+enumKey+".sendToChannel(ChannelDefine.game, data, bIsPbObj);\n";
	outstr += "    }\n";
}
outstr += "}\n";

//写入文件
fs.writeFileSync(outpath, outstr, 'utf8');