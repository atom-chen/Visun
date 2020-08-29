import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import { BaseTimer } from "../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../kernel/basic/datastruct/CHandler";
import AudioManager from "../../../../kernel/audio/AudioManager";
import GameUtil from "../../../../common/script/utils/GameUtil";
import GameManager from "../../../../common/script/model/GameManager";
import UIManager from "../../../../kernel/view/UIManager";
import { baccarat_request, baccarat_msgs } from "../../../../common/script/proto/net_baccarat";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import LoginUser from "../../../../common/script/model/LoginUser";
import ResPool from "../../../../kernel/basic/pool/ResPool";
import CpnChipbox2d from "../../../appqp/script/comps/CpnChipbox2d";
import CpnChip from "../../../appqp/script/comps/CpnChip";
import { baccarat } from "../../../../../declares/baccarat";
import BacarratMgr from "./BacarratMgr";
import ProcessorMgr from "../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../common/script/definer/ChannelDefine";
import CpnGameState from "../../../appqp/script/comps/CpnGameState";

var margin = [
	{ left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
];


const {ccclass, property} = cc._decorator;

@ccclass
export default class BacarratUI extends BaseComponent {
    _rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;

	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvents();
        this.initNetEvent();

        ResPool.load(ViewDefine.CpnChip);
		this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).setChipValues(this._rule);
		
		this.initContext();
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
	}

	onDestroy(){
		ResPool.unload(ViewDefine.CpnChip);
		super.onDestroy();
	}
	
	private initContext() {
		var enterData = BacarratMgr.getInstance().getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				var areaName = "area"+i;
				this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = enterData.AreaBets[i];
				this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = enterData.MyBets[i];
			}
		}
	}
    
    private initNetEvent() {
        EventCenter.getInstance().listen(baccarat_msgs.BaccaratBetResp, this.BaccaratBetResp, this);
        EventCenter.getInstance().listen(baccarat_msgs.BaccaratStatePlayingResp, this.BaccaratStatePlaying, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateOverResp, this.BaccaratStateOver, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateFreeResp, this.BaccaratStateFree, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateStartResp, this.BaccaratStateStart, this);
    }

    private BaccaratBetResp(param:baccarat.BaccaratBetResp) {
		var money = CommonUtil.fixRealMoney(param.BetScore);
        var nums = GameUtil.parseChip(money, this._rule);
        var fromObj = this.m_ui.btnPlayerlist; 
        if(param.UserID == LoginUser.getInstance().UserId) {
            var idx = Math.max(0, this._rule.indexOf(money));
			fromObj = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getChipNode(idx);
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

	private onStateTimer(tmr:BaseTimer) {
	//	this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	//准备阶段
	private BaccaratStateFree(param) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
	}

	//开局：洗牌发牌
	private BaccaratStateStart(param) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setFapai();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
	}

	//下注阶段
	private BaccaratStatePlaying(param) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
	}

	//结算阶段
	private BaccaratStateOver(param) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
		AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);
		this.playJiesuan();
	}
    private playJiesuan() {
		var self = this;
		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					childs[i].runAction(
						cc.callFunc(function(obj){
                            ResPool.delObject(ViewDefine.CpnChip, obj);
						}, childs[i])
					);
				}
			}, this)
		));
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);
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
