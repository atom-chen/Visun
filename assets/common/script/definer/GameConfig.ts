import { GameKindEnum } from "./ConstDefine";
import ViewDefine from "./ViewDefine";

var GameConfig = {
	[GameKindEnum.BrCowCow] : {
		GameKind: GameKindEnum.BrCowCow,
		name: "百人牛牛",
		icon: "lobby/imgs/gameico/ico_brnn",
		dir: "brnn",
		viewpath: ViewDefine.UIbrnn
	},
	[GameKindEnum.Longhu] : {
		GameKind: GameKindEnum.Longhu,
		name: "龙虎斗",
		icon: "lobby/imgs/gameico/ico_longhu",
		dir: "longhu",
		viewpath: ViewDefine.UIlonghu
	},
	[GameKindEnum.Baccarat] : {
		GameKind: GameKindEnum.Baccarat,
		name: "百家乐",
		icon: "lobby/imgs/gameico/ico_bjl",
		dir: "bjle",
		viewpath: ViewDefine.UIbjle
	},
	[GameKindEnum.Redpacket] : {
		GameKind: GameKindEnum.Redpacket,
		name: "抢红包",
		icon: "lobby/imgs/gameico/ico_qhb",
		dir: "redbag",
		viewpath: ViewDefine.UIredbag
	},
	[GameKindEnum.Redblack] : {
		GameKind: GameKindEnum.Redblack,
		name: "红黑大战",
		icon: "lobby/imgs/gameico/ico_redblack",
		dir: "honhei",
		viewpath: ViewDefine.UIhonghei
	},
	[GameKindEnum.BirdBeast] : {
		GameKind: GameKindEnum.BirdBeast,
		name: "飞禽走兽",
		icon: "lobby/imgs/gameico/ico_fqzs",
		dir: "fqzs",
		viewpath: ViewDefine.UIfqzs
	},
	[GameKindEnum.Brttz] : {
		GameKind: GameKindEnum.Brttz,
		name: "百人推筒子",
		icon: "lobby/imgs/gameico/ico_brttz",
		dir: "jskb",
		viewpath: ViewDefine.UIbrttz
	},
	[GameKindEnum.Toubao] : {
		GameKind: GameKindEnum.Toubao,
		name: "骰宝",
		icon: "lobby/imgs/gameico/ico_toubao",
		dir: "saibao",
		viewpath: ViewDefine.UItoubao
	},

	
	[GameKindEnum.Zhajinhua] : {
		GameKind: GameKindEnum.Zhajinhua,
		name: "炸金花",
		icon: "lobby/imgs/gameico/ico_zjh",
		spine: "lobby/spines/zhajinhua/skeleton",
		dir: "zjh",
		viewpath: ViewDefine.UIzjh
	},
	[GameKindEnum.QzCowcow] : {
		GameKind: GameKindEnum.QzCowcow,
		name: "抢庄牛牛",
		icon: "lobby/imgs/gameico/ico_qznn",
		dir: "qznn",
		viewpath: ViewDefine.UIqznn
	},
	[GameKindEnum.Landlord] : {
		GameKind: GameKindEnum.Landlord,
		name: "斗地主",
		icon: "lobby/imgs/gameico/ico_ddz",
		dir: "ddz",
		viewpath: ViewDefine.UIddz
	},
	[GameKindEnum.Blackjack] : {
		GameKind: GameKindEnum.Blackjack,
		name: "21点",
		icon: "lobby/imgs/gameico/ico_dian21",
		dir: "dian21",
		viewpath: ViewDefine.UIdian21
	},
	[GameKindEnum.Sangong] : {
		GameKind: GameKindEnum.Sangong,
		name: "三公",
		icon: "lobby/imgs/gameico/ico_sangong",
		dir: "sangong",
		viewpath: ViewDefine.UIsangong
	},
	[GameKindEnum.Water13] : {
		GameKind: GameKindEnum.Water13,
		name: "十三水",
		icon: "lobby/imgs/gameico/ico_shui13",
		dir: "shui13",
		viewpath: ViewDefine.UIshui13
	},
	[GameKindEnum.Qzpaijiu] : {
		GameKind: GameKindEnum.Qzpaijiu,
		name: "抢庄牌九",
		icon: "lobby/imgs/gameico/ico_qzpj",
		dir: "qzpj",
		viewpath: ViewDefine.UIpaijiu
	},
	[GameKindEnum.Suoha] : {
		GameKind: GameKindEnum.Suoha,
		name: "梭哈",
		icon: "lobby/imgs/gameico/ico_suoha",
		dir: "suoha",
		viewpath: ViewDefine.UIsuoha
	},
	[GameKindEnum.Paodekuai] : {
		GameKind: GameKindEnum.Paodekuai,
		name: "跑得快",
		icon: "lobby/imgs/gameico/ico_pdk",
		dir: "paodk",
		viewpath: ViewDefine.UIpdk
	},
	[GameKindEnum.Texas] : {
		GameKind: GameKindEnum.Texas,
		name: "德州扑克",
		icon: "lobby/imgs/gameico/ico_dzpk",
		dir: "paodk",
		viewpath: ViewDefine.UItexas
	},
	[GameKindEnum.Ermj] : {
		GameKind: GameKindEnum.Ermj,
		name: "二人麻将",
		icon: "lobby/imgs/gameico/ico_ermj",
		dir: "ermj",
		viewpath: ViewDefine.UIermj
	},
	[GameKindEnum.Buyu] : {
		GameKind: GameKindEnum.Buyu,
		name: "捕鱼",
		icon: "lobby/imgs/gameico/ico_bydr",
		dir: "buyu",
		viewpath: ViewDefine.UIbuyu
	},
	[GameKindEnum.Erba] : {
		GameKind: GameKindEnum.Erba,
		name: "二八杠",
		icon: "lobby/imgs/gameico/ico_erba",
		dir: "erba",
		viewpath: ViewDefine.UIerba
	},
	[GameKindEnum.Jskb] : {
		GameKind: GameKindEnum.Jskb,
		name: "极速狂飙",
		icon: "lobby/imgs/gameico/ico_jskb",
		dir: "jskb",
		viewpath: ViewDefine.UIjskb
	},

	[GameKindEnum.RPG] : {
		GameKind: GameKindEnum.RPG,
		name: "RPG",
		icon: "lobby/imgs/gameico/ico_rpg",
		dir: "jskb",
		viewpath: ViewDefine.battle1
	},
};

export default GameConfig;