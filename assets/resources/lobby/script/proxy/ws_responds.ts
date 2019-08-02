import UIManager from "../../../../script/kernel/gui/UIManager";
import SubgameEntry from "../utils/SubgameEntry";

var ws_responds:any;
ws_responds = {};

ws_responds.MSG_CENTER_QUIT_LOGIN = function(info) {
	UIManager.openDialog("MSG_CENTER_QUIT_LOGIN", function(menuId:number){}, "账号在其他地方登陆，是否重新登陆？");
}

ws_responds.MSG_RECONNECT_ENTER_ACK = function(info) {
	SubgameEntry.instance().enterGameScene(info.gameId);
}

export default ws_responds;
