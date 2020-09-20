import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChipbox3d from "../../../../appqp/script/comps/CpnChipbox3d";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import { brtoubao } from "../../../../../../declares/brtoubao";
import Preloader from "../../../../../kernel/utils/Preloader";
import { isNil, isEmpty } from "../../../../../kernel/utils/GlobalFuncs";
import { brtoubao_request, brtoubao_msgs } from "../../../../../common/script/proto/net_brtoubao";
import UIManager from "../../../../../kernel/view/UIManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import ToubaoMgr from "../model/ToubaoMgr";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { gamecomm } from "../../../../../../declares/gamecomm";
import LoginUser from "../../../../../common/script/model/LoginUser";
import ResPool from "../../../../../kernel/basic/pool/ResPool";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import CpnWinLoseMoney from "../../../../appqp/script/comps/CpnWinLoseMoney";


var margin = { rx:10, ry:10, rr:0 };
var MaxAreaCnt = 25;


const {ccclass, property} = cc._decorator;

@ccclass
export default class ToubaoUI extends BaseComponent {

	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;

	touzilist = [];
	touziposlist = [];
	touziscalelist = [];
	
	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

		for(var i=0; i<3; i++) {
			this.touzilist.push(this.m_ui["touzi"+i]);
			this.touziposlist.push(this.m_ui["touzi"+i].position);
			this.touziscalelist.push(this.m_ui["touzi"+i].scale);
		}

		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().Gold);
		this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).stopPlay();
		ResPool.load(ViewDefine.CpnChip);

		this.initNetEvent();
		this.initUIEvent();

		AudioManager.getInstance().playMusicAsync("appqp/audios/music_bg", true);

		this.initContext();
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);

		var curGame = GameManager.getInstance().getRunningGameData();
		this.m_ui.labroomname.getComponent(cc.Label).string = "房间类型：" + GameUtil.roomNameByLevel(curGame.Info.Level);
	}

	onDestroy(){
		ResPool.unload(ViewDefine.CpnChip);
		super.onDestroy();
	}

	private initContext() {
		this.m_ui.tzNode.active = false;
		this.setWinAreas([]);

		var enterData = ToubaoMgr.getInstance().getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				var areaName = "betBtn"+i;
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
			this.initChips(enterData.AreaBets);
		} else {
			this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).setChipValues(this._rule);
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：";
		}
	}
	private initChips(AreaBets:Array<number>) {
		if(isNil(AreaBets)) { return; }
		for(var i=AreaBets.length-1; i>=0; i--) {
			var money = CommonUtil.fixRealMoney(AreaBets[i]);
			var nums = GameUtil.parseChip(money, this._rule);
			for(var j in nums) {
				var chip = ResPool.newObject(ViewDefine.CpnChip);
				chip.getComponent(CpnChip).setChipValue(nums[j], true);
				this.m_ui.chipLayer.addChild(chip);
				chip.__areaId = i;
				chip.stopAllActions();
				chip.scale = 0.2;
				var pos = CommonUtil.getRandPos(this.m_ui.chipLayer, chip, this.m_ui["area"+i], margin);
				chip.x = pos.x;
				chip.y = pos.y;
			}
		}
	}

	private onStateTimer(tmr:BaseTimer) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	private playTipBetting() {
		this.m_ui.highLayer.runAction(cc.sequence(cc.blink(1, 3), cc.show(), cc.callFunc(function(){ this.setWinAreas([]) }, this)));
	}

	private clearBets() {
		ToubaoMgr.getInstance().clearBets();
		
		var childs = this.m_ui.chipLayer.children;
		for(var i=childs.length-1; i>=0; i--){
			ResPool.delObject(ViewDefine.CpnChip, childs[i]);
		}
		for(var j=0; j<MaxAreaCnt; j++) {
			this.m_ui["betBtn"+j].getChildByName("labTotal").getComponent(cc.Label).string = "0";
			this.m_ui["betBtn"+j].getChildByName("labMe").getComponent(cc.Label).string = "0";
		}
	}

	private setWinAreas(arr:any, bAni:boolean = true) {
		this.m_ui.highLayer.active = true;
		for(var i=0; i<MaxAreaCnt; i++) {
			if(this.m_ui["area"+i]) {
				var nd = this.m_ui["area"+i];
				nd.stopAllActions();
				nd.active = !isNil(arr[i]) && arr[i] > 0;
				if(bAni && nd.active) {
					nd.runAction(cc.sequence(cc.blink(1, 3),cc.show()));
				}
			}
		}
	}

	private playCollectChip(param:brtoubao.IBrtoubaoCheckoutResp) {
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);

		var childs = this.m_ui.chipLayer.children
		var len = childs.length;
		var pos = CommonUtil.convertSpaceAR(this.m_ui.collectNode, this.m_ui.chipLayer);
		for(var i=len-1; i>=0; i--){
			childs[i].stopAllActions();
			childs[i].runAction(cc.sequence(
				cc.delayTime(0.03*(len-i)/4),
				cc.moveTo(0.25, cc.v2(pos.x, pos.y)),
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
			chip.stopAllActions();
			chip.scale = 0.2;
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

	private setPoints(points:Array<number>|Uint8Array) {
		if(isNil(points) || points.length < 3) {
			return;
		}
		for(var i=0; i<3; i++) {
			Preloader.setNodeSprite(this.touzilist[i].getComponent(cc.Sprite), "appqp/imgs/games/saizi"+points[i], this);
		}
	}

	private BrtoubaoBetResp(param:brtoubao.IBrtoubaoBetResp) {
		var enterData = ToubaoMgr.getInstance().getEnterData();
		enterData.AreaBets[param.BetArea] += param.BetScore;
		if(param.UserID == LoginUser.getInstance().UserId) {
			enterData.MyBets[param.BetArea] += param.BetScore;
		}

		var areaName = "betBtn"+param.BetArea;
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
			chip.stopAllActions();
			chip.scale = 0.2;
			chip.__areaId = param.BetArea;
			CommonUtil.lineTo1(chip, fromObj, this.m_ui["area"+param.BetArea], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin);
		}
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
    }

	//准备阶段
	BrtoubaoStateStartResp(param:brtoubao.IBrtoubaoStateStartResp) {
		if(param) {
			ToubaoMgr.getInstance().getEnterData().Inning = param.Inning;
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
			TimerManager.delTimer(this.tmrState);
			this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
		}
		
		this.m_ui.tzNode.active = false;
		this.m_ui.hg_shaibao.getComponent(sp.Skeleton).setAnimation(0, "shake", false);
		this.isJoined = false;
		this.clearBets();
		this.setWinAreas([]);
	}

	//下注阶段
	BrtoubaoStatePlayingResp(param:brtoubao.IBrtoubaoStatePlayingResp) {
		this.m_ui.tzNode.active = false;
		this.m_ui.hg_shaibao.getComponent(sp.Skeleton).setAnimation(0, "wait", true);

		if(param.Times.OutTime <= 1) {
			this.setWinAreas([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], false);
			this.playTipBetting();
			AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);

			Preloader.showSpineAsync("appqp/spines/startani/skeleton", 0, "animation", 1, this.node, {zIndex:10, x:0, y:160, scale:0.5}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}
		
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	//开拍阶段
	BrtoubaoStateOpenResp(param:brtoubao.IBrtoubaoStateOpenResp) {
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
		
		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);

			Preloader.showSpineAsync("appqp/spines/stopbet/bairenniuniu_tingzhixiazhu", 0, "animation", 1, this.node, {zIndex:10}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}
		
		this.BrtoubaoOpenResp(param.OpenInfo);
	}

	//结算阶段
	BrtoubaoStateOverResp(param:brtoubao.IBrtoubaoStateOverResp) {
		this.isJoined = false;
	}

	BrtoubaoOpenResp(param:brtoubao.IBrtoubaoOpenResp) {
		if(isNil(param)) { return; }
		this.setWinAreas(param.AwardArea);

		//开拍动画
		this.m_ui.hg_shaibao.getComponent(sp.Skeleton).setAnimation(0, "open", false);
		this.m_ui.tzNode.active = true;
		this.setPoints(param.Dice)
		for(var n=0; n<3; n++) {
			this.touzilist[n].stopAllActions();
			this.touzilist[n].scale = this.touziscalelist[n];
			this.touzilist[n].position = this.touziposlist[n];
			this.touzilist[n].runAction(cc.sequence(
				cc.hide(),
				cc.delayTime(0.4),
				cc.show(),
				cc.delayTime(1.3),
				cc.spawn(
					cc.scaleTo(0.3, 2),
					cc.moveTo(0.3, cc.v2((n-1)*100, -120))
				),
				cc.delayTime(0.5),
				cc.spawn(
					cc.scaleTo(0.3, 0.8),
					cc.moveTo(0.3, cc.v2((n-1)*38+200, -4))
				)
			));
		}
	}

	BrtoubaoCheckoutResp(param:brtoubao.IBrtoubaoCheckoutResp) {
		LoginUser.getInstance().Gold += param.MyAcquire;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().getMoney());
		this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).playMoney(CommonUtil.fixRealMoney(param.MyAcquire), 60, 3);
		this.playCollectChip(param);
	}

	GoldChangeInfo(param) {
		if(param.UserID == LoginUser.getInstance().UserId) {
			LoginUser.getInstance().Gold = param.Gold;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(param.Gold);
			if(!isEmpty(param.AlterGold)) {
				this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).playMoney(CommonUtil.fixRealMoney(param.AlterGold), 60, 5);
			}
		} 
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoSceneResp, this.initContext, this);
		EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoBetResp, this.BrtoubaoBetResp, this);
		EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoStateStartResp, this.BrtoubaoStateStartResp, this);
        EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoStatePlayingResp, this.BrtoubaoStatePlayingResp, this);
		EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoStateOpenResp, this.BrtoubaoStateOpenResp, this);
		EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoStateOverResp, this.BrtoubaoStateOverResp, this);
		EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoCheckoutResp, this.BrtoubaoCheckoutResp, this);
		EventCenter.getInstance().listen(brtoubao_msgs.BrtoubaoOpenResp, this.BrtoubaoOpenResp, this);
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
	}

	initUIEvent() {
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
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.Toubao});
		}, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn0, function(){ this.onClickArea(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn2, function(){ this.onClickArea(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn3, function(){ this.onClickArea(3); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn4, function(){ this.onClickArea(4); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn5, function(){ this.onClickArea(5); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn6, function(){ this.onClickArea(6); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn7, function(){ this.onClickArea(7); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn8, function(){ this.onClickArea(8); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn9, function(){ this.onClickArea(9); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn10, function(){ this.onClickArea(10); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn11, function(){ this.onClickArea(11); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn12, function(){ this.onClickArea(12); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn13, function(){ this.onClickArea(13); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn14, function(){ this.onClickArea(14); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn15, function(){ this.onClickArea(15); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn16, function(){ this.onClickArea(16); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn17, function(){ this.onClickArea(17); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn18, function(){ this.onClickArea(18); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn19, function(){ this.onClickArea(19); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn20, function(){ this.onClickArea(20); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn21, function(){ this.onClickArea(21); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn22, function(){ this.onClickArea(22); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn23, function(){ this.onClickArea(23); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn24, function(){ this.onClickArea(24); }, this);
	}
	onClickArea(idx) {
		var money = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
		brtoubao_request.BrtoubaoBetReq({BetArea:idx, BetScore:CommonUtil.toServerMoney(money)});
	}

}