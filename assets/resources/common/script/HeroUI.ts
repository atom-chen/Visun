import User from "../../lobby/script/model/User";
import BaseComp from "../../../script/kernel/gui/BaseComp";
import CommonUtils from "../../../script/kernel/utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroUI extends BaseComp {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_id: cc.Label = null;

    public userId:number = 0;

    onLoad () {
        CommonUtils.addClickEvent(this.node, function(){ cc.log("click hero head"); }, this);
    }

    public setUserInfo(userObj:User) {
        this.userId = userObj.userId;
        this.label_name.string = userObj.nickname + " | 金币：" + userObj.coin;
        this.label_id.string = userObj.userId.toString();
    }
}
