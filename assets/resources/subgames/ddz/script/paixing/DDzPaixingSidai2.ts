import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingSidai2 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.sidai2;
	pxname:string = "四带二";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		if(DDzPaiXingParser.isInValid(target)){ return true; }
		if(target.paixing != this.paixing) {
			return false;
		}
		return RuleDdz.getWeight(this.cards[2]) > RuleDdz.getWeight(target.cards[2]);
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : BasePaixing
	{
		if(weights.length !== 6) { return null; }

		if (weights[0]===weights[3]) {
			return new DDzPaixingSidai2(cards, cards.slice(0, 4), [cards[4],cards[5]], weights);
		}
		else if(weights[1]===weights[4]) {
			return new DDzPaixingSidai2(cards, cards.slice(1, 5), [cards[0],cards[5]], weights);
		}
		else if(weights[2]===weights[5]) {
			return new DDzPaixingSidai2(cards, cards.slice(2), [cards[0],cards[0]], weights);
		}

		return null;
	}

}