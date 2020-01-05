import { PokerCode, pokerName } from "../../../../../common/script/definer/PokerDefine";
import { DDzPaiXingEnum } from "../definer/DDzDefine";

export default class RuleDdz {
	// 一副牌
	public static Deck:Array<PokerCode> = [];

	public static initDeck() : Array<PokerCode> {
		if(RuleDdz.Deck.length > 0) {
			return RuleDdz.Deck;
		}
		var info = PokerCode;
		for (var key in info) {
			if (isNaN(key as any)) {
				var value = parseInt( info[key] );
				RuleDdz.Deck.push(value);
			}
		}
		return RuleDdz.Deck;
	}

	// 权值 3, 4, 5, ... , K(13), A(14), 2(15)
	public static getWeight(code:PokerCode) : number {
		let value = code % 16;
		if(code===PokerCode.KING) {
			value = PokerCode.KING;
		}
		else if(code===PokerCode.QUEEN) {
			value = PokerCode.QUEEN;
		}
		else if(value===1) {
			value = 14;
		}
		else if(value===2) {
			value = 16;
		}
		return value;
	}

	public static getWeightList(cards:Array<PokerCode>) : Array<PokerCode> {
		var w = [];
		for(var i in cards) {
			w.push(RuleDdz.getWeight(cards[i]));
		}
		return w;
	}

	public static getWeightMap(cards:Array<PokerCode>)
	{
		if(!cards || cards.length === 0) { 
			return {}; 
		}
		
		var mapW = {};
		for(var idx=0; idx<cards.length; idx++) {
			let wei = RuleDdz.getWeight(cards[idx]);
			mapW[wei] = mapW[wei] || [];
			mapW[wei].push(cards[idx]);
		}

		return mapW;
	}

	// 农民牌数
	public static FarmerCardCount = 17;
	// 地主牌数
	public static LandlordCardCount = 21;

	// 按权值排序
	public static sortCardsMin2Max(cards:Array<PokerCode>) {
		if(cards===undefined || cards===null || cards.length <= 1){
			return;
		}
		cards.sort( (a,b)=>{
			let cmp = RuleDdz.getWeight(a) - RuleDdz.getWeight(b);
			if(cmp>0) return 1;
			if(cmp<0) return -1;
			return 0;
		} );
	}

	public static sortCardsMax2Min(cards:Array<PokerCode>) {
		if(cards===undefined || cards===null || cards.length <= 1){
			return;
		}
		cards.sort( (a,b)=>{
			let cmp = RuleDdz.getWeight(a) - RuleDdz.getWeight(b);
			if(cmp>0) return -1;
			if(cmp<0) return 1;
			return 0;
		} );
	}

	public static printCards(cards:Array<PokerCode>) : string {
		var txt = "";
		for(var i in cards) {
			txt += " " + pokerName(cards[i]);
		}
		return txt;
	}

	// 经典玩法的牌型集合
	public static classic_type = [
		DDzPaiXingEnum.danpai,			// 单牌 1
		DDzPaiXingEnum.duizi,			// 对子 2
		DDzPaiXingEnum.huojian,			// 王炸 2
		DDzPaiXingEnum.zhadan,			// 炸弹 4
		DDzPaiXingEnum.sandai0,			// 三带零 3
		DDzPaiXingEnum.sandai1,			// 三带一 4
		DDzPaiXingEnum.sandai2,			// 三带一对 5
		DDzPaiXingEnum.sidai2,			// 四带二 6
		DDzPaiXingEnum.sidai4,			// 四带两对 8
		DDzPaiXingEnum.shunzi,			// 顺子 5+
		DDzPaiXingEnum.liandui,			// 连对 6+
		DDzPaiXingEnum.feiji0,			// 飞机 6+
		DDzPaiXingEnum.feiji1,			// 飞机带单牌 6+
		DDzPaiXingEnum.feiji2,			// 飞机带对子 6+
	];

	// 癞子玩法的牌型集合

}
