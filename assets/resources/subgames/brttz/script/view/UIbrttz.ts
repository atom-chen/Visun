import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import { tuitongzi_request, tuitongzi_msgs } from "../../../../../common/script/proto/net_tuitongzi";
import CpnChipbox2d from "../../../../appqp/script/comps/CpnChipbox2d";
import UIManager from "../../../../../kernel/view/UIManager";
import { tuitongzi } from "../../../../../../declares/tuitongzi";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import ResPool from "../../../../../kernel/basic/pool/ResPool";
import BrttzMgr from "../model/BrttzMgr";
import LoginUser from "../../../../../common/script/model/LoginUser";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { isNil, isEmpty } from "../../../../../kernel/utils/GlobalFuncs";
import Preloader from "../../../../../kernel/utils/Preloader";
import CpnHandMajhong from "../../../../appqp/script/comps/CpnHandMajhong";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import CpnWinLoseMoney from "../../../../appqp/script/comps/CpnWinLoseMoney";


var margin = { rx:100, ry:65 };


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIbrttz extends BaseComponent {
	
	private isJoined = false;
	private tmrState = 0;
	_rule:number[] = [5,10,50,100,500];
	
	private _handors:Array<CpnHandMajhong> = [];
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);
		
		ResPool.load(ViewDefine.CpnChip);

		for(var i=0; i<4; i++) {
			if(i==3) {
				this.m_ui["CpnHandMajhong"+i].scale = 0.7;
			}
			this._handors[i] = this.m_ui["CpnHandMajhong"+i].getComponent(CpnHandMajhong);
		}
		
        this.initUIEvent();
		this.initNetEvent();
		
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().Gold);
		this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).stopPlay();

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
		this.setWinAreas([]);
		var enterData = BrttzMgr.getInstance().getEnterData();
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
				var pos = CommonUtil.getRandPos(this.m_ui.chipLayer, chip, this.m_ui["area"+i], margin);
				chip.x = pos.x;
				chip.y = pos.y;
			}
		}
	}

	private setWinAreas(arr:any) {
		for(var i=2; i>=0; i--) {
			if(this.m_ui["high"+i]) {
				var nd = this.m_ui["high"+i];
				nd.active = !isNil(arr[i]) && arr[i] > 0;
				if(nd.active) {
					nd.runAction(cc.blink(1, 3));
				}
			}
		}
	}

	private clearBets() {
		BrttzMgr.getInstance().clearBets();
		
		var childs = this.m_ui.chipLayer.children;
		for(var i=childs.length-1; i>=0; i--){
			ResPool.delObject(ViewDefine.CpnChip, childs[i]);
		}
		for(var j=0; j<3; j++) {
			this.m_ui["area"+j].getChildByName("labTotal").getComponent(cc.Label).string = "0";
			this.m_ui["area"+j].getChildByName("labMe").getComponent(cc.Label).string = "0";
		}
	}

	private playFapaiAni(bAni:boolean) {
        var nn = 0;
        for(var i=0; i<4; i++){
			this._handors[i].resetCards([0,0]);
            var fromPos = CommonUtil.convertSpaceAR(this.m_ui.deingNode, this.m_ui["CpnHandMajhong"+i]);
            for(var j=0; j<2; j++) {
				nn++;
				this.m_ui["CpnHandMajhong"+i].children[j].stopAllActions();
				if(bAni) {
					CommonUtil.bezierTo3(this.m_ui["CpnHandMajhong"+i].children[j], fromPos, this._handors[i].getPosByIndex(j), 0.4, nn*0.03);
					AudioManager.getInstance().playEffectAsync("appqp/audios/deal", false);
				}
                else {
					this.m_ui["CpnHandMajhong"+i].children[j].setPosition(this._handors[i].getPosByIndex(j));
				}
            }
        }
    }

	private onStateTimer(tmr:BaseTimer, bSound:boolean=false) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
		if(bSound) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/countdown", false);
		}
	}

	private TuitongziBetResp(param:tuitongzi.ITuitongziBetResp) {
		if(isNil(param)) { return; }
		var enterData = BrttzMgr.getInstance().getEnterData();
		enterData.AreaBets[param.BetArea] += param.BetScore;
		if(param.UserID == LoginUser.getInstance().UserId) {
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
			CommonUtil.lineTo1(chip, fromObj, this.m_ui["area"+param.BetArea], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin);
		}
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
	}

	private TuitongziSceneResp(param:tuitongzi.ITuitongziSceneResp) {
		this.initContext();
	}

	private TuitongziStateStartResp(param:tuitongzi.ITuitongziStateStartResp) {
		if(param) {
			BrttzMgr.getInstance().getEnterData().Inning = param.Inning;
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
			TimerManager.delTimer(this.tmrState);
			this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);	
		}
		
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		this.clearBets();
		this.setWinAreas([]);
		if(param && param.Times.WaitTime >= 1) {
			this.playFapaiAni(true);
		}
	}

	private TuitongziStatePlayingResp(param:tuitongzi.ITuitongziStatePlayingResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer, true), true);

		this.setWinAreas([]);
		this.playFapaiAni(false);

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);

			Preloader.showSpineAsync("appqp/spines/startani/skeleton", 0, "animation", 1, this.node, {zIndex:10, x:0, y:160, scale:0.5}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}
	}

	private TuitongziStateOpenResp(param:tuitongzi.ITuitongziStateOpenResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setKaipai();
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

		if(!isNil(param.OpenInfo)) {
			this.TuitongziOpenResp(param.OpenInfo);
		}
	}

	private TuitongziStateOverResp(param:tuitongzi.ITuitongziStateOverResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, param.Times.WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private TuitongziOpenResp(param:tuitongzi.ITuitongziOpenResp) {
		if(isNil(param)) { return; }
		this.setWinAreas(param.AwardArea);
		this.m_ui.CpnHandMajhong0.getComponent(CpnHandMajhong).resetCards(param.ShunCard.Cards).playOpen();
		this.m_ui.CpnHandMajhong1.getComponent(CpnHandMajhong).resetCards(param.TianCard.Cards).playOpen();
		this.m_ui.CpnHandMajhong2.getComponent(CpnHandMajhong).resetCards(param.DiCard.Cards).playOpen();
		this.m_ui.CpnHandMajhong3.getComponent(CpnHandMajhong).resetCards(param.BankerCard.Cards).playOpen();
	}

	private TuitongziCheckoutResp(param:tuitongzi.ITuitongziCheckoutResp) {
		this.playCollectChip(param);
	}

	private playCollectChip(param:tuitongzi.ITuitongziCheckoutResp) {
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

	private GoldChangeInfo(param:gamecomm.IGoldChangeInfo) {
		if(param.UserID == LoginUser.getInstance().UserId) {
			LoginUser.getInstance().Gold = param.Gold;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(param.Gold);
			//this.refreshZhuang();
			if(!isEmpty(param.AlterGold)) {
				this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).playMoney(CommonUtil.fixRealMoney(param.AlterGold), 60, 3);
			}
		} 

		//PlayerMgr.getInstance().updateInfo(param.UserID, {Gold:param.Gold});

		// if(!isNil(BrttzMgr.getInstance().getEnterData()) && BrttzMgr.getInstance().getEnterData().HostID == param.UserID) {
		// 	this.refreshZhuang();
		// }
	}

    private initNetEvent() {
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziBetResp, this.TuitongziBetResp, this);
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziSceneResp, this.TuitongziSceneResp, this);
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziStateStartResp, this.TuitongziStateStartResp, this);
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziStatePlayingResp, this.TuitongziStatePlayingResp, this);
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziStateOpenResp, this.TuitongziStateOpenResp, this);
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziStateOverResp, this.TuitongziStateOverResp, this);
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziOpenResp, this.TuitongziOpenResp, this);
		EventCenter.getInstance().listen(tuitongzi_msgs.TuitongziCheckoutResp, this.TuitongziCheckoutResp, this);
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
	}

    private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.Brttz});
		}, this);

        CommonUtil.addClickEvent(this.m_ui.area0, function(){ this.onClickArea(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
	}
	private onClickArea(areaId:number) {
		var money = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
		tuitongzi_request.TuitongziBetReq({BetArea:areaId, BetScore:CommonUtil.toServerMoney(money)});
	}
    
}
