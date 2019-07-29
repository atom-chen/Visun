import BaseComp from "../../../../Script/launcher/view/BaseComp";
import CommonUtils from "../../../../Script/kernel/utils/CommonUtils";
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

	
	start () {
		this.btn_close.node.on("click", function(){
			this.node.destroy();
		}, this);
		
		var node = cc.instantiate(this.chip_box);
		node.parent = this.node;
		node.getComponent("ChipBox").setChipValues([1,3,5,300,800]);

		var self = this;

		cc.loader.loadRes("lobby/imgs/poker/chip", cc.SpriteAtlas, function (err, atlas) {
			if(err) { cc.log("error: "+err); return; }
			self.schedule(function() {
				var name = CommonUtils.getFrameName("lobby/imgs/poker/chip/chip_"+1);
				var chip = new cc.Node();
				chip.scale = 0.4
				chip.addComponent(cc.Sprite);
				chip.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
				self.node.addChild(chip, 3);
				GameUtil.flyChip(chip, cc.v2(0,-300), cc.v2(120,0), 0.2);
			}, 0.1, 1000, 0.2);
		});
	}

}
