import { ConditionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BT_STATE } from "../AIConst";

export default class IsTeamLeader extends ConditionNode {
	protected clsName:string = "IsTeamLeader";

	public constructor() {
		super();
	}
	
	public Proc(theOwner:RoleAgent) : BT_STATE{
		return theOwner.ProcIsTeamLeader();
	}
}