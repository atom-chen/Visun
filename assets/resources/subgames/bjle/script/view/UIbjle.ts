import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnChipbox2d from "../../../../appqp/script/comps/CpnChipbox2d";
import { baccarat_request, baccarat_msgs } from "../../../../../common/script/proto/net_baccarat";
import BjleMgr from "../model/BjleMgr";
import LoginUser from "../../../../../common/script/model/LoginUser";
import ResPool from "../../../../../kernel/basic/pool/ResPool";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { isEmpty, isNil, newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import { baccarat } from "../../../../../../declares/baccarat";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import CpnHandcard from "../../../../appqp/script/comps/CpnHandcard";
import Preloader from "../../../../../kernel/utils/Preloader";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import CpnWinLoseMoney from "../../../../appqp/script/comps/CpnWinLoseMoney";

const AREA_XIAN        = 0 //闲家
const AREA_PING        = 1 //平家
const AREA_ZHUANG      = 2 //庄家
const AREA_XIAN_TIAN   = 3 //闲天王
const AREA_ZHUANG_TIAN = 4 //庄天王
const AREA_TONG_DUI    = 5 //同点平
const AREA_XIAN_DUI    = 6 //闲对子
const AREA_ZHUANG_DUI  = 7 //庄对子

var margin = [
	{ left:55,right:55,bottom:30,top:30 },
	{ left:50,right:50,bottom:30,top:30 },
	{ left:50,right:50,bottom:30,top:30 },
	{ left:90,right:90,bottom:100,top:100 },
	{ left:90,right:90,bottom:100,top:100 },
];

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIbjle extends BaseComponent {
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;
	private areaToNode:Array<number> = [];

	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.areaToNode[0] = 3;
		this.areaToNode[1] = 0;
		this.areaToNode[2] = 4;
		this.areaToNode[3] = -1;
		this.areaToNode[4] = -1;
		this.areaToNode[5] = -1;
		this.areaToNode[6] = 1;
		this.areaToNode[7] = 2;

        this.initUIEvents();
		this.initNetEvent();
		
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().getMoney());
		this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).stopPlay();

        ResPool.load(ViewDefine.CpnChip);
		
		this.initContext();
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);

		var curGame = GameManager.getInstance().getRunningGameData();
		this.m_ui.labroomname.getComponent(cc.Label).string = "房间类型：" + GameUtil.roomNameByLevel(curGame.Info.Level);
	}

	node2Area(v:number) : number {
		for(var i=0; i<8; i++) {
			if(this.areaToNode[i] == v) {
				return i;
			}
		}
		return -1;
	}

	onDestroy(){
		ResPool.unload(ViewDefine.CpnChip);
		super.onDestroy();
	}

	private initContext() {
		this.setWinAreas([]);
		var enterData = BjleMgr.getInstance().getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				var areaName = "area"+this.areaToNode[i];
				if(this.m_ui[areaName]) {
					this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[i]);
					this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[i]);
				}
			}
			if(enterData.Chips && enterData.Chips.length >= 5) {
				this._rule = enterData.Chips;
				this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).setChipValues(enterData.Chips);
			}
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + enterData.Inning;
			this.initChips(enterData.AreaBets);
		} else {
			this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).setChipValues(this._rule);
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
				var pos = CommonUtil.getRandPos(this.m_ui.chipLayer, chip, this.m_ui["area"+this.areaToNode[i]], margin[this.areaToNode[i]]);
				chip.x = pos.x;
				chip.y = pos.y;
			}
		}
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratSceneResp, this.initContext, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratBetResp, this.BaccaratBetResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateStartResp, this.BaccaratStateStartResp, this);
        EventCenter.getInstance().listen(baccarat_msgs.BaccaratStatePlayingResp, this.BaccaratStatePlayingResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateOpenResp, this.BaccaratStateOpenResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateOverResp, this.BaccaratStateOverResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratCheckoutResp, this.BaccaratCheckoutResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratOpenResp, this.BaccaratOpenResp, this);
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
	}

	private onStateTimer(tmr:BaseTimer) {
		//	this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	private setWinAreas(arr:any) {
		for(var i=4; i>=0; i--) {
			if(this.m_ui["area"+i]) {
				var nd = this.m_ui["area"+i].getChildByName("sprhigh");
				nd.active = !isNil(arr[this.node2Area(i)]) && arr[this.node2Area(i)] > 0;
				if(nd.active) {
					nd.runAction(cc.blink(1, 3));
				}
			}
		}
	}

	private clearBets() {
		BjleMgr.getInstance().clearBets();
		
		var childs = this.m_ui.chipLayer.children;
		for(var i=childs.length-1; i>=0; i--){
			ResPool.delObject(ViewDefine.CpnChip, childs[i]);
		}
		for(var j=0; j<5; j++) {
			this.m_ui["area"+j].getChildByName("labTotal").getComponent(cc.Label).string = "0";
			this.m_ui["area"+j].getChildByName("labMe").getComponent(cc.Label).string = "0";
		}
	}
	
	private GoldChangeInfo(param:gamecomm.IGoldChangeInfo) {
		if(param.UserID == LoginUser.getInstance().UserId) {
			LoginUser.getInstance().Gold = param.Gold;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(param.Gold);
			if(!isEmpty(param.AlterGold)) {
				this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).playMoney(CommonUtil.fixRealMoney(param.AlterGold), 60, 3);
			}
		} 
	}

    private BaccaratBetResp(param:baccarat.IBaccaratBetResp) {
		var enterData = BjleMgr.getInstance().getEnterData();
		enterData.AreaBets[param.BetArea] += param.BetScore;
		if(param.UserID == LoginUser.getInstance().UserId) {
			enterData.MyBets[param.BetArea] += param.BetScore;
		}

		var areaName = "area"+this.areaToNode[param.BetArea];
		if(this.m_ui[areaName]) {
			this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[param.BetArea]);
			this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[param.BetArea]);
		}

		var money = CommonUtil.fixRealMoney(param.BetScore);
        var nums = GameUtil.parseChip(money, this._rule);
        var fromObj = this.m_ui.btnPlayerlist; 
        if(param.UserID == LoginUser.getInstance().UserId) {
			fromObj = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getChipNodeByValue(money);
			LoginUser.getInstance().Gold -= param.BetScore;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().Gold);
			this.isJoined = true;
        }
		for(var j in nums) {
			var chip = ResPool.newObject(ViewDefine.CpnChip);
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);
			chip.__areaId = param.BetArea;
			chip.stopAllActions();
			chip.scale = 0.2;
			CommonUtil.lineTo1(chip, fromObj, this.m_ui["area"+this.areaToNode[param.BetArea]], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin[this.areaToNode[param.BetArea]]);
		}
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
    }

	//准备阶段
	private BaccaratStateStartResp(param:baccarat.IBaccaratStateStartResp) {
		if(param) {
			BjleMgr.getInstance().getEnterData().Inning = param.Inning;
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
			TimerManager.delTimer(this.tmrState);
			this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
		}
		
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		this.m_ui.cardLayer.active = false;
		this.setWinAreas([]);
		this.clearBets();
		this.m_ui.CpnHandcardZ.getComponent(CpnHandcard).resetCards([], false);
		this.m_ui.CpnHandcardM.getComponent(CpnHandcard).resetCards([], false);
	}

	//下注阶段
	private BaccaratStatePlayingResp(param:baccarat.IBaccaratStatePlayingResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
		this.m_ui.cardLayer.active = false;
		this.setWinAreas([]);
		this.m_ui.CpnHandcardZ.getComponent(CpnHandcard).resetCards([], false);
		this.m_ui.CpnHandcardM.getComponent(CpnHandcard).resetCards([], false);

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);
			Preloader.showSpineAsync("appqp/spines/startani/skeleton", 0, "animation", 1, this.node, {zIndex:10, x:0, y:160, scale:0.5}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}
	}

	//开牌阶段
	private BaccaratStateOpenResp(param:baccarat.IBaccaratStateOpenResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setKaipai();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
		this.m_ui.cardLayer.active = true;

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);

			Preloader.showSpineAsync("appqp/spines/stopbet/bairenniuniu_tingzhixiazhu", 0, "animation", 1, this.node, {zIndex:10}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}

		this.BaccaratOpenResp(param.OpenInfo);
	}

	//结算阶段
	private BaccaratStateOverResp(param:baccarat.IBaccaratStateOverResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
	}

	private BaccaratOpenResp(param:baccarat.IBaccaratOpenResp) {
		if(isNil(param)) { return; }
		this.isJoined = false;
		var aaa = [];
		var bbb = [];
		this.m_ui.cardLayer.active = true;
		for(var i=param.BankerCard.Cards.length-1; i>=0; i--) {
			if(param.BankerCard.Cards[i] != 0) {
				aaa.push(param.BankerCard.Cards[i]);
			}
		}
		for(var j=param.PlayerCard.Cards.length-1; j>=0; j--) {
			if(param.PlayerCard.Cards[j] != 0) {
				bbb.push(param.PlayerCard.Cards[j]);
			}
		}
		this.m_ui.CpnHandcardZ.getComponent(CpnHandcard).resetCards(aaa, true);
		this.m_ui.CpnHandcardM.getComponent(CpnHandcard).resetCards(bbb, true);
		this.setWinAreas(param.AwardArea);
	}

	private BaccaratCheckoutResp(param:baccarat.IBaccaratCheckoutResp) {
		this.isJoined = false;
		LoginUser.getInstance().Gold += param.MyAcquire;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().getMoney());
		this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).playMoney(CommonUtil.fixRealMoney(param.MyAcquire), 60, 5);
		
		this.playCollectChip(param);
	}
	
    private playCollectChip(param:baccarat.IBaccaratCheckoutResp) {
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
	
	private initUIEvents() {
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
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.Baccarat});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button0, function(){ 
			this.onClickArea(this.node2Area(0));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button1, function(){ 
            this.onClickArea(this.node2Area(1));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button2, function(){ 
            this.onClickArea(this.node2Area(2));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button3, function(){ 
            this.onClickArea(this.node2Area(3));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button4, function(){ 
            this.onClickArea(this.node2Area(4));
		}, this);
	}
	private onClickArea(areaID:number) {
        var money = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
        baccarat_request.BaccaratBetReq({
            BetArea : areaID,
            BetScore : CommonUtil.toServerMoney(money)
        });
	}
}
