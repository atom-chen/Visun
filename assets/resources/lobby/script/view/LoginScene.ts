import BaseComponent from "../../../../kernel/view/BaseComponent";
import UIManager from "../../../../kernel/view/UIManager";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import LoginMgr from "../../../../common/script/model/LoginMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginScene extends BaseComponent {

    onLoad() {
        UIManager.openPanel(ViewDefine.UILogin, null);
        LoginMgr.getInstance().connectServer();
        LoginMgr.getInstance().quickLogin();
    }

}
