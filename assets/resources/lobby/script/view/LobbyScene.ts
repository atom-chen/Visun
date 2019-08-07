import UIManager from "../../../../script/kernel/gui/UIManager";
import BaseComp from "../../../../script/launcher/view/BaseComp";
import PlatformUtil from "../../../../script/launcher/PlatformUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComp {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        PlatformUtil.adaptScreen();
        UIManager.openPanel("lobby/prefabs/LobbyUI", null);
    }

    start () {
        cc.loader.loadRes("lobby/music/denglu", cc.AudioClip, (err, audioclip) => {
            if (err) {
                cc.log("音频加载失败"+err);
                return;
            }
            cc.log("播放音频：", audioclip)
            cc.audioEngine.playMusic(audioclip, true);
        });
    }

    // update (dt) {}
}
