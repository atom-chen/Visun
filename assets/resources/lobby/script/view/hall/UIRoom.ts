import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import GameManager from "../../../../../common/script/model/GameManager";
import GameConfig from "../../../../../common/script/definer/GameConfig";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import { IS_DANJI_MODE, GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import UIManager from "../../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {
    private roomList = null;
    private _gameKind = 0;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);

        this.runEnterAni();
    }

    setViewData(gameKind:any) {
        this._gameKind = gameKind;
        this.m_lab.lab_roomname.string = GameConfig[gameKind].name;
        cc.log("UIRoom: ", gameKind);
   //     EventCenter.getInstance().listen(configure_msgs.RoomListResp, this.onRoomListResp, this, IS_DANJI_MODE);
    //    configure_request.RoomListReq({GameKind:gameKind});
        this.initRoomBtns();
    }

    private initRoomBtns(){
        var gameId = this._gameKind;
        for(var i=1; i<=4; i++) {
            var btn = this.m_ui["button"+i];
            btn["roomInfo"] = this.roomList && this.roomList[i-1];
            CommonUtil.addClickEvent(btn, function(){
                if(isNil(this.roomInfo)) {
                    if(IS_DANJI_MODE) {
                        this.roomInfo = GameConfig[gameId];
                    } else {
                        UIManager.toast("数据刷新中，请稍后重试");
                        return;
                    }
                }
                GameManager.getInstance().enterGame(this.roomInfo.GameKind);
            }, btn)
        }
    }

    private onRoomListResp(param) {
        var rooms = GameManager.getInstance().getRoomList(this._gameKind);
        if(rooms!==null && rooms!==undefined){
            this.roomList = rooms;
            for(var i=1; i<=4; i++){
                this.m_lab["Label"+i].string = rooms[i-1] && rooms[i-1].GameType;
            }
            this.initRoomBtns();
        }
    }

    runEnterAni() {
        for(var i=1; i<=4; i++) {
            var btn = this.m_ui["button"+i];
            var oldPos = btn.position;
            btn.y = -1000;
            btn.runAction(cc.moveTo(0.15, cc.v2(oldPos.x, oldPos.y)));
        }
    }

}
