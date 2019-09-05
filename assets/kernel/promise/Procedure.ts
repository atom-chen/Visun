//---------------------------------
// 仿js promise，将过程组织成树形结构，自根往叶播放
//---------------------------------
import CHandler from "../basic/CHandler";
import PlayUnit from "./PlayUnit";
import { PROCEDURE_STATE } from "../looker/KernelDefine";


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



	public constructor(procFunc:CHandler=null, stopFunc:CHandler=null) 
	{
		this._procFunc = procFunc;
		this._stopFunc = stopFunc;
	}

	public setName(name:string)
	{
		this._name = name;
		return this;
	}
	public getName() : string
	{
		return this._name;
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


	
	protected onProc() {
		if(this._procFunc) {
			this._procFunc.call(this);
		}
		else {
			this._cur_state = PROCEDURE_STATE.SUCC;
		}
	}

	public run() : PROCEDURE_STATE 
	{
		if(this._cur_state === PROCEDURE_STATE.READY) {
			this._cur_state = PROCEDURE_STATE.RUNNING;
			cc.log("begin", this.fixedName());
			this.onProc();
		}
		
		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].run();
			}
		}

		if (this.isFinished() && this.isPartsDone()) {
			if(this._nextNode) {
				return this._nextNode.run();
			}
		}
	}

	protected onPartFinished() : PROCEDURE_STATE 
	{
		if (this.isFinished() && this.isPartsDone()) {
			if(this._nextNode && !this._nextNode.isDone()) {
				return this._nextNode.run();
			}

			if(this._groupNode){
				if(this._groupNode.isFinished()&&this._groupNode.isPartsDone()){
					cc.log("group ", this._groupNode._name, "finished when", this.fixedName(), "finished");
					return this._groupNode.onPartFinished();
				}
				else{
					cc.log(this.fixedName(), "finished  but ", this._groupNode._name, "is waiting parts");
					return this._groupNode.run();
				}
			}

			cc.log(this.fixedName(), "执行完成，整个Procedure执行完成");
			return this._cur_state;
		}
		else if(this.isFinished()){
			cc.log(this.fixedName(), "finished bug pasts is runnig");
		}
		else if(this.isPartsDone()) {
			cc.log(this.fixedName(), "not finished when pasts done");
		}
	}

	protected resolve(rlt:PROCEDURE_STATE) : void
	{
		if(this.isFinished()) { return; }

		this._cur_state = rlt;

		if(this._bAutoClean) { 
			this._procFunc = null;
			this._stopFunc = null;
		}
		cc.log("end", this.fixedName());

		this.onPartFinished();
	}

	public resolve_fail() : void
	{
		this.resolve(PROCEDURE_STATE.FAIL);
	}

	public resolve_succ() : void 
	{
		this.resolve(PROCEDURE_STATE.SUCC);
	}

	protected onStop() {
		if(this._stopFunc){
			this._stopFunc.call(this);
		}
	}

	public stop() : void 
	{
		if( !this.isFinished() ) {
			this._cur_state = PROCEDURE_STATE.STOPED;
			this.onStop();
			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i].stop();
				}
			}
			if(this._bAutoClean) { this.clean(); }
		}
		
		if(this._nextNode) { 
			this._nextNode.stop(); 
		}
	}

	public recover() : void 
	{
		this._cur_state = PROCEDURE_STATE.STOPED;
		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].recover();
			}
		}
		if(this._nextNode) { 
			this._nextNode.recover(); 
		}
	}



	public getLast() : Procedure 
	{
		var last:Procedure = this;
		while(last._nextNode) {
			last = last._nextNode;
		}
		return last;
	}

	public isFinished() : boolean 
	{
		return this._cur_state === PROCEDURE_STATE.SUCC || this._cur_state === PROCEDURE_STATE.FAIL || this._cur_state === PROCEDURE_STATE.STOPED;
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
		if(!this.isFinished()) { return false; }
		if(this._partList) {
			for(var i in this._partList) {
				if(!this._partList[i].isDone()){
					return false;
				}
			}
		}
		if(this._nextNode) { 
			if(!this._nextNode.isDone()) { 
				return false; 
			} 
		}
		return true;
	}

	public getType() : string 
	{
		return this._node_type;
	}

	protected fixedName() :string {
		if(this._groupNode)
			return this._groupNode._name + "." + this._name;
		else 
			return "null."+this._name;
	}
	
}
