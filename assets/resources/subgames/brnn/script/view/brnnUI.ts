import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../../common/script/model/GameManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import CpnChipbox3d from "../../../../appqp/script/comps/CpnChipbox3d";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
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
import Preloader from "../../../../../kernel/utils/Preloader";
import PlayerMgr from "../../../../../common/script/model/PlayerMgr";
import CpnPaixing from "../../../../appqp/script/comps/CpnPaixing";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import CpnHandcard2 from "../../../../appqp/script/comps/CpnHandcard2";


var margin = { rx:50,ry:50,rr:0 };


const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComponent {

	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;

	private _handors:Array<CpnHandcard2> = [];

	
	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

		ResPool.load(ViewDefine.CpnChip);

		for(var i=0; i<5; i++) {
			this.m_ui["handor"+i].scale = 0.7;
			this._handors[i] = this.m_ui["handor"+i].getComponent(CpnHandcard2);
		}

		this.initNetEvent();
		this.initUIEvent();
		this.clearCards();

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
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + enterData.Inning;
		} else {
			this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d).setChipValues(this._rule);
			this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：";
		}
		this.m_ui.btn_xz.active = BrnnMgr.getInstance().isMeHost();
		this.m_ui.btn_sz.active = !BrnnMgr.getInstance().isMeHost();
		brcowcow_request.BrcowcowHostListReq({});
		this.refreshZhuang();
	}

	private refreshZhuang() {
		var enterData = BrnnMgr.getInstance().getEnterData();
		if(enterData && !isEmpty(enterData.HostID)) {
			var HostID = enterData.HostID;
			GameUtil.setHeadIcon(this.m_ui.headIcon, PlayerMgr.getInstance().playerHead(HostID));
			this.m_ui.lab_zjname.getComponent(cc.Label).string = PlayerMgr.getInstance().playerName(HostID);
			this.m_ui.lab_zjmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(PlayerMgr.getInstance().playerMoney(HostID));
		} else {
			GameUtil.setHeadIcon(this.m_ui.headIcon, 2007);
			this.m_ui.lab_zjname.getComponent(cc.Label).string = "系统庄家";
			this.m_ui.lab_zjmoney.getComponent(cc.Label).string = "0";
		}
		this.m_ui.btn_xz.active = BrnnMgr.getInstance().isMeHost();
		this.m_ui.btn_sz.active = !BrnnMgr.getInstance().isMeHost();
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

	private clearBets() {
		BrnnMgr.getInstance().clearBets();
		
		var childs = this.m_ui.chipLayer.children;
		for(var i=childs.length-1; i>=0; i--){
			ResPool.delObject(ViewDefine.CpnChip, childs[i]);
		}
		for(var j=0; j<4; j++) {
			this.m_ui["area"+j].getChildByName("labTotal").getComponent(cc.Label).string = "0";
			this.m_ui["area"+j].getChildByName("labMe").getComponent(cc.Label).string = "0";
		}
	}

	private clearCards() {
		this.m_ui.handor0.getComponent(CpnHandcard2).resetCards(null);
		this.m_ui.CpnPaixing0.getComponent(CpnPaixing).setCardType(-1,-1);
		this.m_ui.handor1.getComponent(CpnHandcard2).resetCards(null);
		this.m_ui.CpnPaixing1.getComponent(CpnPaixing).setCardType(-1,-1);
		this.m_ui.handor2.getComponent(CpnHandcard2).resetCards(null);
		this.m_ui.CpnPaixing2.getComponent(CpnPaixing).setCardType(-1,-1);
		this.m_ui.handor3.getComponent(CpnHandcard2).resetCards(null);
		this.m_ui.CpnPaixing3.getComponent(CpnPaixing).setCardType(-1,-1);
		this.m_ui.handor4.getComponent(CpnHandcard2).resetCards(null);
		this.m_ui.CpnPaixing4.getComponent(CpnPaixing).setCardType(-1,-1);
	}

	private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<5; i++){
			this._handors[i].resetCards([0,0,0,0,0]);
			this.m_ui["CpnPaixing"+i].getComponent(CpnPaixing).setCardType(-1,-1);
            var fromPos = CommonUtil.convertSpaceAR(this.m_ui.deingNode, this.m_ui["handor"+i]);
            for(var j=0; j<5; j++) {
                nn++;
                CommonUtil.bezierTo3(this.m_ui["handor"+i].children[j], fromPos, this._handors[i].getPosByIndex(j), 0.4, nn*0.06);
            }
        }
    }

	private onStateTimer(tmr:BaseTimer) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();

		if(tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("appqp/audios/countdown", false);
	}

	private BrcowcowBetResp(param:brcowcow.IBrcowcowBetResp) {
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
			this.refreshZhuang();
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

	private BrcowcowStateFree(param:brcowcow.IBrcowcowStateFreeResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		this.clearCards();
		this.clearBets();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowStateStart(param:brcowcow.IBrcowcowStateStartResp) {
		BrnnMgr.getInstance().getEnterData().HostID = param.HostID;
		this.refreshZhuang();

		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setFapai();
		this.playFapaiAni();
		this.clearBets();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowStatePlaying(param:brcowcow.IBrcowcowStatePlayingResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		this.setWinAreas([]);

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);

			Preloader.showSpineAsync("appqp/spines/startani/skeleton", 0, "animation", 1, this.node, {zIndex:10, x:0, y:0, scale:0.5}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowStateOpenResp(param:brcowcow.IBrcowcowStateOpenResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setKaipai();

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);
			
			Preloader.showSpineAsync("appqp/spines/stopbet/bairenniuniu_tingzhixiazhu", 0, "animation", 1, this.node, {zIndex:10}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}
		
		if(!isNil(param.OpenInfo)) {
			this.BrcowcowOpenResp(param.OpenInfo);
		}
	}

	private BrcowcowStateOver(param:brcowcow.IBrcowcowStateOverResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, (param.Times as gamecomm.ITimeInfo).WaitTime, new CHandler(this, this.onStateTimer), true);
	}

	private BrcowcowOpenResp(param:brcowcow.IBrcowcowOpenResp) {
		if(isNil(param)) { return; }
		var cardlist:Array<gamecomm.ICardInfo> = [param.TianCard, param.DiCard, param.XuanCard, param.HuangCard, param.BankerCard];
		for(var i = 0; i < cardlist.length; i++) {
			this._handors[i].resetCards(cardlist[i].Cards);
			this._handors[i].playOpen(true);
			this.m_ui["CpnPaixing"+i].getComponent(CpnPaixing).setCardType(cardlist[i].CardType, cardlist[i].CardValue);
		}
		this.setWinAreas(param.AwardArea);
	}

	private BrcowcowOverResp(param:brcowcow.IBrcowcowOverResp) {
		if(isNil(param)) { return; }
		this.playCollectChip(param);
	}
	private playCollectChip(param:brcowcow.IBrcowcowOverResp) {
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);

		var childs = this.m_ui.chipLayer.children
		var len = childs.length;
		var pos = CommonUtil.convertSpaceAR(this.m_ui.collectNode, this.m_ui.chipLayer);
		for(var i=len-1; i>=0; i--){
			childs[i].stopAllActions();
			childs[i].runAction(cc.sequence(
				cc.delayTime(0.03*(len-i)),
				cc.moveTo(0.3, cc.v2(pos.x, pos.y)),
				cc.callFunc(function(obj){
					ResPool.delObject(ViewDefine.CpnChip, obj);
				}, childs[i])
			))
		}

		var shouTime = 0.1 + 0.36;
		if(param.MySettlement > 0) {
			var nums = GameUtil.splitChip(CommonUtil.fixRealMoney(param.MySettlement), this._rule);
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
			this.refreshZhuang();
			if(!isEmpty(param.AlterGold)) {
				GameUtil.playAddMoney(this.m_ui.lab_magic_money, CommonUtil.fixRealMoney(param.AlterGold), cc.v3(0,0,0), cc.v2(0, 60));
			}
		} 

		PlayerMgr.getInstance().updateInfo(param.UserID, {Gold:param.Gold});

		if(!isNil(BrnnMgr.getInstance().getEnterData()) && BrnnMgr.getInstance().getEnterData().HostID == param.UserID) {
			this.refreshZhuang();
		}
	}

	private BrcowcowHostListResp(param:brcowcow.IBrcowcowHostListResp) {
		if(isNil(param)) { return; }
		var curZj:gamecomm.IPlayerInfo = param.CurHost;
		if(curZj) {
			PlayerMgr.getInstance().updateInfo(curZj.UserID, curZj);
			BrnnMgr.getInstance().getEnterData().HostID = curZj.UserID;
		} else {
			BrnnMgr.getInstance().getEnterData().HostID = null;
		}
		this.refreshZhuang();
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowSceneResp, this.initContext, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateFreeResp, this.BrcowcowStateFree, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateStartResp, this.BrcowcowStateStart, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStatePlayingResp, this.BrcowcowStatePlaying, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateOpenResp, this.BrcowcowStateOpenResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateOverResp, this.BrcowcowStateOver, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowBetResp, this.BrcowcowBetResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowOverResp, this.BrcowcowOverResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowOpenResp, this.BrcowcowOpenResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowHostListResp, this.BrcowcowHostListResp, this);
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
            UIManager.openPopwnd(ViewDefine.UIHelpdoc, true, {kindId:GameKindEnum.BrCowCow});
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_sz, function(){ 
            brcowcow_request.BrcowcowHostReq({IsWant:true});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_xz, function(){ 
            brcowcow_request.BrcowcowHostReq({IsWant:false});
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
