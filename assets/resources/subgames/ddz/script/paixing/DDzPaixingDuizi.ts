import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingDuizi extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.duizi;
	pxname:string = "对子";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		if(DDzPaiXingParser.isInValid(target)){ return true; }
		if(target.paixing != this.paixing) {
			return false;
		}
		return RuleDdz.getWeight(this.cards[0]) > RuleDdz.getWeight(target.cards[0]);
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : DDzPaixingDuizi
	{
		if(weights.length === 2 && weights[0] === weights[1]) {
			return new DDzPaixingDuizi(cards, cards.slice(0), null, weights);
		}
		return null;
	}

}