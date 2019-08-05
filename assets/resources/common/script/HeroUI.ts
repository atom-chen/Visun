import BaseComp from "../../../script/launcher/view/BaseComp";
import User from "../../lobby/script/model/User";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroUI extends BaseComp {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_id: cc.Label = null;

    public userId:number = 0;

    onLoad () {
        this.node.on("click", function(){
            cc.log("click ", this.userId);
        }, this);
    }

    public setUserInfo(userObj:User) {
        this.userId = userObj.userId;
        this.label_name.string = userObj.nickname + " | 金币：" + userObj.coin;
        this.label_id.string = userObj.userId.toString();
    }
}
