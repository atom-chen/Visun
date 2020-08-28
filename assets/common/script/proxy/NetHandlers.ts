import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LogicCenter from "../model/LogicCenter";
import GameManager from "../model/GameManager";
import { login } from "../../../../declares/login";
import { isNil } from "../../../kernel/utils/GlobalFuncs";


var NetHandlers = {

    [login_msgs.RegisterResult] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.ResResult] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.ResPopResult] : function(param: login.ResPopResult) {
        UIManager.openDialog(param.Title, param.Hints, 1, null, param.Title);
    },

    [login_msgs.UserInfo] : function(param: login.UserInfo) {
        CommonUtil.simpleCopy(LoginUser.getInstance(), param);
        //LoginUser.getInstance().UserId = LoginUser.getInstance().UserID;
    },

    [login_msgs.MasterInfo] : function(param:login.MasterInfo) {
        LogicCenter.getInstance().clear();
        LogicCenter.getInstance().init();

        UIManager.toast("登陆成功");

        CommonUtil.simpleCopy(LoginUser.getInstance(), param.UserInfo);
        GameManager.getInstance().setRoomsInfo(param.RoomsInfo);
        if(param.UserID!==null && param.UserID!==undefined) {
            LoginUser.getInstance().UserId = param.UserID;
            LoginUser.getInstance().UserID = param.UserID;
        }
    },

    [login_msgs.GameList] : function(param) {
        GameManager.getInstance().setGameArr(param.Items)
    },

}

export default NetHandlers;
