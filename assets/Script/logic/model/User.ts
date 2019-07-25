export default class User {
	private static _userList:object = {};
	private static _heroId:number = 0;

	public channelId:number = 0;
	public coin:number = 0;
	public headImg:string = "";
	public loginTime:number = 0;
	public nickname:string = "";
	public regTime:number = 0;
	public sex:number = 1;
	public userId:number = 0;
	public username:string = "";

	public static setHeroId(uid:number)
	{
		this._heroId = uid;
	}

	public static updateUser(info:User)
	{
		this._userList[info.userId] = this._userList[info.userId] || new User();
		var obj = this._userList[info.userId];
		for (var attr in info) {
			cc.log("----", attr, info[attr]);
			obj[attr] = info[attr];
		}
	}

	public static getUser(userId:number) : User
	{
		return this._userList[userId];
	}

	public static getAllUser() : object
	{
		return this._userList;
	}

	public static getHero() : User
	{
		return this._userList[this._heroId];
	}
}
