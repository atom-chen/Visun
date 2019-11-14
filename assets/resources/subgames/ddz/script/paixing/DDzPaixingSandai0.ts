import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingSandai0 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.sandai0;
	pxname:string = "三带零";

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
		if ( weights.length === 3 && weights[0] === weights[2]) {
			return new DDzPaixingSandai0(cards, cards.slice(0), null, weights);
		}
		return null;
	}

}