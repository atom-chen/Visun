import CommonUtil from "../../../kernel/utils/CommonUtil";
import { getPokerValue, getPokerColor } from "../definer/PokerDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPoker extends cc.Component {

    private _code:number = 0;
    private _state:number = 0;
    private _curFace:boolean = true;


    private onResLoaded(err, atlas){
        if(err) { cc.log("error: "+err); return; }
        var face = 0
        if(this._curFace) { face = this._code; }
        var n = getPokerValue(face) * 10 + getPokerColor(face) + 1;
        var name = CommonUtil.getFrameName("common/imgs/poker/poker_"+n);
        this.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name);
    }

    private refresh() {
        var res = cc.loader.getRes("common/imgs/poker", cc.SpriteAtlas);
        if(res) {
            this.onResLoaded(null, res);
            return;
        }
        cc.loader.loadRes("common/imgs/poker", cc.SpriteAtlas, this.onResLoaded.bind(this));
    }

    setCode(v:number) {
        this._code = v;
        this.refresh();
    }

    getCode() : number {
        return this._code;
    }

    public setFace(bFront:boolean, duradion:number=0) {
        this._curFace = bFront;
        this.refresh();
    }
    

    setState(v:number) {
        this._state = v;
        if(v===0) {
            this.node.color = new cc.Color(255, 255, 255, 255);
        }
        else{
            this.node.color = new cc.Color(5, 255, 5, 255);
        }
    }

    getState() : number {
        return this._state;
    }

    toggleState() : void {
        if(this._state===0) {
            this.setState(1);
        }
        else {
            this.setState(0);
        }
    }

}
