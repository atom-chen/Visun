import { ConditionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BT_STATE } from "../AIConst";

export default class CmpMyHP extends ConditionNode {
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
		return theOwner.ProcCmpMyHP(this.cmpMode, this.hpPercent, this.bPercent);
	}
}