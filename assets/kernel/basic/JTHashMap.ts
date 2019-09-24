import { JTIPoolObject } from "../pool/JTIPoolObject";
import JTPool from "../pool/JTPool";


export default class JTHashMap implements JTIPoolObject
{
    private _values:any[] = [];
    private _keys:any[] = [];
    private static _pool:JTPool<JTHashMap> = null;
    
    /**
     * 获取所有的子元素列表。
     */
    public get values():any[] 
    {
        return this._values;
    }
    
    /**
     * 获取所有的子元素键名列表。
     */
    public get keys():any[] 
    {
        return this._keys;
    }
    
    /**
     * 给指定的键名设置值。
     * @param	key 键名。
     * @param	value 值。
     */
    public set(key:any, value:any):void 
    {
        var index:number = this.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
            return;
        }
        this._keys.push(key);
        this._values.push(value);
    }
    
    /**
     * 获取指定对象的键名索引。
     * @param	key 键名对象。
     * @return 键名索引。
     */
    public indexOf(key:any):number 
    {
        var index:number = this._keys.indexOf(key);
        if (index >= 0) return index;
        key = (typeof key == 'string') ? parseInt(key) : ((typeof key == 'number') ? key.toString() : key);
        return this._keys.indexOf(key);
    }
    
    /**
     * 返回指定键名的值。
     * @param	key 键名对象。
     * @return 指定键名的值。
     */
    public get(key:any):any 
    {
        var index:number = this.indexOf(key);
        return index < 0 ? null : this._values[index];
    }

    /**
     * 根据键值来创建对象
     * @param key 键名对象。
     * @param cls 创建对象的class型
     * @return 如果有直接返回该对象，没有则会根据cls来自动new cls();
     */
    public create<T extends any>(key:any, cls:any):T
    {
        let item:T = this.get(key);
        if (!item)
        {
                item = new cls() as T;
                this.set(key, item);
        }
        return item;
    }
    
    /**
     * 移除指定键名的值。
     * @param	key 键名对象。
     * @return 是否成功移除。
     */
    public remove(key:any):boolean {
        var index:number = this.indexOf(key);
        if (index >= 0) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    }
    
    /**
     * 清除此对象的键名列表和键值列表。
     */
    public clear():void 
    {
        this._values.length = 0;
        this._keys.length = 0;
    }

    /**
     * 回收对象
     * 在使用JTPool.put()方法时会自动调用此方法
     */
    public recycle():void
    {
        this.clear();
    }

    /**
     * 合并HashMap
     * @param map 合并的对象 
     * @param recycle 是否回收，回收则会自动清空map数据并回收hashMap对象到对象池中
     */
    public merge(hashMap:JTHashMap, recycle?:boolean):JTHashMap
    {
        let keys:any[] = hashMap.keys;
        for (let i:number = 0; i < keys.length; i++)
        {
                let k:any = keys[i]
                let v:any = hashMap.get(k);
                this.set(k, v);
        }
        if (recycle)
        {
            hashMap.recycle();
        }
        return this;
    }

 /**
  * 合并并且浅复制对象(与merge不同,此方法只合并对象，并且从内存重新new一个新的hashMap来保存两个hashMap的最终数据)
  * @param hashMap 合并的对象
  * @param recycle 是否回收，回收则会自动清空map数据并回收hashMap对象到对象池中
  */
    public concat(hashMap:JTHashMap, recycle?:boolean):JTHashMap
    {
        let dataMap:JTHashMap = JTHashMap.get();
        dataMap.merge(this, recycle);
        dataMap.merge(hashMap, recycle);
        return dataMap;
    }
    
    /**
     * 从对象池里创建event对象
     */
    public static get():JTHashMap
    {
        if (!this._pool)
        {
                this._pool = JTPool.getInstance(JTHashMap) as JTPool<JTHashMap>
        }
        return this._pool.get();
    }

    /**
     * 把event对象放入对象池里
     * @param evt event对象 
     */
    public static put(evt:JTHashMap):void
    {
            this._pool.put(evt);
    }

    /**
     * 把一个对应的hashMap 键数组和值数组转换成一个对应的hashMap对象
     * @param keys 键数组 （以keys做为循环遍历）
     * @param values 值数组
     */
    public static convert(keys:any[], values:any[]):JTHashMap
    {
            let hashMap:JTHashMap = this.get();
            for (let i:number = 0; i < keys.length; i++)
            {
                    hashMap.set(keys[i], values[i]);
            }
            return hashMap;
    }

}