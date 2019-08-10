import Caller from "../promise/Caller";

export default class ObjectPool {
	private _pool:any[] = [];
	private _createFunc:Function;


	public constructor(creatFunc:Function){
		this._createFunc = creatFunc;
	}

	public size() : number {
		return this._pool.length;
	}

	public clear() : void {
		for(var i=0, cnt=this._pool.length; i<cnt; ++i) {
			this._pool[i].unuse();
			this._pool[i].destroy();
		}
		this._pool.length = 0;
	}

	public newObject(...args:any[]) {
		var last = this._pool.length-1;
		if(last < 0) {
			var obj = this._createFunc(...args);
			obj.reuse.apply(obj, args);
			return obj;
		}
		var obj = this._pool[last];
		this._pool.length = last;
		obj.reuse.apply(obj, args);
		return obj;
	}

	public delObject(obj:any) {
		if(obj && this._pool.indexOf(obj)===-1) {
			obj.unuse();
			this._pool.push(obj);
		}
	}

}
