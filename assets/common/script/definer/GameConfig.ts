import { GameKindEnum } from "./ConstDefine";
import ViewDefine from "./ViewDefine";

var GameConfig = {
	[GameKindEnum.BrCowCow] : {
		GameKind: GameKindEnum.BrCowCow,
		name: "百人牛牛",
		openState: 2,
		icon: "lobby/imgs/gameico/ico_brnn",
		dir: "brnn",
		viewpath: ViewDefine.UIbrnn.path
	},
	[GameKindEnum.Longhu] : {
		GameKind: GameKindEnum.Longhu,
		name: "龙虎斗",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_lhd",
		dir: "longhu",
		viewpath: ViewDefine.UIlonghu.path
	},
	[GameKindEnum.Baccarat] : {
		GameKind: GameKindEnum.Baccarat,
		name: "百家乐",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_bjl",
		dir: "bjle",
		viewpath: ViewDefine.UIbjle.path
	},
	[GameKindEnum.Redpacket] : {
		GameKind: GameKindEnum.Redpacket,
		name: "抢红包",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qhb",
		dir: "redbag",
		viewpath: ViewDefine.UIredbag.path
	},
	[GameKindEnum.Redblack] : {
		GameKind: GameKindEnum.Redblack,
		name: "红黑大战",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_hhdz",
		dir: "honhei",
		viewpath: ViewDefine.UIhonghei.path
	},
	[GameKindEnum.BirdBeast] : {
		GameKind: GameKindEnum.BirdBeast,
		name: "飞禽走兽",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_fqzs",
		dir: "fqzs",
		viewpath: ViewDefine.UIfqzs.path
	},
	
	[GameKindEnum.Zhajinhua] : {
		GameKind: GameKindEnum.Zhajinhua,
		name: "炸金花",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_zjh",
		dir: "zjh",
		viewpath: ViewDefine.UIzjh.path
	},
	[GameKindEnum.QzCowcow] : {
		GameKind: GameKindEnum.QzCowcow,
		name: "抢庄牛牛",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qznn",
		dir: "qznn",
		viewpath: ViewDefine.UIqznn.path
	},
	[GameKindEnum.Landlord] : {
		GameKind: GameKindEnum.Landlord,
		name: "斗地主",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_ddz",
		dir: "ddz",
		viewpath: ViewDefine.UIddz.path
	},
	[GameKindEnum.Blackjack] : {
		GameKind: GameKindEnum.Blackjack,
		name: "21点",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_dian21",
		dir: "dian21",
		viewpath: ViewDefine.UIdian21.path
	},
	[GameKindEnum.Sangong] : {
		GameKind: GameKindEnum.Sangong,
		name: "三公",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_sangong",
		dir: "sangong",
		viewpath: ViewDefine.UIsangong.path
	},
	[GameKindEnum.Water13] : {
		GameKind: GameKindEnum.Water13,
		name: "十三水",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_shui13",
		dir: "shui13",
		viewpath: ViewDefine.UIshui13.path
	},
	[GameKindEnum.Qzpaijiu] : {
		GameKind: GameKindEnum.Qzpaijiu,
		name: "抢庄牌九",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qzpj",
		dir: "qzpj",
		viewpath: ViewDefine.UIpaijiu.path
	},
	[GameKindEnum.Suoha] : {
		GameKind: GameKindEnum.Suoha,
		name: "梭哈",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_suoha",
		dir: "suoha",
		viewpath: ViewDefine.UIsuoha.path
	},
	[GameKindEnum.Paodekuai] : {
		GameKind: GameKindEnum.Paodekuai,
		name: "跑得快",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_pdk",
		dir: "paodk",
		viewpath: ViewDefine.UIpdk.path
	},
	[GameKindEnum.Texas] : {
		GameKind: GameKindEnum.Texas,
		name: "德州扑克",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_dezhou",
		dir: "paodk",
		viewpath: ViewDefine.UItexas.path
	},
	[GameKindEnum.Ermj] : {
		GameKind: GameKindEnum.Ermj,
		name: "二人麻将",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_ermj",
		dir: "ermj",
		viewpath: ViewDefine.UIermj.path
	},
	[GameKindEnum.Buyu] : {
		GameKind: GameKindEnum.Buyu,
		name: "捕鱼",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_by",
		dir: "buyu",
		viewpath: ViewDefine.UIbuyu.path
	},
	[GameKindEnum.Toubao] : {
		GameKind: GameKindEnum.Toubao,
		name: "骰宝",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_toubao",
		dir: "saibao",
		viewpath: ViewDefine.UItoubao.path
	},
	[GameKindEnum.Erba] : {
		GameKind: GameKindEnum.Erba,
		name: "二八杠",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_erba",
		dir: "erba",
		viewpath: ViewDefine.UIerba.path
	},
	[GameKindEnum.Jskb] : {
		GameKind: GameKindEnum.Jskb,
		name: "极速狂飙",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_jskb",
		dir: "jskb",
		viewpath: ViewDefine.UIjskb.path
	},
	[GameKindEnum.Brttz] : {
		GameKind: GameKindEnum.Brttz,
		name: "百人推筒子",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_jskb",
		dir: "jskb",
		viewpath: ViewDefine.UIbrttz.path
	},
};

export default GameConfig;