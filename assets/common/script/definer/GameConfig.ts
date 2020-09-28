import { GameKindEnum } from "./ConstDefine";
import ViewDefine from "./ViewDefine";

var GameConfig = {
	//百人
	[GameKindEnum.BrCowCow] : {
		GameKind: GameKindEnum.BrCowCow,
		name: "万人牛牛",
		icon: "lobby/imgs/gameico2/ico_brnn",
		sdir: "brnn",
		viewpath: ViewDefine.UIbrnn,
		orderv: 2
	},
	[GameKindEnum.Longhu] : {
		GameKind: GameKindEnum.Longhu,
		name: "龙虎斗",
		icon: "lobby/imgs/gameico2/ico_longhu",
		sdir: "longhu",
		viewpath: ViewDefine.UIlonghu,
		orderv: 2
	},
	[GameKindEnum.Baccarat] : {
		GameKind: GameKindEnum.Baccarat,
		name: "百家乐",
		icon: "lobby/imgs/gameico2/ico_bjl",
		sdir: "bjle",
		viewpath: ViewDefine.UIbjle,
		orderv: 2
	},
	[GameKindEnum.Redpacket] : {
		GameKind: GameKindEnum.Redpacket,
		name: "抢红包",
		icon: "lobby/imgs/gameico2/ico_qhb",
		sdir: "redbag",
		viewpath: ViewDefine.UIredbag,
		orderv: 2
	},
	[GameKindEnum.Redblack] : {
		GameKind: GameKindEnum.Redblack,
		name: "红黑大战",
		icon: "lobby/imgs/gameico2/ico_redblack",
		sdir: "redblack",
		viewpath: ViewDefine.UIRedblack,
		orderv: 2
	},
	[GameKindEnum.Brttz] : {
		GameKind: GameKindEnum.Brttz,
		name: "万人推筒子",
		icon: "lobby/imgs/gameico2/ico_brttz",
		sdir: "jskb",
		viewpath: ViewDefine.UIbrttz,
		orderv: 2
	},
	[GameKindEnum.Toubao] : {
		GameKind: GameKindEnum.Toubao,
		name: "万人骰宝",
		icon: "lobby/imgs/gameico2/ico_brtb",
		sdir: "saibao",
		viewpath: ViewDefine.UItoubao,
		orderv: 2
	},
	[GameKindEnum.Slwh] : {
		GameKind: GameKindEnum.Slwh,
		name: "森林舞会",
		icon: "lobby/imgs/gameico2/ico_slwh",
		sdir: "slwh",
		viewpath: ViewDefine.UIslwh,
		orderv: 1
	},

	//对战
	[GameKindEnum.Zhajinhua] : {
		GameKind: GameKindEnum.Zhajinhua,
		name: "炸金花",
		icon: "lobby/imgs/gameico2/ico_zjh",
		spine: "lobby/spines/zhajinhua/skeleton",
		sdir: "zjh",
		viewpath: ViewDefine.UIzjh,
		orderv: 1
	},
	[GameKindEnum.QzCowcow] : {
		GameKind: GameKindEnum.QzCowcow,
		name: "抢庄牛牛",
		icon: "lobby/imgs/gameico2/ico_qznn",
		sdir: "qznn",
		viewpath: ViewDefine.UIqznn,
		orderv: 1
	},
	[GameKindEnum.TbCowcow] : {
		GameKind: GameKindEnum.TbCowcow,
		name: "通比牛牛",
		icon: "lobby/imgs/gameico2/ico_tbnn",
		sdir: "tbnn",
		viewpath: ViewDefine.UItbnn,
		orderv: 1
	},
	[GameKindEnum.Landlord] : {
		GameKind: GameKindEnum.Landlord,
		name: "斗地主",
		icon: "lobby/imgs/gameico2/ico_ddz",
		sdir: "ddz",
		viewpath: ViewDefine.UIddz,
		bgm_music: "appqp/audios/music_ddz",
		orderv: 1
	},
	[GameKindEnum.Blackjack] : {
		GameKind: GameKindEnum.Blackjack,
		name: "21点",
		icon: "lobby/imgs/gameico2/ico_dian21",
		sdir: "dian21",
		viewpath: ViewDefine.UIdian21,
		orderv: 1
	},
	[GameKindEnum.Sangong] : {
		GameKind: GameKindEnum.Sangong,
		name: "三公",
		icon: "lobby/imgs/gameico2/ico_sangong",
		sdir: "sangong",
		viewpath: ViewDefine.UIsangong,
		orderv: 1
	},
	[GameKindEnum.Water13] : {
		GameKind: GameKindEnum.Water13,
		name: "十三水",
		icon: "lobby/imgs/gameico2/ico_shui13",
		sdir: "shui13",
		viewpath: ViewDefine.UIshui13,
		orderv: 1
	},
	[GameKindEnum.Qzpaijiu] : {
		GameKind: GameKindEnum.Qzpaijiu,
		name: "抢庄牌九",
		icon: "lobby/imgs/gameico2/ico_qzpj",
		sdir: "qzpj",
		viewpath: ViewDefine.UIpaijiu,
		orderv: 1
	},
	[GameKindEnum.Suoha] : {
		GameKind: GameKindEnum.Suoha,
		name: "梭哈",
		icon: "lobby/imgs/gameico2/ico_suoha",
		sdir: "suoha",
		viewpath: ViewDefine.UIsuoha,
		orderv: 1
	},
	[GameKindEnum.Paodekuai] : {
		GameKind: GameKindEnum.Paodekuai,
		name: "跑得快",
		icon: "lobby/imgs/gameico2/ico_pdk",
		sdir: "paodk",
		viewpath: ViewDefine.UIpdk,
		orderv: 1
	},
	[GameKindEnum.Texas] : {
		GameKind: GameKindEnum.Texas,
		name: "德州扑克",
		icon: "lobby/imgs/gameico2/ico_dzpk",
		sdir: "paodk",
		viewpath: ViewDefine.UItexas,
		orderv: 1
	},
	[GameKindEnum.Ermj] : {
		GameKind: GameKindEnum.Ermj,
		name: "二人麻将",
		icon: "lobby/imgs/gameico2/ico_ermj",
		sdir: "ermj",
		viewpath: ViewDefine.UIermj,
		orderv: 1
	},
	[GameKindEnum.K4zqznn] : {
		GameKind: GameKindEnum.K4zqznn,
		name: "看四张抢庄牛牛",
		icon: "lobby/imgs/gameico2/ico_k4zqznn",
		sdir: "k4zqznn",
		viewpath: ViewDefine.UIk4zqznn,
		orderv: 1
	},
	[GameKindEnum.Jszjh] : {
		GameKind: GameKindEnum.Jszjh,
		name: "极速炸金花",
		icon: "lobby/imgs/gameico2/ico_jszjh",
		sdir: "jszjh",
		viewpath: ViewDefine.UIjszjh,
		orderv: 1
	},
	[GameKindEnum.Xlch] : {
		GameKind: GameKindEnum.Xlch,
		name: "血流成河",
		icon: "lobby/imgs/gameico2/ico_xlch",
		sdir: "xlch",
		viewpath: ViewDefine.UIxlch,
		orderv: 1
	},

	//---------------------------------------------------

	[GameKindEnum.Tuitongzi] : {
		GameKind: GameKindEnum.Tuitongzi,
		name: "推筒子",
		icon: "lobby/imgs/gameico2/ico_ttz",
		sdir: "ttz",
	//	viewpath: ViewDefine.UIbrttz,
		orderv: 10
	},
	

	// [GameKindEnum.Buyu] : {
	// 	GameKind: GameKindEnum.Buyu,
	// 	name: "捕鱼",
	// 	icon: "lobby/imgs/gameico2/ico_bydr",
	// 	sdir: "buyu",
	// 	viewpath: ViewDefine.UIbuyu,
	// 	orderv: 3
	// },

	// [GameKindEnum.RPG] : {
	// 	GameKind: GameKindEnum.RPG,
	// 	name: "RPG",
	// 	icon: "lobby/imgs/gameico2/ico_rpg",
	// 	sdir: "jskb",
	// 	viewpath: ViewDefine.battle1
	// },
};

export default GameConfig;