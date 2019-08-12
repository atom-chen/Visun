import GameUtil from "../../../lobby/script/utils/GameUtil";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";
import BaseComp from "../../../../script/kernel/gui/BaseComp";
import SceneManager from "../../../../script/kernel/gui/SceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComp {

	@property(cc.Button)
	btn_close: cc.Button = null;
	@property(cc.Button)
	btn_help: cc.Button = null;

	compBox:any = null;
	m_ui:any;

	private bet(areaId:number) {
		var self = this;
		var rule = [1,3,5,300,800];
		var margin = { left:5,right:5,bottom:40,top:5 };
		var idx = self.compBox.getSelectedIndex();
		
		cc.loader.loadRes("common/prefabs/ChipSpr", cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			var chip = cc.instantiate(loadedRes);
			chip.scale = 0.4;
			chip.getComponent("ChipSpr").value = rule[idx-1];
			self.m_ui["chiplayer"].addChild(chip);
			GameUtil.flyChip2(chip, self.compBox.getButton(idx), self.m_ui["area"+areaId], 0.25, margin);
		});
	}

	
	onLoad () {
		this.m_ui = {};
		CommonUtils.traverseNodes(this.node, this.m_ui);

		this.btn_close.node.on("click", function(){
			SceneManager.turn2Scene("LobbyScene");
		}, this);

		this.m_ui["area1"].on("click", function(){ this.bet(1); }, this);
		this.m_ui["area2"].on("click", function(){ this.bet(2); }, this);
		this.m_ui["area3"].on("click", function(){ this.bet(3); }, this);
		this.m_ui["area4"].on("click", function(){ this.bet(4); }, this);
		
		var rule = [1,3,5,300,800];
		var compBox = this.m_ui.ChipBox.getComponent("ChipBox");
		compBox.getComponent("ChipBox").setChipValues(rule);
		this.compBox = compBox;
	}

}
