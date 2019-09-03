import User from "./User";
import ModelBase from "../../../kernel/model/ModelBase";

export default class UserMgr extends ModelBase{
    private static _instance:UserMgr = null;
    private _userList:object = {};
    private _heroId:number = 0;
    
    private constructor(){
		super();
	}
    public static instance() : UserMgr {
        if(!UserMgr._instance) { UserMgr._instance = new UserMgr; }
        return UserMgr._instance;
	}
	public static destroy() : void {
		if(UserMgr._instance) {
			UserMgr._instance.clear();
			UserMgr._instance = null;
		}
	}
    public on_clear() {
		this._userList = {};
		this._heroId = 0;
	}

    public updateUser(info:User)
	{
		this._userList[info.userId] = this._userList[info.userId] || new User();
		var obj = this._userList[info.userId];
		for (var attr in info) {
		//	cc.log("----", attr, info[attr]);
			obj[attr] = info[attr];
		}
    }
    
    public setHeroId(uid:number)
	{
		this._heroId = uid;
    }
    
    public getHeroId() : number {
		if(this._heroId===null || this._heroId===undefined){
			return null;
		}
		return this._heroId;
	}

	public getUser(userId:number) : User
	{
		return this._userList[userId];
	}

	public getAllUser() : object
	{
		return this._userList;
	}

	public getHero() : User
	{
		return this._userList[this._heroId];
	}
	
}
