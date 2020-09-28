import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIxlch extends BaseComponent {

    start() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initNetEvent();
        this.initUIEvent();
    }

    initNetEvent() {

    }

    initUIEvent() {

    }

}
