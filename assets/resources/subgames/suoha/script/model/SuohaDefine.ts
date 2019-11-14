

export enum SuohaPaixingEnum {
	Sanpai,
	Yidui,
	Liangdui,
	Santiao,
	Shunzi,
	Tonghua,
	Hulu,
	Zhadan,
	Tonghuashun,
}

export var SuohaPaixingName = {
	[SuohaPaixingEnum.Sanpai] : "散牌",
	[SuohaPaixingEnum.Yidui] : "一对",
	[SuohaPaixingEnum.Liangdui] : "两对",
	[SuohaPaixingEnum.Santiao] : "三条",
	[SuohaPaixingEnum.Shunzi] : "顺子",
	[SuohaPaixingEnum.Tonghua] : "同花",
	[SuohaPaixingEnum.Hulu] : "葫芦",
	[SuohaPaixingEnum.Zhadan] : "炸弹",
	[SuohaPaixingEnum.Tonghuashun] : "同花顺",
}

export enum SuohaGameState {
	Ready = 1,			//未开局（等待所有玩家准备）
	Fighting,		//战斗中
	Result,			//结算
}
export var SuohaStateName = {
	[SuohaGameState.Ready] : "准备中",
	[SuohaGameState.Fighting] : "战斗中",
	[SuohaGameState.Result] : "结算"
}

export enum SuohaActType {
	PASS = 1,
	FOLLOW = 2,
	ADD = 3,
	DISCARD = 4,
	SUOHA = 5,
}
export var USR_ACT_NAME = {
	[SuohaActType.PASS] : "过牌",
	[SuohaActType.FOLLOW] : "跟注",
	[SuohaActType.ADD] : "加注",
	[SuohaActType.DISCARD] : "弃牌",
	[SuohaActType.SUOHA] : "梭哈",
}

export enum SuohaUserState {
	READY = 1,
	PLAY = 2,
	DISCARD = 3,
	ACCOUNT = 4,
}
export var USR_STATE_NAME = {
	[SuohaUserState.READY] : "准备",
	[SuohaUserState.PLAY] : "游戏中",
	[SuohaUserState.DISCARD] : "弃牌",
	[SuohaUserState.ACCOUNT] : "结算",
}
