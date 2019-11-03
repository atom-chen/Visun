import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import { configure_request, configure_msgs } from "../../../../../common/script/proto/net_configure";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameManager from "../../../../../common/script/model/GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {
    private roomList = null;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            this.node.destroy();
        }, this);
        
        EventCenter.getInstance().listen(configure_msgs.RoomListResp, (data)=>{
            if(data!==null && data!==undefined){
                data = data.RoomList;
                this.roomList = data;
                for(var i=1; i<=4; i++){
                    this.m_ui["Label"+i].getComponent(cc.Label).string = data[i-1] && data[i-1].Name+data[i-1].GameType;
                }
                this.initRoomBtns();
            }
        }, this);
    }

    private initRoomBtns(){
        for(var i=1; i<=4; i++) {
            var btn = this.m_ui["button"+i];
            btn.roomInfo = this.roomList[i-1];
            CommonUtil.addClickEvent(btn, function(){
                GameManager.getInstance().enterGame(this.roomInfo.GameType);
            }, btn)
        }
    }

    reflesh(data:any) {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        configure_request.RoomListReq({GameKind:data});
    }

}
