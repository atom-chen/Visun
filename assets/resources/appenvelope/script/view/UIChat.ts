import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";
import { chat_request, chat_msgs } from "../../../../common/script/proto/net_chat";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import LoginUser from "../../../../common/script/model/LoginUser";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import { luck_msgs, luck_request } from "../../../../common/script/proto/net_luck";
import ChatMgr from "../../../../common/script/model/ChatMgr";


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

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.m_ui.lab_chattarget.getComponent(cc.Label).string = ChatMgr.getInstance().getChatingTarget();
        
        this.initUIEvent();
        
        EventCenter.getInstance().listen(chat_msgs.GroupChatResp, this.GroupChatResp, this);
        EventCenter.getInstance().listen(chat_msgs.PrivateChatResp, this.PrivateChatResp, this);
        EventCenter.getInstance().listen(chat_msgs.GroupSendRewardResp, this.GroupSendRewardResp, this);
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
    }

    GroupChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    PrivateChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    // message GroupSendRewardResp{
    //     uint64 GroupId = 1;
    //     SendRewardResp  Resp = 2;
    // }
    // message SendRewardResp {
    //     int32 ID = 1;
    //     int32 Type = 2; //发红包类型 0:固定 1:随机
    //     int64 Count = 3; //个数
    //     int64 Money = 4; //总金额(分)
    //     int64 TimeStamp = 5;//发红包时间
    //     uint64 SenderID = 6;//发送者
    //     int64 StartTimeStamp = 7;//起始时间
    //     int64 WaitTime = 8;//最长等待时间
    // }
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
