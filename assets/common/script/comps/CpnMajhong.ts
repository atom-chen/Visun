//-----------------------------
//麻将组件
//-----------------------------
import GameUtil from "../utils/GameUtil";
import { MajhongCode } from "../definer/MajhongDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnMajhong extends cc.Component {

    _value: MajhongCode = 1;

    private onResLoaded(err, sf){
        if(err) { cc.warn("error: "+err); return; }
        if(cc.isValid(this)) {
            this.getComponent(cc.Sprite).spriteFrame = sf;
        }
    }

    setCode(v:MajhongCode) {
        this._value = v;

        var res = cc.loader.getRes(GameUtil.majhongPath(v), cc.SpriteFrame);
        if(res) {
            this.onResLoaded(null, res);
            return;
        }
        cc.loader.loadRes(GameUtil.majhongPath(v), cc.SpriteFrame, this.onResLoaded.bind(this));
    }

    getCode() : number {
        return this._value;
    }
    
}
