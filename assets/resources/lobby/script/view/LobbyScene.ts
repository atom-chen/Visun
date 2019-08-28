import UIManager from "../../../../kernel/view/UIManager";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import AudioManager from "../../../../kernel/audio/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComponent {

    onLoad () {
        UIManager.openPanel("lobby/prefabs/LobbyUI", null);
    }

    start () {
        AudioManager.instance().playMusicSync("lobby/music/denglu", true);
    }

    // update (dt) {}
}
