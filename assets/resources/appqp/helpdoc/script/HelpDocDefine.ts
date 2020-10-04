import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";

var HelpDocDefine = {
	[GameKindEnum.BrCowCow]: {
		GameKind: GameKindEnum.BrCowCow,
		bgColor:cc.color(20,20,20,255),
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"", imgcont:["brnn/cont_all"] },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Longhu] : {
		GameKind: GameKindEnum.Longhu,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Baccarat] : {
		GameKind: GameKindEnum.Baccarat,
		bgColor:cc.color(20,20,20,255),
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"", imgcont:["bjle/cont_all"] },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Redpacket] : {
		GameKind: GameKindEnum.Redpacket,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Redblack] : {
		GameKind: GameKindEnum.Redblack,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Jszjh] : {
		GameKind: GameKindEnum.Jszjh,	
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Brttz] : {
		GameKind: GameKindEnum.Brttz,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Toubao] : {
		GameKind: GameKindEnum.Toubao,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},

	
	[GameKindEnum.Zhajinhua] : {
		GameKind: GameKindEnum.Zhajinhua,
		TabList:[
			{ name:"牌型", cont:"", imgcont:["zjh/zjh_paixing"] },
			{ name:"玩法", cont:"", imgcont:["zjh/zjh_wanfa"] },
			{ name:"赔率", cont:"", imgcont:["zjh/zjh_peilv"] },
		]
	},
	[GameKindEnum.QzCowcow] : {
		GameKind: GameKindEnum.QzCowcow,
		bgColor:cc.color(20,20,20,255),
		TabList:[
			{ name:"牌型", cont:"", imgcont:["qznn/txt_pxsf","qznn/cont_pxsf","newline","qznn/txt_pxdx","qznn/cont_pxdx","newline","qznn/txt_pxbs","qznn/cont_pxbs"] },
			{ name:"玩法", cont:"", imgcont:["qznn/wanfa"] },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.TbCowcow] : {
		GameKind: GameKindEnum.TbCowcow,
		bgColor:cc.color(20,20,20,255),
		TabList:[
			{ name:"牌型", cont:"", imgcont:["tbnn/txt_pxsf","tbnn/cont_pxsf","newline","tbnn/txt_pxdx","tbnn/cont_pxdx"] },
			{ name:"玩法", cont:"", imgcont:["tbnn/wanfa"] },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Landlord] : {
		GameKind: GameKindEnum.Landlord,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Blackjack] : {
		GameKind: GameKindEnum.Blackjack,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Sangong] : {
		GameKind: GameKindEnum.Sangong,
		TabList:[
			{ name:"牌型", cont:"", imgcont:["sangong/txt_pxsf","sangong/cont_pxsf","newline","sangong/txt_pxdx","sangong/cont_pxdx","newline","sangong/txt_pxbs","sangong/cont_pxbs"] },
			{ name:"玩法", cont:"", imgcont:["sangong/txt_wfjs","sangong/wanfa"] },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Water13] : {
		GameKind: GameKindEnum.Water13,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Qzpaijiu] : {
		GameKind: GameKindEnum.Qzpaijiu,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Suoha] : {
		GameKind: GameKindEnum.Suoha,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Paodekuai] : {
		GameKind: GameKindEnum.Paodekuai,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Texas] : {
		GameKind: GameKindEnum.Texas,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Ermj] : {
		GameKind: GameKindEnum.Ermj,
		TabList:[
			{ name:"牌型", cont:"", imgcont:["ermj/ermj_tab_guize","ermj/ermj_cont_guize","newline","ermj/ermj_tab_fanxin","ermj/ermj_fanxin_01","ermj/ermj_fanxin_02","ermj/ermj_fanxin_03","ermj/ermj_fanxin_04","ermj/ermj_fanxin_05","ermj/ermj_fanxin_06","ermj/ermj_fanxin_07","ermj/ermj_fanxin_08","ermj/ermj_fanxin_09","ermj/ermj_fanxin_10","ermj/ermj_fanxin_11","ermj/ermj_fanxin_12","newline","ermj/ermj_tab_jiesuan","ermj/ermj_cont_jiesuan"] },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Buyu] : {
		GameKind: GameKindEnum.Buyu,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Tuitongzi] : {
		GameKind: GameKindEnum.Tuitongzi,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},
	[GameKindEnum.Jskb] : {
		GameKind: GameKindEnum.Jskb,
		TabList:[
			{ name:"牌型", cont:"" },
			{ name:"玩法", cont:"" },
			{ name:"赔率", cont:"" },
		]
	},

}

export default HelpDocDefine;