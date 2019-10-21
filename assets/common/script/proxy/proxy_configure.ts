import { configure_msgs } from "../proto/net_configure";
import GameManager from "../model/GameManager";

//---------------------------------
// configure响应句柄
//---------------------------------

var proxy_configure = {

    [configure_msgs.GameInfo] : function(param: any) {

    },

    [configure_msgs.RoomDesc] : function(param: any) {

    },

    [configure_msgs.GameListResp] : function(param: any) {
        GameManager.getInstance().setGameList(param.GameList)
    },

    [configure_msgs.RoomListResp] : function(param: any) {
        GameManager.getInstance().setRoomList(param.GameKind, param.RoomList)
    },

}

export default proxy_configure;
