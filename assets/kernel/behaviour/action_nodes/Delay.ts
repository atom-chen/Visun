import { ActionNode } from "../BehaviorNode";

import { RoleAgent } from "../RoleAgent";

import { BT_STATE } from "../AIConst";

export class Delay extends ActionNode{
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