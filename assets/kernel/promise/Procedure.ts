//---------------------------------
// 仿js promise，将过程组织成树形结构，自根往叶播放
//---------------------------------
import CHandler from "../basic/datastruct/CHandler";
import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";


export default class Procedure {
	protected _node_type:string = "unknown";
	protected _name:string = "";

	protected _cur_state:BEHAVIOR_STATE = BEHAVIOR_STATE.READY;
	protected _procFunc:CHandler = null;
	protected _stopFunc:CHandler = null;
	protected _nextNode:Procedure = null;
	protected _groupNode:Procedure = null;
	protected _partList:Array<Procedure> = null;


	public constructor() 
	{
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
	public cleanSelf() : void 
	{
		this._procFunc = null;
		this._stopFunc = null;
	}


	public getType() : string 
	{
		return this._node_type;
	}
	public fixedName() :string 
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


	public get groupNode() : Procedure
	{
		return this._groupNode;
	}
	public set groupNode(v:Procedure)
	{
		this._groupNode = v;
	}
	public getLast() : Procedure 
	{
		var last:Procedure = this;
		while(last._nextNode) {
			last = last._nextNode;
		}
		return last;
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


	public addPart(part:Procedure) : Procedure 
	{
		part._groupNode = this;
		if(!this._partList) { this._partList = []; }
		this._partList.push(part);
		return this;
	}
	public addPartCaller(procFunc:CHandler, stopFunc:CHandler=null) : Procedure 
	{
		var part = new Procedure();
		part.setProcFunc(procFunc);
		part.setStopFunc(stopFunc);
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
		var nextNode = new Procedure();
		nextNode.setProcFunc(procFunc);
		nextNode.setStopFunc(stopFunc);
		return this.then(nextNode);
	}

	//----------------------------------------------------------------------------
	//----------------------------------------------------------------------------

	//@overrided
	public Proc(arg?:any) : void
	{
		if(this._procFunc) {
			this._procFunc.invoke(this);
		} else {
			this._cur_state = BEHAVIOR_STATE.SUCC;
		}
	}

	//@overrided
	public run(arg?:any) : BEHAVIOR_STATE 
	{
		if(this._cur_state === BEHAVIOR_STATE.READY) {
			this._cur_state = BEHAVIOR_STATE.RUNNING;
			cc.log("begin", this.fixedName());
			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i]._cur_state = BEHAVIOR_STATE.RUNNING;
					cc.log("begin", this._partList[i].fixedName());
				}
			}

			this.Proc();
			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i].Proc();
				}
			}
		}

		return this.checkDone();
	}

	//@overrided
	public checkDone(arg?:any) : BEHAVIOR_STATE 
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
					cc.log("group ", this._groupNode.fixedName(), "finished when", this.fixedName(), "finished");
					return this._groupNode.checkDone();
				}
				else{
					cc.log(this.fixedName(), "finished  but ", this._groupNode.fixedName(), "is waiting parts");
					return this._groupNode.run();
				}
			}

			cc.log(this.fixedName(), "执行完成，整个Procedure执行完成", this._cur_state);
			return this._cur_state;
		}
		else if(bSelfDone){
			cc.log(this.fixedName(), "self done, pasts runnig");
		}
		else if(bPartsDone) {
			cc.log(this.fixedName(), "self running, pasts done");
		}

		return BEHAVIOR_STATE.RUNNING;
	}

	//@overrided
	protected resolve(rlt:BEHAVIOR_STATE, arg?:any) : void
	{
		if(this.isSelfDone()) { return; }
		this._cur_state = rlt;
		cc.log("end", this.fixedName());
		this.checkDone();
	}

	//@overrided
	public resolve_fail(arg?:any) : void
	{
		this.resolve(BEHAVIOR_STATE.FAIL);
	}

	//@overrided
	public resolve_succ(arg?:any) : void 
	{
		this.resolve(BEHAVIOR_STATE.SUCC);
	}

	//@overrided
	protected onStop(arg?:any) : void
	{
		if(this._stopFunc){
			this._stopFunc.invoke(this);
		}
	}

	//@overrided
	public stop(arg?:any) : void 
	{
		if( !this.isSelfDone() ) {
			this._cur_state = BEHAVIOR_STATE.STOPED;
			this.onStop();
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

	//@overrided
	public recover(arg?:any) : void 
	{
		this._cur_state = BEHAVIOR_STATE.READY;

		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].recover();
			}
		}

		if(this._nextNode) { 
			this._nextNode.recover(); 
		}
	}

	//@overrided
	public isSelfDone(arg?:any) : boolean 
	{
		return this._cur_state===BEHAVIOR_STATE.SUCC || this._cur_state===BEHAVIOR_STATE.FAIL || this._cur_state===BEHAVIOR_STATE.STOPED;
	}

	//@overrided
	public isPartsDone(arg?:any) : boolean 
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
	
	//@overrided
	public isDone(arg?:any) : boolean 
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

	//@overrided
	public getSelfResult(arg?:any) : BEHAVIOR_STATE
	{
		if(this._cur_state===BEHAVIOR_STATE.FAIL || this._cur_state===BEHAVIOR_STATE.STOPED){
			return BEHAVIOR_STATE.FAIL;
		}
		else {
			return this._cur_state;
		}
	}

	//@overrided
	public getPartsResult(arg?:any) : BEHAVIOR_STATE
	{
		if(this._partList) {
			for(var i in this._partList) {
				if(!this._partList[i].isDone()){
					return this._partList[i]._cur_state;
				}
			}
		}
		return BEHAVIOR_STATE.SUCC;
	}

	//@overrided
	public getResult(arg?:any) : BEHAVIOR_STATE
	{
		if(!this.isSelfDone()) { return this._cur_state; }
		if(!this.isPartsDone()) { return BEHAVIOR_STATE.RUNNING; }
		if(this._nextNode) { 
			if(!this._nextNode.isDone()) { 
				return BEHAVIOR_STATE.RUNNING; 
			} 
		}
		return BEHAVIOR_STATE.SUCC;
	}
	
}
