import Caller from "../promise/Caller";

export default class ObjectPool {
	private _pool:any[] = [];
	private _createFunc:Function;


	public constructor(creatFunc:Function){
		this._createFunc = creatFunc;
	}

	public newObject() {
		var last = this._pool.length-1;
		var obj:any = null;
		if(last < 0) {
			obj = this._createFunc();
		}
		else {
			obj = this._pool[last];
			this._pool.length = last;
		}
		return obj;
	}

	public delObject(obj:any) {
		if(obj && this._pool.indexOf(obj)===-1) {
			this._pool.push(obj);
		}
	}

	public clear() : void {
		for(var i=0, cnt=this._pool.length; i<cnt; ++i) {
			var obj = this._pool[i];
			if(obj.destroy){ obj.destroy(); }
		}
		this._pool.length = 0;
	}

}
