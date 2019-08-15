import UIManager from "../../../../script/kernel/view/UIManager";
import SubgameEntry from "../utils/SubgameEntry";
import PlatformUtil from "../../../../script/kernel/utils/PlatformUtil";
import HallRequest from "./HallRequest";

var ws_responds:any;
ws_responds = {};

ws_responds.MSG_CENTER_QUIT_LOGIN = function(info) {
	UIManager.openDialog("MSG_CENTER_QUIT_LOGIN", (menuId:number)=>{
		if(menuId===1){
			var param = { 
				deviceID : PlatformUtil.getDeviceId(), 
				platformId : 3
			};
			HallRequest.req_youke_login(param);
		}
	}, "账号在其他地方登陆，是否重新登陆？");
}

ws_responds.MSG_RECONNECT_ENTER_ACK = function(info) {
	SubgameEntry.instance().enterGameScene(info.gameId);
}

ws_responds.MSG_JOIN_COIN_ACK = function(info) {
	cc.log("进入游戏房间");
}

export default ws_responds;
