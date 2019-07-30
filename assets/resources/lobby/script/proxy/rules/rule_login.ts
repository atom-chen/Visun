var rule_login = [
	{
		name : "req_hallinfo",
		reqType : "GET",
		domain : "",
		addr : "user/getHallInfo",
		addrparams : [],
		params : [
			[ "token", "string" ],
			[ "mobileType", "number" ],
			[ "gameType", "number", 0 ],
		]
	},
	{
		name : "req_userinfo",
		reqType : "GET",
		domain : "",
		addr : "user/getUserInfo",
		addrparams : [],
		params : [
			[ "token", "string" ],
		]
	}
];

export default rule_login;