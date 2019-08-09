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
		//风云榜
		name : "req_ranklist",
		reqType : "GET",
		domain : "",
		addr : "testPay/queryrank",
		addrparams : [],
		params : [
			["type" , "number"],
            ["userID", "number"]
		]
	},
	{
		//获取游戏公告
		name : "req_game_aicive_notice",
		reqType : "GET",
		domain : "",
		addr : "testPay/gameActiveNotice",
		addrparams : [],
		params : [
			["sid" , "string"]
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
	{
		//保险柜 存入、取出
		name : "req_safebox",
		reqType : "GET",
		domain : "",
		addr : "user/coinbank",
		addrparams : [],
		params : [
			["type" , "string"], // 0:存入  1:取出
			["coin" , "number"],
			["userId" , "number"]
		]
	},
	{
		//推广代理：我的分享
		name : "req_spread_myshare",
		reqType : "GET",
		domain : "",
		addr : "testPay/getPromotionLinks",
		addrparams : [],
		params : [
			["userId" , "number"]
		]
	},
	{
		//推广代理：我的佣金
		name : "req_spread_mycommission",
		reqType : "GET",
		domain : "",
		addr : "testPay/queryAgent",
		addrparams : [],
		params : [
			["userId" , "number"],
			["type", "number"] // type===1
		]
	},
	{
		//推广代理：我的团队
		name : "req_spread_myteam",
		reqType : "GET",
		domain : "",
		addr : "testPay/queryAgent",
		addrparams : [],
		params : [
			["userId" , "number"],
			["type", "number"], // type===2
			["page", "number"],
			["size", "number"]
		]
	},
	{
		//推广代理：我的提现
		name : "req_spread_mywithdraw",
		reqType : "GET",
		domain : "",
		addr : "testPay/queryAgent",
		addrparams : [],
		params : [
			["userId" , "number"],
			["type", "number"] // type===3
		]
	},
	{
		//战绩
		name : "req_record_fight",
		reqType : "GET",
		domain : "",
		addr : "record/getRecordRoundCoin",
		addrparams : [],
		params : [
			["userId" , "number"],
			["pageSize", "number"],
			["pageNo", "number"],
			["gameId", "string"],
			["channelId", "number"],
			["tableType", "number"]
		]
	},
	//------------------------------------------------------------------
	{
		//大厅游戏列表
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
		//点击大厅游戏按钮，进入选房界面的选房信息
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
		//申请进入百人牛牛，会返回房间的ws地址
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
		//申请进入金币玩法类房间
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
	}
];

export default http_rules;