import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LogicCenter from "../model/LogicCenter";
import GameManager from "../model/GameManager";
import { login } from "../../../../declares/login";
import LoginMgr from "../model/LoginMgr";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import EventDefine from "../definer/EventDefine";


var NetHandlers = {

    [login_msgs.AllopatricResp] : function(param) {
        if(param.UserId == LoginUser.getInstance().UserId) {
            LoginMgr.getInstance().logout();
        }
    },

    [login_msgs.ReconnectResp] : function(param:login.IReconnectResp) {
        LogicCenter.getInstance().clear();
        LogicCenter.getInstance().init();

        LoginUser.getInstance().UserId = param.MainInfo.UserInfo.UserID;
        CommonUtil.simpleCopy(LoginUser.getInstance(), param.MainInfo.UserInfo);

        GameManager.getInstance().setRoomsInfo(param.MainInfo.RoomsInfo);

        GameManager.getInstance().pullAll();

        EventCenter.getInstance().fire(EventDefine.reconn_succ);
    },

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

        GameManager.getInstance().pullAll();

        UIManager.toast("登陆成功");
    },

    [login_msgs.EnterRoomResp] : function(param:login.IEnterRoomResp) {
        GameManager.getInstance().setGameArr(param.RoomNum, param.Games.Items);
    },

}

export default NetHandlers;
