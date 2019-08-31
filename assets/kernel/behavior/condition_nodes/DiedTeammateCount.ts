import { ConditionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BT_STATE } from "../AIConst";

export default class DiedTeammateCount extends ConditionNode {
	protected clsName:string = "DiedTeammateCount";
	private _diedCound:number;
	private _cmpMode:string;

	public constructor(cmpMode:string, diedCound:number) {
		super();
		this._diedCound = diedCound;
		this._cmpMode = cmpMode;
	}

	public Proc(theOwner:RoleAgent) : BT_STATE{
		return theOwner.ProcDiedTeammateCount(this._cmpMode, this._diedCound);
	}
}