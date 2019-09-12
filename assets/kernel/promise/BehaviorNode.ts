import Procedure from "./Procedure";
import { PROCEDURE_STATE, PROCEDURE_LOGIC } from "../looker/KernelDefine";
import BehaviorBase from "./BehaviorBase";

export default class BehaviorNode extends BehaviorBase {
	protected _succNode:Procedure = null;
	protected _failNode:Procedure = null;

	protected _groupNode:BehaviorBase = null;
	protected _partList:Array<BehaviorBase> = null;

	public succThen(succNode:Procedure) : void
	{
		this._succNode = succNode;
	}

	public failThen(failNode:Procedure) : void
	{
		this._failNode = failNode;
	}

	//----------------------------------------------------------------------------
	//----------------------------------------------------------------------------

	//@overrided
	public getSelfResult() : PROCEDURE_STATE
	{
		if(this._cur_state===PROCEDURE_STATE.SUCC){
			return PROCEDURE_STATE.SUCC;
		}
		else if(this._cur_state===PROCEDURE_STATE.FAIL || this._cur_state===PROCEDURE_STATE.STOPED){
			return PROCEDURE_STATE.FAIL;
		}
		else {
			return this._cur_state;
		}
	}

	//@overrided
	public getPartsResult() : PROCEDURE_STATE
	{
		return PROCEDURE_STATE.SUCC;
	}

	//@overrided
	public getResult(): PROCEDURE_STATE {
		var rlt = this.getSelfResult();
		if(rlt===PROCEDURE_STATE.SUCC) {
			if(this._succNode) {
				return this._succNode.getResult();
			}
		}
		else if(rlt===PROCEDURE_STATE.FAIL) {
			if(this._failNode) {
				return this._failNode.getResult();
			}
		}
		return this._cur_state;
	}

	//@overrided
	public isSelfDone() : boolean 
	{
		return this._cur_state===PROCEDURE_STATE.SUCC || this._cur_state===PROCEDURE_STATE.FAIL || this._cur_state===PROCEDURE_STATE.STOPED;
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
		return rlt===PROCEDURE_STATE.SUCC || rlt===PROCEDURE_STATE.FAIL || rlt===PROCEDURE_STATE.STOPED;
	}

	//@overrided
	protected Proc(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public run(arg?: any): PROCEDURE_STATE {
		throw new Error("Method not implemented.");
	}

	//@overrided
	protected resolve(rlt: PROCEDURE_STATE): void {
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
	protected checkDone() : PROCEDURE_STATE 
	{
		return PROCEDURE_STATE.SUCC;
	}
}

