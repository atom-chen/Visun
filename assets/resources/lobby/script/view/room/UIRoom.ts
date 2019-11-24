import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import { configure_request, configure_msgs } from "../../../../../common/script/proto/net_configure";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameManager from "../../../../../common/script/model/GameManager";
import { IS_DANJI_MODE } from "../../../../../common/script/definer/ConstDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {
    private roomList = null;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);
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

    reflesh(data:any) {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        EventCenter.getInstance().listen(configure_msgs.RoomListResp, (param)=>{
            var rooms = GameManager.getInstance().getRoomList(data);
            if(rooms!==null && rooms!==undefined){
                this.roomList = rooms;
                for(var i=1; i<=4; i++){
                    this.m_ui["Label"+i].getComponent(cc.Label).string = rooms[i-1] && rooms[i-1].Name+rooms[i-1].GameType;
                }
                this.initRoomBtns();
            }
        }, this, IS_DANJI_MODE);

        configure_request.RoomListReq({GameKind:data});
    }

}
