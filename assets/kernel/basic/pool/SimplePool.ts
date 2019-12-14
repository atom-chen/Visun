// pool for cc.Node with no reuse and no unuse
export default class SimplePool {
	private _pool:any[] = [];
	private _createFunc:()=>{};


	public constructor(creatFunc:()=>{}){
		this._createFunc = creatFunc;
	}

	public newObject() {
		var last = this._pool.length-1;
		if(last < 0) {
			return this._createFunc();
		}
		else {
			var obj = this._pool[last];
			this._pool.length = last;
			return obj;
		}
	}

	public delObject(obj:any) {
		if(obj) {
			obj.removeFromParent(false);
			if(this._pool.indexOf(obj) < 0) {
				this._pool.push(obj);
			}
		}
	}

	public clear() : void {
		for(var i=0, cnt=this._pool.length; i<cnt; ++i) {
			this._pool[i].destroy();
		}
		this._pool.length = 0;
		this._pool = [];
	}

}
