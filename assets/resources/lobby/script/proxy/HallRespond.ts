import HttpCore from "../../../../kernel/net/HttpCore";
import { WS_URL } from "../../../../kernel/looker/Consts";
import SubgameEntry from "../utils/SubgameEntry";
import HallRequest from "./HallRequest";
import Logic from "../../../../common/script/model/Logic";
import UIManager from "../../../../kernel/view/UIManager";

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
	
}

HallRespond.req_enter_coin_room = function(info:any) {
	if(!info) return;
	cc.log(info);
	if(info.code != 200) {
		UIManager.toast(info.msg);
		return;
	}
	var url = "ws://" + info.addr + "/websocket";
	
}

export default HallRespond;
