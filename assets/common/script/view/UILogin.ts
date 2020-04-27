import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LoginMgr from "../model/LoginMgr";
import EventCenter from '../../../kernel/basic/event/EventCenter';
import { login_msgs } from "../proto/net_login";


const {ccclass, property} = cc._decorator;

class b {
    aaaassss(){}
}

@ccclass
export default class LoginUI extends BaseComponent {
    @property(cc.EditBox)
    editName: cc.EditBox = null;
    @property(cc.EditBox)
    editPswd: cc.EditBox = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvent();
        this.initNetEvent();
    }

    aaaaaaa(a, b, c) {
        cc.log("============", a, b, c)
    }

    private initNetEvent() {
        
        EventCenter.getInstance().listen("aaaa", this.aaaaaaa, this);

        EventCenter.getInstance().fire("aaaa", 1, "dddd");

        EventCenter.getInstance().listen(login_msgs.MasterInfo, (param:any, a:number)=>{
            CommonUtil.safeDelete(this);
        }, this);
    }

    private initUIEvent() {
        //关闭按钮
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){
            CommonUtil.safeDelete(this);
        }, this);
        //登陆按钮
        CommonUtil.addClickEvent(this.m_ui.btn_login, function(){
            var name = this.editName.string;
            var pswd = this.editPswd.string;
            LoginMgr.getInstance().leafLogin(name, pswd);
        }, this);
        //游客登陆按钮
        CommonUtil.addClickEvent(this.m_ui.btn_youke, function(){
            var name = this.editName.string;
            var pswd = this.editPswd.string;
            LoginMgr.getInstance().leafLogin(name, pswd);
        }, this);
        //注册按钮
        CommonUtil.addClickEvent(this.m_ui.btn_regist, function(){
            var name = this.editName.string;
            var pswd = this.editPswd.string;
            LoginMgr.getInstance().leafRegist(name, pswd, "ssss");
        }, this);
    }

}
