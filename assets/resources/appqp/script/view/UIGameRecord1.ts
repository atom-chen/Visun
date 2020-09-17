import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGameRecord1 extends BaseComponent {

    private winColor = cc.color(7,123,38,255);
    private loseColor = cc.color(218,32,32,255);

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);
    }

    private setViewData(info) {
        info = [];
        for(var n=0; n<20; n++) {
            var data = {
                No: n,
                Code: "wsfdwp35293egiyzaqp432d2",
                Room: "高级房",
                Money: (CommonUtil.getRandomInt(1,100)-50.5) * 100,
                EndTime: (new Date()).valueOf()
            }
            info.push(data);
        }

        for(var i in info) {
            var item = cc.instantiate(this.m_ui.listItem);
            this.m_ui.content.addChild(item);
            item.getChildByName("lab_no").getComponent(cc.Label).string = info[i].No;
            item.getChildByName("lab_code").getComponent(cc.Label).string = info[i].Code;
            item.getChildByName("lab_room").getComponent(cc.Label).string = info[i].Room;
            item.getChildByName("lab_win").getComponent(cc.Label).string = info[i].Money;
            if(info[i].Money >= 0) {
                item.getChildByName("lab_win").color = this.winColor;
            }
            item.getChildByName("lab_time").getComponent(cc.Label).string = CommonUtil.formatTime(info[i].EndTime/1000);
        }
    }

}
