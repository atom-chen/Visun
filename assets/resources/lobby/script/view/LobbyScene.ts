import UIManager from "../../../../kernel/view/UIManager";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import AudioManager from "../../../../kernel/audio/AudioManager";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import LogicCenter from "../../../../common/script/model/LogicCenter";
import { login_request } from "../../../../common/script/proto/net_login";
import LoginMgr from "../../../../common/script/model/LoginMgr";
import { configure_request } from "../../../../common/script/proto/net_configure";
import { gamecomm_request } from "../../../../common/script/proto/net_gamecomm";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComponent {

    onLoad () {
        LogicCenter.getInstance().init();
        UIManager.openPanel(ViewDefine.LobbyUI.path, null);

        LoginMgr.getInstance().connectLeaf();
        configure_request.GameListReq(null);
        configure_request.RoomListReq({GameKind:1000});
        gamecomm_request.ReqEnterGame({GameType:1001})
    }

    start () {
        AudioManager.getInstance().playMusicSync("lobby/music/denglu", true);
    }

    // update (dt) {}
}
