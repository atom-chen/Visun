import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingLiandui extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.liandui;
	pxname:string = "连对";

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
		if(!weights || weights.length<6 || weights.length%2 !== 0) { return null; }
		let flag = true;
		for(var ii = 0; ii < weights.length; ii += 2) {
			if(weights[ii] !== weights[ii+1]) {
				flag = false;
				break;
			}
			if(weights[ii+2]){
				if(weights[ii] !== weights[ii+2]-1) {
					flag = false;
					break;
				}
			}
		}
		if(flag) {
			return new DDzPaixingLiandui(cards, cards.slice(0), null, weights);
		}
		return null;
	}

}