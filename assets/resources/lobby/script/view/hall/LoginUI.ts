import BaseComp from "../../../../../script/launcher/view/BaseComp";
import UIManager from "../../../../../script/kernel/manager/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginUI extends BaseComp {

    @property(cc.Button)
    btn_login: cc.Button = null;

    @property(cc.Button)
    btn_youke: cc.Button = null;

    @property(cc.Button)
    btn_regist: cc.Button = null;

    start () {
        this.btn_login.node.on("click", function(){
			
        }, this);
        this.btn_youke.node.on("click", function(){
			
        }, this);
        this.btn_regist.node.on("click", function(){
			
        }, this);
    }

}
