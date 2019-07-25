import Caller from "./Caller";
import PlayUnit from "./PlayUnit";

enum PROCEDURE_STATE {
	READY = 1,
	RUNNING,
	DONE,
	STOPED
};

export default class Procedure {
	_node_type = "unknown";
	_cur_state:PROCEDURE_STATE = PROCEDURE_STATE.READY;
	_play_overed:boolean = false;
	_bAutoClean:boolean = true;

	_context = null;
	_argInfo:any[] = [];
	_procFunc:Caller = null;
	_stopFunc:Caller = null;
	_partList:Procedure[] = [];
	_belongTo:Procedure = null;
	_next:Procedure = null;

	clean() {
		this._context = null;
		this._argInfo.length = 0;
		this._argInfo = null;
		this._procFunc = null;
		this._stopFunc = null;
		this._partList.length = 0;
		this._partList = [];
		this._partList = null;
	}

	setStopFunc(stop_func:Caller) {
		this._stopFunc = stop_func;
		return this;
	}

	setProcFunc(proc_func:Caller) {
		this._procFunc = proc_func;
		return this;
	}

	setPlayUnit(playUnit:PlayUnit) {
		this._procFunc = new Caller(playUnit.play, playUnit);
		this._stopFunc = new Caller(playUnit.stop, playUnit);
		return this;
	}

	addPart(part:Procedure) {
		part._belongTo = this;
		this._partList.push(part);
		return this;
	}

	addPartCaller(caller1:Caller, caller2:Caller) {
		var part = new Procedure();
		part.setProcFunc(caller1);
		part.setStopFunc(caller2);
		this.addPart(part);
		return this;
	}

	then(nextNode:Procedure) {
		var last = this.getLast();
		nextNode._belongTo = last._belongTo;
		last._next = nextNode;
		return nextNode;
	}

	thenCall(caller:Caller) {
		var nextNode = new Procedure();
		nextNode.setProcFunc(caller);
		return this.then(nextNode);
	}

	getLast() {
		var last:Procedure = this;
		while(last._next) {
			last = last._next;
		}
		return last;
	}

	run() {
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
			for(var i=1, len=this._partList.length; i<len; i++) {
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

	onPartFinished() {
		//自己的处理函数和所有子节点都完成，才正真结束
		if(this._play_overed && this.isPartsFinished()){
			this.resolve();
		}
	}

	resolve() {
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

	stop() {
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

	isFinished() {
		return this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED;
	}

	isPartsFinished() {
		if(!this._partList) { return true; }
		for(var i in this._partList) {
			if(!this._partList[i].isFullFinished()) {
				return false;
			}
		}
		return true;
	}
	
	isFullFinished() {
		if(!this.isFinished()) { return false; }
		if(this._next) { return this._next.isFullFinished(); }
		return true;
	}
}
