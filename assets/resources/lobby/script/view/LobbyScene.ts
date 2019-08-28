import UIManager from "../../../../kernel/view/UIManager";
import BaseComp from "../../../../kernel/view/BaseComp";
import AudioManager from "../../../../kernel/audio/AudioManager";

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
