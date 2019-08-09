import Caller from "../promise/Caller";

export default class ObjectPool {
	private _pool:any[] = [];
	private _createFunc:Function;
	private _destroyFunc:Function;
	private _onUse:Function;
	private _onUnuse:Function;

	public constructor(creatFunc:Function, destroyFunc:Function, onUse:Function, onUnuse:Function){
		this._createFunc = creatFunc;
		this._destroyFunc = destroyFunc;
		this._onUse = onUse;
		this._onUnuse = onUnuse;
	}

	public size() : number {
		return this._pool.length;
	}

	public clear() : void {
		for(var i=0, cnt=this._pool.length; i<cnt; ++i) {
			this._onUnuse.apply(this._pool[i]);
			this._destroyFunc.apply(this._pool[i]);
		}
		this._pool.length = 0;
	}

	public newObject(...args:any[]) {
		var last = this._pool.length-1;
		if(last < 0) {
			var obj = this._createFunc(...args);
			this._onUse.apply(obj, args);
			return obj;
		}
		var obj = this._pool[last];
		this._pool.length = last;
		this._onUse.apply(obj, args);
		return obj;
	}

	public delObject(obj:any) {
		if(obj && this._pool.indexOf(obj)===-1) {
			this._onUnuse.apply(obj);
			this._pool.push(obj);
		}
	}

}
