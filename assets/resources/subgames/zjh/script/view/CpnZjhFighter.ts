import CommonUtil from "../../../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnZjhFighter extends cc.Component {
    protected m_ui:{[key:string]:cc.Node} = {};
    protected m_lab:{[key:string]:cc.Label} = {};

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);
    }

    

}
