import { getPokerColor, getPokerValue, pokersName, PokerValueEnum } from "../../../../../common/script/definer/PokerDefine";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";

export enum ZjhCardType {
	sanpai = 0,
	duizi,
	shunzi,
	jinhua,
	shunjin,
	baozi
}

export class RuleZjh {

	static getWeight(v:number) {
		var value = getPokerValue(v);
		if(value == 0x01) {
			value = 0x0E;
		}
		return value;
	}

	static getWeightList(cards:Array<number>|Uint8Array) : Array<number> {
		var w = [];
		for(var i in cards) {
			w.push(RuleZjh.getWeight(cards[i]));
		}
		return w;
	}

	static sortCardsMin2Max(cards:Array<number>|Uint8Array) {
		if(cards===undefined || cards===null || cards.length <= 1){
			return;
		}
		cards.sort( (a,b)=>{
			let cmp = RuleZjh.getWeight(a) - RuleZjh.getWeight(b);
			if(cmp>0) return 1;
			if(cmp<0) return -1;
			return 0;
		} );
	}

	static parseCardType(cards:Array<number>|Uint8Array) : ZjhCardType {
		if(isNil(cards) || cards.length <= 0) {
			return -1;
		}
		RuleZjh.sortCardsMin2Max(cards);
		cc.log(pokersName(cards));
		var c1 = getPokerColor(cards[0]);
		var c2 = getPokerColor(cards[1]);
		var c3 = getPokerColor(cards[2]);
		var w1 = RuleZjh.getWeight(cards[0]);
		var w2 = RuleZjh.getWeight(cards[1]);
		var w3 = RuleZjh.getWeight(cards[2]);

		if (w1 == w2 && w2 == w3) {
			return ZjhCardType.baozi;
		}
		if (w1 == w2 || w2 == w3) {
			return ZjhCardType.duizi;
		}

		var bJinhua = c1==c2 && c2==c3
		var bShunzi = (w1==w2-1 && w2==w3-1) || (getPokerValue(cards[2])==PokerValueEnum.VALUE_A && w1==PokerValueEnum.VALUE_2 && w2==PokerValueEnum.VALUE_3);
		if (bShunzi && bJinhua) {
			return ZjhCardType.shunjin;
		} else if (bJinhua) {
			return ZjhCardType.jinhua;
		} else if (bShunzi) {
			return ZjhCardType.shunzi;
		}
		
		return ZjhCardType.sanpai;
	}
	
}
