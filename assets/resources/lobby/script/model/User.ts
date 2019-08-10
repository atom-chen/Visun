export default class User {
	private static _userList:object = {};
	private static _heroId:number = 0;

	banRank: 0
	bankcoin: 0
	baseBankCoin: 0
	bindStatus: 1
	binderId: 0
	channelId: 1003
	code: 200
	coin: 28
	dailyRecharge: 0
	dailyRechargeMax: 0
	diamond: 0
	headImg: "m_1.png"
	ip: "127.0.0.1"
	isInTable: 0
	level: 0
	loginTime: 1564645229000
	msg: "OK"
	nickname: "??"
	openid: "625896525"
	platformId: 0
	pos: ""
	psword: ""
	regTime: 1564641596000
	sex: 0
	ticket: 0
	userId: 10034
	userType: 2
	username: "10034"


	public static setHeroId(uid:number)
	{
		this._heroId = uid;
	}

	public static updateUser(info:User)
	{
		this._userList[info.userId] = this._userList[info.userId] || new User();
		var obj = this._userList[info.userId];
		for (var attr in info) {
		//	cc.log("----", attr, info[attr]);
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

	public static getHeroId() : number {
		if(this._heroId===null || this._heroId===undefined){
			return null;
		}
		return this._heroId;
	}
}
