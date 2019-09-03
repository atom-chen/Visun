import GameUtil from "../../../../common/script/utils/GameUtil";
import CommonUtils from "../../../../kernel/utils/CommonUtils";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import SceneManager from "../../../../kernel/view/SceneManager";
import SimplePool from "../../../../kernel/pool/SimplePool";
import TimerManager from "../../../../kernel/timer/TimerManager";
import ViewDefine from "../../../../common/script/definer/ViewDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComponent {

	compBox:any = null;
	_rule:number[] = [1,3,5,300,800];

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Prefab=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
	});

	private bet(areaId:number) {
		var self = this;
		var margin = { left:5,right:5,bottom:40,top:5 };
		var idx = self.compBox.getSelectedIndex();
		var chip = this._pool.newObject();
		chip.getComponent("ChipSpr").value = this._rule[idx-1];
		self.m_ui["chiplayer"].addChild(chip);
		GameUtil.flyChip2(chip, self.compBox.getButton(idx), self.m_ui["area"+areaId], 0.25, margin);
	}
	
	onLoad () {
		CommonUtils.traverseNodes(this.node, this.m_ui);

		var self = this;
		cc.loader.loadRes(ViewDefine.ChipSpr.path, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			self._loadedRes = cc.instantiate(loadedRes);
		});

		CommonUtils.traverseNodes(this.node, this.m_ui);

		CommonUtils.addClickEvent(this.m_ui.btn_close, function(){ 
            SceneManager.turn2Scene("LobbyScene");
		}, this);
		
		CommonUtils.addClickEvent(this.m_ui.btn_help, function(){ 
            var childs = this.m_ui.chiplayer.children
			var len = childs.length;
			for(var i=len-1; i>=0; i--){
				childs[i].removeFromParent(false);
				this._pool.delObject(childs[i]);
			}
		}, this);

		CommonUtils.addClickEvent(this.m_ui.area1, function(){ this.bet(1); }, this);
		CommonUtils.addClickEvent(this.m_ui.area2, function(){ this.bet(2); }, this);
		CommonUtils.addClickEvent(this.m_ui.area3, function(){ this.bet(3); }, this);
		CommonUtils.addClickEvent(this.m_ui.area4, function(){ this.bet(4); }, this);
		
		var compBox = this.m_ui.ChipBox.getComponent("ChipBox");
		compBox.getComponent("ChipBox").setChipValues(this._rule);
		this.compBox = compBox;
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

}
