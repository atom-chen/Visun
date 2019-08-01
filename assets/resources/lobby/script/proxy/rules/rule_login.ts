var rule_login = [
	{
		name : "req_youke_login",
		reqType : "GET",
		domain : "",
		addr : "user/login",
		addrparams : [],
		params : [
			[ "deviceID", "string" ],
			[ "platformId", "number" ],
		]
	},
	{
		name : "req_userinfo",
		reqType : "GET",
		domain : "",
		addr : "user/getUserInfo",
		addrparams : [],
		params : [
			[ "userId", "number" ]
		]
	}
];

export default rule_login;