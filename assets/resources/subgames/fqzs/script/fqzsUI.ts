import BaseComp from "../../../../Script/launcher/view/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FqzsUI extends BaseComp {

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
    }
    
}
