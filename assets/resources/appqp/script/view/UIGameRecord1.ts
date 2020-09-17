import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGameRecord1 extends BaseComponent {

    @property(cc.Prefab)
    listItem: cc.Prefab = null;

    private _gameType = 0;
    private winColor = cc.color(7,123,38,255);
    private loseColor = cc.color(218,32,32,255);

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);
    }

    private setViewData(gameType:number) {
        this._gameType = gameType;

        var info = [];
        for(var n=0; n<20; n++) {
            var data = {
                Code: "wsfdwp35293egiyzaqp432d2",
                Room: "高级房",
                Money: (CommonUtil.getRandomInt(1,100)-50.5) * 100,
                EndTime: (new Date()).valueOf() / 1000 + n
            }
            info.push(data);
        }
        this.refleshList(info);
    }

    private refleshList(info:Array<any>) {
        this.m_ui.content.removeAllChildren(true);
        var len = info.length;
        var Order = 0;
        for(var i=len-1; i>=0; i--) {
            var item = item = cc.instantiate(this.listItem);
            this.m_ui.content.addChild(item);
            Order++;
            item.getChildByName("lab_no").getComponent(cc.Label).string = ""+Order;
            item.getChildByName("lab_code").getComponent(cc.Label).string = info[i].Code;
            item.getChildByName("lab_room").getComponent(cc.Label).string = info[i].Room;
            item.getChildByName("lab_win").getComponent(cc.Label).string = info[i].Money;
            item.getChildByName("lab_time").getComponent(cc.Label).string = CommonUtil.formatTime(info[i].EndTime);
            if(info[i].Money >= 0) {
                item.getChildByName("lab_win").color = this.winColor;
            }
        }
    }

}
