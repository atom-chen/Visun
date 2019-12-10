import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIbjle extends BaseComponent {
	_players : any[] = [];

	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		this.initUIEvents();
	}

	private findPlayer(userId) {
		for(var i=0, len=this._players.length; i<len; i++) {
			if(this._players[i].getUserId()==userId) {
				return this._players[i];
			}
		}
		return null;
	}

	private bet(userId:number, areaId:number, money:number) {
		
	}
	
	private initUIEvents() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_he, function(){ 
			cc.log("和");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_xian, function(){ 
            cc.log("闲");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_zhuang, function(){ 
            cc.log("庄");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_xian_dui, function(){ 
            cc.log("闲对");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_zhuang_dui, function(){ 
            cc.log("庄对");
		}, this);
	}
}
