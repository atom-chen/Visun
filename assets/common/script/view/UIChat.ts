import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import { chat_request } from "../proto/net_chat";
import LoginUser from "../model/LoginUser";

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
            chat_request.GroupChat({
                GroupId: 0,
                Content: cont
            });
            this.onChatMsg(0, cont, "嗷嗷", "");
		}, this);
    }

    onChatMsg(uid:number, cont:string, name:string, headImg:string) {
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
