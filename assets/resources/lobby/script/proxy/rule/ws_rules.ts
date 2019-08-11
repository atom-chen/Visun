var ws_rules = {};

ws_rules["names"] = {
    MSG_HEART_BEAT1 : { cmdId : 10000 },
    MSG_HEART_BEAT2 : { cmdId : 30400 },
    MSG_CENTER_QUIT_LOGIN : { cmdId : 30500 },
    MSG_JOIN_COIN_REQUEST : { cmdId : 20006 },
    MSG_JOIN_COIN_ACK : { cmdId : 20007 },
    MSG_RECONNECT_ENTER_ACK : { cmdId : 2033 },
    MSG_USER_SOLUTION_RESLUT_PUSH : { cmdId : 2047 },
    MSG_USER_LEAVE_ROOM_REQUEST : { cmdId : 2044},
    MSG_USER_LEAVE_ROOM_PUSH : { cmdId : 2045 },
    MSG_GAME_OTHER_BET_ACK : { cmdId : 2013},
    MSG_GAME_ROOM_START_PUSH : { cmdId : 2009 },
    MSG_GAME_ADD_BET_REQ : { cmdId : 2010 },
    MSG_GAME_ADD_BET_ACK : { cmdId : 2011 }
}

ws_rules["cmds"] = {}
for (var ptoname in ws_rules["names"]) {
    var info = ws_rules["names"][ptoname];
    info["ptoname"] = ptoname;
    ws_rules["cmds"][info.cmdId.toString()] = info;
}

export default ws_rules;