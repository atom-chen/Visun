import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroupMember extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
    }

}
