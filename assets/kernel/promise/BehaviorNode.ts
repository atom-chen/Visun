import Procedure from "./Procedure";
import { PROCEDURE_STATE, PROCEDURE_LOGIC } from "../looker/KernelDefine";
import BehaviorBase from "./BehaviorBase";

export default class BehaviorNode extends BehaviorBase {
	protected _succNode:Procedure = null;
	protected _failNode:Procedure = null;

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

