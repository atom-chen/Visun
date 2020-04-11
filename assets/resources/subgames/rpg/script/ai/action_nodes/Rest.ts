import { ActionNode } from "../../../../../../kernel/behaviour/BehaviorNode";
import { BEHAVIOR_STATE } from "../../../../../../kernel/basic/defines/KernelDefine";
import RoleFighter from "../../role/RoleFighter";

export default class Rest extends ActionNode{
	protected clsName:string = "Rest";
	private restTime:number;

	public constructor(restTime:number) {
		super();
		this.restTime = restTime;
	}

	public Proc(role:RoleFighter) : BEHAVIOR_STATE{
		return role.ProcRest(this, this.restTime);
	}
}