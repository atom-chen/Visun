import Procedure from "./Procedure";
import { PROCEDURE_STATE, PROCEDURE_LOGIC } from "../looker/KernelDefine";

export default class BranchNode extends Procedure {
	protected _succNode:Procedure = null;
	protected _failNode:Procedure = null;
	protected _logic_strateby = PROCEDURE_LOGIC.And;


	public succThen(succNode:Procedure) : void
	{
		this._succNode = succNode;
	}

	public failThen(failNode:Procedure) : void
	{
		this._failNode = failNode;
	}

	protected checkDone() : PROCEDURE_STATE 
	{
		var bSelfDone = this.isSelfDone();
		var bPartsDone = this.isPartsDone();
		if (bSelfDone && bPartsDone) {
			var rlt = this.getResult();
			if(rlt===PROCEDURE_STATE.SUCC) {
				if(this._succNode && !this._succNode.isDone()) {
					this._succNode["_groupNode"] = this._groupNode;
					return this._succNode.run();
				}
			}
			else if(rlt===PROCEDURE_STATE.FAIL) {
				if(this._failNode && !this._failNode.isDone()) {
					this._failNode["_groupNode"] = this._groupNode;
					return this._failNode.run();
				}
			}

			if(this._groupNode){
				if(this._groupNode.isSelfDone()&&this._groupNode.isPartsDone()){
					cc.log("group ", this._groupNode["_name"], "finished when", this.fixedName(), "finished");
					return this._groupNode["checkDone"]();
				}
				else{
					cc.log(this.fixedName(), "finished  but ", this._groupNode["_name"], "is waiting parts");
					return this._groupNode.run();
				}
			}

			cc.log(this.fixedName(), "执行完成，整个Procedure执行完成", this._cur_state);
			return this._cur_state;
		}
		else if(bSelfDone){
			cc.log(this.fixedName(), "finished bug pasts is runnig");
		}
		else if(bPartsDone) {
			cc.log(this.fixedName(), "not finished when pasts done");
		}
		return PROCEDURE_STATE.RUNNING;
	}
}