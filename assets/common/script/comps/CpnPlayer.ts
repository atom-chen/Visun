//-----------------------------
//玩家组件
//-----------------------------
import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import { isNil } from "../../../kernel/utils/GlobalFuncs";
import GameUtil from "../utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPlayer extends BaseComponent {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_money: cc.Label = null;

    private _userId:number = 0;
    private _money:number = 0;
    private _clickCallback:Function = null;

    onLoad () {
        CommonUtil.addClickEvent(this.node, function(){ 
            cc.log("click"); 
            if(this._clickCallback) {
                this._clickCallback();
            }
        }, this);
    }

    public setClickCallback(callback:Function) {
        this._clickCallback = callback;
    }

    public getUserId() : number {
        return this._userId;
    }

    public setUserId(uid:number) {
        this._userId = uid;
    }

    public setName(name:string) {
        this.label_name.string = name;
    }

    public setMoney(money:number) {
        this._money = money;
        this.label_money.string = money.toString();
    }

    public setHeadImg(v:number) {
        GameUtil.setHeadIcon(this.node, v);
    }

    public addMoney(money:number, fromV ?: number, toV ?: number) {
        if(isNil(fromV)) { fromV = this._money; }
        if(isNil(toV)) { toV = fromV + money; }
        this._money = toV;
        var delta = toV - fromV;
        var tic = Math.ceil(delta/128);
        this.label_money.string = fromV.toString();
        var f = function(){
            fromV += tic;
            if(fromV>=this._money){
                fromV = this._money;
            }
            this.label_money.string = fromV.toString();
            if(fromV>=this._money){
                this.unschedule(f);
            }
        }
        this.schedule(f, 0);
    }

}
