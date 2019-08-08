//---------------------------------
// 回调封装
//---------------------------------
export default class Caller {
	private _fn:Function;
	private _target:any;
	private _args:any[];
	private _autoClean:boolean;

	public constructor(fn:Function, target:any, ...args:any[]) {
		this._fn = fn;
		this._target = target;
		this._args = args;
	}

	public call(part:any=null) : void
	{
		if(part) {
			this._fn.apply(this._target, [part].concat(this._args));
		} else {
			this._fn.apply(this._target, this._args);
		}
		if(this._autoClean) {
			this.clear();
		}
	}

	public clear() : void
	{
		this._fn = null;
		this._target = null;
		if(this._args) { this._args.length = 0; }
		this._args = null;
	}

	public setAutoClean(bFlag:boolean) : void 
	{
		this._autoClean = bFlag;
	}
}
