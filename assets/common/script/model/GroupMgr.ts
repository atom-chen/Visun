import Group from "./Group";
import ModelBase from "../../../kernel/model/ModelBase";

export default class GroupMgr extends ModelBase {
	private static _instance:GroupMgr = null;
	private constructor() {
		super();
		this._groups = {};
	}
	public static getInstance() : GroupMgr {
        if(!GroupMgr._instance) { GroupMgr._instance = new GroupMgr; }
        return GroupMgr._instance;
	}
	public static delInstance() : void {
		if(GroupMgr._instance) {
			GroupMgr._instance.clear();
			GroupMgr._instance = null;
		}
	}
	public on_clear() {
		this._groups = {};
	}

	private _groups:{[key:number]:Group};


	public addGroup(grp:Group) {
		this._groups[grp.getId()] = grp;
	}

	public delGroup(grpId:number) {
		this._groups[grpId] = null;
	}

	public getGroup(grpId:number) : Group {
		return this._groups[grpId];
	}
	
}