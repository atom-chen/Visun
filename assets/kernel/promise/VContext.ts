import BehaviorBase from "./BehaviorBase";

export default class VContext {

	protected _root_node:BehaviorBase = null;
	protected _tmp_data:{[key:string]:any;} = {};

	public setRootBehavior(root:BehaviorBase)
	{
		this._root_node = root;
	}

	public getRootBehavior() : BehaviorBase
	{
		return this._root_node;
	}

	public setData(key:string, v:any)
	{
		this._tmp_data[key] = v;
	}

	public getData(key:string)
	{
		return this._tmp_data[key];
	}

}