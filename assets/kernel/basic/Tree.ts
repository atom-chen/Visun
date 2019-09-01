export default class TreeNode {
	protected _id:number|string;
	protected _pid:number|string;
	protected _data:any;
	protected _expanded:boolean;
	protected _childlist:Array<TreeNode>;

	set id(v:number|string) {
		this._id = v;
	}
	get id() : number|string {
		return this._id;
	}

	set pid(v:number|string) {
		this._pid = v;
	}
	get pid() : number|string {
		return this._pid;
	}

	set data(v:any) {
		this._data = v;
	}
	get data() : any {
		return this._data;
	}

	set expanded(v:boolean) {
		this._expanded = v;
	}
	get expanded() : boolean {
		return this._expanded;
	}

	get childlist() : Array<TreeNode> {
		return this._childlist;
	}
}
