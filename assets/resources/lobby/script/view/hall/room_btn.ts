import CommonUtil from "../../../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class room_btn extends cc.Component {

    start () {

    }

    setRoomInfo(info:any) {
        var m_ui:any = {};
        CommonUtil.traverseNodes(this.node, m_ui);
        m_ui.lab_roomname.getComponent(cc.Label).string = info.RoomName;
        m_ui.lab_roomnum.getComponent(cc.Label).string = info.RoomNum;
        m_ui.lab_roomkey.getComponent(cc.Label).string = info.RoomKey;
    }

}
