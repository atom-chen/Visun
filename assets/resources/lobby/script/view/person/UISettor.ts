import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import LocalCache from "../../../../../kernel/localcache/LocalCache";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import LoginMgr from "../../../../../common/script/model/LoginMgr";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { GameModeEnum } from "../../../../../common/script/definer/ConstDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UISettor extends BaseComponent {
	
	refreshMusic() {
		if(LocalCache.getInstance("pub").read("music", 1)==1){
			this.m_lab.lab_music.string = "开";
			AudioManager.getInstance().enableMusic(true);
		} else {
			this.m_lab.lab_music.string = "关";
			AudioManager.getInstance().enableMusic(false);
		}
	}

	refreshEffect() {
		if(LocalCache.getInstance("pub").read("effect", 1)==1){
			this.m_lab.lab_effect.string = "开";
			AudioManager.getInstance().enableEffects(true);
		} else {
			this.m_lab.lab_effect.string = "关";
			AudioManager.getInstance().enableEffects(false);
		}
	}

	start() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

		this.refreshMusic();
		this.refreshEffect();
		this.refreshModeStr();

		this.initUIEvent();
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_music, function(){
			if(LocalCache.getInstance("pub").read("music", 1)==1) {
				LocalCache.getInstance("pub").write("music", 0);
			} else {
				LocalCache.getInstance("pub").write("music", 1);
			}
			this.refreshMusic();
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_effect, function(){
			if(LocalCache.getInstance("pub").read("effect", 1)==1) {
				LocalCache.getInstance("pub").write("effect", 0);
			} else {
				LocalCache.getInstance("pub").write("effect", 1);
			}
			this.refreshEffect();
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_quitlogin, function(){
			CommonUtil.safeDelete(this);
			LoginMgr.getInstance().logout();
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);

		CommonUtil.addClickEvent(this.m_ui.btn_gamemode, this.resetGameMode, this);
	}

	resetGameMode() {
		var mode = GameUtil.getGameMode() + 1;
		if(mode >= 3) {
			mode = 0;
		}

		GameUtil.setGameMode(mode);

		this.refreshModeStr();
	}

	refreshModeStr() {
		var mode = GameUtil.getGameMode();

		if(mode == GameModeEnum.qipaishi) {
			this.m_ui.lab_gamemode.getComponent(cc.Label).string = "棋牌室模式";
		}
		else if(mode == GameModeEnum.ziyunying) {
			this.m_ui.lab_gamemode.getComponent(cc.Label).string = "自运营模式";
		}
		else if(mode == GameModeEnum.guakao) {
			this.m_ui.lab_gamemode.getComponent(cc.Label).string = "代运营模式";
		}
	}

}
