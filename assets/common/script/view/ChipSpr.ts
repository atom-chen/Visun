import CommonUtil from "../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../kernel/view/BaseComponent";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipSpr extends BaseComponent {
    _value: number = 1;

    onResLoaded(err, atlas){
        if(err) { cc.log("error: "+err); return; }
        var name = CommonUtil.getFrameName("common/imgs/chip/chip_"+this._value);
        this.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name);
    }

    set value(v:number) {
        this._value = v;
        cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, this.onResLoaded.bind(this));
    }

    get value() : number {
        return this._value;
    }
}
