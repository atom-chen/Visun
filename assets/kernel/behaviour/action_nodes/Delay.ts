import { ActionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BEHAVIOR_STATE } from "../../basic/defines/KernelDefine";

export default class Delay extends ActionNode{
	protected clsName:string = "Delay";
	private restTime:number;

	public constructor(restTime:number) {
		super();
		this.restTime = restTime;
	}

	public Proc(theOwner:RoleAgent) : BEHAVIOR_STATE{
		return BEHAVIOR_STATE.FAIL;
	}
}