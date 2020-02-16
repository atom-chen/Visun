//-----------------------------------------
// 行为树角色代理。游戏实体可通过继承该类来实现AI
//-----------------------------------------
import Blackboard from "./Blackboard";
import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";


export default abstract class RoleAgent {
	private m_blackboard: Blackboard;

	constructor() {
		this.m_blackboard = new Blackboard(this);
	}
	
	public getBlackboard() : Blackboard {
		return null;
	}

	public ProcCmpMyHP(cmpMode:string, hpValue:number, bPercent:boolean) : BEHAVIOR_STATE {
		return BEHAVIOR_STATE.FAIL;
	}

	public ProcRest(restTime:number) : BEHAVIOR_STATE {
		return BEHAVIOR_STATE.FAIL;
	}

}