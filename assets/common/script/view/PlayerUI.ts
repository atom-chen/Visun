import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LoginUser from "../model/LoginUser";


const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerUI extends BaseComponent {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_money: cc.Label = null;

    public _userId:number = 0;

    onLoad () {
        CommonUtil.addClickEvent(this.node, function(){ 
            cc.log("click ", this.userId);
        }, this);
    }

    public setUserId(userId:number) {
        this._userId = userId;
    }

    public getUserId() : number {
        return this._userId;
    }

    public setUserInfo(userObj:LoginUser) {
        this._userId = userObj.UserId;
        this.label_name.string = userObj.Name;
        this.label_money.string = userObj.Money.toString();
    }

}
