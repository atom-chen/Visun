import GameManager from "../../../../common/script/model/GameManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIk4zqznn extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.initUIEvent();
		this.initNetEvent();
    }

    initNetEvent() {

    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
    }

}
