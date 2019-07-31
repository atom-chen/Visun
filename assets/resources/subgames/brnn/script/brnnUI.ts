import BaseComp from "../../../../script/launcher/view/BaseComp";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";
import GameUtil from "../../../lobby/script/utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComp {

	@property(cc.Button)
	btn_close: cc.Button = null;
	@property(cc.Button)
	btn_help: cc.Button = null;
	@property(cc.Prefab)
	chip_box: cc.Prefab = null;

	chipBox:any = null;
	all_nodes = {};

	private bet(areaId:number) {
		var self = this;
		var rule = [1,3,5,300,800];
		var margin = { left:5,right:5,bottom:40,top:5 };
		var idx = self.chipBox.getSelectedIndex();
		
		cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, function (err, atlas) {
			if(err) { cc.log("error: "+err); return; }
			var name = CommonUtils.getFrameName("common/imgs/chip/chip_"+rule[idx-1]);
			var chip = new cc.Node();
			chip.scale = 0.4
			chip.addComponent(cc.Sprite);
			chip.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
			self.all_nodes["chiplayer"].addChild(chip);
			GameUtil.flyChip2(chip, self.chipBox.getButton(idx), self.all_nodes["area"+areaId], 0.25, margin);
		});
	}

	
	onLoad () {
		var allNodes = {};
		CommonUtils.traverseNodes(this.node, allNodes);
		this.all_nodes = allNodes;

		this.btn_close.node.on("click", function(){
			this.node.destroy();
		}, this);

		allNodes["area1"].on("click", function(){ this.bet(1); }, this);
		allNodes["area2"].on("click", function(){ this.bet(2); }, this);
		allNodes["area3"].on("click", function(){ this.bet(3); }, this);
		allNodes["area4"].on("click", function(){ this.bet(4); }, this);
		
		var rule = [1,3,5,300,800];
		var chipBox = cc.instantiate(this.chip_box);
		chipBox.parent = this.node;
		var compBox = chipBox.getComponent("ChipBox");
		chipBox.getComponent("ChipBox").setChipValues(rule);
		this.chipBox = compBox;
	}

}
