//---------------------------------
// 确认框
//---------------------------------
import BaseComponent from "../../kernel/view/BaseComponent";
import CommonUtil from "../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmDlg extends BaseComponent {

	private _callback:Function = null;

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_ok, function(){ 
            this._callback(1);
			CommonUtil.safeDelete(this);
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_no, function(){ 
            this._callback(0);
			CommonUtil.safeDelete(this);
		}, this);
	}

	
	public reflesh(callback:(menuId:number)=>void, content:string, title:string|null=null, okTxt:string|null=null, cancelTxt:string|null=null, hasCancel:boolean=true) 
	{
		this._callback = callback;
		this.m_ui.labelContent.getComponent(cc.Label).string = content;
		if(title){ this.m_ui.labelTitle.getComponent(cc.Label).string = title; }
		if(!hasCancel) {
			this.m_ui.btn_no.active = false;
			this.m_ui.btn_ok.x = 0;
		}
	}
}
