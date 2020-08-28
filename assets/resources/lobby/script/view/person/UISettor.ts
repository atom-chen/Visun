import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import LocalCache from "../../../../../kernel/localcache/LocalCache";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import LoginMgr from "../../../../../common/script/model/LoginMgr";
import GameManager from "../../../../../common/script/model/GameManager";
import { isEmpty } from "../../../../../kernel/utils/GlobalFuncs";

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

		CommonUtil.addClickEvent(this.m_ui.btn_test, function(){
			if(isEmpty(this.m_ui.editTest.getComponent(cc.EditBox).string)) {
				return;
			}
			var gameType = parseInt(this.m_ui.editTest.getComponent(cc.EditBox).string)
			GameManager.getInstance().enterGameScene(gameType)
		}, this);
	}

}
