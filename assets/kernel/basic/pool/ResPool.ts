//--------------------------
// 资源池
//--------------------------
import SimplePool from "./SimplePool";

export default class ResPool {
	private static _loaded:{[key:string]:cc.Node} = {};
	private static _pools:{[key:string]:SimplePool} = {};

	public static load(resPath:string) {
		var self = this;
		cc.loader.loadRes(resPath, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loaded[resPath] = loadedRes;
			self._pools[resPath] = new SimplePool(():cc.Node=>{
				var obj = cc.instantiate(loadedRes);
				obj.scale = 0.2;
				return obj;
			});
		});
	}

	public static unload(resPath:string) {
		if(this._pools[resPath]) {
			this._pools[resPath].clear();
		}
	}

	public static newObject(resPath:string) : any {
		if(this._pools[resPath]) {
			return this._pools[resPath].newObject();
		}
	}

	public static delObject(resPath:string, obj:cc.Node) {
		if(this._pools[resPath]) {
			this._pools[resPath].delObject(obj);
		}
	}
}