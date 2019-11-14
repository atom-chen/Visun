export enum DDzPaiXingEnum {
	invalid,		// 无效
	danpai,			// 单牌 1
	duizi,			// 对子 2
	huojian,		// 王炸 2
	zhadan,			// 炸弹 4
	sandai0,		// 三带零 3
	sandai1,		// 三带一 4
	sandai2,		// 三带一对 5
	sidai2,			// 四带二 6
	sidai4,			// 四带两对 8
	shunzi,			// 顺子 5+
	liandui,		// 连对 6+
	feiji0,			// 飞机 6+
	feiji1,			// 飞机带单牌 6+
	feiji2,			// 飞机带对子 6+
}

export enum DDzGameState {
	Wait,		//准备中
	Qiandizhu,	//抢地主
	Fight,		//战斗中
	Jiesuan,	//结算
}

export var DDzStateName = {
	[DDzGameState.Wait] : "匹配阶段",
	[DDzGameState.Qiandizhu] : "抢地主阶段",
	[DDzGameState.Fight] : "出牌阶段",
	[DDzGameState.Jiesuan] : "结算阶段",
}