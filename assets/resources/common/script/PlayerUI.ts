import User from "../../lobby/script/model/User";
import BaseComp from "../../../script/kernel/gui/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerUI extends BaseComp {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_money: cc.Label = null;

    public _userId:number = 0;

    onLoad () {
        this.node.on("click", function(){
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
