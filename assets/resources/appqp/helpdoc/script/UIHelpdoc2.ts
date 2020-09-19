import GameConfig from "../../../../common/script/definer/GameConfig";
import HelpDocDefine from "../../../../common/script/definer/HelpDocDefine";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIHelpdoc2 extends BaseComponent {
    private _pageConts:Array<string> = [];

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            CommonUtil.safeDelete(this);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.tab_btn0, function(){ this.selectTab(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.tab_btn1, function(){ this.selectTab(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.tab_btn2, function(){ this.selectTab(2); }, this);

        this.selectTab(0);
    }

    private selectTab(idx) {
        for(var i=0; i<3; i++) {
            this.m_ui["tab_btn"+i].getChildByName("tab1_sel").active = idx == i;
            this.m_ui["tab_btn"+i].getChildByName("tab1_unsel").active = idx != i;
        }
        this.m_ui.lab_cont.getComponent(cc.RichText).string = this._pageConts[idx] || "";
    }

    setViewData(data) {
        var kindId = data.kindId;
        var cfg = GameConfig[kindId];
        var doc = HelpDocDefine[kindId];
        this.m_ui.label_title.getComponent(cc.Label).string = cfg && cfg.name || "";
        if(doc) {
            this._pageConts = [doc.contPx, doc.contRule, doc.contPeilv];
        }
        this.selectTab(0);
    }

}
