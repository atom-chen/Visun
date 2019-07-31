import User from "../../lobby/script/model/User";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerUI extends cc.Component {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_money: cc.Label = null;

    public userId:number = 0;

    onLoad () {
        this.node.on("click", function(){
            cc.log("click ", this.userId);
        }, this);
    }

    public setUserInfo(userObj:User) {
        this.userId = userObj.userId;
        this.label_name.string = userObj.nickname;
        this.label_money.string = userObj.coin.toString();
    }

}
