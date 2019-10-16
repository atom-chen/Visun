import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import LoginMgr from "../../../../../common/script/model/LoginMgr";
import TimerManager from "../../../../../kernel/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/CHandler";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginUI extends BaseComponent {
    @property(cc.EditBox)
    editName: cc.EditBox = null;
    @property(cc.EditBox)
    editPswd: cc.EditBox = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_login, function(){
            var name = this.editName.string;
            var pswd = this.editPswd.string;
            LoginMgr.getInstance().leafLogin(name, pswd);
        }, this);

        CommonUtil.addClickEvent(this.m_ui.btn_youke, function(){
            var name = this.editName.string;
            var pswd = this.editPswd.string;
            LoginMgr.getInstance().leafLogin(name, pswd);
        }, this);

        CommonUtil.addClickEvent(this.m_ui.btn_regist, function(){
            var name = this.editName.string;
            var pswd = this.editPswd.string;
            LoginMgr.getInstance().leafRegist(name, pswd, "ssss");
        }, this);

        TimerManager.addFrameTimer(1, 1000, new CHandler(this, (tmr)=>{
            for(var i=1; i<=1000; i++) {
                LoginMgr.getInstance().leafLogin("sss", "aaa");
            }
        }))
    }

}
