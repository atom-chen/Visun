import { gamecomm } from "../../../../../declares/gamecomm";
import GameConfig from "../../../../common/script/definer/GameConfig";
import GameManager from "../../../../common/script/model/GameManager";
import { gamecomm_msgs, gamecomm_request } from "../../../../common/script/proto/net_gamecomm";
import GameUtil from "../../../../common/script/utils/GameUtil";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGameRecord2 extends BaseComponent {

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

        EventCenter.getInstance().listen(gamecomm_msgs.GetInningsInfoResp, this.refleshList, this);

        this.refleshTabs();
    }

    private refleshTabs() {
        var gamelist = GameManager.getInstance().getGameList();
        if(isNil(gamelist) || gamelist.length <= 0) {
            return;
        }
        var allbtns = [];
        for(var i=0; i<gamelist.length; i++) {
            var item = this.m_ui.tab_btn;
            if(i != 0) {
                item = cc.instantiate(this.m_ui.tab_btn);
                this.m_ui.contentLeft.addChild(item);
            }
            var cfg = GameConfig[gamelist[i].Info.KindID];
            item.getChildByName("labGameName").getComponent(cc.Label).string = cfg && cfg.name || gamelist[i].Info.Name;
            item["gameData"] = gamelist[i];
            CommonUtil.addClickEvent(item, function(){
                gamecomm_request.GetInningsInfoReq({GameID:this.gameData.ID});
                for(var j in allbtns) {
                    allbtns[j].getChildByName("tab1_sel").active = allbtns[j]===this;
                    allbtns[j].getChildByName("tab1_unsel").active = allbtns[j]!==this;
                }
            }, item);
            allbtns.push(item);
            allbtns[i].getChildByName("tab1_sel").active = i==0;
            allbtns[i].getChildByName("tab1_unsel").active = i!=0;
        }
        gamecomm_request.GetInningsInfoReq({GameID:gamelist[0].ID});
    }

    private refleshList(param:gamecomm.IGetInningsInfoResp) {
        this.m_ui.content.removeAllChildren(true);
        if(isNil(param)) { return; }
        var info = param.Innings;
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
            }
        }
    }

}
