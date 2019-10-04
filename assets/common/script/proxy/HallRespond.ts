import HttpCore from "../../../kernel/net/HttpCore";
import GameManager from "../model/GameManager";
import HallRequest from "./HallRequest";
import LogicCenter from "../model/LogicCenter";
import UIManager from "../../../kernel/view/UIManager";
import UserMgr from "../model/UserMgr";

var HallRespond:any;
HallRespond = {};

HallRespond.req_youke_login = function(info:any){
	if(!info) return;
	LogicCenter.getInstance().clear(); //清理数据
	LogicCenter.getInstance().init();
	HttpCore.token = info.sid;
	UIManager.toast("登录成功");

	HallRequest.req_userinfo({ userId:info.userId });
	HallRequest.req_game_list({ sid:info.sid });
}

HallRespond.req_userinfo = function(info:any) {
	if(!info) return;
	cc.log("登录成功", info);
	UserMgr.getInstance().setHeroId(info.userId);
	UserMgr.getInstance().updateUser(info);
}

HallRespond.req_game_list = function(info:any) {
	if(!info) return;
	GameManager.getInstance().setServerGames(info.data);
}

export default HallRespond;
