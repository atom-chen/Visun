import { gamecomm } from "../../../../../declares/gamecomm";
import { gamecomm_msgs, gamecomm_request } from "../../../../common/script/proto/net_gamecomm";
import GameUtil from "../../../../common/script/utils/GameUtil";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGameRecord1 extends BaseComponent {

    @property(cc.Prefab)
    listItem: cc.Prefab = null;

    private winColor = cc.color(7,123,38,255);
    private loseColor = cc.color(218,32,32,255);

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);

        EventCenter.getInstance().listen(gamecomm_msgs.GetInningsInfoResp, this.refleshList, this);
    }

    private setViewData(info) {
        if(isEmpty(info.gameId)) {
            return;
        }
        gamecomm_request.GetInningsInfoReq({GameID:info.gameId});
    }

    private refleshList(param:gamecomm.IGetInningsInfoResp) {
        if(isNil(param)) { return; }
        var info = param.Innings;
        this.m_ui.content.removeAllChildren(true);
        var len = info.length;
        var Order = 0;
        for(var i=len-1; i>=0; i--) {
            var item = item = cc.instantiate(this.listItem);
            this.m_ui.content.addChild(item);
            Order++;
            var data = info[i];
            item.getChildByName("lab_no").getComponent(cc.Label).string = ""+Order;
            item.getChildByName("lab_code").getComponent(cc.Label).string = data.Number;
            item.getChildByName("lab_room").getComponent(cc.Label).string = GameUtil.roomNameByLevel(data.Level);
            item.getChildByName("lab_win").getComponent(cc.Label).string = CommonUtil.formRealMoney(data.Payoff);
            item.getChildByName("lab_time").getComponent(cc.Label).string = CommonUtil.formatTime(data.TimeStamp);
            if(data.Payoff >= 0) {
                item.getChildByName("lab_win").color = this.winColor;
            } else {
                item.getChildByName("lab_win").color = this.loseColor;
            }
        }
    }

}
