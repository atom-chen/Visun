import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChip from "../../../../../common/script/comps/CpnChip";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import CpnGameState from "../../../../../common/script/comps/CpnGameState";
import AudioManager from "../../../../../kernel/audio/AudioManager";


var testdata = [ 
	{AreaId:0,Money:13425},
	{AreaId:1,Money:14354}, 
	{AreaId:2,Money:12365}, 
	{AreaId:3,Money:14532}, 
	{AreaId:4,Money:13342},
	{AreaId:5,Money:14354},
	{AreaId:6,Money:14354},
	{AreaId:7,Money:14354},
	{AreaId:8,Money:14354},
	{AreaId:9,Money:14354},
	{AreaId:10,Money:14354},
	{AreaId:11,Money:14354},
	{AreaId:12,Money:14354},
];

var margin = { left:70,right:70,bottom:28,top:100 };
var margin03 = { left:138,right:128,bottom:28,top:120 };

const {ccclass, property} = cc._decorator;

@ccclass
export default class LonghuUI extends BaseComponent {
	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.6;
		return obj;
    });
	
	private tmrState = 0;
    _rule:number[] = [5,10,50,100,500];
    
    start () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

        var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loadedRes = loadedRes;
        });
        
        this.initUIEvent();
        this.initNetEvent();

        this.toStateReady();
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
		TimerManager.loopSecond(10, 1, new CHandler(this, ()=>{
			this.toStateJiesuan();
		}));
	}

	private playJiesuan() {
		var childs = this.m_ui.chipLayer.children
		var len = childs.length;
		for(var i=len-1; i>=0; i--){
			this._pool.delObject(childs[i]);
		}
		AudioManager.getInstance().playEffectAsync("common/audios/collect", false);
	}

	//结算阶段
	private toStateJiesuan() {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setState(4);
		AudioManager.getInstance().playEffectAsync("common/audios/endbet", false);
		
		this.playJiesuan();

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateReady();
		}));
	}

    private onPlayersBet(tmr, param) {
		GameUtil.playShake(this.m_ui.btnPlayerlist, 0.2, 1);
		//飞筹码
		param = param || testdata;
		for(var i in param) {
			var info = param[i];
			var nums = GameUtil.parseChip(info.Money, this._rule);
			for(var j in nums) {
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(nums[j], true);
				this.m_ui.chipLayer.addChild(chip);
				var tmp = margin;
				if(info.AreaId===0||info.AreaId===3) { tmp = margin03; }
				GameUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["area"+info.AreaId], 0.3, parseInt(j)*0.01, tmp);
			}
		}
		//播音效
		if(tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("common/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("common/audios/countdown", false);
		AudioManager.getInstance().playEffectAsync("common/audios/chipmove", false);
    }


    private initNetEvent() {
	//	EventCenter.getInstance().listen(brcowcow_msgs.RespBrcowcowBet, this.onRespBrcowcowBet, this);
	}

    private onClickArea(areaId:number) {
		
	}
    
    private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 

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
	}
	
}