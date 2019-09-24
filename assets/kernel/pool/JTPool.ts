import { JTIPoolObject } from "./JTIPoolObject";
import { JTIPool } from "./JTIPool";
import JTHashMap from "../basic/JTHashMap";

/**
* 对象池
*/
export default class JTPool<T extends JTIPoolObject> implements JTIPool
{
	//对象池的Class对象
	protected _cls:any = null;

	//对象池可用对象列表
	protected _items:T[] = null;

	//总共创建了多少个对象
	protected _totalCount:number = 0;

	//特殊对象，需要通过Class[_createName]来创建对象: 例如FariyGui对显示对象需要通过调用Class[newInstance]()来创建
	protected _createName:string = null;

	
	/**
	 * 
	 * @param cls 
	 * @param createName 
	 */
	constructor(cls: any, createName?:string) 
	{
		this._cls = cls;
		this._createName = createName;
		this._items = [];
	}

	/**
	 * 通过对象池创建对象
	 * 有就直接从池里面拿，没有就直接创建
	 */
	public get():T
	{
		let item:T = null;
		if (this.isAvailable())
		{
			item = this._items.pop();
		}
		else
		{
			var cls:any = this._cls;
			item = this._createName ? cls[this._createName]() : new cls();  
			this._totalCount ++;
		}
		return item;
	}

	/**
	 * 特殊对象，需要通过Class[_createName]来创建对象: 例如FariyGui对显示对象需要通过调用Class[newInstance]()来创建
	 * @param createName  创建方法名
	 */
	public getObject(createName:string):T
	{
		let item:T = null;
		if (this.isAvailable())
		{
			item = this._items.pop();
		}
		else
		{
			var cls:any = this._cls;
			this._createName = createName;
			item = cls[createName]();  
			this._totalCount ++;
		}
		return item;
	}       

	/**
	 * 总共创建了多少个对象
	 */
	public get totalCount():number
	{
		return this._totalCount;
	}

	/**
	 * 当前池对象个数
	 */
	public length():number
	{
		return this._items.length;
	}

	/**
	 * 移除某一个对象
	 * @param item 对象
	 */
	public remove(item:T):T
	{
		var index:number = this._items.indexOf(item);
		if (index == -1)
		{
			cc.log("[del]Can't Find The Object Of The :" + this._cls);
		}
		else
		{
			var items:T[] = this._items.splice(index, 1);
			return items.shift();
		}
		return null;
	}

	/**
	 * 销毁对象池
	 */
	public dispose():void
	{
		while(this._items.length)
		{
			let item:JTIPoolObject = this._items.shift();
			item.recycle();
		}
	}

	/**
	 * 池里面是否还有可用对象
	 */
	public isAvailable():boolean
	{
		return this._items.length > 0;
	}

	/**
	 * 往池里面放一个对象
	 * @param item 对象
	 */
	public put(item:T):void
	{
		if (!item) return;
		item.recycle();
		this._items.indexOf(item) == -1 && this._items.push(item);
	}

	/**
	 * 对象池对象的列表
	 */
	public get items():T[]
	{
		return this._items;
	}

	/**
	 * 对象池对象的列表
	 */
	public set items(value:T[])
	{
		this._items = value;
	}

	public get cls():any
	{
		return this._cls;
	}
	
	/**
	 * 能过Class类型来实例化对象池
	 * @param cls Class类型
	 */
	public static getInstance(cls:any):JTIPool
	{
		let pool:JTIPool = this.poolMap.get(cls)
		if (!pool) 
		{
			pool = new JTPool(cls);
			this.poolMap.set(cls, pool);
		}
		return pool as JTIPool;
	}

	/**
	 * 通过Class类型来释放某个对象池
	 * @param cls Class类型
	 */
	public static dispose(cls:any):void
	{
		let pool:JTIPool = this.getInstance(cls);
		this.poolMap.remove(cls);
		pool.dispose();
	}

	/**
	 * 对象池Map-管理所有的对象的池
	 */
	protected static _poolManager:JTHashMap = null;
	public static get poolMap():JTHashMap
	{
		if (!this._poolManager) this._poolManager = new JTHashMap();
		let poolMap:JTHashMap = this._poolManager.get("pool");
		if (!poolMap)
		{
			poolMap = new JTHashMap();
			this._poolManager.set("pool", poolMap)
		}
		return poolMap;
	}
}