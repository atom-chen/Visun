import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingSandai2 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.sandai2;
	pxname:string = "三带一对";

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
		if(weights.length === 5) {
			if(weights[0]===weights[2] && weights[3]===weights[4]){
				return new DDzPaixingSandai2(cards, cards.slice(0,3), [cards[3],cards[4]], weights);
			}
			if(weights[0]===weights[1] && weights[2]===weights[4]){
				return new DDzPaixingSandai2(cards, cards.slice(2), [cards[0],cards[1]], weights);
			}
		}
		return null;
	}

}