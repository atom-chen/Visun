//---------------------------------
// baccarat响应句柄
//---------------------------------
import { baccarat_msgs } from "../../../../common/script/proto/net_baccarat"

var proxy_baccarat = {

    [baccarat_msgs.GameBaccaratEnter] : function(param: any) {

    },

    [baccarat_msgs.GameBaccaratHost] : function(param: any) {

    },

    [baccarat_msgs.GameBaccaratSuperHost] : function(param: any) {

    },

    [baccarat_msgs.GameBaccaratBet] : function(param: any) {

    },

    [baccarat_msgs.GameBaccaratBetResult] : function(param: any) {

    },

    [baccarat_msgs.GameBaccaratOver] : function(param: any) {

    },

}

export default proxy_baccarat;
