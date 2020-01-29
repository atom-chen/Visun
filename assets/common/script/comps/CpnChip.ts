//-----------------------------
//筹码组件
//-----------------------------
import GameUtil from "../utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnChip extends cc.Component {

    _value: number = 1;

    private onResLoaded(err, sf){
        if(err) { cc.warn("error: "+err); return; }
        if(cc.isValid(this)) {
            this.getComponent(cc.Sprite).spriteFrame = sf;
        }
    }

    setChipValue(v:number, b3d:boolean) {
        this._value = v;

        var res = cc.loader.getRes(GameUtil.chipPath(v, b3d), cc.SpriteFrame);
        if(res) {
            this.onResLoaded(null, res);
            return;
        }
        cc.loader.loadRes(GameUtil.chipPath(v, b3d), cc.SpriteFrame, this.onResLoaded.bind(this));
    }

    getChipValue() : number {
        return this._value;
    }
    
}
