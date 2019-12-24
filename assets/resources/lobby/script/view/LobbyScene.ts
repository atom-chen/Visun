import UIManager from "../../../../kernel/view/UIManager";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import AudioManager from "../../../../kernel/audio/AudioManager";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import LoginMgr from "../../../../common/script/model/LoginMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComponent {

    onLoad () {
        UIManager.openPanel(ViewDefine.UIHall.path, null);
        LoginMgr.getInstance().connectLeaf();
    }

    start () {
        AudioManager.getInstance().setMusicVolume(0.4);
        AudioManager.getInstance().setEffectsVolume(0.7);
        AudioManager.getInstance().playMusicAsync("lobby/music/denglu", true);
    }

}
