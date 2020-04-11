import { ActionNode } from "../../../../../../kernel/behaviour/BehaviorNode";
import { BEHAVIOR_STATE } from "../../../../../../kernel/basic/defines/KernelDefine";
import RoleFighter from "../../role/RoleFighter";

export default class AddSkillEffect extends ActionNode{
	protected clsName:string = "AddSkillEffect";

	public constructor() {
		super();
	}

	public Proc(role:RoleFighter) : BEHAVIOR_STATE{
		return BEHAVIOR_STATE.FAIL;
	}
}