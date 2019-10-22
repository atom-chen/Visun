import { GameKindEnum } from "./ConstDefine";

var GameConfig = {
	[GameKindEnum.BrCowCow] : {
		id: GameKindEnum.BrCowCow,
		name: "百人牛牛",
		openState: 2,
		icon: "lobby/imgs/gameico/ico_brnn",
		dir: "brnn",
		isexist: true
	},
	[GameKindEnum.Longhu] : {
		id: GameKindEnum.Longhu,
		name: "龙虎大战",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_lhd",
		dir: "longhu",
		isexist: false
	},
	[GameKindEnum.Baccarat] : {
		id: GameKindEnum.Baccarat,
		name: "百家乐",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_bjl",
		dir: "bjle",
		isexist: true
	},
	[GameKindEnum.Redpacket] : {
		id: GameKindEnum.Redpacket,
		name: "抢红包",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qhb",
		dir: "redbag",
		isexist: false
	},
	[GameKindEnum.Redblack] : {
		id: GameKindEnum.Redblack,
		name: "红黑大战",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_hhdz",
		dir: "honhei",
		isexist: false
	},
	[GameKindEnum.BirdBeast] : {
		id: GameKindEnum.BirdBeast,
		name: "飞禽走兽",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_fqzs",
		dir: "fqzs",
		isexist: true
	},
	
	"40070012" : {
		id: "40070012",
		name: "炸金花",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_zjh",
		dir: "zjh",
		isexist: true
	},
	"40070002" : {
		id: "40070002",
		name: "抢庄牛牛",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qznn",
		dir: "qznn",
		isexist: false
	},
	"40000040" : {
		id: "40000040",
		name: "斗地主",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_ddz",
		dir: "ddz",
		isexist: true
	},
	"80000049" : {
		id: "80000049",
		name: "21点",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_dian21",
		dir: "dian21",
		isexist: false
	},
	"80000050" : {
		id: "80000050",
		name: "三公",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_sangong",
		dir: "sangong",
		isexist: false
	},
	"80000052" : {
		id: "80000052",
		name: "看牌抢庄牛牛",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_kpqznn",
		dir: "kpqznn",
		isexist: false
	},
	"80000053" : {
		id: "80000053",
		name: "十三水",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_shui13",
		dir: "shui13",
		isexist: false
	},
	"80000048" : {
		id: "80000048",
		name: "抢庄牌九",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qzpj",
		dir: "qzpj",
		isexist: false
	},
	"80000051" : {
		id: "80000051",
		name: "梭哈",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_suoha",
		dir: "suoha",
		isexist: false
	}
};

export default GameConfig;