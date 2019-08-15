//---------------------------------------------------------
// 该文件自动生成，不要手动更改
//---------------------------------------------------------
export default {
	"req_youke_login": {
		"name": "req_youke_login",
		"reqType": "GET",
		"domain": "",
		"addr": "user/login",
		"addrparams": [],
		"params": [
			[
				"deviceID",
				"string"
			],
			[
				"platformId",
				"number"
			]
		]
	},
	"req_userinfo": {
		"name": "req_userinfo",
		"reqType": "GET",
		"domain": "",
		"addr": "user/getUserInfo",
		"addrparams": [],
		"params": [
			[
				"userId",
				"number"
			]
		]
	},
	"req_ranklist": {
		"name": "req_ranklist",
		"reqType": "GET",
		"domain": "",
		"addr": "testPay/queryrank",
		"addrparams": [],
		"params": [
			[
				"type",
				"number"
			],
			[
				"userID",
				"number"
			]
		]
	},
	"req_game_aicive_notice": {
		"name": "req_game_aicive_notice",
		"reqType": "GET",
		"domain": "",
		"addr": "testPay/gameActiveNotice",
		"addrparams": [],
		"params": [
			[
				"sid",
				"string"
			]
		]
	},
	"req_get_kefu": {
		"name": "req_get_kefu",
		"reqType": "GET",
		"domain": "",
		"addr": "testPay/getkefu",
		"addrparams": [],
		"params": [
			[
				"type",
				"string"
			]
		]
	},
	"req_safebox": {
		"name": "req_safebox",
		"reqType": "GET",
		"domain": "",
		"addr": "user/coinbank",
		"addrparams": [],
		"params": [
			[
				"type",
				"string"
			],
			[
				"coin",
				"number"
			],
			[
				"userId",
				"number"
			]
		]
	},
	"req_spread_myshare": {
		"name": "req_spread_myshare",
		"reqType": "GET",
		"domain": "",
		"addr": "testPay/getPromotionLinks",
		"addrparams": [],
		"params": [
			[
				"userId",
				"number"
			]
		]
	},
	"req_spread_mycommission": {
		"name": "req_spread_mycommission",
		"reqType": "GET",
		"domain": "",
		"addr": "testPay/queryAgent",
		"addrparams": [],
		"params": [
			[
				"userId",
				"number"
			],
			[
				"type",
				"number"
			]
		]
	},
	"req_spread_myteam": {
		"name": "req_spread_myteam",
		"reqType": "GET",
		"domain": "",
		"addr": "testPay/queryAgent",
		"addrparams": [],
		"params": [
			[
				"userId",
				"number"
			],
			[
				"type",
				"number"
			],
			[
				"page",
				"number"
			],
			[
				"size",
				"number"
			]
		]
	},
	"req_spread_mywithdraw": {
		"name": "req_spread_mywithdraw",
		"reqType": "GET",
		"domain": "",
		"addr": "testPay/queryAgent",
		"addrparams": [],
		"params": [
			[
				"userId",
				"number"
			],
			[
				"type",
				"number"
			]
		]
	},
	"req_record_fight": {
		"name": "req_record_fight",
		"reqType": "GET",
		"domain": "",
		"addr": "record/getRecordRoundCoin",
		"addrparams": [],
		"params": [
			[
				"userId",
				"number"
			],
			[
				"pageSize",
				"number"
			],
			[
				"pageNo",
				"number"
			],
			[
				"gameId",
				"string"
			],
			[
				"channelId",
				"number"
			],
			[
				"tableType",
				"number"
			]
		]
	},
	"req_game_list": {
		"name": "req_game_list",
		"reqType": "GET",
		"domain": "",
		"addr": "table/onlinegames",
		"addrparams": [],
		"params": [
			[
				"sid",
				"string"
			]
		]
	},
	"req_room_select_info": {
		"name": "req_room_select_info",
		"reqType": "GET",
		"domain": "",
		"addr": "table/getCoinTableInfo",
		"addrparams": [],
		"params": [
			[
				"gameId",
				"string"
			],
			[
				"channelId",
				"number"
			]
		]
	},
	"req_enter_br_room": {
		"name": "req_enter_br_room",
		"reqType": "POST",
		"domain": "",
		"addr": "table/joinBRNN",
		"addrparams": [],
		"params": [
			[
				"sid",
				"string"
			],
			[
				"gameId",
				"string"
			],
			[
				"tableType",
				"number"
			],
			[
				"gameType",
				"number"
			],
			[
				"clientVersion",
				"string"
			],
			[
				"channelId",
				"number"
			]
		]
	},
	"req_enter_coin_room": {
		"name": "req_enter_coin_room",
		"reqType": "POST",
		"domain": "",
		"addr": "table/coinjoin",
		"addrparams": [],
		"params": [
			[
				"sid",
				"string"
			],
			[
				"gameId",
				"string"
			],
			[
				"tableType",
				"number"
			],
			[
				"gameType",
				"number"
			],
			[
				"clientVersion",
				"string"
			],
			[
				"channelId",
				"number"
			]
		]
	}
}