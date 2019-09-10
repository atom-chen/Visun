import Procedure from "./Procedure";
import { PROCEDURE_STATE, PROCEDURE_LOGIC } from "../looker/KernelDefine";
import BahaviorBase from "./BehaviorBase";

export default class BranchNode extends BahaviorBase {
	protected _succNode:Procedure = null;
	protected _failNode:Procedure = null;

	protected Proc(): void {
		throw new Error("Method not implemented.");
	}

	public run(arg?: any): PROCEDURE_STATE {
		throw new Error("Method not implemented.");
	}

	protected resolve(rlt: PROCEDURE_STATE): void {
		throw new Error("Method not implemented.");
	}

	protected onStop(): void {
		throw new Error("Method not implemented.");
	}

	public stop(): void {
		throw new Error("Method not implemented.");
	}

	public recover(): void {
		throw new Error("Method not implemented.");
	}


	public succThen(succNode:Procedure) : void
	{
		this._succNode = succNode;
	}

	public failThen(failNode:Procedure) : void
	{
		this._failNode = failNode;
	}

	protected checkDone() : PROCEDURE_STATE 
	{
		return PROCEDURE_STATE.SUCC;
	}
}

