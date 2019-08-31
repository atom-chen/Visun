import { ActionNode } from "../BehaviorNode";
import TargetLogic from "../TargetLogic";
import RoleAgent from "../RoleAgent";
import { BT_STATE } from "../AIConst";

export default class SkillAttack extends ActionNode {
	protected clsName:string = "SkillAttack";

	private targetLgc:TargetLogic;

	public constructor(targetLgc:TargetLogic) {
		super();
		this.targetLgc = targetLgc;
	}

	public Proc(theOwner:RoleAgent) : BT_STATE{
		return theOwner.ProcSkillAttack(this, this.targetLgc);
	}
}