//---------------------------------
// 仿js promise，将过程组织成树形结构，自根往叶播放
//---------------------------------
import CHandler from "../basic/CHandler";
import PlayUnit from "./PlayUnit";
import { PROCEDURE_STATE } from "../looker/KernelDefine";


export default class Procedure {
	protected _node_type:string = "unknown";
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

	private clean() : void 
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
		part._groupNode = this;
		if(!this._partList) { this._partList = []; }
		this._partList.push(part);
		return this;
	}



	public then(nextNode:Procedure) : Procedure 
	{
		var last = this.getLast();
		nextNode._groupNode = last._groupNode;
		last._nextNode = nextNode;
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
			this.onProc();
		}
		
		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].run();
			}
		}

		if(this._nextNode) {
			if(this.isFinished() && this.isPartsDone()) {
				this._nextNode._groupNode = this._groupNode;
				return this._nextNode.run();
			}
		}
	}

	protected onPartFinished() : void 
	{
		if (this.isFinished() && this.isPartsDone()) {
			if(this._nextNode) {
				this._nextNode._groupNode = this._groupNode;
				this._nextNode.run();
			}
			else {
				cc.log("本Procedure执行完成，整个Procedure执行完成");
			}
		}
	}

	private resolve(rlt:PROCEDURE_STATE) : void
	{
		if(this.isFinished()) { return; }

		this._cur_state = rlt;

		if(this._bAutoClean) { 
			this._procFunc = null;
			this._stopFunc = null;
		}

		if(this._groupNode) {
			return this._groupNode.onPartFinished();
		}
		
		if(this._nextNode) {
			if(this.isPartsDone()) {
				this._nextNode._groupNode = this._groupNode;
				this._nextNode.run();
				return;
			}
		}

		cc.log("本Procedure执行完成，整个Procedure执行完成");
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
	
}
