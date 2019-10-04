var RpcDefine = {
	MsgGetUserInfoReq : 		[20000, "MsgGetUserInfoReq"],
	MsgGetUserInfoResp : 		[20001, "MsgGetUserInfoResp", 2],
	MsgGetGameListReq : 		[20002, "MsgGetGameListReq"],
	MsgGetGameListResp : 		[20003, "MsgGetGameListResp", 2],
	MsgGetGameConfigReq : 		[20004, "MsgGetGameConfigReq"],
	MsgGetGameConfigResp : 		[20005, "MsgGetGameConfigResp", 2],
	MsgChangeHeadReq : 			[20006, "MsgChangeHeadReq"],
	MsgChangeHeadResp : 		[20007, "MsgChangeHeadResp", 2],
	Msg_DisableGame : 			[20008, "", 2],
	MsgNoticeNotify : 			[80000, "MsgNoticeNotify", 2],
	MsgMarqueeNotice : 			[80001, "MsgMarqueeNotice", 2],
	MsgPopupNotice : 			[80002, "MsgPopupNotice", 2],
	MsgModifyGameConfigNotify : [80003, "MsgModifyGameConfigNotify", 2],
}


module.exports = {
	RpcDefine : RpcDefine
};
