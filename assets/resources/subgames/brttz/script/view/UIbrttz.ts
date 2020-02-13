import BaseComponent from "../../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import CpnGameState from "../../../../../common/script/comps/CpnGameState";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChip from "../../../../../common/script/comps/CpnChip";
import GameManager from "../../../../../common/script/model/GameManager";
import AudioManager from "../../../../../kernel/audio/AudioManager";


var margin = { rx:100, ry:65 };
var testdata = [ 
	{AreaId:0,Money:23425},
	{AreaId:1,Money:24354}, 
	{AreaId:2,Money:22365}, 
];

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIbrttz extends BaseComponent {

    _loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
    });
	
	private tmrState = 0;
    _rule:number[] = [5,10,50,100,500];
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traveseLabels(this.node, this.m_lab);
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
				chip.getComponent(CpnChip).setChipValue(nums[j], false);
				this.m_ui.chipLayer.addChild(chip);
				GameUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["area"+info.AreaId], 0.24, parseInt(j)*0.01, margin);
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
            GameManager.getInstance().quitGame(0);
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 

		}, this);

        CommonUtil.addClickEvent(this.m_ui.area0, function(){ this.onClickArea(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
    }
    
}
