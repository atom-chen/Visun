import CommonUtil from "../../../kernel/utils/CommonUtil";
import { getPokerValue, getPokerColor } from "../definer/PokerDefine";
import { isEmpty } from "../../../kernel/utils/GlobalFuncs";

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
        } else {
            cc.loader.loadRes("common/imgs/poker", cc.SpriteAtlas, this.onResLoaded.bind(this));
        }
    }

    setCode(v:number) {
        this._code = v;
        this.refresh();
    }

    getCode() : number {
        return this._code;
    }

    setFace(bFront:boolean) {
        this._curFace = bFront;
        this.refresh();
    }

    playFlip(dt?:number) {
        this.setFace(false);
        var scale1 = cc.scaleTo(0.15, 0, 1);
        var call1 = cc.callFunc(function(){
            this.setFace(true)
        }, this);
        var scale2 = cc.scaleTo(0.15, 1, 1);
        if(isEmpty(dt)){
            this.node.runAction(cc.sequence(scale1,call1,scale2));
        } else {
            this.node.runAction(cc.sequence(cc.delayTime(dt), scale1, call1, scale2));
        }  
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
