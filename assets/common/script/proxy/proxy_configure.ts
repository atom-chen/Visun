import { configure_msgs } from "../proto/net_configure";

//---------------------------------
// configure响应句柄
//---------------------------------

var proxy_configure = {

    [configure_msgs.GameInfo] : function(param: any) {

    },

    [configure_msgs.RoomDesc] : function(param: any) {

    },

    [configure_msgs.GameListResp] : function(param: any) {

    },

    [configure_msgs.RoomListResp] : function(param: any) {

    },

}

export default proxy_configure;
