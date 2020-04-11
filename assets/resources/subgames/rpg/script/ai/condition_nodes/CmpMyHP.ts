import { ConditionNode } from "../../../../../../kernel/behaviour/BehaviorNode";
import { BEHAVIOR_STATE } from "../../../../../../kernel/basic/defines/KernelDefine";
import RoleFighter from "../../role/RoleFighter";

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
	
	public Proc(role:RoleFighter) : BEHAVIOR_STATE{
		return role.ProcCmpMyHP(this.cmpMode, this.hpValue, this.bPercent);
	}

}