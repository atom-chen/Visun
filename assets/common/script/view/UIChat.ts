import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import { chat_request } from "../proto/net_chat";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIChat extends BaseComponent {
    @property(cc.EditBox)
    editcont: cc.EditBox = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        CommonUtil.addClickEvent(this.m_ui.btn_send, function(){
            var cont = this.editcont.string;
            chat_request.GroupChat({
                GroupId: 0,
                Content: cont
            });
		}, this);
    }

}
