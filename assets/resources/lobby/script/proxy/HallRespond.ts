import HttpCore from "../../../../script/kernel/net/HttpCore";
import WsSocket from "../../../../script/kernel/net/WsSocket";
import JsonCodec from "../../../../script/kernel/codec/JsonCodec";
import { WS_URL } from "../../../../script/looker/Consts";
import WsCore from "../../../../script/kernel/net/WsCore";
import SubgameEntry from "../utils/SubgameEntry";
import UIManager from "../../../../script/kernel/gui/UIManager";
import Logic from "../model/Logic";
import HallRequest from "./HallRequest";

var HallRespond:any;
HallRespond = {};

HallRespond.req_youke_login = function(info:any){
	if(!info) return;
	Logic.instance().clear(); //清理数据
	Logic.instance().init();
	HttpCore.token = info.sid;
	HallRequest.req_userinfo({ userId:info.userId });
	HallRequest.req_game_list({ sid:info.sid });
}

HallRespond.req_userinfo = function(info:any) {
	if(!info) return;
	cc.log("登录成功", info);
	Logic.instance().g_UserMgr.setHeroId(info.userId);
	Logic.instance().g_UserMgr.updateUser(info);

	var url = WS_URL + HttpCore.token;
	WsSocket.instance().connect(url, new JsonCodec());
}

HallRespond.req_ranklist = function(info:any) {
	cc.log(info);
}

HallRespond.req_game_list = function(info:any) {
	if(!info) return;
	SubgameEntry.instance().setServerGames(info.data);
}

HallRespond.req_enter_br_room = function(info:any) {
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
			channelId: Logic.instance().g_UserMgr.getHero().channelId
		};
		WsCore.request("MSG_JOIN_COIN_REQUEST", param);
	});
}

HallRespond.req_enter_coin_room = function(info:any) {
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

export default HallRespond;