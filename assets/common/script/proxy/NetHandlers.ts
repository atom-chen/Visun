import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LogicCenter from "../model/LogicCenter";
import GameManager from "../model/GameManager";
import { baccarat_msgs } from "../proto/net_baccarat";
import { GameKindEnum } from "../definer/ConstDefine";
import { landLords_msgs } from "../proto/net_landLords";
import { gamecomm_msgs } from "../proto/net_gamecomm";
import DDzMgr from "../../../resources/subgames/ddz/script/model/DDzMgr";
import { isNil } from "../../../kernel/utils/GlobalFuncs";
import GroupMgr from "../model/GroupMgr";
import Group from "../model/Group";

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

        if(param.Groups) {
            for(var i in param.Groups) {
                var info = param.Groups[i];
                var grp = new Group(info.ID, info.Name, info.HostId, info.Timestamp);
                GroupMgr.getInstance().addGroup(grp);
            }
        }
    },

    [login_msgs.GameList] : function(param) {
        GameManager.getInstance().setGameArr(param.Items)
    },

    [baccarat_msgs.GameBaccaratEnter] : function(param) {
        GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
    },

    [landLords_msgs.GameLandLordsEnter] : function(param) {
        DDzMgr.getInstance().EnterData = param;
        DDzMgr.getInstance().clearFighters();
        DDzMgr.getInstance().updateFighterList(param.Players);
        for(var i in param.Players) {
            if(param.Players[i].IsBanker) {
                DDzMgr.getInstance().setZhuang(param.Players[i].UserID);
            }
        }
        if(!isNil(param.BeforeChairID)) {
            var cur = (param.BeforeChairID + 1) % 3;
            for(var i in param.Players) {
                if(param.Players[i].ChairID == cur) {
                    DDzMgr.getInstance().setCurAttacker(param.Players[i].UserID);
                    break;
                }
            }
        }
        GameManager.getInstance().enterGameScene(GameKindEnum.Landlord);
    },

    [gamecomm_msgs.UserList] : function(param) {
        DDzMgr.getInstance().updateFighterList(param && param.AllInfos);
    }

}

export default NetHandlers;
