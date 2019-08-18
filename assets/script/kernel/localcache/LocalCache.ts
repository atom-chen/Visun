//------------------------------------------
// 本地文件缓存
//------------------------------------------
export default class LocalCache 
{
    private static _all_cache:{[key:string]:any} = {};
    private _secret:any;
    private _filename:string;
    private _datas:object = {};

    private constructor(filename:string) 
    {
        this._filename = filename;
        this._datas = {};
        this.load();
    }

    public static instance(key:string) : LocalCache
    {
        if(!LocalCache._all_cache[key]){ 
            LocalCache._all_cache[key] = new LocalCache(key); 
        }
        return LocalCache._all_cache[key];
    }

    //设置密匙
    public setSecret(mishi:string)
    {

    }

    //读取本地文件
    public load()
    {
        if( !this._filename || this._filename === "") {
            cc.log("加载失败：没有本地文件");
            return;
        }
    }

    //删除本地文件
    public deleteLocalFile()
    {
        if( !this._filename || this._filename === "") {
            cc.log("删除失败：没有本地文件");
            return;
        }
    }

    //添加/更新
    public update(key:string|number, value:any) : void
    {
        this._datas[key] = value;
    }

    //删除
    public remove(key:string|number) : void
    {
        this._datas[key] = null;
    }

    //获取
    public getData(key:string|number) : any
    {
        return this._datas[key];
    }
}
