import BehaviorBase from "./BehaviorBase";
import BehaviorNode from "./BehaviorNode";
import { PROCEDURE_STATE } from "../looker/KernelDefine";

// 复合节点基类
export default class OrComposite extends BehaviorNode {

	//@overrided
	protected Proc(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public run(arg?: any): import("../looker/KernelDefine").PROCEDURE_STATE {
		throw new Error("Method not implemented.");
	}

	//@overrided
	protected checkDone(): import("../looker/KernelDefine").PROCEDURE_STATE {
		throw new Error("Method not implemented.");
	}

	//@overrided
	protected resolve(rlt: import("../looker/KernelDefine").PROCEDURE_STATE): void {
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
	protected onStop(): void {
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
	public getSelfResult(): PROCEDURE_STATE {
		return PROCEDURE_STATE.FAIL;
	}

	//@overrided
	public getPartsResult(): PROCEDURE_STATE {
		if(this._partList) {
			for(var i in this._partList) {
				var partRlt = this._partList[i].getResult();
				if(partRlt === PROCEDURE_STATE.SUCC) {
					return partRlt;
				}
				else if(partRlt!==PROCEDURE_STATE.FAIL) {
					return partRlt;
				}
			}
			return PROCEDURE_STATE.FAIL;
		}
		return PROCEDURE_STATE.SUCC;
	}

	//@overrided
	public getResult(): PROCEDURE_STATE {
		let rlt = this.getPartsResult();
		if(rlt === PROCEDURE_STATE.SUCC){
			if(this._succNode) {
				return this._succNode.getResult();
			}
		}
		else if(rlt===PROCEDURE_STATE.FAIL) {
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
		return rlt===PROCEDURE_STATE.SUCC || rlt===PROCEDURE_STATE.FAIL || rlt===PROCEDURE_STATE.STOPED;
	}

}
