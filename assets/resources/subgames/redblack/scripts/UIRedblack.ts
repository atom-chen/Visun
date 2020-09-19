import ChannelDefine from "../../../../common/script/definer/ChannelDefine";
import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../common/script/model/GameManager";
import LoginUser from "../../../../common/script/model/LoginUser";
import PlayerMgr from "../../../../common/script/model/PlayerMgr";
import { gamecomm_msgs } from "../../../../common/script/proto/net_gamecomm";
import GameUtil from "../../../../common/script/utils/GameUtil";
import AudioManager from "../../../../kernel/audio/AudioManager";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import ResPool from "../../../../kernel/basic/pool/ResPool";
import { BaseTimer } from "../../../../kernel/basic/timer/BaseTimer";
import ProcessorMgr from "../../../../kernel/net/processor/ProcessorMgr";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import UIManager from "../../../../kernel/view/UIManager";
import CpnChip from "../../../appqp/script/comps/CpnChip";
import CpnHandcard2 from "../../../appqp/script/comps/CpnHandcard2";
import CpnPaixing from "../../../appqp/script/comps/CpnPaixing";
import CpnWinLoseMoney from "../../../appqp/script/comps/CpnWinLoseMoney";
import RedblackMgr from "./RedblackMgr";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRedbalck extends BaseComponent {
	private _handors:Array<CpnHandcard2> = [];
	
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;

    start () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);
		
		ResPool.load(ViewDefine.CpnChip);

		for(var i=0; i<2; i++) {
			this._handors[i] = this.m_ui["handor"+i].getComponent(CpnHandcard2);
		}

		this.initUIEvent();
		this.initNetEvent();

		this.initContext();
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
	}

	onDestroy(){
		ResPool.unload(ViewDefine.CpnChip);
		super.onDestroy();
	}

	private initContext() {
		this.setWinAreas([]);
		this.clearBets();
		this.clearCards();
		this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).stopPlay();
	}

	private setWinAreas(arr:any) {
		for(var i=0; i<3; i++) {
			
		}
	}

	private clearBets() {
		RedblackMgr.getInstance().clearBets();
		
		var childs = this.m_ui.chipLayer.children;
		for(var i=childs.length-1; i>=0; i--){
			ResPool.delObject(ViewDefine.CpnChip, childs[i]);
		}
		for(var j=0; j<3; j++) {
			this.m_ui["area"+j].getChildByName("labTotal").getComponent(cc.Label).string = "0";
			this.m_ui["area"+j].getChildByName("labMe").getComponent(cc.Label).string = "0";
		}
	}

	private clearCards() {
		this.m_ui.handor0.getComponent(CpnHandcard2).resetCards(null);
		this.m_ui.CpnPaixing0.getComponent(CpnPaixing).setCardType(-1,-1);
		this.m_ui.handor1.getComponent(CpnHandcard2).resetCards(null);
		this.m_ui.CpnPaixing1.getComponent(CpnPaixing).setCardType(-1,-1);
	}

	private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<1; i++){
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
	}
	
	private RedblackBetResp(param:redblack.IRedblackBetResp) {

	}

	private RedblackSceneResp(param:redblack.IRedblackSceneResp) {
		
	}

	private RedblackStateStartResp(param:redblack.IRedblackStateStartResp) {
		
	}

	private RedblackStatePlayingResp(param:redblack.IRedblackStatePlayingResp) {
		
	}

	private RedblackStateOpenResp(param:redblack.IRedblackStateOpenResp) {
		
	}

	private RedblackStateOverResp(param:redblack.IRedblackStateOverResp) {
		
	}

	private RedblackOpenResp(param:redblack.IRedblackOpenResp) {
		
	}

	private RedblackCheckoutResp(param:redblack.IRedblackCheckoutResp) {
		
	}

	private playCollectChip(param) {
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

	private GoldChangeInfo(param:redblack.IGoldChangeInfo) {
		if(param.UserID == LoginUser.getInstance().UserId) {
			LoginUser.getInstance().Gold = param.Gold;
			this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(param.Gold);
		//	this.refreshZhuang();
			if(!isEmpty(param.AlterGold)) {
				this.m_ui.CpnWinLoseMoney.getComponent(CpnWinLoseMoney).playMoney(param.AlterGold, 50, 5);
			}
		} 

		PlayerMgr.getInstance().updateInfo(param.UserID, {Gold:param.Gold});

		// if(!isNil(RedblackMgr.getInstance().getEnterData()) && RedblackMgr.getInstance().getEnterData().HostID == param.UserID) {
		// 	this.refreshZhuang();
		// }
	}

    initNetEvent() {
		// EventCenter.getInstance().listen(redblack_msgs.RedblackBetResp, this.RedblackBetResp, this);
		// EventCenter.getInstance().listen(redblack_msgs.RedblackSceneResp, this.RedblackSceneResp, this);
		// EventCenter.getInstance().listen(redblack_msgs.RedblackStateStartResp, this.RedblackStateStartResp, this);
		// EventCenter.getInstance().listen(redblack_msgs.RedblackStatePlayingResp, this.RedblackStatePlayingResp, this);
		// EventCenter.getInstance().listen(redblack_msgs.RedblackStateOpenResp, this.RedblackStateOpenResp, this);
		// EventCenter.getInstance().listen(redblack_msgs.RedblackStateOverResp, this.RedblackStateOverResp, this);
		// EventCenter.getInstance().listen(redblack_msgs.RedblackOpenResp, this.RedblackOpenResp, this);
		// EventCenter.getInstance().listen(redblack_msgs.RedblackCheckoutResp, this.RedblackCheckoutResp, this);
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.Redblack});
		}, this);

		CommonUtil.addClickEvent(this.m_ui.area0, function(){ this.onClickArea(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
	}
	private onClickArea(areaId:number) {
		
	}

}
