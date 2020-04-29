import BaseComponent from "../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../kernel/basic/pool/SimplePool";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import { BaseTimer } from "../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../kernel/basic/datastruct/CHandler";
import AudioManager from "../../../../kernel/audio/AudioManager";
import GameUtil from "../../../../common/script/utils/GameUtil";
import CpnChip from "../../../../common/script/comps/CpnChip";
import GameManager from "../../../../common/script/model/GameManager";
import CpnChipbox2d from "../../../../common/script/comps/CpnChipbox2d";
import UIManager from "../../../../kernel/view/UIManager";
import { baccarat_request, baccarat_msgs } from "../../../../common/script/proto/net_baccarat";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import { gamecomm_msgs } from "../../../../common/script/proto/net_gamecomm";

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

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
	});

	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvents();
        this.initNetEvent();

		var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loadedRes = loadedRes;
		});
        this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).setChipValues(this._rule);
		this.toStateReady();
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
    }
    
    private initNetEvent() {
        EventCenter.getInstance().listen(baccarat_msgs.GameBaccaratBetResult, this.onGameBetResult, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GameStatusPlaying, function(param){
            AudioManager.getInstance().playEffectAsync("common/audios/startbet", false);
        }, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GameStatusOver, function(param){
            AudioManager.getInstance().playEffectAsync("common/audios/endbet", false);
            this.playJiesuan();
        }, this);
    }

    private getIndexInChipBox(score:number) : number {
        var idx = 0;
        for(var i=0; i<this._rule.length; i++) {
            if(this._rule[i] == score) {
                idx = i;
                break;
            }
        }
        return idx;
    }

    private onGameBetResult(param) {
        if(param.State == 0) {
            UIManager.toast("下注失败");
            return;
        }
        //飞筹码
        var nums = GameUtil.parseChip(param.BetScore, this._rule);
        var idx = this.getIndexInChipBox(param.BetScore);
        var fromObj = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getChipNode(idx);
		for(var j in nums) {
			var chip = this._pool.newObject();
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);
			chip.__areaId = param.BetArea;
			GameUtil.lineTo1(chip, fromObj, this.m_ui["area"+param.BetArea], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin[param.BetArea]);
		}
		//播音效
		AudioManager.getInstance().playEffectAsync("common/audios/chipmove", false);
    }

    private onGameBet(param) {
        //飞筹码
        var nums = GameUtil.parseChip(param.BetScore, this._rule);
        var fromObj = this.m_ui.btnPlayerlist;
		for(var j in nums) {
			var chip = this._pool.newObject();
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);
			chip.__areaId = param.BetArea;
			GameUtil.bezierTo1(chip, fromObj, this.m_ui["area"+param.BetArea], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin[param.BetArea]);
		}
		//播音效
		AudioManager.getInstance().playEffectAsync("common/audios/chipmove", false);
    }

	private onStateTimer(tmr:BaseTimer) {
	//	this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	//准备阶段
	private toStateReady() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(0);
		
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
	}

	//下注阶段
	private toStateBetting() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(2);
		AudioManager.getInstance().playEffectAsync("common/audios/startbet", false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 10, new CHandler(this, this.onStateTimer), true);
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
							self._pool.delObject(obj);
						}, childs[i])
					);
				}
			}, this)
		));
		AudioManager.getInstance().playEffectAsync("common/audios/collect", false);
	}

	//结算阶段
	private toStateJiesuan() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(4);
		AudioManager.getInstance().playEffectAsync("common/audios/endbet", false);

		this.playJiesuan();

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
	}
    
    private onClickArea(areaID:number) {
        var money = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
        cc.log("下注：", areaID, money);
        baccarat_request.GameBaccaratBet({
            BetArea : areaID,
            BetScore : money
        });
    }
	
	private initUIEvents() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
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
}
