//------------------------------
// 行为树
//------------------------------
import BehaviorNodeBase from "./BehaviorNode";
import RoleAgent from "./RoleAgent";
import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";


export default class BehaviorTree {
	protected clsName:string = "BehaviorTree";
	private mRootNode:BehaviorNodeBase;

	//名字KEY
	public getName() : string {
		return this.clsName;
	}
	
	//设置根节点
	public setRootNode(rootNode:BehaviorNodeBase) {
		this.mRootNode = rootNode;
		rootNode.setBTTree(this);
	}

	//是否在执行中
	public isRunning(theOwner:RoleAgent) : boolean {
		return theOwner.getBlackboard().hasRunningTree(this);
	}

	//执行
	public Execute(theOwner:RoleAgent, Callback:Function) : BEHAVIOR_STATE {
		if(this.isRunning(theOwner)){
			console.log("正在执行中：", this.clsName);
			return BEHAVIOR_STATE.RUNNING;
		}
		theOwner.getBlackboard().tellBTBegin(this, Callback);
		return this.mRootNode.Execute(theOwner);
	}

	//中断执行
	public Interrupt(theOwner:RoleAgent) {
		let running_nodes = theOwner.getBlackboard().getRunningNodesOfTree(this);
		if (running_nodes != null) {
			theOwner.getBlackboard().markInterrupting(this, true);
			for(let dealingNode of running_nodes) {
				dealingNode.Interrupt(theOwner);
			}
			theOwner.getBlackboard().markInterrupting(this, false);

			theOwner.getBlackboard().tellBTInterrupt(this, BEHAVIOR_STATE.FAIL);
		}
	}
	
}