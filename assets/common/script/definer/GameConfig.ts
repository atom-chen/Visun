import { GameKindEnum } from "./ConstDefine";
import ViewDefine from "./ViewDefine";

var GameConfig = {
	[GameKindEnum.BrCowCow] : {
		GameKind: GameKindEnum.BrCowCow,
		name: "百人牛牛",
		icon: "lobby/imgs/gameico2/ico_brnn",
		dir: "brnn",
		viewpath: ViewDefine.UIbrnn
	},
	[GameKindEnum.Longhu] : {
		GameKind: GameKindEnum.Longhu,
		name: "龙虎斗",
		icon: "lobby/imgs/gameico2/ico_longhu",
		dir: "longhu",
		viewpath: ViewDefine.UIlonghu
	},
	[GameKindEnum.Baccarat] : {
		GameKind: GameKindEnum.Baccarat,
		name: "百家乐",
		icon: "lobby/imgs/gameico2/ico_bjl",
		dir: "bjle",
		viewpath: ViewDefine.UIbjle
	},
	[GameKindEnum.Redpacket] : {
		GameKind: GameKindEnum.Redpacket,
		name: "抢红包",
		icon: "lobby/imgs/gameico2/ico_qhb",
		dir: "redbag",
		viewpath: ViewDefine.UIredbag
	},
	[GameKindEnum.Redblack] : {
		GameKind: GameKindEnum.Redblack,
		name: "红黑大战",
		icon: "lobby/imgs/gameico2/ico_redblack",
		dir: "honhei",
		viewpath: ViewDefine.UIRedblack
	},
	[GameKindEnum.Brttz] : {
		GameKind: GameKindEnum.Brttz,
		name: "百人推筒子",
		icon: "lobby/imgs/gameico2/ico_brttz",
		dir: "jskb",
		viewpath: ViewDefine.UIbrttz
	},
	[GameKindEnum.Toubao] : {
		GameKind: GameKindEnum.Toubao,
		name: "骰宝",
		icon: "lobby/imgs/gameico2/ico_brtb",
		dir: "saibao",
		viewpath: ViewDefine.UItoubao
	},

	
	[GameKindEnum.Zhajinhua] : {
		GameKind: GameKindEnum.Zhajinhua,
		name: "炸金花",
		icon: "lobby/imgs/gameico2/ico_zjh",
		spine: "lobby/spines/zhajinhua/skeleton",
		dir: "zjh",
		viewpath: ViewDefine.UIzjh
	},
	[GameKindEnum.QzCowcow] : {
		GameKind: GameKindEnum.QzCowcow,
		name: "抢庄牛牛",
		icon: "lobby/imgs/gameico2/ico_qznn",
		dir: "qznn",
		viewpath: ViewDefine.UIqznn
	},
	[GameKindEnum.TbCowcow] : {
		GameKind: GameKindEnum.TbCowcow,
		name: "通比牛牛",
		icon: "lobby/imgs/gameico2/ico_tbnn",
		dir: "tbnn",
		viewpath: ViewDefine.UItbnn
	},
	[GameKindEnum.Landlord] : {
		GameKind: GameKindEnum.Landlord,
		name: "斗地主",
		icon: "lobby/imgs/gameico2/ico_ddz",
		dir: "ddz",
		viewpath: ViewDefine.UIddz
	},
	[GameKindEnum.Blackjack] : {
		GameKind: GameKindEnum.Blackjack,
		name: "21点",
		icon: "lobby/imgs/gameico2/ico_dian21",
		dir: "dian21",
		viewpath: ViewDefine.UIdian21
	},
	[GameKindEnum.Sangong] : {
		GameKind: GameKindEnum.Sangong,
		name: "三公",
		icon: "lobby/imgs/gameico2/ico_sangong",
		dir: "sangong",
		viewpath: ViewDefine.UIsangong
	},
	[GameKindEnum.Water13] : {
		GameKind: GameKindEnum.Water13,
		name: "十三水",
		icon: "lobby/imgs/gameico2/ico_shui13",
		dir: "shui13",
		viewpath: ViewDefine.UIshui13
	},
	[GameKindEnum.Qzpaijiu] : {
		GameKind: GameKindEnum.Qzpaijiu,
		name: "抢庄牌九",
		icon: "lobby/imgs/gameico2/ico_qzpj",
		dir: "qzpj",
		viewpath: ViewDefine.UIpaijiu
	},
	[GameKindEnum.Suoha] : {
		GameKind: GameKindEnum.Suoha,
		name: "梭哈",
		icon: "lobby/imgs/gameico2/ico_suoha",
		dir: "suoha",
		viewpath: ViewDefine.UIsuoha
	},
	[GameKindEnum.Paodekuai] : {
		GameKind: GameKindEnum.Paodekuai,
		name: "跑得快",
		icon: "lobby/imgs/gameico2/ico_pdk",
		dir: "paodk",
		viewpath: ViewDefine.UIpdk
	},
	[GameKindEnum.Texas] : {
		GameKind: GameKindEnum.Texas,
		name: "德州扑克",
		icon: "lobby/imgs/gameico2/ico_dzpk",
		dir: "paodk",
		viewpath: ViewDefine.UItexas
	},
	[GameKindEnum.Ermj] : {
		GameKind: GameKindEnum.Ermj,
		name: "二人麻将",
		icon: "lobby/imgs/gameico2/ico_ermj",
		dir: "ermj",
		viewpath: ViewDefine.UIermj
	},
	[GameKindEnum.Slwh] : {
		GameKind: GameKindEnum.Slwh,
		name: "森林舞会",
		icon: "lobby/imgs/gameico2/ico_slwh",
		dir: "slwh",
		viewpath: ViewDefine.UIslwh
	},

	//---------------------------------------------------

	[GameKindEnum.Tuitongzi] : {
		GameKind: GameKindEnum.Tuitongzi,
		name: "推筒子",
		icon: "lobby/imgs/gameico2/ico_ttz",
		dir: "ttz",
	//	viewpath: ViewDefine.UIbrttz,
		orderv: 1
	},
	[GameKindEnum.Jszjh] : {
		GameKind: GameKindEnum.Jszjh,
		name: "极速炸金花",
		icon: "lobby/imgs/gameico2/ico_jszjh",
		dir: "jszjh",
	//	viewpath: ViewDefine.UIbrttz,
		orderv: 1
	},
	[GameKindEnum.Xlch] : {
		GameKind: GameKindEnum.Xlch,
		name: "血流成河",
		icon: "lobby/imgs/gameico2/ico_xlch",
		dir: "xlch",
	//	viewpath: ViewDefine.UIbrttz,
		orderv: 1
	},
	[GameKindEnum.K4zqznn] : {
		GameKind: GameKindEnum.K4zqznn,
		name: "看四张抢庄牛牛",
		icon: "lobby/imgs/gameico2/ico_k4zqznn",
		dir: "k4zqznn",
	//	viewpath: ViewDefine.UIbrttz,
		orderv: 1
	},

	// [GameKindEnum.Erba] : {
	// 	GameKind: GameKindEnum.Erba,
	// 	name: "二八杠",
	// 	icon: "lobby/imgs/gameico2/ico_erba",
	// 	dir: "erba",
	// 	viewpath: ViewDefine.UIerba,
	// 	orderv: 1
	// },
	// [GameKindEnum.Buyu] : {
	// 	GameKind: GameKindEnum.Buyu,
	// 	name: "捕鱼",
	// 	icon: "lobby/imgs/gameico2/ico_bydr",
	// 	dir: "buyu",
	// 	viewpath: ViewDefine.UIbuyu,
	// 	orderv: 3
	// },
	// [GameKindEnum.BirdBeast] : {
	// 	GameKind: GameKindEnum.BirdBeast,
	// 	name: "飞禽走兽",
	// 	icon: "lobby/imgs/gameico2/ico_fqzs",
	// 	dir: "fqzs",
	// 	viewpath: ViewDefine.UIfqzs,
	// 	orderv: 2
	// },

	// [GameKindEnum.RPG] : {
	// 	GameKind: GameKindEnum.RPG,
	// 	name: "RPG",
	// 	icon: "lobby/imgs/gameico2/ico_rpg",
	// 	dir: "jskb",
	// 	viewpath: ViewDefine.battle1
	// },
};

export default GameConfig;