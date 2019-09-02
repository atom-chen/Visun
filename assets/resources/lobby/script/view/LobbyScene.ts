import UIManager from "../../../../kernel/view/UIManager";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import AudioManager from "../../../../kernel/audio/AudioManager";
import CommonUIDefine from "../../../../common/script/definer/CommonUIDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComponent {

    onLoad () {
        UIManager.openPanel(CommonUIDefine.LobbyUI.path, null);
    }

    start () {
        AudioManager.instance().playMusicSync("lobby/music/denglu", true);
    }

    // update (dt) {}
}
