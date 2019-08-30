//--------------------------------------------------------------------------------------------
// 行为树相关常量
//--------------------------------------------------------------------------------------------
module behavior {
	export enum BT_STATE {
		RUNNING = -1,
		FAIL = 0,
		SUCC = 1,
	}

	export enum FOR_BUDDY {
		SELF = 1,			//自己
		TEAMMATE = 2,		//队友
		SELF_TEAMMATE = 3,	//自己+队友
		ENEMY = 4,			//敌人
		QUESTIONCOLOR = 5,	//题色
		ANSWER = 6,			//答案
	}
	export enum PRIORITY_TYPE {
		RANDOM = 0,			//随机
		LESS_HP = 1,		//血量最少
		ATTR_BEST = 2,		//克制
		LESS_FORCE = 3,		//战力最低
		EASY_DIE = 4,		//最易死亡
	}

	export function AiCompare(op:string, lvalue:number, rvalue:number) : boolean{
		switch (op){
			case "l":   return lvalue < rvalue;
			case "e":   return lvalue == rvalue;
			case "g":   return lvalue > rvalue;
			case "le":  return lvalue <= rvalue;
			case "ge":  return lvalue >= rvalue;
			default: console.error("错误的比较符号："+op);
		}
	}
}