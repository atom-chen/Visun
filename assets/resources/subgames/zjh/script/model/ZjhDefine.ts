import { gamecomm } from "../../../../../../declares/gamecomm";

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

// 未准备 已准备 战斗中 跟注 加注 弃牌 比牌输
export enum ZjhFighterState {
	idle = gamecomm.PlayerState.PlayerSitDown,			//未准备
	readyed = gamecomm.PlayerState.PlayerAgree,			//已准备
	playing = gamecomm.PlayerState.PlayerPlaying,		//战斗中
	genzhu = 10001,		//跟注
	jiazhu = 10002,		//加注
	qipai = gamecomm.PlayerState.PlayerGiveUp,				//弃牌
	bipaishu = gamecomm.PlayerState.PlayerCompareLose,		//比牌输
}
