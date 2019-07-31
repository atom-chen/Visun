//---------------------------------
// 仿js promise，将过程组织成树形结构，自根往叶播放
//---------------------------------
import Caller from "./Caller";
import PlayUnit from "./PlayUnit";

enum PROCEDURE_STATE {
	READY = 1,
	RUNNING,
	DONE,
	STOPED
};

export default class Procedure {
	private _node_type:string = "unknown";
	private _cur_state:PROCEDURE_STATE = PROCEDURE_STATE.READY;
	private _play_overed:boolean = false;
	private _bAutoClean:boolean = false;

	private _procFunc:Caller = null;
	private _stopFunc:Caller = null;
	private _partList:Array<Procedure> = [];
	private _belongTo:Procedure = null;
	private _next:Procedure = null;


	public constructor(procFunc:Caller=null, stopFunc:Caller=null) {
		this._procFunc = procFunc;
		this._stopFunc = stopFunc;
	}

	private clean() {
		this._procFunc = null;
		this._stopFunc = null;
		this._partList.length = 0;
		this._partList = null;
	}

	public getType() : string {
		return this._node_type;
	}


	public setStopFunc(stop_func:Caller) : Procedure {
		this._stopFunc = stop_func;
		return this;
	}

	public setProcFunc(proc_func:Caller) : Procedure {
		this._procFunc = proc_func;
		return this;
	}

	public setPlayUnit(playUnit:PlayUnit) : Procedure {
		this._procFunc = new Caller(playUnit.play, playUnit);
		this._stopFunc = new Caller(playUnit.stop, playUnit);
		return this;
	}


	public addPart(part:Procedure) : Procedure {
		part._belongTo = this;
		this._partList.push(part);
		return this;
	}

	public addPartCaller(procFunc:Caller, stopFunc:Caller=null) : Procedure {
		var part = new Procedure(procFunc, stopFunc);
		part._belongTo = this;
		this._partList.push(part);
		return this;
	}


	public then(nextNode:Procedure) : Procedure {
		var last = this.getLast();
		nextNode._belongTo = last._belongTo;
		last._next = nextNode;
		return nextNode;
	}

	public thenCaller(procFunc:Caller, stopFunc:Caller|null=null) : Procedure {
		var nextNode = new Procedure(procFunc, stopFunc);
		return this.then(nextNode);
	}

	public thenFunc(fn:Function, target:any, ...args:any[]) : Procedure {
		var procFunc:Caller = new Caller(fn, target, ...args);
		var nextNode = new Procedure(procFunc);
		return this.then(nextNode);
	}


	public getLast() : Procedure {
		var last:Procedure = this;
		while(last._next) {
			last = last._next;
		}
		return last;
	}

	
	public run() : void {
		if(this._cur_state === PROCEDURE_STATE.RUNNING) {
			return;
		}
		else if(this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED) {
			if(this._next) {
				this._next._belongTo = this._belongTo;
				return this._next.run();
			}
			return;
		}
		this._cur_state = PROCEDURE_STATE.RUNNING;

		if(this._next) {
			this._next._belongTo = this._belongTo;
		}

		if(this._procFunc) {
			this._procFunc.call(this);
		} else {
			this._play_overed = true;
		}
		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].run();
			}
		}

		if(this._cur_state === PROCEDURE_STATE.RUNNING) {
			if( (this._partList==null || this._partList.length==0) && !this._procFunc ){
				//console.log("【警告】该节点是个空节点");
				this.resolve();
			}
		}
	}

	public onPartFinished() {
		//自己的处理函数和所有子节点都完成，才正真结束
		if(this._play_overed && this.isPartsFinished()){
			this.resolve();
		}
	}

	public resolve() {
		this._play_overed = true;
		if(!this.isPartsFinished()) { return; }  //等待子节点完成

		if(this._cur_state===PROCEDURE_STATE.DONE || this._cur_state===PROCEDURE_STATE.STOPED){ return; }
		this._cur_state = PROCEDURE_STATE.DONE;

		if(this._bAutoClean) { this.clean(); }

        if(this._next){
			//cc.log("本Procedure执行完成，执行下一个节点");
			this._next._belongTo = this._belongTo;
			return this._next.run();
		}

		if(this._belongTo) {
			return this._belongTo.onPartFinished();
		}

		cc.log("本Procedure执行完成，整个Procedure执行完成");
	}

	public stop() {
		if(this._next) { this._next._belongTo = this._belongTo; }
		if(this._cur_state===PROCEDURE_STATE.DONE || this._cur_state===PROCEDURE_STATE.STOPED){
			if(this._next){
				return this._next.stop();
			}
		}
		this._cur_state = PROCEDURE_STATE.STOPED;
		if(this._stopFunc){
			this._stopFunc.call(this);
		}
		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].stop();
			}
		}
		if(this._bAutoClean) { this.clean(); }
		if(this._next) { this._next.stop(); }
	}

	public isFinished() : boolean {
		return this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED;
	}

	public isPartsFinished() : boolean {
		if(!this._partList) { return true; }
		for(var i in this._partList) {
			if(!this._partList[i].isFullFinished()) {
				return false;
			}
		}
		return true;
	}
	
	public isFullFinished() : boolean {
		if(!this.isFinished()) { return false; }
		if(this._next) { return this._next.isFullFinished(); }
		return true;
	}
}
