var ws_rules = {};

ws_rules["names"] = {
    MSG_HEART_BEAT1 : { cmdId : 10000 },    //大厅心跳
    MSG_HEART_BEAT2 : { cmdId : 30400 },    //游戏心跳
    MSG_CENTER_QUIT_LOGIN : { cmdId : 30500 },  //顶号被踢
    MSG_JOIN_COIN_REQUEST : { cmdId : 20006 },  //进入游戏 请求
    MSG_JOIN_COIN_ACK : { cmdId : 20007 },      //进入游戏 响应
    MSG_RECONNECT_ENTER_ACK : { cmdId : 2033 },
    MSG_USER_SOLUTION_RESLUT_PUSH : { cmdId : 2047 },
    MSG_USER_LEAVE_ROOM_REQUEST : { cmdId : 2044},
    MSG_USER_LEAVE_ROOM_PUSH : { cmdId : 2045 },
    MSG_GAME_OTHER_BET_ACK : { cmdId : 2013},
    MSG_GAME_ROOM_START_PUSH : { cmdId : 2009 },
    MSG_GAME_ADD_BET_REQ : { cmdId : 2010 },
    MSG_GAME_ADD_BET_ACK : { cmdId : 2011 },
    MSG_GAME_GAMEEND_ACK : { cmdId : 2015 },
    MSG_GAME_NET_COUNT_DOWN_ACK : { cmdId : 20015 },
    MSG_GAME_GET_OFFSET_PLAYER_ACK : { cmdId : 2020 },
    MSG_GAME_GET_OFFSET_PLAYER_REQ : { cmdId : 2021 }
}

ws_rules["cmds"] = {}
for (var ptoname in ws_rules["names"]) {
    var info = ws_rules["names"][ptoname];
    info["ptoname"] = ptoname;
    ws_rules["cmds"][info.cmdId.toString()] = info;
}

export default ws_rules;