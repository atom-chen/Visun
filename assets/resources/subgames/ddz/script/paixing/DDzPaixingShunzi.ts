import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingShunzi extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.shunzi;
	pxname:string = "顺子";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		if(DDzPaiXingParser.isInValid(target)){ return true; }
		if(target.paixing != this.paixing) {
			return false;
		}
		if(this.cards.length != target.cards.length) {
			return false;
		}
		return RuleDdz.getWeight(this.cards[0]) > RuleDdz.getWeight(target.cards[0]);
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : BasePaixing
	{
		if(!weights || weights.length<5) { return null; }
		let flag = true;
		for(var ii = 1; ii < weights.length; ii++) {
			if(weights[ii] !== weights[ii-1]+1) {
				flag = false;
				break;
			}
		}
		if(flag) {
			return new DDzPaixingShunzi(cards, cards.slice(0), null, weights);
		}
		return null;
	}
}