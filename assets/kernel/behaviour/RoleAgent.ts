import Blackboard from "./Blackboard";

//--------------------------------------------------------------------------------------------
// 行为树角色代理。游戏实体可通过继承该类来实现AI
//--------------------------------------------------------------------------------------------
export abstract class RoleAgent {
	public getBlackboard() : Blackboard {
		return null;
	}
}