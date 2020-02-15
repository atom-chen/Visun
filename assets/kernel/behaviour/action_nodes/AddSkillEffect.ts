import { ActionNode } from "../BehaviorNode";
import { BT_STATE } from "../AIConst";
import RoleAgent from "../RoleAgent";

export default class AddSkillEffect extends ActionNode{
	protected clsName:string = "AddSkillEffect";

	public constructor() {
		super();
	}

	public Proc(theOwner:RoleAgent) : BT_STATE{
		return BT_STATE.FAIL;
	}
}