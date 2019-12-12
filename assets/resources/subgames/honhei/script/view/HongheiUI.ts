import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChip from "../../../../../common/script/comps/CpnChip";
import CpnGameState from "../../../../../common/script/comps/CpnGameState";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";


var margin = { left:12,right:12,bottom:12,top:48 };

const {ccclass, property} = cc._decorator;

@ccclass
export default class HongheiUI extends BaseComponent {

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

        var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip.path, cc.Prefab, function (err, loadedRes) {
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
		this.m_ui.lab_cd.getComponent(cc.Label).string = tmr.getRemainTimes().toString();
	}

    //准备阶段
	private toStateReady() {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setState(0);
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateBetting();
		}));
	}

	//下注阶段
	private toStateBetting() {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setState(2);
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 10, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(1, 9, new CHandler(this, this.onPlayersBet));
		TimerManager.loopSecond(10, 1, new CHandler(this, ()=>{
			this.toStateJiesuan();
		}));
	}

	//结算阶段
	private toStateJiesuan() {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setState(4);
		var childs = this.m_ui.chipLayer.children
		var len = childs.length;
		for(var i=len-1; i>=0; i--){
			childs[i].removeFromParent(false);
			this._pool.delObject(childs[i]);
		}
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateReady();
		}));
	}

    private onPlayersBet(tmr, param) {
		param = param || [ 
            {AreaId:0,Money:3425},
            {AreaId:1,Money:4354}, 
            {AreaId:2,Money:2365}, 
        ];
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
