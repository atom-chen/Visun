import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import GameManager from "../../../../../common/script/model/GameManager";
import GameConfig from "../../../../../common/script/definer/GameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {
    private roomList = null;
    private _gameKind = 0;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);
        
        for(var i=1; i<=4; i++) {
            var btn = this.m_ui["button"+i];
            var oldPos = btn.position;
            btn.y = -1000;
            btn.runAction(cc.moveTo(0.15, oldPos));
        }

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);
    }

    setViewData(gameKind:any) {
        this._gameKind = gameKind;
        this.m_lab.lab_roomname.string = GameConfig[gameKind].name;

   //     EventCenter.getInstance().listen(configure_msgs.RoomListResp, this.onRoomListResp, this, IS_DANJI_MODE);
    //    configure_request.RoomListReq({GameKind:gameKind});
    }

    private initRoomBtns(){
        for(var i=1; i<=4; i++) {
            var btn = this.m_ui["button"+i];
            btn["roomInfo"] = this.roomList[i-1];
            CommonUtil.addClickEvent(btn, function(){
                GameManager.getInstance().enterGame(this.roomInfo.GameType);
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

}
