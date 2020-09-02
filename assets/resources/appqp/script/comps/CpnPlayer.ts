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
    private moneyColor:cc.Color;
    private nameColor:cc.Color;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);

        this.moneyColor = this.m_ui.lab_money.color;
        this.nameColor = this.m_ui.lab_name.color;
    }

    public getUserId() : number {
        return this._userId;
    }

    public setUserId(uid:number) {
        this._userId = uid;
    }

    public setName(name:string) {
        this.m_lab.lab_name.string = name;
    }

    public setMoney(money:number) {
        this._money = money;
        this.m_lab.lab_money.string = money.toString();
    }

    public setLabGray(bGray:boolean) {
        if(bGray) {
            var grayC = cc.color(111,111,111,255);
            this.m_ui.lab_money.color = grayC;
            this.m_ui.lab_name.color = grayC;
        } else {
            this.m_ui.lab_money.color = this.moneyColor;
            this.m_ui.lab_name.color = this.nameColor;
        }
    }

    public setMoneyStr(moneyStr:string) {
        this.m_lab.lab_money.string = moneyStr;
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
        this.m_lab.lab_money.string = fromV.toString();
        var f = function(){
            fromV += tic;
            if(fromV>=this._money){
                fromV = this._money;
            }
            this.lab_money.string = fromV.toString();
            if(fromV>=this._money){
                this.unschedule(f);
            }
        }
        this.schedule(f, 0);
    }

}
