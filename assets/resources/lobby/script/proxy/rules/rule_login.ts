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
	},

	{
		name : "req_game_list",
		reqType : "GET",
		domain : "",
		addr : "table/onlinegames",
		addrparams : [],
		params : [
			[ "sid", "string" ]
		]
	},
	{
		name : "req_room_select_info",
		reqType : "GET",
		domain : "",
		addr : "table/getCoinTableInfo",
		addrparams : [],
		params : [
			[ "gameId", "number" ],
			[ "channelId", "number" ]
		]
	},
	{
		name : "req_enter_room",
		reqType : "POST",
		domain : "",
		addr : "table/joinBRNN",
		addrparams : [],
		params : [
			[ "data", "string" ]
		]
	},
];

export default rule_login;