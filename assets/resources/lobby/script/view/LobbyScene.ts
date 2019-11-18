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
        AudioManager.getInstance().playMusicSync("lobby/music/denglu", true);
    }

    // update (dt) {}
}
