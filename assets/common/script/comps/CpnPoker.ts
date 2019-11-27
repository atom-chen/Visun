import CommonUtil from "../../../kernel/utils/CommonUtil";
import { getPokerValue, getPokerColor } from "../definer/PokerDefine";
import { isEmpty } from "../../../kernel/utils/GlobalFuncs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPoker extends cc.Component {

    private _code:number = 0;
    private _state:boolean = false;
    private _curFace:boolean = true;
    private _originY:number = 0;
    private _selectY:number = 30;


    private onResLoaded(err, atlas){
        if(err) { cc.log("error: "+err); return; }
        var face = 0
        if(this._curFace) { face = this._code; }
        if(face!==0) { face = getPokerValue(face) * 10 + getPokerColor(face) + 1; }
        var name = CommonUtil.getFrameName("common/imgs/poker/poker_"+face);
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
        this.node.setScale(1,1);
        var scale1 = cc.scaleTo(0.2, 0, 1);
        var call1 = cc.callFunc(function(){
            this.setFace(true)
        }, this);
        var scale2 = cc.scaleTo(0.2, 1, 1);
        if(isEmpty(dt)){
            this.node.runAction(cc.sequence(scale1,call1,scale2));
        } else {
            this.node.runAction(cc.sequence(cc.delayTime(dt), scale1, call1, scale2));
        }  
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

}
