import GameManager from "../model/GameManager";
import LoginUser from "../model/LoginUser";
import ChannelDefine from "../definer/ChannelDefine";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import SceneManager from "../../../kernel/view/SceneManager";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import UIManager from "../../../kernel/view/UIManager";
import { gamecomm } from "../../../../declares/gamecomm";
import { GameKindEnum } from "../definer/ConstDefine";
import { brtoubao_msgs } from "../proto/net_brtoubao";
import { landLords_msgs } from "../proto/net_landLords";
import { gamecomm_msgs } from "../proto/net_gamecomm";
import { brcowcow_msgs } from "../proto/net_brcowcow";
import { baccarat_msgs } from "../proto/net_baccarat";
import { zhajinhua_msgs } from "../proto/net_zhajinhua";
import { tuitongzi_msgs } from "../proto/net_tuitongzi";
import { tigerXdragon_msgs } from "../proto/net_tigerXdragon";
import { tbcowcow_msgs } from "../proto/net_tbcowcow";
import { qzcowcow_msgs } from "../proto/net_qzcowcow";
import { sangong_msgs } from "../proto/net_sangong";


var GameHandlers = {

    [gamecomm_msgs.BeOutResp] : function(param:gamecomm.IBeOutResp) {
        UIManager.openDialog("cfg_kick", "你被踢出房间："+param.Hints, 1, function(){
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        });
    },

    [gamecomm_msgs.ExitGameResp] : function(param:gamecomm.IExitGameResp) {
        if(param.UserID == LoginUser.getInstance().UserId) {
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        }
    },

    [gamecomm_msgs.GoldChangeInfo] : function(param:gamecomm.IGoldChangeInfo) {
        if(param.UserID == LoginUser.getInstance().UserId) {
            LoginUser.getInstance().Gold = param.Gold;
        }
    },
    
    
	[baccarat_msgs.BaccaratSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
    },
    
    [brtoubao_msgs.BrtoubaoSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Toubao);
	},
	
	[brcowcow_msgs.BrcowcowSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
		GameManager.getInstance().enterGameScene(GameKindEnum.BrCowCow);
    },

    [tuitongzi_msgs.TuitongziSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
		GameManager.getInstance().enterGameScene(GameKindEnum.Brttz);
    },

    [tigerXdragon_msgs.TigerXdragonSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
		GameManager.getInstance().enterGameScene(GameKindEnum.Longhu);
    },
    
    [zhajinhua_msgs.ZhajinhuaSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Zhajinhua);
    },

    [landLords_msgs.LandLordsSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Landlord);
    },

    [tbcowcow_msgs.TbcowcowSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.TbCowcow);
    },

    [qzcowcow_msgs.QzcowcowSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.QzCowcow);
    },

    [sangong_msgs.SangongSceneResp] : function(param) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Sangong);
    }

}

export default GameHandlers;