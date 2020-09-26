import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../common/script/model/GameManager";
import AudioManager from "../../../../kernel/audio/AudioManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
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
		var curGame = GameManager.getInstance().getRunningGameData();
		if(isNil(kindId)) {
			kindId = curGame.Info.KindID;
		}
		if(isNil(gameId)) {
			gameId = curGame.ID;
		}
		this.gameKind = kindId;
		this.gameId = gameId;
	}
	
	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_menu, function(){
			this.m_ui.itemBg.active = !this.m_ui.itemBg.active;
			AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_shezhi, function(){
			UIManager.openPopwnd(ViewDefine.UISetting2, true);
			AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_help, function(){
			UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:this.gameKind});
			AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_record, function(){
			UIManager.openPopwnd(ViewDefine.UIGameRecord1, true, {gameId:this.gameId, kindId:this.gameKind});
			AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_feedback, function(){
			UIManager.openPopwnd(ViewDefine.UIKefu, false);
			AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.mnu_back, function(){
			GameManager.getInstance().quitGame();
			AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
	}

}
