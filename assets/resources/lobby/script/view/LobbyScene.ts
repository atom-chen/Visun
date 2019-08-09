import UIManager from "../../../../script/kernel/gui/UIManager";
import BaseComp from "../../../../script/kernel/gui/BaseComp";
import PlatformUtil from "../../../../script/kernel/utils/PlatformUtil";
import AudioManager from "../../../../script/kernel/audio/AudioManager";
import TimerManager from "../../../../script/kernel/timer/TimerManager";
import Caller from "../../../../script/kernel/promise/Caller";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComp {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        PlatformUtil.adaptScreen();
        UIManager.openPanel("lobby/prefabs/LobbyUI", null);
        TimerManager.instance().addFrameTimer(1, new Caller(function(){
            cc.log("aaaa");
        }, null) , 10);
    }

    start () {
        AudioManager.instance().playMusicSync("lobby/music/denglu", true);
    }

    // update (dt) {}
}
