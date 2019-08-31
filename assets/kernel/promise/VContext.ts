import Procedure from "./Procedure";

export default class VContext {

	protected _root_node:Procedure = null;
	protected _tmp_data:{[key:string]:any;} = {};

	public setRootProcedure(root:Procedure)
	{
		this._root_node = root;
	}

	public getRootProcedure() : Procedure
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