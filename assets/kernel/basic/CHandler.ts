//---------------------------------
// 回调封装
//---------------------------------
export default class CHandler {
	private _fn:Function;
	private _target:any;
	private _args:any[];
	private _autoClean:boolean = false;

	public constructor(fn:Function, target:any, ...args:any[]) 
	{
		this._fn = fn;
		this._target = target;
		this._args = args;
	}

	public getTarget() : any 
	{ 
		return this._target; 
	}

	public call(part:any=null) : void
	{
		var ret:any;
		if(this._args && this._args.length > 0) {
			if(part) {
				ret = this._fn.apply(this._target, [part].concat(this._args));
			} else {
				ret = this._fn.apply(this._target, this._args);
			}
		}
		else {
			if(part) {
				ret = this._fn.call(this._target, part);
			} else {
				ret = this._fn.call(this._target);
			}
		}
		if(this._autoClean) {
			this.clear();
		}
		return ret;
	}

	public callWith(...extra:any[]) 
	{
		var ret:any;
		if(this._args && this._args.length>0){
			if(extra) {
				ret = this._fn.apply(this._target, this._args.concat(extra));
			} else {
				ret = this._fn.apply(this._target, this._args);
			}
		}
		else {
			if(extra) {
				ret = this._fn.apply(this._target, extra);
			} else {
				ret = this._fn.call(this._target);
			}
		}
		
		if(this._autoClean) {
			this.clear();
		}
		return ret;
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
