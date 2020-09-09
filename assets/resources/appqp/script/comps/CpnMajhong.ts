//-----------------------------
//麻将组件
//-----------------------------
import { MajhongCode } from "../../../../common/script/definer/MajhongDefine";
import GameUtil from "../../../../common/script/utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnMajhong extends cc.Component {

    _value: MajhongCode = 1;
    isFront:boolean = false;

    private onResLoaded(err, sf){
        if(err) { cc.warn("error: "+err); return; }
        if(cc.isValid(this)) {
            this.getComponent(cc.Sprite).spriteFrame = sf;
        }
    }

    private refresh() {
        var res = cc.loader.getRes(GameUtil.majhongPath(this._value), cc.SpriteFrame);
        if(res) {
            this.onResLoaded(null, res);
            return;
        }
        cc.loader.loadRes(GameUtil.majhongPath(this._value), cc.SpriteFrame, this.onResLoaded.bind(this));
    }

    setCode(v:MajhongCode) {
        this._value = v;
    }

    getCode() : number {
        return this._value;
    }

    setFace(bFront:boolean) {
        this.isFront = bFront;
    }

    getFace() : boolean {
        return this.isFront;
    }
    
}
