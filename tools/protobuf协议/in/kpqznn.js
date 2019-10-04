var RpcDefine = {
	HALL_REFRESH_COIN            : [41000, "HallRefreshCoinRequest"],   //HallRefreshCoinRequest, HallRefreshCoinResponse
	JOIN_TABLE                   : [41000, "JoinTableRequest"], //加入金币场 JoinTableRequest, JoinTableResponse
	SEND_USER_INFO               : [41000, "TableInfoResponse"],  //推送玩家信息 TableInfoResponse
	SHOW_CARD                    : [41000, "ShowCardRequest"],  //亮牌 ShowCardRequest, ShowCardResponse
	BET                          : [41000, "BetRequest"],  //下注  BetRequest, BetResponse
	SEND_ROUND_RESULT            : [41000, "SendRoundResultResponse"],  //推送回合结算 SendRoundResultResponse
	QIANG_ZHUANG                 : [41000, "QiangZhuangRequest"],  //抢庄 QiangZhuangRequest, QiangZhuangResponse
	SEND_ZHUANG                  : [41000, "TableInfoResponse"],  //推送庄家信息   TableInfoResponse
	SEND_USER_CARD               : [41000, "TableInfoResponse"],  //推送玩家手牌 TableInfoResponse
	SEND_USER_BEST_CARD          : [41000, "OutCard"], //推送 提示 和手牌
	USER_RECONNECT               : [41000, "UserReconnectRequest"],  //玩家重连 UserReconnectRequest, UserReconnectResponse

	SEND_USER_RECONNECT          : [41000, "SendUserReconnectResponse"],  //推送重连信息 SendUserReconnectResponse
	SEND_RECONNECT_QUIT          : [41000, "SendReconnectQuitResponse"],  //玩家重连回到大厅 SendReconnectQuitResponse
	SEND_MESSAGE                 : [41000, "SendMessageResponse"],  //推送聊天信息 SendMessageResponse
	MESSAGE                      : [41000, "MessageRequest"],  //聊天 MessageRequest
	SEND_COIN_REFRESH            : [41000, "SendCoinRefreshResponse"],  //推送金币刷新 SendCoinRefreshResponse
	USER_QUIT                    : [41000, "UserQuitRequest"],  //玩家退出 UserQuitRequest, UserQuitResponse

	USER_ONBACK                  : [41000, "UserOnBackRequest"],  //用户退到后台  UserOnBackRequest

	SEND_USER_ONBACK             : [41000, "SendUserOnBackResponse"],  //退到后台 SendUserOnBackResponse
	USER_READY				   	 : [41000, "UserReadyRequest"],  //玩家信息展示 UserReadyRequest, UserReadyResponse
	SEND_GAME_NOTICE             : [41000, "SendGameNoticeResponse"],  //推送公告 SendGameNoticeResponse
	FORCE_OFFLINE                : [41000, "ForcedOfflineRequest"],    //
	DELAYQUIT_OFFLINE_RESP       : [41000, "KickedOutRequest"],    //超时踢出
	KICKEDOUT                    : [41000, "KickedOutResponse"],    //KickedOutRequest,KickedOutResponse
	SEND_HEART_BEAT              : [41000, ""], //推送心跳 SendHeartBeatResponse
	SEND_REMAIN_TIME             : [41000, ""], //推送延时 SendRemainTimeResponse

	CHANGE_TABLE                 : [41000, "ChangeTableRequest"], //换桌 ChangeTableRequest
	ROOMLIST                     : [41000, "RoomListRequest"],
	DELAY_CHECK                  : [41000, "DelayCheckRequest"], //客户端延时检测  DelayCheckRequest, DelayCheckResponse
	SEND_LEAVE_TABLE			 : [41000, "SendLeaveTableResponse"], //推送玩家离开桌子 SendLeaveTableResponse
	SEND_COIN_TABLE_INFO         : [41000, "SendCoinTableInfoResponse"], //玩家中途加入游戏时推送当前桌子信息 SendCoinTableInfoResponse
	SETCARDSTEST 				 : [41000, "C2S_SetGameData"],	//配牌 C2S_SetGameData S2C_SetGameData
}

module.exports = {
	RpcDefine : RpcDefine
};
