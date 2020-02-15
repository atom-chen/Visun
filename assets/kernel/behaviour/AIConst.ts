//--------------------------------------------------------------------------------------------
// 行为树相关常量
//--------------------------------------------------------------------------------------------
export enum BT_STATE {
	RUNNING = -1,
	FAIL = 0,
	SUCC = 1,
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