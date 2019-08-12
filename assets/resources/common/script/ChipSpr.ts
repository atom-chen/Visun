import CommonUtils from "../../../script/kernel/utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipSpr extends cc.Component {
    _value: number = 1;

    set value(v:number) {
        this._value = v;
        cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, this.onResLoaded.bind(this));
    }

    onResLoaded(err, atlas){
        if(err) { cc.log("error: "+err); return; }
        var name = CommonUtils.getFrameName("common/imgs/chip/chip_"+this._value);
        this.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name);
    }

    get value() : number {
        return this._value;
    }

    reuse() {

    }

    unuse() {

    }
}
