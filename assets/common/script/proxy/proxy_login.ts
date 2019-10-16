import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";

//---------------------------------
// login响应句柄
//---------------------------------

var proxy_login = {

    [login_msgs.RegisterResult] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.LoginResult] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.TaskItem] : function(param: any) {

    },

    [login_msgs.TaskList] : function(param: any) {

    },

    [login_msgs.GameList] : function(param: any) {

    },

    [login_msgs.UserInfo] : function(param: any) {
        CommonUtil.simpleCopy(LoginUser.getInstance(), param);
    },

    [login_msgs.RoomInfo] : function(param: any) {

    },

    [login_msgs.GameBaseInfo] : function(param: any) {

    },

    [login_msgs.GameItem] : function(param: any) {

    },

}

export default proxy_login;
