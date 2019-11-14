import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingSandai1 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.sandai1;
	pxname:string = "三带一";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		if(DDzPaiXingParser.isInValid(target)){ return true; }
		if(target.paixing != this.paixing) {
			return false;
		}
		return RuleDdz.getWeight(this.cards[1]) > RuleDdz.getWeight(target.cards[1]);
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : BasePaixing
	{
		if(weights.length===4){
			if(weights[0]===weights[2]) {
				return new DDzPaixingSandai1(cards, cards.slice(0, 3), [weights[3]], weights);
			}
			else if(weights[1]===weights[3]) {
				return new DDzPaixingSandai1(cards, cards.slice(1), [weights[0]], weights);
			}
		}
		return null;
	}

}