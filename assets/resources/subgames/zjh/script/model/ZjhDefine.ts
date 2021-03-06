export enum ZjhGameState {
	ready,
	started,
	fighting,
	settle,
}

//未准备 	== PlayerSitDown
//已准备 	== PlayerAgree
//正在游戏 	== PlayerPlaying
//弃牌 		== PlayerGiveUp
//比牌失败 	== PlayerCompareLose
export enum ZjhFighterState {
	idle = 1, //gamecomm.PlayerState.PlayerSitDown,			//未准备
	readyed = 2, //gamecomm.PlayerState.PlayerAgree,			//已准备
	playing = 4, //gamecomm.PlayerState.PlayerPlaying,		//战斗中
	genzhu = 9,		//跟注
	jiazhu = 10,		//加注
	qipai = 7, //gamecomm.PlayerState.PlayerGiveUp,				//弃牌
	bipaishu = 8, //gamecomm.PlayerState.PlayerCompareLose,		//比牌输
}
