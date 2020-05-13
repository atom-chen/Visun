import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";
import { chat_request, chat_msgs } from "../../../../common/script/proto/net_chat";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import LoginUser from "../../../../common/script/model/LoginUser";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import ChatMgr from "../../../../common/script/model/ChatMgr";
import UIEnvelopeRecv from "./UIEnvelopeRecv";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIChat extends BaseComponent {
    @property(cc.EditBox)
    editcont: cc.EditBox = null;

    @property(cc.Prefab)
    ChatItemL: cc.Prefab = null;
    @property(cc.Prefab)
    ChatItemR: cc.Prefab = null;

    @property(cc.Prefab)
    ChatRedL: cc.Prefab = null;
    @property(cc.Prefab)
    ChatRedR: cc.Prefab = null;

    @property(cc.Prefab)
    ChatImgL: cc.Prefab = null;
    @property(cc.Prefab)
    ChatImgR: cc.Prefab = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.m_ui.lab_chattarget.getComponent(cc.Label).string = ChatMgr.getInstance().getChatingTarget();
        
        this.initUIEvent();
        EventCenter.getInstance().listen(chat_msgs.PrivateChatResp, this.PrivateChatResp, this);
        EventCenter.getInstance().listen(chat_msgs.GroupChatResp, this.GroupChatResp, this);
        EventCenter.getInstance().listen(chat_msgs.GroupSendRewardResp, this.GroupSendRewardResp, this);
        EventCenter.getInstance().listen(chat_msgs.GroupGetRewardResp, this.GroupGetRewardResp, this);
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_send, function(){
            var cont = this.editcont.string;
            if(isEmpty(cont)) {
                UIManager.toast("请输入聊天内容");
                return;
            }
            var target = ChatMgr.getInstance().getChatGroup();
            if(isNil(target)) {
                UIManager.toast("请选择聊天对象");
                return;
            }
            cont = CommonUtil.stringToUTF8Bytes(cont);
            cc.log(CommonUtil.utf8ArrayToString(cont));
            chat_request.GroupChat({
                Type: 0,
                GroupId: target,
                Content: cont,
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_fhb, function(){
            UIManager.openPopwnd(ViewDefine.UIEnvelopeSend, false, null);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){
            CommonUtil.safeDelete(this);
        }, this);
    }

    GroupGetRewardResp(param) {
        UIManager.openPopwnd(ViewDefine.UIEnvelopeRecv, true, function(wnd){
            wnd.getComponent(UIEnvelopeRecv).reflesh(param);
        });
    }

    GroupChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    PrivateChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    GroupSendRewardResp(param) {
        if(isEmpty(param)) {
            return;
        }
        var info = param.Resp;
        var item = null;
        if(info.SenderID==LoginUser.getInstance().UserID) {
            item = cc.instantiate(this.ChatRedR);
        } else {
            item = cc.instantiate(this.ChatRedL);
        }
        var redbtn = item.getChildByName("enveBg1");
        redbtn._info_ = info;
        redbtn.getChildByName("lab_sender").getComponent(cc.Label).string = info.SenderID;
        CommonUtil.addClickEvent(redbtn, function(){
            chat_request.GroupGetReward({
                GroupId: param.GroupId,
                GetReward: {
                    ID: this._info_.ID
                }
            });
        }, redbtn);
        this.m_ui.content.addChild(item);
    }

    onChatMsg(uid:number, cont:string, name:string, headImg:string) {
        if(isEmpty(name)) {
            name = uid.toString();
        }
        cont = CommonUtil.utf8ArrayToString(cont);
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
