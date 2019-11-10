import { gamecomm_msgs } from "../proto/net_gamecomm";
import UIManager from "../../../kernel/view/UIManager";
import GameManager from "../model/GameManager";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import SceneManager from "../../../kernel/view/SceneManager";
import { login_msgs } from "../proto/net_login";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import EventDefine from "../definer/EventDefine";

//---------------------------------
// gamecomm响应句柄
//---------------------------------

var proxy_gamecomm = {

    [gamecomm_msgs.ErrorResult] : function(param:any) {
        var ReqId:number = param.ReqId;
        var ErrCode:number = param.ErrCode;
        var Hints:string = param.Hints;

        cc.log("通用错误处理", ReqId, ErrCode, Hints);
        UIManager.toast(Hints);

        switch(ReqId) {
            case login_msgs.ReqLogin:
                cc.log("登录失败", Hints);
                break;
            case login_msgs.ReqRegister:
                cc.log("注册失败", Hints);
                break;
        }

        EventCenter.getInstance().fire(EventDefine.NET_ERROR_RESULT, param);
    },

    [gamecomm_msgs.PlayerInfo] : function(param: any) {

    },

    [gamecomm_msgs.RespEnterGame] : function(param:any) {
        if(param.IsSuccess===1) {
            GameManager.getInstance().enterGameScene(param.GameType);
        } else {
            UIManager.toast(param.Reason||"进入游戏失败");
        }
    },

    [gamecomm_msgs.RespExitGame] : function(param:any) {
        if(param.IsSuccess===1){
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        } else {
            UIManager.toast(param.Reason);
        }
    }

}

export default proxy_gamecomm;
