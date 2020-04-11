//-----------------------------------------
// 行为树角色代理。游戏实体可通过继承该类来实现AI
//-----------------------------------------
import Blackboard from "./Blackboard";


export default abstract class RoleAgent {
	private m_blackboard: Blackboard;

	constructor() {
		this.m_blackboard = new Blackboard(this);
	}
	
	public getBlackboard() : Blackboard {
		return null;
	}

}