import GameManager from "../model/GameManager";
import LoginUser from "../model/LoginUser";
import { GameKindEnum } from "../definer/ConstDefine";
import ChannelDefine from "../definer/ChannelDefine";
import { landLords_msgs } from "../proto/net_landLords";
import { gamecomm_msgs } from "../proto/net_gamecomm";
import { brcowcow_msgs } from "../proto/net_brcowcow";
import { baccarat_msgs } from "../proto/net_baccarat";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import SceneManager from "../../../kernel/view/SceneManager";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import UIManager from "../../../kernel/view/UIManager";
import { gamecomm } from "../../../../declares/gamecomm";
import { brcowcow } from "../../../../declares/brcowcow";
import { baccarat } from "../../../../declares/baccarat";
import { landLords } from "../../../../declares/landLords";
import BacarratMgr from "../../../resources/subgames/bjle2/script/BacarratMgr";
import DDzMgr from "../../../resources/subgames/ddz/script/model/DDzMgr";
import BrnnMgr from "../../../resources/subgames/brnn/script/model/BrnnMgr";
import BjleMgr from "../../../resources/subgames/bjle/script/model/BjleMgr";


var GameHandlers = {

    [gamecomm_msgs.GoldChangeInfo] : function(param:gamecomm.GoldChangeInfo) {
        if(param.UserID == LoginUser.getInstance().UserId) {
            LoginUser.getInstance().Gold = param.Gold;
        }
    },

    [gamecomm_msgs.BeOutResp] : function(param:gamecomm.BeOutResp) {
        UIManager.openDialog("cfg_kick", "你被踢出房间："+param.Hints, 1, function(){
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        });
    },

    [gamecomm_msgs.ExitGameResp] : function(param:gamecomm.ExitGameResp) {
        if(param.UserID == LoginUser.getInstance().UserId) {
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        }
    },

	[gamecomm_msgs.PlayerListInfo] : function(param) {
        DDzMgr.getInstance().updateFighterList(param && param.AllInfos);
    },

	
	[baccarat_msgs.BaccaratSceneResp] : function(param:baccarat.BaccaratSceneResp) {
        BacarratMgr.getInstance().setEnterData(param);
        BjleMgr.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(true);
        GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
	},
	
	[brcowcow_msgs.BrcowcowSceneResp] : function(param:brcowcow.BrcowcowSceneResp) {
        BrnnMgr.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(true);
		GameManager.getInstance().enterGameScene(GameKindEnum.BrCowCow);
	},

    [landLords_msgs.LandLordsSceneResp] : function(param:landLords.LandLordsSceneResp) {
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