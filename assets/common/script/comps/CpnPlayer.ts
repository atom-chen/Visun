import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPlayer extends BaseComponent {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_money: cc.Label = null;

    private _userId:number = 0;
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
        this.label_money.string = money.toString();
    }

    public setHeadImg(headImg:string) {
        
    }

}
