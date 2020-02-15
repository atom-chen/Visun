import { ActionNode } from "../BehaviorNode";
import { RoleAgent } from "../RoleAgent";
import { BT_STATE } from "../AIConst";

export class AddSkillEffect extends ActionNode{
	protected clsName:string = "AddSkillEffect";

	public constructor() {
		super();
	}

	public Proc(theOwner:RoleAgent) : BT_STATE{
		return BT_STATE.FAIL;
	}
}