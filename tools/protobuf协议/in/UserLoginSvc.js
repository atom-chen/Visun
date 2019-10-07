var RpcDefine = {
	HeartReq 			: [5000, "HeartReq"],
	HeartResp 			: [5001, "HeartResp", 2],
	Msg_SysError		: [5002, "", 2],
	CheckTokenReq	    : [5003, "CheckTokenRequest"],
	MovedGateNot	    : [5004, "MovedGateNotice", 2],
	CheckTokenRes	    : [5005, "CheckTokenResponse", 2],
	AdminKickUser       : [5006, "", 2],
	UserLogInReq 		: [10000, "UserLogInReq"],
	UserLogInResp 		: [10001, "UserLogInResp", 2],
}

module.exports = {
	RpcDefine : RpcDefine
};
