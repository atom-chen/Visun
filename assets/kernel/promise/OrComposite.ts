import BehaviorNode from "./BehaviorNode";
import { BEHAVIOR_STATE } from "../looker/KernelDefine";
import Procedure from "./Procedure";
import CHandler from "../basic/CHandler";

// 复合节点基类
export default class OrComposite extends BehaviorNode {

	//@overrided
	public addPart(part:Procedure) : Procedure 
	{
		part.groupNode = this;
		if(!this._partList) { this._partList = []; }
		this._partList.push(part);
		return this;
	}

	//@overrided
	public addPartCaller(procFunc:CHandler, stopFunc:CHandler=null) : Procedure 
	{
		var part = new Procedure();
		part.setProcFunc(procFunc);
		part.setStopFunc(stopFunc);
		return this.addPart(part);
	}

	//@overrided
	public Proc(): void {
		
	}

	//@overrided
	public run(arg?: any): BEHAVIOR_STATE {
		if(this._cur_state === BEHAVIOR_STATE.READY) {
			this._cur_state = BEHAVIOR_STATE.RUNNING;
			cc.log("begin", this.fixedName());
			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i]["_cur_state"] = BEHAVIOR_STATE.RUNNING;
					cc.log("begin", this._partList[i].fixedName());
				}
			}

			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i].Proc();
				}
			}
		}

		return this.checkDone();
	}

	//@overrided
	public checkDone(): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public resolve(rlt: BEHAVIOR_STATE): void {
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
		return BEHAVIOR_STATE.FAIL;
	}

	//@overrided
	public getPartsResult(): BEHAVIOR_STATE {
		if(this._partList) {
			for(var i in this._partList) {
				var partRlt = this._partList[i].getResult();
				if(partRlt === BEHAVIOR_STATE.SUCC) {
					return partRlt;
				}
				else if(partRlt!==BEHAVIOR_STATE.FAIL) {
					return partRlt;
				}
			}
			return BEHAVIOR_STATE.FAIL;
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
