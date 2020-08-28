//-----------------------------
//玩家组件
//-----------------------------
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import GameUtil from "../../../../common/script/utils/GameUtil";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";


const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPlayer extends BaseComponent {

    private _userId:number = 0;
    private _money:number = 0;
    private _clickCallback:Function = null;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);

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
        this.m_lab.label_name.string = name;
    }

    public setMoney(money:number) {
        this._money = money;
        this.m_lab.label_money.string = money.toString();
    }

    public setMoneyStr(moneyStr:string) {
        this.m_lab.label_money.string = moneyStr;
    }

    public setHeadImg(v:number) {
        GameUtil.setHeadIcon(this.node, v);
    }

    public addMoney(money:number, fromV ?: number) {
        if(isNil(fromV)) { fromV = this._money; }
        var toV = fromV + money;
        this._money = toV;
        var delta = toV - fromV;
        var tic = Math.ceil(delta/128);
        this.m_lab.label_money.string = fromV.toString();
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
