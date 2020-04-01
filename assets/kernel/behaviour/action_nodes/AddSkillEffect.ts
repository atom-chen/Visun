import { ActionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BEHAVIOR_STATE } from "../../basic/defines/KernelDefine";

export default class AddSkillEffect extends ActionNode{
	protected clsName:string = "AddSkillEffect";

	public constructor() {
		super();
	}

	public Proc(role:RoleAgent) : BEHAVIOR_STATE{
		return BEHAVIOR_STATE.FAIL;
	}
}