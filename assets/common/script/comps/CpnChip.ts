import CommonUtil from "../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnChip extends cc.Component {

    _value: number = 1;

    private onResLoaded(err, sf){
        if(err) { cc.log("error: "+err); return; }
        this.getComponent(cc.Sprite).spriteFrame = sf;
    }

    setChipValue(v:number) {
        this._value = v;

        var res = cc.loader.getRes("common/imgs/chips/chouma"+v, cc.SpriteFrame);
        if(res) {
            this.onResLoaded(null, res);
            return;
        }
        cc.loader.loadRes("common/imgs/chips/chouma"+v, cc.SpriteFrame, this.onResLoaded.bind(this));
    }

    getChipValue() : number {
        return this._value;
    }
    
}
