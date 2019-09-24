//------------------------------------------
// 本地文件缓存
//------------------------------------------
export default class LocalCache
{
	protected static _cacheMap:Object = {};

	protected _name:string = null;
	protected _localStorage:any = null;
	protected _dataMap:Object = null;
	

	private constructor(name:string)
	{
		this._name = name;
		this._localStorage = cc.sys.localStorage;
		this._dataMap = {};
	}

	public static getInstance(name:string) : LocalCache
	{	
		let localCache:LocalCache = this._cacheMap[name] as LocalCache;
		if (!localCache)
		{
			localCache = new LocalCache(name);
			this._cacheMap[name] = localCache;
		}
		return localCache;
	}


	//获取缓存数据。如果没有该缓存且传递了defaultV则返回defaultV，否则返回空
	public get(key:string, defaultV?:any) : any
	{
		let value:any = this._dataMap[key];
		if ((value===null || value===undefined) && this._localStorage)
		{
			value = this._localStorage.getItem(this.localKey(key));
			this._dataMap[key] = value;
		}
		if(value===null || value===undefined){
			if(defaultV!==null && defaultV!==undefined){
				value = defaultV;
			}
		}
		cc.log("读取：", this.localKey(key), key, value);
		return value;
	}

	//更新缓存
	public set(key:string, value:any) : void
	{
		if(this._dataMap[key]===value) { 
			cc.log("无需存储：", this.localKey(key), key, value, typeof value);
			return; 
		}
		this._dataMap[key] = value;
		cc.log("存储：", this.localKey(key), key, value, typeof value);
	    this._localStorage && this._localStorage.setItem(this.localKey(key), value);
	}

	//移除缓存一条缓存记录
	public remove(key:string) : void
	{
		this.removeItem(this._dataMap, this.localKey(key));
	}

	//清除缓存
	public clear() : void
	{
		for (var key in this._dataMap)
		{
			this.removeItem(this._dataMap, key);
		}
	}

	//移除一条缓存记录
	private removeItem(map:Object, key:string) : void
	{
		if (map[key]!==null &&map[key]!==undefined)
		{
			delete map[key];
			this._localStorage && this._localStorage.removeItem(key);
		}
	}

	private localKey(key:string) : string
	{
		return this._name + key;
	}

}