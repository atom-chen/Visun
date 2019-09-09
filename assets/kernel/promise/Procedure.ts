//---------------------------------
// 仿js promise，将过程组织成树形结构，自根往叶播放
//---------------------------------
import CHandler from "../basic/CHandler";
import PlayUnit from "./PlayUnit";
import { PROCEDURE_STATE, PROCEDURE_LOGIC } from "../looker/KernelDefine";


export default class Procedure {
	protected _node_type:string = "unknown";
	protected _name:string = "";
	protected _cur_state:PROCEDURE_STATE = PROCEDURE_STATE.READY;
	protected _bAutoClean:boolean = false;

	protected _procFunc:CHandler = null;
	protected _stopFunc:CHandler = null;
	
	protected _nextNode:Procedure = null;
	protected _groupNode:Procedure = null;
	protected _partList:Array<Procedure> = null;

	protected _logic_strateby:PROCEDURE_LOGIC = PROCEDURE_LOGIC.Parallel;



	public constructor(procFunc:CHandler=null, stopFunc:CHandler=null) 
	{
		this._procFunc = procFunc;
		this._stopFunc = stopFunc;
		this._name = this._node_type;
	}

	public clean() : void 
	{
		this._procFunc = null;
		this._stopFunc = null;
		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].clean();
			}
		}
		if(this._nextNode) { 
			this._nextNode.clean(); 
		}
	}



	public setStopFunc(stop_func:CHandler) : Procedure 
	{
		this._stopFunc = stop_func;
		return this;
	}

	public setProcFunc(proc_func:CHandler) : Procedure 
	{
		this._procFunc = proc_func;
		return this;
	}

	public setPlayUnit(playUnit:PlayUnit) : Procedure 
	{
		this._procFunc = new CHandler(playUnit.play, playUnit);
		this._stopFunc = new CHandler(playUnit.stop, playUnit);
		return this;
	}



	public addPart(part:Procedure) : Procedure 
	{
		part._groupNode = this;
		if(!this._partList) { this._partList = []; }
		this._partList.push(part);
		return this;
	}

	public addPartCaller(procFunc:CHandler, stopFunc:CHandler=null) : Procedure 
	{
		var part = new Procedure(procFunc, stopFunc);
		return this.addPart(part);
	}



	public then(nextNode:Procedure) : Procedure 
	{
		var last = this.getLast();
		last._nextNode = nextNode;
		nextNode._groupNode = last._groupNode;
		return nextNode;
	}

	public thenCaller(procFunc:CHandler, stopFunc:CHandler|null=null) : Procedure 
	{
		var nextNode = new Procedure(procFunc, stopFunc);
		return this.then(nextNode);
	}


	
	protected onProc() : void
	{
		if(this._procFunc) {
			this._procFunc.call(this);
		}
		else {
			if(this._logic_strateby===PROCEDURE_LOGIC.And) {
				this._cur_state = PROCEDURE_STATE.SUCC;
			}
			else if(this._logic_strateby===PROCEDURE_LOGIC.Or) {
				this._cur_state = PROCEDURE_STATE.FAIL;
			}
			else {
				this._cur_state = PROCEDURE_STATE.SUCC;
			}
		}
	}

	public run() : PROCEDURE_STATE 
	{
		if(this._cur_state === PROCEDURE_STATE.READY) {
			this._cur_state = PROCEDURE_STATE.RUNNING;
			cc.log("begin", this.fixedName());
			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i]._cur_state = PROCEDURE_STATE.RUNNING;
					cc.log("begin", this._partList[i].fixedName());
				}
			}

			this.onProc();
			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i].onProc();
				}
			}
		}

		return this.checkDone();
	}

	protected checkDone() : PROCEDURE_STATE 
	{
		var bSelfDone = this.isSelfDone();
		var bPartsDone = this.isPartsDone();
		if (bSelfDone && bPartsDone) {
			if(this._nextNode && !this._nextNode.isDone()) {
				this._nextNode._groupNode = this._groupNode;
				return this._nextNode.run();
			}

			if(this._groupNode){
				if(this._groupNode.isSelfDone()&&this._groupNode.isPartsDone()){
					cc.log("group ", this._groupNode._name, "finished when", this.fixedName(), "finished");
					return this._groupNode.checkDone();
				}
				else{
					cc.log(this.fixedName(), "finished  but ", this._groupNode._name, "is waiting parts");
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

	protected resolve(rlt:PROCEDURE_STATE) : void
	{
		if(this.isSelfDone()) { return; }

		this._cur_state = rlt;

		if(this._bAutoClean) { 
			this._procFunc = null;
			this._stopFunc = null;
		}
		cc.log("end", this.fixedName());

		this.checkDone();
	}

	public resolve_fail() : void
	{
		this.resolve(PROCEDURE_STATE.FAIL);
	}

	public resolve_succ() : void 
	{
		this.resolve(PROCEDURE_STATE.SUCC);
	}

	protected onStop() : void
	{
		if(this._stopFunc){
			this._stopFunc.call(this);
		}
	}

	public stop() : void 
	{
		if( !this.isSelfDone() ) {
			this._cur_state = PROCEDURE_STATE.STOPED;
			this.onStop();
			if(this._bAutoClean) { this.clean(); }
		}

		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].stop();
			}
		}
		
		if(this._nextNode) { 
			this._nextNode.stop(); 
		}
	}

	public recover() : void 
	{
		this._cur_state = PROCEDURE_STATE.READY;

		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].recover();
			}
		}

		if(this._nextNode) { 
			this._nextNode.recover(); 
		}
	}



	public getSelfResult() : PROCEDURE_STATE
	{
		if(this._cur_state===PROCEDURE_STATE.SUCC){
			return PROCEDURE_STATE.SUCC;
		}
		else if(this._cur_state===PROCEDURE_STATE.FAIL || this._cur_state===PROCEDURE_STATE.STOPED){
			return PROCEDURE_STATE.FAIL;
		}
		else {
			return this._cur_state;
		}
	}

	public getPartsResult() : PROCEDURE_STATE
	{
		if(this._logic_strateby === PROCEDURE_LOGIC.And)
		{
			if(this._partList) {
				for(var i in this._partList) {
					var partRlt = this._partList[i].getResult();
					if(partRlt!==PROCEDURE_STATE.SUCC){
						return partRlt;
					}
				}
			}
			return PROCEDURE_STATE.SUCC;
		}
		else if(this._logic_strateby === PROCEDURE_LOGIC.Or)
		{
			if(this._partList) {
				for(var i in this._partList) {
					var partRlt = this._partList[i].getResult();
					if(partRlt!==PROCEDURE_STATE.FAIL){
						return partRlt;
					}
				}
			}
			return PROCEDURE_STATE.FAIL;
		}
		else
		{
			if(this._partList) {
				for(var i in this._partList) {
					if(!this._partList[i].isDone()){
						return this._partList[i]._cur_state;
					}
				}
			}
			return PROCEDURE_STATE.SUCC;
		}
	}

	public getResult() : PROCEDURE_STATE
	{
		if(this._logic_strateby===PROCEDURE_LOGIC.And) {
			let selfRlt = this.getSelfResult()
			if(selfRlt !== PROCEDURE_STATE.SUCC){
				return selfRlt;
			}
			let partsRlt = this.getPartsResult();
			if(partsRlt !== PROCEDURE_STATE.SUCC){
				return partsRlt;
			}
			if(this._nextNode) {
				let nextRlt = this._nextNode.getResult();
				if(nextRlt !== PROCEDURE_STATE.SUCC) {
					return nextRlt;
				}
			}
			return PROCEDURE_STATE.SUCC;
		}
		else if(this._logic_strateby===PROCEDURE_LOGIC.Or) {
			let selfRlt = this.getSelfResult()
			if(selfRlt != PROCEDURE_STATE.FAIL){
				return selfRlt;
			}
			let partsRlt = this.getPartsResult();
			if(partsRlt != PROCEDURE_STATE.FAIL){
				return partsRlt;
			}
			if(this._nextNode) {
				let nextRlt = this._nextNode.getResult();
				if(nextRlt != PROCEDURE_STATE.FAIL) {
					return nextRlt;
				}
			}
			return PROCEDURE_STATE.FAIL;
		}
		else {
			if(!this.isSelfDone()) { return this._cur_state; }
			if(!this.isPartsDone()) { return PROCEDURE_STATE.RUNNING; }
			if(this._nextNode) { 
				if(!this._nextNode.isDone()) { 
					return PROCEDURE_STATE.RUNNING; 
				} 
			}
			return PROCEDURE_STATE.SUCC;
		}
	}

	

	public isSelfDone() : boolean 
	{
		return this._cur_state===PROCEDURE_STATE.SUCC || this._cur_state===PROCEDURE_STATE.FAIL || this._cur_state===PROCEDURE_STATE.STOPED;
	}

	public isPartsDone() : boolean 
	{
		if(this._partList) {
			for(var i in this._partList) {
				if(!this._partList[i].isDone()){
					return false;
				}
			}
		}
		return true;
	}
	
	public isDone() : boolean 
	{
		if(!this.isSelfDone()) { return false; }
		if(!this.isPartsDone()) { return false; }
		if(this._nextNode) { 
			if(!this._nextNode.isDone()) { 
				return false; 
			} 
		}
		return true;
	}



	public getLast() : Procedure 
	{
		var last:Procedure = this;
		while(last._nextNode) {
			last = last._nextNode;
		}
		return last;
	}

	public getType() : string 
	{
		return this._node_type;
	}

	protected fixedName() :string 
	{
		if(this._groupNode)
			return this._groupNode._name + "." + this._name;
		else 
			return "null."+this._name;
	}

	public setName(name:string) : Procedure
	{
		this._name = name;
		return this;
	}

	public getName() : string
	{
		return this._name;
	}
	
}
