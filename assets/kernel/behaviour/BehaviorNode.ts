//--------------------------------------------------------------------------------------------
// 行为树节点
// 具体实现要继承自 DecoratorNode ConditionNode ActionNode
//--------------------------------------------------------------------------------------------
import BehaviorTree from "./BehaviorTree";
import RoleAgent from "./RoleAgent";
import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";


//所有节点类型的基类
export default abstract class BehaviorNodeBase {
	protected clsName:string = "BehaviorNodeBase"; //方便调试
	protected leftNode:BehaviorNodeBase;	//当本节点返回失败时，走向左节点
	protected rightNode:BehaviorNodeBase;	//当本节点返回成功时，走向右节点
	protected preNode:BehaviorNodeBase;		//父节点
	protected mBTTree:BehaviorTree;			//节点所在的树
	protected compNode:ParallelNode;		//所在组
	
	public constructor() {
		this.leftNode = null;
		this.rightNode = null;
		this.preNode = null;
		this.mBTTree = null;
		this.compNode = null;
	}

	public getClassName() { return this.clsName; }

	public abstract Proc(role:RoleAgent):BEHAVIOR_STATE;

	//执行
	public Execute(role:RoleAgent) : BEHAVIOR_STATE{
		// 如果被中断，直接返回失败
		if(role.getBlackboard().isInterrupting(this.getBTTree())){
			console.log(this.getBTTree().getName(),"is interrupting !!!");
			return BEHAVIOR_STATE.FAIL;
		}

		if(role.getBlackboard().hasRunningNode(this)) {
			console.log(this.clsName,"is running !!!");
			return BEHAVIOR_STATE.RUNNING;
		}
		
		//before deal
		// 标记为运行中节点
		role.getBlackboard().addRunningNode(this);

		//deal 
		var result:BEHAVIOR_STATE = this.Proc(role);

		if(result == BEHAVIOR_STATE.RUNNING){
			return BEHAVIOR_STATE.RUNNING;
		}

		//deal over
		return this.onDealOver(role, result);
	}

	//执行完成时调用
	public onDealOver(role:RoleAgent, result:BEHAVIOR_STATE) : BEHAVIOR_STATE{
		// 标记为非运行中节点
		role.getBlackboard().delRunningNode(this)

		console.log("---", this.clsName, result);

		// 如果被中断，不再执行后面的节点，直接返回失败
		if(role.getBlackboard().isInterrupting(this.getBTTree())){
			return BEHAVIOR_STATE.FAIL;
		}

		//本节点返回为成功，则执行右节点；返回为失败，则执行左节点
		if(result == BEHAVIOR_STATE.SUCC){
			if(this.rightNode != null){
				return this.rightNode.Execute(role);
			}
		} 
		else if (result == BEHAVIOR_STATE.FAIL){
			if(this.leftNode != null){
				return this.leftNode.Execute(role);
			}
		}
		else {
			console.error("【错误】节点运行完毕时，结果必须是FAIL或SUCC二者之一");
		}

		//并行节点检查
		let bnComp = this.getCompNode()
		if (bnComp) {
			let compResult:BEHAVIOR_STATE = bnComp.checkResult(role);
			if(compResult == BEHAVIOR_STATE.RUNNING) {
				return BEHAVIOR_STATE.RUNNING;
			} 
			else {
				return bnComp.onDealOver(role, compResult);
			}
		}

		// 没有后续节点了，标记行为树执行完毕
		role.getBlackboard().tellBTFinish(this.getBTTree(), result);

		return result;
	}

	//被中断时调用，子类如果在中断时需要执行某些操作，须重载该接口
	public onInterrupt(role:RoleAgent){

	}

	//中断操作
	public Interrupt(role:RoleAgent){
		this.onInterrupt(role);
		role.getBlackboard().delRunningNode(this);
	}

	public setRightNode(rNode:BehaviorNodeBase){
		this.rightNode = rNode;
		rNode.preNode = this;
	}

	public setLeftNode(lNode:BehaviorNodeBase){
		this.leftNode = lNode;
		lNode.preNode = this;
	}

	public isRunning(role:RoleAgent){
		return role.getBlackboard().hasRunningNode(this);
	}

	public getRoot(){
		if(this.preNode != null)
			return this.preNode.getRoot();
		if(this.compNode != null)
			return this.compNode.getRoot();
		return this;
	}

	public setCompNode(btNode:ParallelNode) {
		this.compNode = btNode;
	}

	public getCompNode() : ParallelNode {
		if (this.compNode != null)
			return this.compNode;
		if(this.preNode)
			return this.preNode.getCompNode();
		return null;
	}

	public getBTTree() : BehaviorTree{
		if(this.mBTTree != null && this.mBTTree != undefined)
			return this.mBTTree;
		return this.getRoot().mBTTree;
	}

	public setBTTree(btTree:BehaviorTree) {
		this.mBTTree = btTree;
	}
}

// 复合节点基类
abstract class CompositeNodeBase extends BehaviorNodeBase {
	protected clsName:string = "CompositeNodeBase";
	protected childList:Array<BehaviorNodeBase>;

	public constructor() {
		super();
		this.childList = [];
	}

	public addElement(btNode:BehaviorNodeBase) {
		this.childList.push(btNode);
	}
}

//-------------------------------------------------------------------------------------------------

// 条件与
export class AndCompositeNode extends CompositeNodeBase {
	protected clsName:string = "AndCompositeNode";

	public constructor() {
		super();
	}

	public Proc(role:RoleAgent) : BEHAVIOR_STATE {
		for(let bn of this.childList) {
			if(bn.Proc(role) == BEHAVIOR_STATE.FAIL){
				return BEHAVIOR_STATE.FAIL;
			}
		}
		return BEHAVIOR_STATE.SUCC;
	}
}

// 条件或
export class OrCompositeNode extends CompositeNodeBase {
	protected clsName:string = "OrCompositeNode";

	public constructor() {
		super();
	}

	public Proc(role:RoleAgent) : BEHAVIOR_STATE {
		for(let bn of this.childList) {
			if(bn.Proc(role) == BEHAVIOR_STATE.SUCC){
				return BEHAVIOR_STATE.SUCC;
			}
		}
		return BEHAVIOR_STATE.FAIL;
	}
}

// 并行节点
export class ParallelNode extends CompositeNodeBase {
	protected clsName:string = "ParallelNode";

	public constructor() {
		super();
	}

	public addElement(btNode:BehaviorNodeBase) {
		this.childList.push(btNode);
		btNode.setCompNode(this);
	}

	//执行
	public Execute(role:RoleAgent) : BEHAVIOR_STATE{
		// 如果被中断，直接返回失败
		if(role.getBlackboard().isInterrupting(this.getBTTree())){
			console.log(this.getBTTree().getName(),"is interrupting !!!");
			return BEHAVIOR_STATE.FAIL;
		}

		if(role.getBlackboard().hasRunningNode(this)) {
			console.log(this.getClassName(),"is running !!!");
			return BEHAVIOR_STATE.RUNNING;
		}
		
		//before deal
		// 标记为运行中节点
		role.getBlackboard().addRunningNode(this);
		for(let bn of this.childList) {
			role.getBlackboard().addRunningNode(bn);
		}

		//deal 
		var result:BEHAVIOR_STATE = BEHAVIOR_STATE.SUCC;
		for(let bn of this.childList) {
			let rlt = bn.Proc(role);
			if(rlt == BEHAVIOR_STATE.RUNNING){
				result = BEHAVIOR_STATE.RUNNING;
			} else {
				bn.onDealOver(role,rlt);
			}
		}

		return result;
	}

	public Proc(role:RoleAgent) : BEHAVIOR_STATE { 
		console.error("do not use this func");
		return BEHAVIOR_STATE.RUNNING;
	}

	public checkResult(role:RoleAgent) : BEHAVIOR_STATE {
		let State:BEHAVIOR_STATE = BEHAVIOR_STATE.SUCC;
		for(let bn of this.childList) {
			if(role.getBlackboard().hasRunningNode(bn)){
				State = BEHAVIOR_STATE.RUNNING;
				break;
			}
		}
		return State;
	}
}


// 装饰
export abstract class DecoratorNode extends BehaviorNodeBase {
	protected clsName:string = "DecoratorNode";
	target:BehaviorNodeBase;

	public constructor(btNode:BehaviorNodeBase) {
		super();
		this.Proxy(btNode);
	}

	public Proxy(btNode:BehaviorNodeBase) {
		this.target = btNode;
	}
}

// 条件节点
export abstract class ConditionNode extends BehaviorNodeBase {
	protected clsName:string = "ConditionNode";

	public constructor() {
		super();
	}
}

// 行动节点
export abstract class ActionNode extends BehaviorNodeBase {
	protected clsName:string = "ActionNode";

	public constructor() {
		super();
	}
}