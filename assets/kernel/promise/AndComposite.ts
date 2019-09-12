import BehaviorBase from "./BehaviorBase";
import BehaviorNode from "./BehaviorNode";
import { BEHAVIOR_STATE } from "../looker/KernelDefine";

// 复合节点基类
export default class AndComposite extends BehaviorNode {
	//@overrided
	public Proc(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public run(arg?: any): import("../looker/KernelDefine").BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public checkDone(): import("../looker/KernelDefine").BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public resolve(rlt: import("../looker/KernelDefine").BEHAVIOR_STATE): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public resolve_succ(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public resolve_fail(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public onStop(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public stop(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public recover(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public getSelfResult(): BEHAVIOR_STATE {
		return BEHAVIOR_STATE.SUCC;
	}

	//@overrided
	public getPartsResult(): BEHAVIOR_STATE {
		if(this._partList) {
			for(var i in this._partList) {
				var partRlt = this._partList[i].getResult();
				if(partRlt !== BEHAVIOR_STATE.SUCC) {
					return partRlt;
				}
			}
		}
		return BEHAVIOR_STATE.SUCC;
	}

	//@overrided
	public getResult(): BEHAVIOR_STATE {
		let rlt = this.getPartsResult();
		if(rlt === BEHAVIOR_STATE.SUCC){
			if(this._succNode) {
				return this._succNode.getResult();
			}
		}
		else if(rlt===BEHAVIOR_STATE.FAIL) {
			if(this._failNode) {
				return this._failNode.getResult();
			}
		}
		return rlt;
	}

	//@overrided
	public isSelfDone(): boolean {
		return true;
	}

	//@overrided
	public isPartsDone(): boolean {
		if(this._partList) {
			for(var i in this._partList) {
				if(!this._partList[i].isDone()){
					return false;
				}
			}
		}
		return true;
	}

	//@overrided
	public isDone(): boolean {
		var rlt = this.getResult();
		return rlt===BEHAVIOR_STATE.SUCC || rlt===BEHAVIOR_STATE.FAIL || rlt===BEHAVIOR_STATE.STOPED;
	}

}
