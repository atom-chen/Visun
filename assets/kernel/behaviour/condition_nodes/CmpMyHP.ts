import { ConditionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BEHAVIOR_STATE } from "../../basic/defines/KernelDefine";

export default class CmpMyHP extends ConditionNode {
	
	protected clsName:string = "CmpMyHP";
	private cmpMode:string;
	private hpValue:number;
	private bPercent:boolean;

	public constructor(cmpMode:string, hpValue:number, bPercent:boolean) {
		super();
		this.cmpMode = cmpMode;
		this.hpValue = hpValue;
		this.bPercent = bPercent;
	}
	
	public Proc(theOwner:RoleAgent) : BEHAVIOR_STATE{
		return theOwner.ProcCmpMyHP(this.cmpMode, this.hpValue, this.bPercent);
	}

}