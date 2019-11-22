import BaseComponent from "../../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import { brcowcow_request, brcowcow_msgs } from "../../../../../common/script/proto/net_brcowcow";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../../common/script/model/GameManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChipbox from "../../../../../common/script/comps/CpnChipbox";
import CpnChip from "../../../../../common/script/comps/CpnChip";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";



var margin = { left:5,right:5,bottom:40,top:5 };

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComponent {

	compBox:CpnChipbox = null;
	_rule:number[] = [1,3,5,300,800];

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
	});
	
	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip.path, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			self._loadedRes = loadedRes;
		});

		this.initNetEvent();
		this.initUIEvent();
		
		this.compBox = this.m_ui.CpnChipbox.getComponent(CpnChipbox);
		this.compBox.setChipValues(this._rule);

		this.toStateReady();
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

	private toStateReady() {
		this.m_ui.lab_gamestate.getComponent(cc.Label).string = "准备中"
		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards(null);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards(null);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards(null);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards(null);

		TimerManager.addSecondTimer(3, 1, new CHandler(this, ()=>{
			this.toStateBetting();
		}));
	}

	private toStateBetting() {
		this.m_ui.lab_gamestate.getComponent(cc.Label).string = "下注中"
		TimerManager.addSecondTimer(1, 15, new CHandler(this, this.onPlayersBet));
		TimerManager.addSecondTimer(16, 1, new CHandler(this, ()=>{
			this.toStateJiesuan();
		}));
	}

	private toStateJiesuan() {
		this.m_ui.lab_gamestate.getComponent(cc.Label).string = "结算中"
		var childs = this.m_ui.chiplayer.children
		var len = childs.length;
		for(var i=len-1; i>=0; i--){
			childs[i].removeFromParent(false);
			this._pool.delObject(childs[i]);
		}

		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards([PokerCode.FK_10, PokerCode.HT_A, PokerCode.HT_J, PokerCode.MH_5, PokerCode.HX_9]);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards([PokerCode.FK_3, PokerCode.HT_8, PokerCode.HT_2, PokerCode.MH_6, PokerCode.HX_A]);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards([PokerCode.FK_7, PokerCode.HT_4, PokerCode.HT_3, PokerCode.MH_Q, PokerCode.HX_K]);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards([PokerCode.HT_10, PokerCode.MH_A, PokerCode.HT_5, PokerCode.FK_K, PokerCode.HT_9]);

		TimerManager.addSecondTimer(2, 1, new CHandler(this, ()=>{
			this.toStateReady();
		}));
	}

	private onRespBrcowcowBet(param) {
		param = param || {AreaId:2};
		var idx = this.compBox.getSelectedIndex();
		var chip = this._pool.newObject();
		chip.getComponent(CpnChip).setChipValue(this._rule[idx-1]);
		this.m_ui.chiplayer.addChild(chip);
		GameUtil.flyChip2(chip, this.compBox.getButton(idx), this.m_ui["area"+param.AreaId], 0.2, 0, margin);
	}

	private onClickArea(areaId:number) {
		var idx = this.compBox.getSelectedIndex();
		brcowcow_request.ReqBrcowcowBet({AreaId: areaId, Money: this._rule[idx-1]});
	}

	private onPlayersBet(tmr, param) {
		param = param || [ {AreaId:1,Money:40030}, {AreaId:2,Money:20325}, {AreaId:3,Money:42100}, {AreaId:4,Money:52315} ];
		for(var i in param) {
			var info = param[i];
			var nums = GameUtil.parseChip(info.Money, this._rule);
			for(var j in nums) {
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(nums[j]);
				this.m_ui.chiplayer.addChild(chip);
				GameUtil.flyChip2(chip, this.m_ui.btnPlayerlist, this.m_ui["area"+info.AreaId], 0.2, parseInt(j)*0.03, margin);
			}
		}
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
