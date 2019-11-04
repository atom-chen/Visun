import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LoginUser from "../model/LoginUser";


const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroUI extends BaseComponent {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_id: cc.Label = null;

    private _userId:number = 0;

    onLoad () {
        CommonUtil.addClickEvent(this.node, function(){ cc.log("click hero head"); }, this);
    }

    public getUserId() : number {
        return this._userId;
    }

    public setUserInfo(userObj:LoginUser) {
        this._userId = userObj.UserId;
        this.label_name.string = userObj.Name + " | 金币：" + userObj.Money;
        this.label_id.string = "ID: " + userObj.UserId;
    }
}
