var http_rules = [
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
			[ "gameId", "string" ],
			[ "channelId", "number" ]
		]
	},
	{
		name : "req_enter_br_room",
		reqType : "POST",
		domain : "",
		addr : "table/joinBRNN",
		addrparams : [],
		params : [
			["sid" , "string"],
            ["gameId", "string"],
            ["tableType", "number"],
            ["gameType", "number"],
            ["clientVersion", "string"],
            ["channelId", "number"]
		]
	},
	{
		name : "req_enter_coin_room",
		reqType : "POST",
		domain : "",
		addr : "table/coinjoin",
		addrparams : [],
		params : [
			["sid" , "string"],
            ["gameId", "string"],
            ["tableType", "number"],
            ["gameType", "number"],
            ["clientVersion", "string"],
            ["channelId", "number"]
		]
	},
];

export default http_rules;