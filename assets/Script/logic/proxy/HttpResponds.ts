import LoginMgr from "../model/LoginMgr";
import HttpCore from "../../kernel/net/HttpCore";
import User from "../model/User";

export default class HttpResponds {
	public static req_hallinfo(data:any) {
		var info = data && data.data
		if(!info) return;
		LoginMgr.instance.token = info.serverData.token;
		HttpCore.token = info.serverData.token;
		User.setHeroId(info.userData.userId);
		User.updateUser(info.userData);
	}
}
