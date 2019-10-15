import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";

//---------------------------------
// login响应句柄
//---------------------------------

var proxy_login = {

    [login_msgs.Register] : function(param: any) {

    },

    [login_msgs.RegisterResult] : function(param: any) {

    },

    [login_msgs.Login] : function(param: any) {

    },

    [login_msgs.ResResult] : function(param: any) {
        UIManager.toast(param.Hints)
    },

    [login_msgs.TaskItem] : function(param: any) {

    },

    [login_msgs.TaskList] : function(param: any) {

    },

    [login_msgs.GameList] : function(param: any) {

    },

    [login_msgs.UserInfo] : function(param: any) {

    },

    [login_msgs.RoomInfo] : function(param: any) {

    },

    [login_msgs.GameBaseInfo] : function(param: any) {

    },

    [login_msgs.GameItem] : function(param: any) {

    },

    [login_msgs.MasterInfo] : function(param: any) {

    },

    [login_msgs.ReqEnterRoom] : function(param: any) {

    },

    [login_msgs.ReqEnterGame] : function(param: any) {

    },

    [login_msgs.ReqExitGame] : function(param: any) {

    },

}

export default proxy_login;
