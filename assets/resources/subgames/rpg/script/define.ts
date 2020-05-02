//-----------------------------------
// 
//-----------------------------------

//Buff类型
export enum BuffType {
	Invalid, 
}

//战斗结束原因
export enum CombatStopReason {
	unknown,
	timeout,	//超时
	fail,		//失败
	success,	//胜利
	quit,		//用户强制退出
}
