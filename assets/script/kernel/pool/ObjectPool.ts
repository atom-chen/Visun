import Caller from "../promise/Caller";

export default class ObjectPool {
	private _maxSize:number = 128;
	private _pool:any[] = [];
	private _createFunc:Function;


	public constructor(creatFunc:Function){
		this._createFunc = creatFunc;
	}

	public newObject(...args:any[]) {
		var last = this._pool.length-1;
		var obj:any = null;
		if(last < 0 || last >= this._maxSize) {
			obj = this._createFunc(...args);
		}
		else {
			obj = this._pool[last];
			this._pool.length = last;
		}
		if(obj.reuse){ obj.reuse.apply(obj, args); }
		return obj;
	}

	public delObject(obj:any) {
		if(obj && this._pool.indexOf(obj)===-1) {
			if(obj.unuse){ obj.unuse(); }
			this._pool.push(obj);
		}
	}

	public clear() : void {
		for(var i=0, cnt=this._pool.length; i<cnt; ++i) {
			var obj = this._pool[i];
			if(obj.unuse){ obj.unuse(); }
			if(obj.destroy){ obj.destroy(); }
		}
		this._pool.length = 0;
	}

	public size() : number {
		return this._pool.length;
	}

}
