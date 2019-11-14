import { SuohaPaixingEnum, SuohaPaixingName } from "./SuohaDefine";
import { PokerCode, pokerName, getPokerValue, getPokerColor } from "../../../../../common/script/definer/PokerDefine";


const MAXCOUNT = 5;
const MAXINDEX = 4;

export default class SuohaLogic {

	public static getWeightMap(cards:Array<PokerCode>) : any
	{
		if(!cards || cards.length === 0) { 
			return {}; 
		}
		
		var mapW = {};
		for(var idx=0; idx<cards.length; idx++) {
			let wei = this.getWeight(cards[idx]);
			mapW[wei] = mapW[wei] || [];
			mapW[wei].push(cards[idx]);
		}

		return mapW;
	}

	public static formatCards(cards:Array<PokerCode>) {
		var txt = "[ ";
		for(var i in cards) {
			txt += pokerName(cards[i]) + " ";
		}
		txt += "]";
		return txt;
	}

	public static getWeight(v:PokerCode) : number {
		return getPokerValue(v);
	}

	public static getWeightList(cards:Array<PokerCode>) : Array<number> {
		var weis = [];
		for(var i in cards) {
			weis.push(this.getWeight(cards[i]));
		}
		return weis;
	}

	public static sortMin2Max(cards:Array<PokerCode>) {
		cards.sort( (a,b)=>{
			let cmp = this.getWeight(a) - this.getWeight(b);
			if(cmp>0) return 1;
			if(cmp<0) return -1;
			return 0;
		} );
	}

	public static getCardType(cards:Array<PokerCode>) : SuohaPaixingEnum {
		this.sortMin2Max(cards);
		var weis = this.getWeightList(cards);

		var bShunzi = true;
		var bTonghua = true;
		for(var i=1; i<MAXINDEX; i++) {
			if(getPokerColor(cards[i]) !== getPokerColor(cards[i-1])) {
				bTonghua = false;
				break;
			}
		}
		for(var i=1; i<MAXINDEX; i++) {
			if(weis[i]+1 !== weis[i+1]) {
				bShunzi = false;
				break;
			}
		}
		if(bShunzi) {
			if(weis[0]+1 !== weis[1] && !(weis[MAXINDEX] === 0x0D && weis[0] === 0x01)) {
				bShunzi = false;
			}
		}
		if(bShunzi && bTonghua) {
			return SuohaPaixingEnum.Tonghuashun;
		}
		else if(bShunzi) {
			return SuohaPaixingEnum.Shunzi;
		}
		else if(bTonghua) {
			return SuohaPaixingEnum.Tonghua;
		}
		var wMap = this.getWeightMap(cards);
		var keyCount = Object.keys(wMap).length
		if(keyCount === 2) {
			var len = wMap[this.getWeight(cards[0])].length;
			if(len===1 || len===4) {
				return SuohaPaixingEnum.Zhadan;
			}
			return SuohaPaixingEnum.Hulu;
		}
		if(weis[0]===weis[2] || weis[1]===weis[3] || weis[2]===weis[4]){
			return SuohaPaixingEnum.Santiao;
		}
		if(keyCount===3){
			return SuohaPaixingEnum.Liangdui;
		}
		else if(keyCount===4){
			return SuohaPaixingEnum.Yidui;
		}
		return SuohaPaixingEnum.Sanpai;
	}


	public static test() {
		cc.log("===========================================");

		var cards = [PokerCode.FK_10, PokerCode.FK_J, PokerCode.FK_Q, PokerCode.FK_K, PokerCode.FK_A];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.HT_10, PokerCode.HX_10, PokerCode.MH_10, PokerCode.FK_A];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.HT_10, PokerCode.HX_10, PokerCode.MH_2, PokerCode.FK_2];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.FK_3, PokerCode.FK_9, PokerCode.FK_2, PokerCode.FK_K];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.FK_J, PokerCode.HX_Q, PokerCode.FK_K, PokerCode.FK_A];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.HT_10, PokerCode.HX_10, PokerCode.MH_2, PokerCode.FK_7];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.HT_10, PokerCode.MH_4, PokerCode.HX_4, PokerCode.FK_A];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.HT_10, PokerCode.MH_7, PokerCode.HX_4, PokerCode.FK_A];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		var cards = [PokerCode.FK_10, PokerCode.HT_2, PokerCode.MH_4, PokerCode.HX_9, PokerCode.FK_A];
		cc.log( SuohaLogic.getCardType(cards), SuohaPaixingName[SuohaLogic.getCardType(cards)], SuohaLogic.formatCards(cards) );

		cc.log("===========================================");
	}

}