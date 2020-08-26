import UIManager from "../../../../kernel/view/UIManager";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import AudioManager from "../../../../kernel/audio/AudioManager";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import LoginMgr from "../../../../common/script/model/LoginMgr";
import LocalCache from "../../../../kernel/localcache/LocalCache";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComponent {

    onLoad () {
        UIManager.openPanel(ViewDefine.UILobby, null);
        LoginMgr.getInstance().connectServer();
        LoginMgr.getInstance().checkLogin(true);
        LoginMgr.getInstance().quickLogin();
    }

    start () {
        AudioManager.getInstance().setMusicVolume(0.4);
        AudioManager.getInstance().setEffectsVolume(0.7);
        
        AudioManager.getInstance().enableMusic(LocalCache.getInstance("pub").read("music", 1)==1);
        AudioManager.getInstance().enableEffects(LocalCache.getInstance("pub").read("effect", 1)==1);

        AudioManager.getInstance().playMusicAsync("lobby/music/denglu", true);
    }

}
