var RpcDefine = {
	JOIN_ROOM_REQ 		: [30000, "JoinTableRequest"],
	JOIN_ROOM_RES 		: [30001, "JoinTableResponse", 2],
	GET_FROM_GATE		: [30002, "ServerInfo", 2],
	SEND_TO_GATE	    : [30003, "AssignResponse", 2],
}

module.exports = {
	RpcDefine : RpcDefine
};
