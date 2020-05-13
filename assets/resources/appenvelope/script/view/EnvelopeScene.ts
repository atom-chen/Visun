import UIManager from "../../../../kernel/view/UIManager";
import LoginMgr from "../../../../common/script/model/LoginMgr";
import ViewDefine from "../../../../common/script/definer/ViewDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnvelopeScene extends cc.Component {

    onLoad () {
        UIManager.openPanel(ViewDefine.UIMain, null);
        LoginMgr.getInstance().connectServer();
        LoginMgr.getInstance().checkLogin(true);
    }

}
