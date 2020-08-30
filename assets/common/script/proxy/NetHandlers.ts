import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LogicCenter from "../model/LogicCenter";
import GameManager from "../model/GameManager";
import { login } from "../../../../declares/login";


var NetHandlers = {

    [login_msgs.ResultResp] : function(param: login.ResultResp) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.ResultPopResp] : function(param: login.ResultPopResp) {
        UIManager.openDialog(param.Title, param.Hints, 1, null, param.Title);
    },

    [login_msgs.RegisterResp] : function(param:login.RegisterResp) {
        UIManager.toast("注册成功");
    },

    [login_msgs.LoginResp] : function(param:login.ILoginResp) {
        LogicCenter.getInstance().clear();
        LogicCenter.getInstance().init();

        LoginUser.getInstance().UserId = param.MainInfo.UserInfo.UserID;
        CommonUtil.simpleCopy(LoginUser.getInstance(), param.MainInfo.UserInfo);

        GameManager.getInstance().setRoomsInfo(param.MainInfo.RoomsInfo);

        UIManager.toast("登陆成功");
    },

    [login_msgs.MasterInfo] : function(param:login.MasterInfo) {
        LogicCenter.getInstance().clear();
        LogicCenter.getInstance().init();

        LoginUser.getInstance().UserId = param.UserInfo.UserID;
        CommonUtil.simpleCopy(LoginUser.getInstance(), param.UserInfo);

        GameManager.getInstance().setRoomsInfo(param.RoomsInfo);

        UIManager.toast("登陆成功");
    },

    [login_msgs.UserInfo] : function(param: login.UserInfo) {
        LoginUser.getInstance().UserId = param.UserID;
        CommonUtil.simpleCopy(LoginUser.getInstance(), param);
    },

    [login_msgs.GameList] : function(param) {
        GameManager.getInstance().setGameArr(param.Items)
    },

}

export default NetHandlers;
