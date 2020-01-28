import BaseComponent from "../../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import { brcowcow_request, brcowcow_msgs } from "../../../../../common/script/proto/net_brcowcow";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../../common/script/model/GameManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChipbox3d from "../../../../../common/script/comps/CpnChipbox3d";
import CpnChip from "../../../../../common/script/comps/CpnChip";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import CpnGameState from "../../../../../common/script/comps/CpnGameState";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import AudioManager from "../../../../../kernel/audio/AudioManager";



var margin = { left:16,right:16,bottom:16,top:16 };
var testdata = [ 
	{AreaId:1,Money:25280}, 
	{AreaId:2,Money:28650}, 
	{AreaId:3,Money:26455}, 
	{AreaId:4,Money:24255} 
];

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComponent {

	compBox:CpnChipbox3d = null;
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
		CommonUtil.traveseLabels(this.node, this.m_lab);

		var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loadedRes = loadedRes;
		});

		this.compBox = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d);
		this.compBox.setChipValues([1,2,5,10,50])

		this.initNetEvent();
		this.initUIEvent();

		this.toStateReady();

		AudioManager.getInstance().playMusicAsync("common/audios/music_bg", true);
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

	private onStateTimer(tmr:BaseTimer) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	//准备阶段
	private toStateReady() {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setState(0);
		
		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards(null, false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateBetting();
		}));
	}

	//下注阶段
	private toStateBetting() {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setState(2);
		AudioManager.getInstance().playEffectAsync("common/audios/startbet", false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 10, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(1, 9, new CHandler(this, this.onPlayersBet));
		TimerManager.loopSecond(10, 1, new CHandler(this, (tmr:BaseTimer)=>{
			this.toStateJiesuan();
		}));
	}

	//结算阶段
	private toStateJiesuan() {
		AudioManager.getInstance().playEffectAsync("common/audios/endbet", false);

		this.m_ui.CpnGameState.getComponent(CpnGameState).setState(4);

		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards([PokerCode.FK_10, PokerCode.HT_A, PokerCode.HT_J, PokerCode.MH_5, PokerCode.HX_9], true);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards([PokerCode.FK_3, PokerCode.HT_8, PokerCode.HT_2, PokerCode.MH_6, PokerCode.HX_A], true);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards([PokerCode.FK_7, PokerCode.HT_4, PokerCode.HT_3, PokerCode.MH_Q, PokerCode.HX_K], true);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards([PokerCode.HT_10, PokerCode.MH_A, PokerCode.HT_5, PokerCode.FK_K, PokerCode.HT_9], true);
		
		var self = this;
		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					var pos = CommonUtil.convertSpaceAR(this.m_ui["area"+childs[i].__areaId], this.m_ui.chipLayer);
					childs[i].runAction(cc.sequence(
						cc.moveTo(0.3, cc.v2(pos.x, pos.y)),
						cc.callFunc(function(obj){
							self._pool.delObject(obj);
						}, childs[i])
					))
				}
			}, this)
		));
		AudioManager.getInstance().playEffectAsync("common/audios/collect", false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateReady();
		}));
	}

	private onRespBrcowcowBet(param) {
		param = param || {AreaId:2};
		var idx = this.compBox.getSelectedIndex();
		var chip = this._pool.newObject();
		chip.getComponent(CpnChip).setChipValue(this._rule[idx-1], true);
		this.m_ui.chipLayer.addChild(chip);
		GameUtil.lineTo1(chip, this.compBox.getChipNode(idx), this.m_ui["area"+param.AreaId], 0.2, 0, margin);
	}

	private onPlayersBet(tmr:BaseTimer, param:any) {
		//飞筹码
		param = param || testdata;
		for(var i in param) {
			var info = param[i];
			var nums = GameUtil.parseChip(info.Money, this._rule);
			for(var j in nums) {
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(nums[j], true);
				this.m_ui.chipLayer.addChild(chip);
				chip.__areaId = info.AreaId;
				GameUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["area"+info.AreaId], 0.14+0.1*info.AreaId, parseInt(j)*0.01, margin);
			}
		}
		//播音效
		if(tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("common/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("common/audios/countdown", false);
		AudioManager.getInstance().playEffectAsync("common/audios/chipmove", false);
	}

	private onClickArea(areaId:number) {
		var idx = this.compBox.getSelectedIndex();
		brcowcow_request.ReqBrcowcowBet({AreaId: areaId, Money: this._rule[idx-1]});
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(brcowcow_msgs.RespBrcowcowBet, this.onRespBrcowcowBet, this);
	}

	private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 

		}, this);

		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.area3, function(){ this.onClickArea(3); }, this);
		CommonUtil.addClickEvent(this.m_ui.area4, function(){ this.onClickArea(4); }, this);
	}

}
