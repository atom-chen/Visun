export default class User {
	private static _userList = {};
	public channelId = 0;
	public coin = 0;
	public headImg = "";
	public loginTime = 0;
	public nickname = "";
	public regTime = 0;
	public sex = 1;
	public userId = 0;
	public username = "";

	public static updateUser(info:User)
	{
		this._userList[info.userId] = this._userList[info.userId] || new User();
		var obj = this._userList[info.userId];
		for (var attr in info) {
			cc.log("----", attr, info[attr]);
			obj[attr] = info[attr];
		}
	}
}
