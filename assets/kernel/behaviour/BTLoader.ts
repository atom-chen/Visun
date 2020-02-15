//------------------------------------
// 行为树文件加载器
//------------------------------------
import BehaviorNodeBase from "./BehaviorNode";
import BehaviorTree from "./BehaviorTree";


export default class BTLoader {
	private static genNode(clsName:string, ...args:any[]) :BehaviorNodeBase {
		return null;
	}

	private static btMap: Object = new Object();
	public static genBT(btName:string) : BehaviorTree {
		return null;
	}

	private loadBT(btName) : BehaviorTree {
		return null;
	}
}