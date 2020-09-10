import GameConfig from "../../../../common/script/definer/GameConfig";
import HelpDocDefine from "../../../../common/script/definer/HelpDocDefine";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIHelpdoc extends BaseComponent {

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            CommonUtil.safeDelete(this);
		}, this);
    }

    setViewData(data) {
        var kindId = data.kindId;
        var cfg = GameConfig[kindId];
        var doc = HelpDocDefine[kindId];
        this.m_ui.lab_title.getComponent(cc.Label).string = cfg && cfg.name || "";
        this.m_ui.lab_cont.getComponent(cc.RichText).string = doc && doc.cont || "";
    }

}
