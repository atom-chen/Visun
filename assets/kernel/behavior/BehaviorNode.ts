import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";
import Procedure from "./Procedure";
import CHandler from "../basic/datastruct/CHandler";
import RoleAgent from "./RoleAgent";

export default abstract class BehaviorNode extends Procedure {
	protected _succNode:Procedure = null;
	protected _failNode:Procedure = null;

	
	public succThen(succNode:Procedure) : void
	{
		this._succNode = succNode;
		this._succNode.groupNode = this.groupNode;
	}

	public failThen(failNode:Procedure) : void
	{
		this._failNode = failNode;
		this._failNode.groupNode = this.groupNode;
	}

	//@overrided
	public then(nextNode:Procedure) : Procedure 
	{
		throw new Error("Method not implemented.");
	}

	//@overrided
	public thenCaller(procFunc:CHandler, stopFunc:CHandler|null=null) : Procedure 
	{
		throw new Error("Method not implemented.");
	}

	//@overrided
	public addPart(part:Procedure) : Procedure 
	{
		throw new Error("Method not implemented.");
	}

	//@overrided
	public addPartCaller(procFunc:CHandler, stopFunc:CHandler=null) : Procedure 
	{
		throw new Error("Method not implemented.");
	}


	//----------------------------------------------------------------------------
	//----------------------------------------------------------------------------


	//@overrided
	public abstract Proc(agent:RoleAgent): void;

	//@overrided
	public run(agent:RoleAgent): BEHAVIOR_STATE {
		if(this._cur_state === BEHAVIOR_STATE.READY) {
			this._cur_state = BEHAVIOR_STATE.RUNNING;
			cc.log("begin", this.fixedName());
			this.Proc(agent);
		}

		return this.checkDone();
	}

	//@overrided
	public checkDone() : BEHAVIOR_STATE 
	{
		var selfRlt = this.getSelfResult();
		if (selfRlt===BEHAVIOR_STATE.SUCC || selfRlt===BEHAVIOR_STATE.FAIL) {
			if(selfRlt===BEHAVIOR_STATE.SUCC) {
				if(this._succNode && !this._succNode.isDone()) {
					this._succNode.groupNode = this._groupNode;
					return this._succNode.run();
				}
			}
			else if(selfRlt===BEHAVIOR_STATE.FAIL) {
				if(this._failNode && !this._failNode.isDone()) {
					this._failNode.groupNode = this._groupNode;
					return this._failNode.run();
				}
			}

			if(this._groupNode){
				if(this._groupNode.isSelfDone()&&this._groupNode.isPartsDone()){
					cc.log("group ", this._groupNode.fixedName(), "finished when", this.fixedName(), "finished");
					return this._groupNode.checkDone();
				}
				else{
					cc.log(this.fixedName(), "finished  but ", this._groupNode.fixedName(), "is waiting parts");
					return this._groupNode.run();
				}
			}

			cc.log(this.fixedName(), "执行完成，整个Behavior执行完成", this._cur_state);
			return this._cur_state;
		}
		return BEHAVIOR_STATE.RUNNING;
	}

	//@overrided
	public resolve(rlt: BEHAVIOR_STATE): void {
		if(this.isSelfDone()) { return; }

		this._cur_state = rlt;

		cc.log("end", this.fixedName());

		this.checkDone();
	}

	//@overrided
	public resolve_succ(): void {
		this.resolve(BEHAVIOR_STATE.SUCC);
	}

	//@overrided
	public resolve_fail(): void {
		this.resolve(BEHAVIOR_STATE.FAIL);
	}

	//@overrided
	public onStop(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public stop(): void {
		if( !this.isSelfDone() ) {
			this._cur_state = BEHAVIOR_STATE.STOPED;
			this.onStop();
		}

		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].stop();
			}
		}
		
		if(this._succNode) { 
			this._succNode.stop(); 
		}
		if(this._failNode) { 
			this._failNode.stop(); 
		}
	}

	//@overrided
	public recover(): void {
		this._cur_state = BEHAVIOR_STATE.READY;

		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].recover();
			}
		}

		if(this._succNode) { 
			this._succNode.recover(); 
		}
		if(this._failNode) { 
			this._failNode.recover(); 
		}
	}

	//@overrided
	public getSelfResult() : BEHAVIOR_STATE
	{
		if(this._cur_state===BEHAVIOR_STATE.SUCC){
			return BEHAVIOR_STATE.SUCC;
		}
		else if(this._cur_state===BEHAVIOR_STATE.FAIL || this._cur_state===BEHAVIOR_STATE.STOPED){
			return BEHAVIOR_STATE.FAIL;
		}
		else {
			return this._cur_state;
		}
	}

	//@overrided
	public getPartsResult() : BEHAVIOR_STATE
	{
		return BEHAVIOR_STATE.SUCC;
	}

	//@overrided
	public getResult(): BEHAVIOR_STATE {
		var rlt = this.getSelfResult();
		if(rlt===BEHAVIOR_STATE.SUCC) {
			if(this._succNode) {
				return this._succNode.getResult();
			}
		}
		else if(rlt===BEHAVIOR_STATE.FAIL) {
			if(this._failNode) {
				return this._failNode.getResult();
			}
		}
		return this._cur_state;
	}

	//@overrided
	public isSelfDone() : boolean 
	{
		return this._cur_state===BEHAVIOR_STATE.SUCC || this._cur_state===BEHAVIOR_STATE.FAIL || this._cur_state===BEHAVIOR_STATE.STOPED;
	}

	//@overrided
	public isPartsDone() : boolean 
	{
		return true;
	}
	
	//@overrided
	public isDone() : boolean 
	{
		var rlt = this.getResult();
		return rlt===BEHAVIOR_STATE.SUCC || rlt===BEHAVIOR_STATE.FAIL || rlt===BEHAVIOR_STATE.STOPED;
	}

}

