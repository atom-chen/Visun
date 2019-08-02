import UIManager from "../../../../script/kernel/gui/UIManager";

var ws_responds:any;
ws_responds = {};

ws_responds.MSG_CENTER_QUIT_LOGIN = function(info) {
	UIManager.openDialog("MSG_CENTER_QUIT_LOGIN", function(menuId:number){
		
	}, "账号在其他地方登陆，是否重新登陆？");
}

export default ws_responds;
