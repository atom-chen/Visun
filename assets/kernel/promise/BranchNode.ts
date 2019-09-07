import Procedure from "./Procedure";
import { PROCEDURE_STATE } from "../looker/KernelDefine";

export default class BranchNode extends Procedure {
	protected _succNode:Procedure = null;
	protected _failNode:Procedure = null;


	public succThen(succNode:Procedure) : void
	{
		//this._succNode = succNode;
	}

	public failThen(failNode:Procedure) : void
	{
		//this._failNode = failNode;
	}

	protected onProc(arg?:any) : void
	{
		if(this._procFunc) {
			this._procFunc.call(this);
		}
		else {
			this._cur_state = PROCEDURE_STATE.SUCC;
		}
	}
}