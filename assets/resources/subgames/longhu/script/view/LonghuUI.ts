import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import ResPool from "../../../../../kernel/basic/pool/ResPool";
import LonghuMgr from "../model/LonghuMgr";
import CpnChipbox3d from "../../../../appqp/script/comps/CpnChipbox3d";
import LoginUser from "../../../../../common/script/model/LoginUser";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { tigerXdragon } from "../../../../../../declares/tigerXdragon";
import { tigerXdragon_msgs, tigerXdragon_request } from "../../../../../common/script/proto/net_tigerXdragon";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { isEmpty, isNil } from "../../../../../kernel/utils/GlobalFuncs";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import Preloader from "../../../../../kernel/utils/Preloader";
import UIManager from "../../../../../kernel/view/UIManager";


var margin = { rx:20,ry:20,rr:0 };
var margin03 = { rx:30,ry:30,rr:0 };


const {ccclass, property} = cc._decorator;

@ccclass
export default class LonghuUI extends BaseComponent {
	private isJoined = false;
	private tmrState = 0;
    _rule:number[] = [5,10,50,100,500];
    
    start () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);
		
		ResPool.load(ViewDefine.CpnChip);

        this.initUIEvent();
        this.initNetEvent();

        AudioManager.getInstance().playMusicAsync("appqp/audios/music_bg", true);

		this.m_ui.lab_hname.getComponent(cc.Label).string = LoginUser.getInstance().Name;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().Gold);

		this.initContext();
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
    }

    onDestroy(){
		ResPool.unload(ViewDefine.CpnChip);
		super.onDestroy();
	}

	private initContext() {
		this.setWinAreas([]);
		var enterData = LonghuMgr.getInstance().getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				var areaName = "floor"+i;
				if(this.m_ui[areaName]) {
					this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[i]);
					this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[i]);
				}
			}
			if(enterData.Chips && enterData.Chips.length >= 5) {
				this._rule = enterData.Chips;
				this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).setChipValues(enterData.Chips);
			}
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + enterData.Inning;
		} else {
			this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).setChipValues(this._rule);
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：";
		}
	}

	private setWinAreas(arr:any) {
		
	}

	private clearBets() {
		LonghuMgr.getInstance().clearBets();
		
		var childs = this.m_ui.chipLayer.children;
		for(var i=childs.length-1; i>=0; i--){
			ResPool.delObject(ViewDefine.CpnChip, childs[i]);
		}
		for(var j=0; j<13; j++) {
			this.m_ui["floor"+j].getChildByName("labTotal").getComponent(cc.Label).string = "0";
			this.m_ui["floor"+j].getChildByName("labMe").getComponent(cc.Label).string = "0";
		}
	}

	private onStateTimer(tmr:BaseTimer) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}


	private GoldChangeInfo(param:gamecomm.IGoldChangeInfo) {
		if(param.UserID == LoginUser.getInstance().UserId) {
			LoginUser.getInstance().Gold = param.Gold;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(param.Gold);
			//this.refreshZhuang();
			if(!isEmpty(param.AlterGold)) {
				GameUtil.playAddMoney(this.m_ui.lab_magic_money, CommonUtil.fixRealMoney(param.AlterGold), cc.v3(0,0,0), cc.v2(0, 60));
			}
		} 

		//PlayerMgr.getInstance().updateInfo(param.UserID, {Gold:param.Gold});

		// if(!isNil(BrttzMgr.getInstance().getEnterData()) && BrttzMgr.getInstance().getEnterData().HostID == param.UserID) {
		// 	this.refreshZhuang();
		// }
	}

	private TigerXdragonBetResp(param:tigerXdragon.ITigerXdragonBetResp) {
		if(isNil(param)) { return; }
		var enterData = LonghuMgr.getInstance().getEnterData();
		enterData.AreaBets[param.BetArea] += param.BetScore;
		if(param.UserID == LoginUser.getInstance().UserId) {
			enterData.MyBets[param.BetArea] += param.BetScore;
		}

		var areaName = "floor"+param.BetArea;
		if(this.m_ui[areaName]) {
			this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[param.BetArea]);
			this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[param.BetArea]);
		}

		var money = CommonUtil.fixRealMoney(param.BetScore);
        var nums = GameUtil.parseChip(money, this._rule);
        var fromObj = this.m_ui.btnPlayerlist; 
        if(param.UserID == LoginUser.getInstance().UserId) {
			fromObj = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).getChipNodeByValue(money);
			LoginUser.getInstance().Gold -= param.BetScore;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().Gold);
			this.isJoined = true;
        }
		for(var j in nums) {
			var chip = ResPool.newObject(ViewDefine.CpnChip);
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);
			chip.__areaId = param.BetArea;
			CommonUtil.lineTo1(chip, fromObj, this.m_ui["area"+param.BetArea], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin);
		}
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
	}

	private TigerXdragonSceneResp(param:tigerXdragon.ITigerXdragonSceneResp) {
		this.initContext();
	}

	private TigerXdragonStateStartResp(param:tigerXdragon.ITigerXdragonStateStartResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);

		this.clearBets();
		this.setWinAreas([]);
	}

	private TigerXdragonStatePlayingResp(param:tigerXdragon.ITigerXdragonStatePlayingResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);

		this.setWinAreas([]);

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);

			Preloader.showSpineAsync("appqp/spines/startani/skeleton", 0, "animation", 1, this.node, {zIndex:10, x:0, y:160, scale:0.5}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}
	}

	private TigerXdragonStateOpenResp(param:tigerXdragon.ITigerXdragonStateOpenResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setKaipai();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
		AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);
		if(!isNil(param.OpenInfo)) {
			this.TigerXdragonOpenResp(param.OpenInfo);
		}
	}

	private TigerXdragonStateOverResp(param:tigerXdragon.ITigerXdragonStateOverResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private TigerXdragonOpenResp(param:tigerXdragon.ITigerXdragonOpenResp) {
		this.setWinAreas(param.AwardArea);
	}

	private TigerXdragonCheckoutResp(param:tigerXdragon.ITigerXdragonCheckoutResp) {
		this.playCollectChip(param);
	}

	private playCollectChip(param:tigerXdragon.ITigerXdragonCheckoutResp) {
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);

		var childs = this.m_ui.chipLayer.children
		var len = childs.length;
		var pos = CommonUtil.convertSpaceAR(this.m_ui.collectNode, this.m_ui.chipLayer);
		for(var i=len-1; i>=0; i--){
			childs[i].runAction(cc.sequence(
				cc.delayTime(0.03*(len-i)),
				cc.moveTo(0.3, cc.v2(pos.x, pos.y)),
				cc.callFunc(function(obj){
					ResPool.delObject(ViewDefine.CpnChip, obj);
				}, childs[i])
			))
		}

		var shouTime = 0.1 + 0.36;
		if(param.MyAcquire > 0) {
			var nums = GameUtil.splitChip(CommonUtil.fixRealMoney(param.MyAcquire), this._rule);
			var fromPos = CommonUtil.convertSpaceAR(this.m_ui.collectNode, this.m_ui.chipEffLayer);
			var toPos = CommonUtil.convertSpaceAR(this.m_ui.choumadiban, this.m_ui.chipEffLayer);
			this.playFly(nums, fromPos, toPos, shouTime);
		}
		// if(param.PlayerAcquire > 0) {
		// 	var nums = GameUtil.splitChip(CommonUtil.fixRealMoney(param.PlayerAcquire), this._rule);
		// 	var fromPos = CommonUtil.convertSpaceAR(this.m_ui.collectNode, this.m_ui.chipEffLayer);
		// 	var toPos = CommonUtil.convertSpaceAR(this.m_ui.btnPlayerlist, this.m_ui.chipEffLayer);
		// 	this.playFly(nums, fromPos, toPos, shouTime);
		// }
	}
	private playFly(nums:Array<number>, fromPos:cc.Vec2, toPos:cc.Vec2, delaySec:number) {
		for(var j = 0; j<nums.length; j++) {
			var chip:cc.Node = ResPool.newObject(ViewDefine.CpnChip);
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipEffLayer.addChild(chip);
			chip.x = fromPos.x;
			chip.y = fromPos.y;
			chip.runAction(cc.sequence(
				cc.place(fromPos),
				cc.delayTime(delaySec + j*0.08),
				cc.moveTo(0.25, toPos),
				cc.callFunc(function(){
					ResPool.delObject(ViewDefine.CpnChip, this)
				}, chip)
			));
		}
	}

    private initNetEvent() {
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonBetResp, this.TigerXdragonBetResp, this);
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonSceneResp, this.TigerXdragonSceneResp, this);
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonStateStartResp, this.TigerXdragonStateStartResp, this);
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonStatePlayingResp, this.TigerXdragonStatePlayingResp, this);
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonStateOpenResp, this.TigerXdragonStateOpenResp, this);
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonStateOverResp, this.TigerXdragonStateOverResp, this);
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonOpenResp, this.TigerXdragonOpenResp, this);
		EventCenter.getInstance().listen(tigerXdragon_msgs.TigerXdragonCheckoutResp, this.TigerXdragonCheckoutResp, this);
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
	}

    
    private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            GameManager.getInstance().quitGame(true);
		}, this);

        CommonUtil.addClickEvent(this.m_ui.area0, function(){ this.onClickArea(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.area3, function(){ this.onClickArea(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.area4, function(){ this.onClickArea(4); }, this);
        CommonUtil.addClickEvent(this.m_ui.area5, function(){ this.onClickArea(5); }, this);
        CommonUtil.addClickEvent(this.m_ui.area6, function(){ this.onClickArea(6); }, this);
        CommonUtil.addClickEvent(this.m_ui.area7, function(){ this.onClickArea(7); }, this);
        CommonUtil.addClickEvent(this.m_ui.area8, function(){ this.onClickArea(8); }, this);
        CommonUtil.addClickEvent(this.m_ui.area9, function(){ this.onClickArea(9); }, this);
        CommonUtil.addClickEvent(this.m_ui.area10, function(){ this.onClickArea(10); }, this);
		CommonUtil.addClickEvent(this.m_ui.area11, function(){ this.onClickArea(11); }, this);
		CommonUtil.addClickEvent(this.m_ui.area12, function(){ this.onClickArea(12); }, this);
	}
	private onClickArea(areaId:number) {
		var money = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
		tigerXdragon_request.TigerXdragonBetReq({BetArea:areaId, BetScore:CommonUtil.toServerMoney(money)});
	}
	
}