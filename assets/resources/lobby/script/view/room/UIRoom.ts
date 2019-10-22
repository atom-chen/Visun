import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            this.node.destroy();
        }, this);
    }

    reflesh(data:any) {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        if(data!==null && data!==undefined){
            for(var i=1; i<=4; i++){
                this.m_ui["Label"+i].getComponent(cc.Label).string = data[i-1] && data[i-1].Name+data[i-1].GameType
            }
        }
    }

}
