import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LogicCenter from "../model/LogicCenter";
import GameManager from "../model/GameManager";
import { baccarat_msgs } from "../proto/net_baccarat";
import { GameKindEnum } from "../definer/ConstDefine";
import { landLords_msgs } from "../proto/net_landLords";

//---------------------------------
// 网络数据处理句柄
//---------------------------------

var NetHandlers = {

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
        LogicCenter.getInstance().clear();
        LogicCenter.getInstance().init();

        UIManager.toast("登陆成功");

        CommonUtil.simpleCopy(LoginUser.getInstance(), param.UserInfo);
        GameManager.getInstance().setRoomsInfo(param.RoomsInfo);
        if(param.UserID!==null && param.UserID!==undefined) {
            LoginUser.getInstance().UserID = param.UserID;
        }
    },

    [login_msgs.GameList] : function(param) {
        GameManager.getInstance().setGameArr(param.Items)
    },

    [baccarat_msgs.GameBaccaratEnter] : function(param) {
        GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
    },

    [landLords_msgs.GameLandLordsEnter] : function(param) {
        GameManager.getInstance().enterGameScene(GameKindEnum.Landlord);
    }

}

export default NetHandlers;
