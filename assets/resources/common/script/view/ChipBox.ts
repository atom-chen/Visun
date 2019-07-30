import BaseComp from "../../../../script/launcher/view/BaseComp";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipBox extends BaseComp {
    @property(cc.Button)
    chip1: cc.Button = null;
    @property(cc.Button)
    chip2: cc.Button = null;
    @property(cc.Button)
    chip3: cc.Button = null;
    @property(cc.Button)
    chip4: cc.Button = null;
    @property(cc.Button)
    chip5: cc.Button = null;

    public setChipValues(values:number[]) {
        var self = this
        cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, function (err, atlas) {
            if(err) { cc.log("error: "+err); return; }
            for(var i=1; i<=5; i++){
                var name = CommonUtils.getFrameName("common/imgs/chip/chip_"+values[i-1]);
                self["chip"+i].normalSprite = atlas.getSpriteFrame(name);
                self["chip"+i].hoverSprite = atlas.getSpriteFrame(name);
                self["chip"+i].pressedSprite = atlas.getSpriteFrame(name);
                self["chip"+i].disabledSprite = atlas.getSpriteFrame(name);
            }
        });
    }

}
