import { gamecomm_msgs } from "../proto/net_gamecomm";
import UIManager from "../../../kernel/view/UIManager";
import GameManager from "../model/GameManager";
import KernelUIDefine from "../../../kernel/looker/KernelUIDefine";
import SceneManager from "../../../kernel/view/SceneManager";

//---------------------------------
// gamecomm响应句柄
//---------------------------------

var proxy_gamecomm = {

    [gamecomm_msgs.PlayerInfo] : function(param: any) {

    },

    [gamecomm_msgs.ErrorResult] : function(param:any) {
        UIManager.toast(param.Hints)
    },

    [gamecomm_msgs.RespEnterGame] : function(param:any) {
        if(param.IsSuccess===1) {
            GameManager.getInstance().enterGameScene(param.GameType);
        } else {
            UIManager.toast(param.Reason);
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
