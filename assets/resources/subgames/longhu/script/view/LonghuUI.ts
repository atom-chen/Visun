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


var margin = { left:66,right:66,bottom:28,top:100 };
var margin03 = { left:134,right:122,bottom:28,top:120 };

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
	//	this.m_ui.lab_gamestate.getComponent(cc.Label).string = "准备中";

		this.m_ui.txt_zhunbeizhong.active = true;
		this.m_ui.txt_xiazhuzhong.active = false;
		this.m_ui.txt_paijiangzhong.active = false;

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);

		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateBetting();
		}));
	}

	//下注阶段
	private toStateBetting() {
	//	this.m_ui.lab_gamestate.getComponent(cc.Label).string = "下注中";
		this.m_ui.txt_zhunbeizhong.active = false;
		this.m_ui.txt_xiazhuzhong.active = true;
		this.m_ui.txt_paijiangzhong.active = false;

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 10, new CHandler(this, this.onStateTimer), true);
	
		TimerManager.loopSecond(1, 9, new CHandler(this, this.onPlayersBet));
		TimerManager.loopSecond(10, 1, new CHandler(this, ()=>{
			this.toStateJiesuan();
		}));
	}

	//结算阶段
	private toStateJiesuan() {
		//	this.m_ui.lab_gamestate.getComponent(cc.Label).string = "结算中";

		this.m_ui.txt_zhunbeizhong.active = false;
		this.m_ui.txt_xiazhuzhong.active = false;
		this.m_ui.txt_paijiangzhong.active = true;
	
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
            {AreaId:3,Money:4532}, 
            {AreaId:4,Money:3342},
            {AreaId:5,Money:4354},
            {AreaId:6,Money:4354},
            {AreaId:7,Money:4354},
            {AreaId:8,Money:4354},
            {AreaId:9,Money:4354},
            {AreaId:10,Money:4354},
			{AreaId:11,Money:4354},
			{AreaId:12,Money:4354},
        ];
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