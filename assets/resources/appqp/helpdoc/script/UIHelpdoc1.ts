import GameConfig from "../../../../common/script/definer/GameConfig";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIHelpdoc1 extends BaseComponent {
    private _pageConts:Array<string> = [];

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            CommonUtil.safeDelete(this);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.tab0, function(){ this.selectTab(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.tab1, function(){ this.selectTab(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.tab2, function(){ this.selectTab(2); }, this);

        this.selectTab(0);
    }

    private selectTab(idx) {
        
    }

    setViewData(data) {
        
    }

}
