import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import { chat_request, chat_msgs } from "../proto/net_chat";
import LoginUser from "../model/LoginUser";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import { isEmpty } from "../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIChat extends BaseComponent {
    @property(cc.EditBox)
    editcont: cc.EditBox = null;

    @property(cc.Prefab)
    ChatItemL: cc.Prefab = null;
    @property(cc.Prefab)
    ChatItemR: cc.Prefab = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        CommonUtil.addClickEvent(this.m_ui.btn_send, function(){
            var cont = this.editcont.string;
            if(isEmpty(cont)) {
                UIManager.toast("请输入聊天内容");
                return;
            }
            chat_request.GroupChat({
                GroupId: 0,
                Content: cont
            });
        }, this);
        
        EventCenter.getInstance().listen(chat_msgs.GroupChatResp, this.GroupChatResp, this);
        EventCenter.getInstance().listen(chat_msgs.PrivateChatResp, this.PrivateChatResp, this);
    }

    GroupChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    PrivateChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    onChatMsg(uid:number, cont:string, name:string, headImg:string) {
        if(isEmpty(name)) {
            name = uid.toString();
        }
        var item = null;
        if(uid==LoginUser.getInstance().UserID){
            item = cc.instantiate(this.ChatItemR);
        } else {
            item = cc.instantiate(this.ChatItemL);
        }
        var labCont = item.getChildByName("Content");
        item.getChildByName("labName").getComponent(cc.Label).string = name;
        labCont.getComponent(cc.RichText).string = cont;
        this.m_ui.content.addChild(item);
        item.height = 8 + labCont.height - labCont.y * labCont.anchorY;
        this.m_ui.scrollview.getComponent(cc.ScrollView).scrollToBottom(0.1);
    }

}
