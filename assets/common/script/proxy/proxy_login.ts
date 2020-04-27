import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LogicCenter from "../model/LogicCenter";
import GameManager from "../model/GameManager";

//---------------------------------
// login响应句柄
//---------------------------------

var proxy_login = {

    [login_msgs.RegisterResult] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.ResResult] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.UserInfo] : function(param: any) {
        CommonUtil.simpleCopy(LoginUser.getInstance(), param);
    },

    [login_msgs.MasterInfo] : function(param) {
        UIManager.toast("登陆成功");
        CommonUtil.simpleCopy(LoginUser.getInstance(), param.UserInfo);
        //param.RoomsInfo = [{RoomNum: 101, RoomKey: "321weqe", RoomName: " 万人房", Games: {…}}]
        GameManager.getInstance().setRoomsInfo(param.RoomsInfo);
    }

}

export default proxy_login;
