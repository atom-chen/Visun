import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import User from "../model/User";


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

    public setUserInfo(userObj:User) {
        this._userId = userObj.userId;
        this.label_name.string = userObj.nickname;
        this.label_money.string = userObj.coin.toString();
    }

}
