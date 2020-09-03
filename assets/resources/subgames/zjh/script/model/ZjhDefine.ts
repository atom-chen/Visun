// 0：未准备 1：已准备 2：跟注 3：加注 4：弃牌 5：比牌 6：旁观
export enum ZjhFighterState {
	idle = 0,
	readyed,
	genzhu,
	jiazhu,
	qipai,
	bipaishu,
	standby,
}

export enum ZjhGameState {
	ready,
	started,
	fighting,
	settle,
}