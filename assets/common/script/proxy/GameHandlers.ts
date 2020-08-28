import { baccarat_msgs } from "../proto/net_baccarat";
import GameManager from "../model/GameManager";
import { GameKindEnum } from "../definer/ConstDefine";
import { landLords_msgs } from "../proto/net_landLords";
import DDzMgr from "../../../resources/subgames/ddz/script/model/DDzMgr";
import { isNil } from "../../../kernel/utils/GlobalFuncs";
import { gamecomm_msgs } from "../proto/net_gamecomm";
import { brcowcow_msgs } from "../proto/net_brcowcow";
import { brcowcow, gamecomm } from "../../../../declares/brcowcow";
import { baccarat } from "../../../../declares/baccarat";
import { landLords } from "../../../../declares/landLords";
import BrnnMgr from "../../../resources/subgames/brnn/script/model/BrnnMgr";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../definer/ChannelDefine";
import LoginUser from "../model/LoginUser";
import SceneManager from "../../../kernel/view/SceneManager";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import UIManager from "../../../kernel/view/UIManager";

var GameHandlers = {

    [gamecomm_msgs.NotifyChangeGold] : function(param:gamecomm.NotifyChangeGold) {
        if(param.UserID == LoginUser.getInstance().UserID) {
            LoginUser.getInstance().Gold = param.Gold;
        }
    },

    [gamecomm_msgs.BeOut] : function(param:gamecomm.BeOut) {
        //GameManager.getInstance().quitGame(true);
        UIManager.openDialog("cfg_kick", "你被踢出房间："+param.Hints, 1, function(){
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        });
    },


	[gamecomm_msgs.PlayerListInfo] : function(param) {
        DDzMgr.getInstance().updateFighterList(param && param.AllInfos);
    },
	
	[baccarat_msgs.BaccaratSceneResp] : function(param:baccarat.BaccaratSceneResp) {
        GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
	},
	
	[brcowcow_msgs.BrcowcowSceneResp] : function(param:brcowcow.BrcowcowSceneResp) {
        BrnnMgr.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(true);
		GameManager.getInstance().enterGameScene(GameKindEnum.BrCowCow);
	},

    [landLords_msgs.LandLordsScene] : function(param:landLords.LandLordsScene) {
        DDzMgr.getInstance().setEnterData(param);
        DDzMgr.getInstance().clearFighters();
        DDzMgr.getInstance().updateFighterList(param.Players);
        for(var i in param.Players) {
            if(param.Players[i].IsBanker) {
                DDzMgr.getInstance().setZhuang(param.Players[i].UserID);
            }
        }
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(true);
        GameManager.getInstance().enterGameScene(GameKindEnum.Landlord);
    },
}

export default GameHandlers;