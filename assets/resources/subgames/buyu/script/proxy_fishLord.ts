//---------------------------------
// fishLord响应句柄
//---------------------------------
import { fishlord_msgs } from "../../../../common/script/proto/net_fishLord"

var proxy_fishlord = {

    [fishlord_msgs.GameFishLordEnter] : function(param: any) {

    },

    [fishlord_msgs.GameFishLordPlaying] : function(param: any) {

    },

    [fishlord_msgs.GameFishLordBetResult] : function(param: any) {

    },

    [fishlord_msgs.GameFishLordOver] : function(param: any) {

    },

}

export default proxy_fishlord;
