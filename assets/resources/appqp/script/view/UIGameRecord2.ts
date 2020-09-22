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
    private allData = {};

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
        var self = this;
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
                for(var j in allbtns) {
                    allbtns[j].getChildByName("tab1_sel").active = allbtns[j]===this;
                    allbtns[j].getChildByName("tab1_unsel").active = allbtns[j]!==this;
                }
                if(self.allData[this.gameData.ID]) {
                    self.refleshList(self.allData[this.gameData.ID]);
                } else {
                    gamecomm_request.GetInningsInfoReq({GameID:this.gameData.ID});
                }
            }, item);
            allbtns.push(item);
            allbtns[i].getChildByName("tab1_sel").active = i==0;
            allbtns[i].getChildByName("tab1_unsel").active = i!=0;
        }
        gamecomm_request.GetInningsInfoReq({GameID:gamelist[0].ID});
    }

    private refleshList(param:gamecomm.IGetInningsInfoResp) {
        var childs = this.m_ui.content.children;
        for(var n=childs.length-1; n>=0; n--) {
            childs[n].active = false;
        }

        if(isNil(param)) { return; }
        if(param["GameId"]) {
            this.allData[param["GameId"]] = param;
        }
        var info = param.Innings;
        var len = info.length;
        var Order = 0;
        for(var i=len-1; i>=0; i--) {
            var item = childs[len-i-1];
            if(item) {
                item.active = true;
            } else {
                item = cc.instantiate(this.listItem);
                this.m_ui.content.addChild(item);
            }
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
