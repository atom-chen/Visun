import LoginMgr from "../model/LoginMgr";
import User from "../model/User";
import HttpResponds from "../../../../script/kernel/net/HttpResponds";
import HttpCore from "../../../../script/kernel/net/HttpCore";
import WsSocket from "../../../../script/kernel/net/WsSocket";
import JsonCodec from "../../../../script/kernel/codec/JsonCodec";
import { WS_URL } from "../../../../script/looker/Consts";

HttpResponds["req_youke_login"] = function(data:any){
	var info = data 
	if(!info) return;
	LoginMgr.instance.token = info.sid;
	HttpCore.token = info.sid;
	HttpCore.request("req_userinfo", null, {userId:info.userId});
	HttpCore.request("req_game_list", null, {sid:info.sid});
}

HttpResponds["req_userinfo"] = function(data:any) {
	var info = data 
	if(!info) return;
	User.setHeroId(info.userId);
	User.updateUser(info);

	var url = WS_URL + HttpCore.token;
	WsSocket.instance().connect(url, new JsonCodec());
}

HttpResponds["req_game_list"] = function(data:any) {
	var info = data 
	if(!info) return;
	cc.log(info)
}

HttpResponds["req_enter_room"] = function(data:any) {
	var info = data 
	if(!info) return;
	cc.log(info);
	var url = "ws://" + info.addr + "/websocket";
	WsSocket.instance().close();
	WsSocket.instance().connect(url, new JsonCodec(), function(){
		var param = {
			sid: HttpCore.token,
			gameNo: "80000041",
			tableType: 0,
			channelId: User.getHero().channelId,
			gameType: 0
		}
		WsSocket.instance().sendMsg(20006, param);
	});
}
