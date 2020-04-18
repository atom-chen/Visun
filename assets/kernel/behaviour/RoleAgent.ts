//-----------------------------------------
// 行为树角色代理。游戏实体可通过继承该类来实现AI
//-----------------------------------------
import Blackboard from "./Blackboard";
import BaseComponent from "../view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoleAgent extends BaseComponent {
	private m_blackboard: Blackboard;

	constructor() {
		super();
		this.m_blackboard = new Blackboard(this);
	}
	
	public getBlackboard() : Blackboard {
		return null;
	}

}