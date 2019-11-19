import CommonUtil from "../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnChip extends cc.Component {

    _value: number = 1;

    private onResLoaded(err, atlas){
        if(err) { cc.log("error: "+err); return; }
        var name = CommonUtil.getFrameName("common/imgs/chip/chip_"+this._value);
        this.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name);
    }

    setChipValue(v:number) {
        this._value = v;

        var res = cc.loader.getRes("common/imgs/chip", cc.SpriteAtlas);
        if(res) {
            this.onResLoaded(null, res);
            return;
        }
        cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, this.onResLoaded.bind(this));
    }

    getChipValue() : number {
        return this._value;
    }
    
}
