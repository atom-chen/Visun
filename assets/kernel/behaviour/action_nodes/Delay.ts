import { ActionNode } from "../BehaviorNode";
import { BT_STATE } from "../AIConst";
import RoleAgent from "../RoleAgent";

export default class Delay extends ActionNode{
	protected clsName:string = "Delay";
	private restTime:number;

	public constructor(restTime:number) {
		super();
		this.restTime = restTime;
	}

	public Proc(theOwner:RoleAgent) : BT_STATE{
		return BT_STATE.FAIL;
	}
}