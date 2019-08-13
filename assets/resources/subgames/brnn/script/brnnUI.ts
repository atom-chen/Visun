import GameUtil from "../../../lobby/script/utils/GameUtil";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";
import BaseComp from "../../../../script/kernel/gui/BaseComp";
import SceneManager from "../../../../script/kernel/gui/SceneManager";
import ObjectPool from "../../../../script/kernel/pool/ObjectPool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComp {

	compBox:any = null;
	m_ui:any;

	_loadedRes:any;
	_pool:ObjectPool = new ObjectPool(():cc.Prefab=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
	});

	private bet(areaId:number) {
		var self = this;
		var rule = [1,3,5,300,800];
		var margin = { left:5,right:5,bottom:40,top:5 };
		var idx = self.compBox.getSelectedIndex();
		var chip = this._pool.newObject();
		chip.getComponent("ChipSpr").value = rule[idx-1];
		self.m_ui["chiplayer"].addChild(chip);
		GameUtil.flyChip2(chip, self.compBox.getButton(idx), self.m_ui["area"+areaId], 0.25, margin);
	}

	
	onLoad () {
		var self = this;
		cc.loader.loadRes("common/prefabs/ChipSpr", cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			self._loadedRes = cc.instantiate(loadedRes);
		});

		this.m_ui = {};
		CommonUtils.traverseNodes(this.node, this.m_ui);

		this.m_ui.btn_close.on("click", function(){
			SceneManager.turn2Scene("LobbyScene");
		}, this);
		
		this.m_ui.btn_help.on("click", function(){
			var childs = this.m_ui.chiplayer.children
			var len = childs.length;
			for(var i=len-1; i>=0; i--){
				childs[i].removeFromParent(false);
				this._pool.delObject(childs[i]);
			}
		}, this);

		this.m_ui.area1.on("click", function(){ this.bet(1); }, this);
		this.m_ui.area2.on("click", function(){ this.bet(2); }, this);
		this.m_ui.area3.on("click", function(){ this.bet(3); }, this);
		this.m_ui.area4.on("click", function(){ this.bet(4); }, this);
		
		var rule = [1,3,5,300,800];
		var compBox = this.m_ui.ChipBox.getComponent("ChipBox");
		compBox.getComponent("ChipBox").setChipValues(rule);
		this.compBox = compBox;
	}

	onDestroy(){
		super.onDestroy();
		this._pool.clear();
	}

}
