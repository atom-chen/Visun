import UIManager from "../../../../script/kernel/gui/UIManager";
import BaseComp from "../../../../script/kernel/gui/BaseComp";
import AudioManager from "../../../../script/kernel/audio/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComp {

    onLoad () {
        UIManager.openPanel("lobby/prefabs/LobbyUI", null);
    }

    start () {
        AudioManager.instance().playMusicSync("lobby/music/denglu", true);
    }

    // update (dt) {}
}
