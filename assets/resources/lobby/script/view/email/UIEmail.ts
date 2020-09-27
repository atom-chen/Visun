import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../../kernel/view/BaseComponent";


class EmailInfo {
	Id = 0;
	Title = "邮件"+0;
	Type = "系统邮件";
	State = 0;
	Sender = "系统";
	Timestamp = 0;
	Content = "啊啊啊啊啊啊"+0;
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIEmail extends BaseComponent {
	@property(cc.Prefab)
	ItemEmail: cc.Prefab = null;

	private _email_list:Array<EmailInfo> = [];

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);
		this.refleshTabs();
	}

	refleshTabs() {
		var emailList = this.testData();
		this._email_list = emailList;
		if(isEmpty(emailList)) {
			return;
		}
		var self = this;
		for(var i in emailList) {
			var info = emailList[i];
			var item = cc.instantiate(this.ItemEmail);
			this.m_ui.contentLeft.addChild(item);
			item["_email_id_"] = info.Id;
			item.getChildByName("labEmailTitle").getComponent(cc.Label).string = info.Title;
			item.getChildByName("labEmailType").getComponent(cc.Label).string = info.Type;
			item.getChildByName("labEmailState").getComponent(cc.Label).string = this.stateStr(info.State);
			CommonUtil.addClickEvent(item, function(){
				self.onSelectEmail(this._email_id_);
			}, item);
		}
		this.onSelectEmail(this._email_list[0].Id);
	}

	stateStr(iState:number) : string {
		if(iState == 0) {
			return "未读";
		} else {
			return "已读";
		}
	}

	onSelectEmail(emailId:number) {
		var contNode = this.m_ui.contNode;
		var info = this.findEmailData(emailId);
		contNode.getChildByName("labTitle").getComponent(cc.Label).string = info.Title;
		contNode.getChildByName("labSender").getComponent(cc.Label).string = info.Sender;
		contNode.getChildByName("labTime").getComponent(cc.Label).string = CommonUtil.formatTime(info.Timestamp);
		contNode.getChildByName("rchCont").getComponent(cc.RichText).string = info.Content;
		var childs = this.m_ui.contentLeft.children;
		for(var i in childs) {
			if(childs[i]["_email_id_"] == emailId) {
				childs[i].color = cc.color(255,255,255,255);
			} else {
				childs[i].color = cc.color(111,111,111,255);
			}
		}
	}

	findEmailData(emailId:number) : EmailInfo {
		if(isNil(this._email_list)) {
			return null;
		}
		for(var i in this._email_list) {
			if(this._email_list[i].Id == emailId) {
				return this._email_list[i];
			}
		}
		return null;
	}

	testData() : Array<EmailInfo> {
		var emailList = [];
		for(var i=0; i<10; i++) {
			var email = new EmailInfo;
			email.Id = i;
			email.Title = "邮件"+i;
			email.Type = "系统邮件";
			email.State = 0;
			email.Sender = "系统";
			email.Timestamp = (new Date()).valueOf()/1000+i*15;
			email.Content = "啊啊啊啊啊"+i;
			emailList.push(email);
		}
		return emailList;
	}

}
