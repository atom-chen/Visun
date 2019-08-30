//--------------------------------------------------------------------------------------------
// 行为树
//--------------------------------------------------------------------------------------------
module behavior {
	export class BehaviorTree {
		protected clsName:string = "BehaviorTree";
		private mRootNode:BehaviorNodeBase;
		
		public constructor() {
			
		}

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
		public isRunning(theOwner:fight.CardDataObject) : boolean {
			return theOwner.getBlackboard().hasRunningTree(this);
		}

		//执行
		public Execute(theOwner:fight.CardDataObject, Callback:Function) : BT_STATE {
			if(this.isRunning(theOwner)){
				console.log("正在执行中：", this.clsName);
				return BT_STATE.RUNNING;
			}
			theOwner.getBlackboard().tellBTBegin(this, Callback);
			return this.mRootNode.Execute(theOwner);
		}

		//中断执行
		public Interrupt(theOwner:fight.CardDataObject) {
			let running_nodes = theOwner.getBlackboard().getRunningNodesOfTree(this);
			if (running_nodes != null) {
				theOwner.getBlackboard().markInterrupting(this, true);
				for(let dealingNode of running_nodes) {
					dealingNode.Interrupt(theOwner);
				}
				theOwner.getBlackboard().markInterrupting(this, false);

				theOwner.getBlackboard().tellBTInterrupt(this, BT_STATE.FAIL);
			}
		}
	}
}