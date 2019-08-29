import HttpCore from "../../../../kernel/net/HttpCore";
import GameManager from "../../../../common/script/model/GameManager";
import HallRequest from "./HallRequest";
import LogicCenter from "../../../../common/script/model/LogicCenter";
import UIManager from "../../../../kernel/view/UIManager";
import UserMgr from "../../../../common/script/model/UserMgr";

var HallRespond:any;
HallRespond = {};

HallRespond.req_youke_login = function(info:any){
	if(!info) return;
	LogicCenter.instance().clear(); //清理数据
	LogicCenter.instance().init();
	HttpCore.token = info.sid;
	HallRequest.req_userinfo({ userId:info.userId });
	HallRequest.req_game_list({ sid:info.sid });
}

HallRespond.req_userinfo = function(info:any) {
	if(!info) return;
	cc.log("登录成功", info);
	UserMgr.instance().setHeroId(info.userId);
	UserMgr.instance().updateUser(info);
}

HallRespond.req_ranklist = function(info:any) {
	cc.log(info);
}

HallRespond.req_game_list = function(info:any) {
	if(!info) return;
	GameManager.instance().setServerGames(info.data);
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
