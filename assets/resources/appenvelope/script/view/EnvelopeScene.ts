import UIManager from "../../../../kernel/view/UIManager";
import LoginMgr from "../../../../common/script/model/LoginMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnvelopeScene extends cc.Component {

    onLoad () {
        UIManager.openPanel("appenvelope/prefabs/UIMain", null);
        LoginMgr.getInstance().checkLogin(true);
    }

}
