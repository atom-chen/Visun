import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import LoginUser from "../../../../common/script/model/LoginUser";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIEnvelopeRecv extends BaseComponent {
    @property(cc.Prefab)
    recvItem: cc.Prefab = null;

    reflesh(param) {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        var info = param.Resp;
        this.m_ui.lab_sender.getComponent(cc.Label).string = param.GroupId + "-" + param.Resp.SenderID;
        var item = cc.instantiate(this.recvItem);
        var tbl:any = {};
        CommonUtil.traverseLabels(item, tbl);
        tbl.lab_name.string = LoginUser.getInstance().Name;
        tbl.lab_time.string = info.StartTimeStamp;
        tbl.lab_money.string = info.Money.toString();
        this.m_ui.content.addChild(item);
    }
    
}
