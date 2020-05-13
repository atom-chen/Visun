var http_rules = [
	{
		//游客登录
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
		//请求用户信息
		name : "req_userinfo",
		reqType : "GET",
		domain : "",
		addr : "user/getUserInfo",
		addrparams : [],
		params : [
			[ "userId", "number" ]
		]
	},
	{
		//获取客服信息
		name : "req_get_kefu",
		reqType : "GET",
		domain : "",
		addr : "testPay/getkefu",
		addrparams : [],
		params : [
			["type" , "string"] //1:QQ客服  2:微信  3:在线客服
		]
	},
];

module.exports = http_rules;