import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import LocalCache from "../../../../../kernel/localcache/LocalCache";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import LoginMgr from "../../../../../common/script/model/LoginMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UISettor extends BaseComponent {
	start() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

		if(LocalCache.getInstance("pub").read("music", 1)==1){
			this.m_lab.lab_music.string = "开";
		} else {
			this.m_lab.lab_music.string = "关";
		}

		if(LocalCache.getInstance("pub").read("effect", 1)==1){
			this.m_lab.lab_effect.string = "开";
		} else {
			this.m_lab.lab_effect.string = "关";
		}

		CommonUtil.addClickEvent(this.m_ui.btn_music, function(){
			if(LocalCache.getInstance("pub").read("music", 1)==1) {
				LocalCache.getInstance("pub").write("music", 0);
				AudioManager.getInstance().enableMusic(false);
			} else {
				LocalCache.getInstance("pub").read("music", 1);
				AudioManager.getInstance().enableMusic(true);
			}
			if(LocalCache.getInstance("pub").read("music", 1)==1){
				this.m_lab.lab_music.string = "开";
			} else {
				this.m_lab.lab_music.string = "关";
			}
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_effect, function(){
			if(LocalCache.getInstance("pub").read("effect", 1==1)) {
				LocalCache.getInstance("pub").write("effect", 0);
				AudioManager.getInstance().enableEffects(false);
			} else {
				LocalCache.getInstance("pub").write("effect", 1);
				AudioManager.getInstance().enableEffects(true);
			}
			if(LocalCache.getInstance("pub").read("effect", 1)==1){
				this.m_lab.lab_effect.string = "开";
			} else {
				this.m_lab.lab_effect.string = "关";
			}
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_quitlogin, function(){
			LoginMgr.getInstance().logout();
		}, this);
	}
}
