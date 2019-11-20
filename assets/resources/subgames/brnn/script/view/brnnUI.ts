import BaseComponent from "../../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import { brcowcow_request, brcowcow_msgs } from "../../../../../common/script/proto/net_brcowcow";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../../common/script/model/GameManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnChipbox from "../../../../../common/script/comps/CpnChipbox";
import CpnChip from "../../../../../common/script/comps/CpnChip";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";



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

		CommonUtil.traverseNodes(this.node, this.m_ui);

		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            var childs = this.m_ui.chiplayer.children
			var len = childs.length;
			for(var i=len-1; i>=0; i--){
				childs[i].removeFromParent(false);
				this._pool.delObject(childs[i]);
			}
		}, this);

		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.bet(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.bet(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.area3, function(){ this.bet(3); }, this);
		CommonUtil.addClickEvent(this.m_ui.area4, function(){ this.bet(4); }, this);
		
		this.compBox = this.m_ui.CpnChipbox.getComponent(CpnChipbox);
		this.compBox.setChipValues(this._rule);

		EventCenter.getInstance().listen(brcowcow_msgs.RespBrcowcowBet, (param)=>{
			if(param.IsSuccess) {
				var idx = this.compBox.getSelectedIndex();
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(this._rule[idx-1]);
				this.m_ui["chiplayer"].addChild(chip);
				GameUtil.flyChip2(chip, this.compBox.getButton(idx), this.m_ui["area"+param.AreaId], 0.2, margin);
			} else {
				UIManager.toast(param.Reason);
			}
		}, this);

		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards([PokerCode.FK_10, PokerCode.HT_A, PokerCode.HT_J, PokerCode.MH_5, PokerCode.HX_9]);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards([PokerCode.FK_3, PokerCode.HT_8, PokerCode.HT_2, PokerCode.MH_6, PokerCode.HX_A]);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards([PokerCode.FK_7, PokerCode.HT_4, PokerCode.HT_3, PokerCode.MH_Q, PokerCode.HX_K]);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards([PokerCode.HT_10, PokerCode.MH_A, PokerCode.HT_5, PokerCode.FK_K, PokerCode.HT_9]);
	}

	private bet(areaId:number) {
		var idx = this.compBox.getSelectedIndex();
		brcowcow_request.ReqBrcowcowBet({AreaId: areaId, Money: this._rule[idx-1]})
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

}
