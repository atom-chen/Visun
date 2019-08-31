import { ConditionNode } from "../BehaviorNode";
import TargetLogic from "../TargetLogic";
import RoleAgent from "../RoleAgent";
import { BT_STATE } from "../AIConst";

export default class ChooseFightTarget extends ConditionNode {
	protected clsName:string = "ChooseFightTarget";

	private targetLgc:TargetLogic;

	public constructor(targetLgc:TargetLogic) {
		super();
		this.targetLgc = targetLgc;
	}

	public Proc(theOwner:RoleAgent) : BT_STATE{
		return theOwner.ProcChooseFightTarget(this.targetLgc);
	}
}