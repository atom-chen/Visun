import { isEmpty } from "../../../kernel/utils/GlobalFuncs";
import GameUtil from "../utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPoker extends cc.Component {

    private _code:number = 0;
    private _state:boolean = false;
    private _curFace:boolean = true;
    private _originY:number = 0;
    private _selectY:number = 30;
    private _flipAct = null;


    private onResLoaded(err, sf){
        if(err) { cc.warn("error: "+err); return; }
        if(cc.isValid(this)) {
            this.getComponent(cc.Sprite).spriteFrame = sf;
        }
    }

    private getResPath() {
        var face = 0;
        if(this._curFace) { face = this._code; }
        return GameUtil.pokerPath(face);
    }

    private refresh() {
        var respath = this.getResPath();
        var res = cc.loader.getRes(respath, cc.SpriteFrame);
        if(res) {
            this.onResLoaded(null, res);
        } else {
            cc.loader.loadRes(respath, cc.SpriteFrame, this.onResLoaded.bind(this));
        }
    }

    setCode(v:number, bFront:boolean = true) {
        this._code = v;
        if(bFront) { this.refresh(); }
    }

    getCode() : number {
        return this._code;
    }

    setFace(bFront:boolean) {
        this._curFace = bFront;
        this.refresh();
    }

    getFace() : boolean {
        return this._curFace;
    }

    setSelected(v:boolean) {
        this._state = v;
        if(v) {
            this.node.y = this._selectY;
        //    this.node.color = new cc.Color(5, 255, 5, 255);
        } else {
            this.node.y = this._originY;
        //    this.node.color = new cc.Color(255, 255, 255, 255);
        }
    }

    isSelected() : boolean {
        return this._state;
    }


    playFlip(dt?:number) {
        if(this._flipAct) {
            this.node.stopAction(this._flipAct);
            this._flipAct = null;
        }
        this.setFace(false);
        this.node.setScale(1,1);
        var scale1 = cc.scaleTo(0.2, 0, 1);
        var call1 = cc.callFunc(function(){
            this.setFace(true)
        }, this);
        var scale2 = cc.scaleTo(0.2, 1, 1);
        var call2 = cc.callFunc(function(){
            this._flipAct = null;
        }, this);
        if(isEmpty(dt)){
            this._flipAct = this.node.runAction(cc.sequence(scale1, call1, scale2, call2));
        } else {
            this._flipAct = this.node.runAction(cc.sequence(cc.delayTime(dt), scale1, call1, scale2, call2));
        }  
    }

}
