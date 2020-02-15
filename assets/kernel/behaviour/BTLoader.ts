import { BehaviorNodeBase } from "./BehaviorNode";
import { BehaviorTree } from "./BehaviorTree";

export class BTLoader {
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