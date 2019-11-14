import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingFeiji0 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.feiji0;
	pxname:string = "飞机不带牌";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		if(DDzPaiXingParser.isInValid(target)){ return true; }
		if(target.paixing != this.paixing) {
			return false;
		}
		if(this.main_part.length != target.main_part.length) {
			return false;
		}
		return RuleDdz.getWeight(this.main_part[0]) > RuleDdz.getWeight(target.main_part[0]);
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : BasePaixing
	{
		if(!weights || weights.length < 6) { return null; }
		if(weights.length%3 != 0) { return null; }

		let flag = true;
		for(var ii = 0; ii < weights.length; ii += 3) {
			if(weights[ii] !== weights[ii+2]) {
				flag = false;
				break;
			}
			if(weights[ii+3]){
				if(weights[ii] !== weights[ii+3]-1) {
					flag = false;
					break;
				}
			}
		}
		if(flag) {
			return new DDzPaixingFeiji0(cards, cards.slice(0), null, weights);
		}
		return null;
	}
}