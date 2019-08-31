import { ConditionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BT_STATE } from "../AIConst";

export default class TargetIsRace extends ConditionNode {
	protected clsName:string = "TargetIsRace";
	private target:RoleAgent;
	private race:number;

	public constructor(target:RoleAgent, race:number) {
		super();
		this.target = target;
		this.race = race;
	}

	public Proc(theOwner:RoleAgent) : BT_STATE{
		return theOwner.ProcTargetIsRace(this.target, this.race);
	}
}