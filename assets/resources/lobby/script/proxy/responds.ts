import LoginMgr from "../model/LoginMgr";
import User from "../model/User";
import HttpResponds from "../../../../script/kernel/net/HttpResponds";
import HttpCore from "../../../../script/kernel/net/HttpCore";

HttpResponds["req_hallinfo"] = function(data:any){
	var info = data && data.data
	if(!info) return;
	LoginMgr.instance.token = info.serverData.token;
	HttpCore.token = info.serverData.token;
	User.setHeroId(info.userData.userId);
	User.updateUser(info.userData);
}

HttpResponds["req_userinfo"] = function(data:any) {
	var info = data && data.data
	if(!info) return;
	User.updateUser(info);
}

