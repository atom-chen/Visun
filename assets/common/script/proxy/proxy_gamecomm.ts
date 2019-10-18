import { gamecomm_msgs } from "../proto/net_gamecomm";

//---------------------------------
// gamecomm响应句柄
//---------------------------------

var proxy_gamecomm = {

    [gamecomm_msgs.PlayerInfo] : function(param: any) {

    },

}

export default proxy_gamecomm;
