import BaseComponent from "../../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../../common/script/model/GameManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import CpnChipbox3d from "../../../../appqp/script/comps/CpnChipbox3d";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import CpnHandcard from "../../../../appqp/script/comps/CpnHandcard";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import { brcowcow_msgs, brcowcow_request } from "../../../../../common/script/proto/net_brcowcow";
import { brcowcow } from "../../../../../../declares/brcowcow";
import { isNil, isEmpty, newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../../common/script/model/LoginUser";
import UIManager from "../../../../../kernel/view/UIManager";
import BrnnMgr from "../model/BrnnMgr";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import ResPool from "../../../../../kernel/basic/pool/ResPool";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";


var margin = { left:16,right:16,bottom:16,top:16 };


const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComponent {

	compBox:CpnChipbox3d = null;
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;

	
	
	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

		this.compBox = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d);
		this.compBox.setChipValues(this._rule);

		ResPool.load(ViewDefine.CpnChip);

		this.initNetEvent();
		this.initUIEvent();

		AudioManager.getInstance().playMusicAsync("appqp/audios/music_bg", true);

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
		var enterData = BrnnMgr.getInstance().getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				var areaName = "area"+i;
				if(this.m_ui[areaName]) {
					this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[i]);
					this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[i]);
				}
			}
			if(enterData.Chips && enterData.Chips.length >= 5) {
				this._rule = enterData.Chips;
				this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).setChipValues(enterData.Chips);
			}
		} else {
			this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).setChipValues(this._rule);
		}
	}

	private setWinAreas(arr:any) {
		for(var i=4; i>=0; i--) {
			// if(this.m_ui["area"+i]) {
			// 	var nd = this.m_ui["area"+i].getChildByName("sprhigh");
			// 	nd.active = !isNil(arr[i]) && arr[i] > 0;
			// 	if(nd.active) {
			// 		nd.runAction(cc.blink(1, 3));
			// 	}
			// }
		}
	}

	private onStateTimer(tmr:BaseTimer) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();

		if(tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("appqp/audios/countdown", false);
	}

	private BrcowcowBetResp(param:brcowcow.BrcowcowBetResp) {
		if(isNil(param)) { return; }
		var enterData = BrnnMgr.getInstance().getEnterData();
		enterData.AreaBets[param.BetArea] += param.BetScore;
		if(param.UserId == LoginUser.getInstance().UserId) {
			enterData.MyBets[param.BetArea] += param.BetScore;
		}

		var areaName = "area"+param.BetArea;
		if(this.m_ui[areaName]) {
			this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[param.BetArea]);
			this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[param.BetArea]);
		}

		var money = CommonUtil.fixRealMoney(param.BetScore);
        var nums = GameUtil.parseChip(money, this._rule);
        var fromObj = this.m_ui.btnPlayerlist; 
        if(param.UserId == LoginUser.getInstance().UserId) {
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
			CommonUtil.lineTo1(chip, fromObj, this.m_ui["area"+param.BetArea], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin[param.BetArea]);
		}
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
	}

	private BrcowcowStateFree(param:brcowcow.IBrcowcowStateFreeResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		this.m_ui.CpnHandcard0.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards(null, false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowStateStart(param:brcowcow.IBrcowcowStateStartResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setFapai();

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowStatePlaying(param:brcowcow.IBrcowcowStatePlayingResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowStateOver(param:brcowcow.IBrcowcowStateOverResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
		AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowOpenResp(param:brcowcow.IBrcowcowOpenResp) {
		var cardlist = [param.TianCard, param.DiCard, param.XuanCard, param.HuangCard, param.BankerCard];
		for(var i = 0; i < cardlist.length; i++) {
			this.m_ui["CpnHandcard"+i].getComponent(CpnHandcard).resetCards(cardlist[i].Cards, true);
		}
		this.setWinAreas(param.AwardArea);
	}

	private BrcowcowOverResp(param:brcowcow.IBrcowcowOverResp) {
		if(isNil(param)) { return; }
		this.playCollectChip(param);
	}
	private playCollectChip(param:brcowcow.IBrcowcowOverResp) {
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);

		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					var pos = CommonUtil.convertSpaceAR(this.m_ui["betBtn"+childs[i].__areaId], this.m_ui.chipLayer);
					childs[i].runAction(cc.sequence(
						cc.moveTo(0.3, cc.v2(pos.x, pos.y)),
						cc.callFunc(function(obj){
							ResPool.delObject(ViewDefine.CpnChip, obj);
						}, childs[i])
					))
				}
			}, this)
		));

		var shouTime = 0.1 + 0.36;
		TimerManager.delaySecond(shouTime, newHandler(function(){
			if(param.MySettlement > 0) {
				var nums = GameUtil.splitChip(CommonUtil.fixRealMoney(param.MySettlement), this._rule);
				var fromPos = CommonUtil.convertSpaceAR(this.m_ui.collectNode, this.m_ui.chipLayer);
				var toPos = CommonUtil.convertSpaceAR(this.m_ui.choumadiban, this.m_ui.chipLayer);
				this.playFly(nums, fromPos, toPos);
			}
			// if(param.PlayerAcquire > 0) {
			// 	var nums = GameUtil.splitChip(CommonUtil.fixRealMoney(param.PlayerAcquire), this._rule);
			// 	var fromPos = CommonUtil.convertSpaceAR(this.m_ui.collectNode, this.m_ui.chipLayer);
			// 	var toPos = CommonUtil.convertSpaceAR(this.m_ui.btnPlayerlist, this.m_ui.chipLayer);
			// 	this.playFly(nums, fromPos, toPos);
			// }
		}, this));
	}
	private playFly(nums, fromPos, toPos) {
		for(var j = 0; j<nums.length; j++) {
			var chip = ResPool.newObject(ViewDefine.CpnChip);
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);

			chip.runAction(cc.sequence(
				cc.place(fromPos),
				cc.delayTime(j*0.08),
				cc.moveTo(0.25, toPos),
				cc.callFunc(function(){
					ResPool.delObject(ViewDefine.CpnChip, this)
				}, chip)
			));
		}
	}

	private GoldChangeInfo(param:gamecomm.GoldChangeInfo) {
		if(param.UserID == LoginUser.getInstance().UserId) {
			LoginUser.getInstance().Gold = param.Gold;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(param.Gold);
			if(!isEmpty(param.AlterGold)) {
				GameUtil.playAddMoney(this.m_ui.lab_magic_money, CommonUtil.fixRealMoney(param.AlterGold), cc.v3(0,0,0), cc.v2(0, 60));
			}
		} 
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateFreeResp, this.BrcowcowStateFree, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateStartResp, this.BrcowcowStateStart, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStatePlayingResp, this.BrcowcowStatePlaying, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateOverResp, this.BrcowcowStateOver, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowBetResp, this.BrcowcowBetResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowOverResp, this.BrcowcowOverResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowOpenResp, this.BrcowcowOpenResp, this);
	//	EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowCheckoutResp, this.BrcowcowCheckoutResp, this);
	}

	private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
			if(this.isJoined) {
				UIManager.openDialog("cfmquitgame", "确认退出游戏？", 2, function(mnuId){
					if(mnuId==1) { GameManager.getInstance().quitGame(); }
				})
			} else {
				GameManager.getInstance().quitGame();
			}
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            GameManager.getInstance().quitGame(true);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.area0, function(){ this.onClickArea(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.area3, function(){ this.onClickArea(3); }, this);
	}
	private onClickArea(areaId:number) {
		var money = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
		brcowcow_request.BrcowcowBetReq({BetArea:areaId, BetScore:CommonUtil.toServerMoney(money)});
	}

}
