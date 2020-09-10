import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import { login_msgs } from "../../../../common/script/proto/net_login";
import LoginMgr from "../../../../common/script/model/LoginMgr";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import { newHandler } from "../../../../kernel/utils/GlobalFuncs";


const {ccclass, property} = cc._decorator;

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
        if(LoginMgr.getInstance().checkLogin(false)) {
            CommonUtil.safeDelete(this);
        }
    }

    private initNetEvent() {
        EventCenter.getInstance().listen(login_msgs.LoginResp, function(data){
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
            LoginMgr.getInstance().leafRegist(name, pswd, "yanzhengma", "yaoqingma");
        }, this);
    }

}
