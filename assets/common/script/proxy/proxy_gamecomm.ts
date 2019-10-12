import { gamecomm_msgs } from "../proto/net_gamecomm";

//---------------------------------
// gamecomm响应句柄
//---------------------------------

var proxy_gamecomm = {

    [gamecomm_msgs.PlayerInfo] : function(param: any) {

    },

    [gamecomm_msgs.UserList] : function(param: any) {

    },

    [gamecomm_msgs.PlayerRecord] : function(param: any) {

    },

    [gamecomm_msgs.GameReady] : function(param: any) {

    },

    [gamecomm_msgs.GameBet] : function(param: any) {

    },

    [gamecomm_msgs.GameBetResult] : function(param: any) {

    },

    [gamecomm_msgs.GameHost] : function(param: any) {

    },

    [gamecomm_msgs.GameSuperHost] : function(param: any) {

    },

    [gamecomm_msgs.GameRecord] : function(param: any) {

    },

    [gamecomm_msgs.GameRecordList] : function(param: any) {

    },

    [gamecomm_msgs.GameResult] : function(param: any) {

    },

}

export default proxy_gamecomm;
