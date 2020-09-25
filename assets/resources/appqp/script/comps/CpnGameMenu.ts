import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../common/script/model/GameManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
//-----------------------------
//
//-----------------------------
import BaseComponent from "../../../../kernel/view/BaseComponent";
import UIManager from "../../../../kernel/view/UIManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnGameMenu extends BaseComponent {
	private gameKind:GameKindEnum = 0;
	private gameId:number = 0;

    onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		this.m_ui.itemBg.active = false;
		this.initUIEvent();
	}

	setGameInfo(kindId:GameKindEnum, gameId:number) {
		this.gameKind = kindId;
		this.gameId = gameId;
	}
	
	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_menu, function(){
			this.m_ui.itemBg.active = !this.m_ui.itemBg.active;
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_shezhi, function(){
			UIManager.openPopwnd(ViewDefine.UISetting2, true);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_help, function(){
			UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:this.gameKind});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_record, function(){
			UIManager.openPopwnd(ViewDefine.UIGameRecord2, true, {gameId:this.gameId, kindId:this.gameKind});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_feedback, function(){
			UIManager.openPopwnd(ViewDefine.UIKefu, true);
		}, this);
		// CommonUtil.addClickEvent(this.m_ui.mnu_back, function(){
		// 	GameManager.getInstance().quitGame();
		// }, this);
	}

}
