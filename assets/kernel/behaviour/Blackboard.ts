//---------------------------------------
// 行为树黑板，记录角色行为树需要的所有相关数据
//---------------------------------------
import RoleAgent from "./RoleAgent";
import BehaviorNodeBase from "./BehaviorNode";
import BehaviorTree from "./BehaviorTree";
import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";


export default class Blackboard {
	private mOwner:RoleAgent;							//黑板拥有者
	private interruptingTree:{[key:string]:boolean};	//键为树名，存放正在中断的行为树
	private runningNodeList:Array<BehaviorNodeBase>;	//存放所有处于运行状态的节点
	private treeStateInfo: {[key:string]:BEHAVIOR_STATE};		//标记行为树的运行状态：running/succ/fail
	private callbackInfo: {[key:string]:Function};		//键为树名，存放行为树执行完毕时的回调
	
	private fightTargets:Array<RoleAgent>;		//施法目标记录

	public constructor(role:RoleAgent) {
		this.mOwner = role;
		this.interruptingTree = {};
		this.runningNodeList = [];
		this.treeStateInfo = {};
		this.callbackInfo = {};
	}

	public getOwner() : RoleAgent {
		return this.mOwner;
	}

	// 行为树最终结束的唯一接口
	private tell_bt_result(btTree:BehaviorTree, result:BEHAVIOR_STATE) {
		if(this.isTreeHasRunningNode(btTree)){
			console.error("执行出错：此时不应该还有执行中的节点");
		}
		let treeName = btTree.getName();
		if(this.treeStateInfo[treeName] != BEHAVIOR_STATE.RUNNING) {
			console.error("执行出错：此时行为树应该处于running状态");
		}
		if (this.callbackInfo[treeName] != null && this.callbackInfo[treeName] != undefined) {
			this.callbackInfo[treeName](result);
			delete this.callbackInfo[treeName];
			this.callbackInfo[treeName] = null;
		}
		console.log("行为树结束：", treeName, result);
		//放到最后才将树的状态标记为成功或失败，防止在回调函数中启动该树
		this.treeStateInfo[treeName] = result;
	}

	// 标记行为树开始执行
	public tellBTBegin(btTree:BehaviorTree, Callback:Function) {
		if(btTree.isRunning(this.mOwner))
			console.error("is running");
		let treeName = btTree.getName();
		console.log("行为树开始：", treeName);
		this.treeStateInfo[treeName] = BEHAVIOR_STATE.RUNNING;
		this.callbackInfo[treeName] = Callback;
	}

	// 行为树执行完毕时调用
	public tellBTFinish(btTree:BehaviorTree, result:BEHAVIOR_STATE) {
		this.tell_bt_result(btTree, result);
	}

	// 行为树被中断时调用
	public tellBTInterrupt(btTree:BehaviorTree, result:BEHAVIOR_STATE) {
		this.tell_bt_result(btTree, result);
	}

	// 节点开始执行时添加标记
	public addRunningNode(btNode:BehaviorNodeBase) {
		if(this.isInterrupting(btNode.getBTTree())) {
			console.error("中断正在执行中，不允许继续往下遍历", btNode.getBTTree().getName());
		}
		if(this.hasRunningNode(btNode)){
			console.error("运行出错，该节点已经在执行中", btNode.getClassName());
			return;
		}

		this.runningNodeList.push(btNode);
	}

	// 节点执行完毕时添加标记
	public delRunningNode(btNode:BehaviorNodeBase) {
		var index: number = this.runningNodeList.indexOf(btNode);
		if(index >= 0 ){ 
			this.runningNodeList.splice(index,1);
		}
	}

	//--------------------------------------------------------------------------------

	//判断某节点是否处于running状态
	public hasRunningNode(btNode:BehaviorNodeBase) : boolean {
		var index: number = this.runningNodeList.indexOf(btNode);
		return index >= 0
	}

	//判断某行为树是否处于running状态
	public hasRunningTree(btTree:BehaviorTree) : boolean {
		return this.treeStateInfo[btTree.getName()] == BEHAVIOR_STATE.RUNNING;
	}

	//判断某树是否有正在running的节点
	public isTreeHasRunningNode(btTree:BehaviorTree) : boolean {
		for(var i=0; i<this.runningNodeList.length; i++) {
			if(this.runningNodeList[i].getBTTree() == btTree){
				return true;
			}
		}
		return false;
	}

	//获取某树所有处于running中的节点
	public getRunningNodesOfTree(btTree:BehaviorTree) : Array<BehaviorNodeBase> {
		let runningNodes = []
		for (let node of this.runningNodeList) {
			if(node.getBTTree() == btTree){
				runningNodes.push(node);
			}
		}
		if(runningNodes.length <= 0) {
			runningNodes = null;
			return null;
		}
		
		return runningNodes;
	}

	//判断某树是否正被中断
	public isInterrupting(btTree:BehaviorTree) : boolean {
		return true == this.interruptingTree[btTree.getName()];
	}

	//中断某树时和中断完毕时，做个标记
	public markInterrupting(btTree:BehaviorTree, flag:boolean) {
		this.interruptingTree[btTree.getName()] = flag;
	}

	//---------------------------------------------------------------------------

	public setFightTargets(targets:Array<RoleAgent>){
		this.fightTargets = targets;
	}

	public getFightTargets() : Array<RoleAgent> {
		return this.fightTargets;
	}

}
