import { ConditionNode } from "../BehaviorNode";
import { BT_STATE } from "../AIConst";
import { RoleAgent } from "../RoleAgent";

export class CmpMyHP extends ConditionNode {
	protected clsName:string = "CmpMyHP";
	private cmpMode:string;
	private hpPercent:number;
	private bPercent:boolean;

	public constructor(cmpMode:string, hpPercent:number, bPercent:boolean) {
		super();
		this.cmpMode = cmpMode;
		this.hpPercent = hpPercent;
		this.bPercent = bPercent;
	}
	
	public Proc(theOwner:RoleAgent) : BT_STATE{
		return BT_STATE.FAIL;
	//	return theOwner.ProcCmpMyHP(this.cmpMode, this.hpPercent, this.bPercent);
	}
}