import User from "../model/User";
import HttpCore from "../../../../script/kernel/net/HttpCore";
import WsSocket from "../../../../script/kernel/net/WsSocket";
import JsonCodec from "../../../../script/kernel/codec/JsonCodec";
import { WS_URL } from "../../../../script/looker/Consts";
import WsCore from "../../../../script/kernel/net/WsCore";
import SubgameEntry from "../utils/SubgameEntry";
import UIManager from "../../../../script/kernel/gui/UIManager";
import UserMgr from "../model/UserMgr";

var http_responds:any;
http_responds = {};

http_responds.req_youke_login = function(info:any){
	if(!info) return;
	HttpCore.token = info.sid;
	HttpCore.request("req_userinfo", null, {userId:info.userId});
	HttpCore.request("req_game_list", null, {sid:info.sid});
}

http_responds.req_userinfo = function(info:any) {
	if(!info) return;
	cc.log("登录成功")
	UserMgr.instance().setHeroId(info.userId);
	UserMgr.instance().updateUser(info);

	var url = WS_URL + HttpCore.token;
	WsSocket.instance().connect(url, new JsonCodec());
}

http_responds.req_ranklist = function(info:any) {
	cc.log(info);
}

http_responds.req_game_list = function(info:any) {
	if(!info) return;
	SubgameEntry.instance().setServerGames(info.data);
}

http_responds.req_enter_br_room = function(info:any) {
	if(!info) return;
	cc.log(info);
	if(info.code != 200) {
		UIManager.toast(info.msg);
		return;
	}
	var url = "ws://" + info.addr + "/websocket";
	WsSocket.instance().close();
	WsSocket.instance().connect(url, new JsonCodec(), function(){
		var param = {
			sid: HttpCore.token,
			gameId: info.gameId,
			channelId: UserMgr.instance().getHero().channelId
		};
		WsCore.request("MSG_JOIN_COIN_REQUEST", param);
	});
}

http_responds.req_enter_coin_room = function(info:any) {
	if(!info) return;
	cc.log(info);
	if(info.code != 200) {
		UIManager.toast(info.msg);
		return;
	}
	var url = "ws://" + info.addr + "/websocket";
	WsSocket.instance().close();
	WsSocket.instance().connect(url, new JsonCodec(), function(){
		var param = {
			sid: HttpCore.token,
			gameId: info.gameId,
			tableType: 1
		};
		WsCore.request("MSG_JOIN_COIN_REQUEST", param);
	});
}

export default http_responds;
