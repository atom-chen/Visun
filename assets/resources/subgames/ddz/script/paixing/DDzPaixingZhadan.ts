import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingZhadan extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.zhadan;
	pxname:string = "炸弹";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		if(DDzPaiXingParser.isInValid(target)){ return true; }
		if(target.paixing != this.paixing) {
			return target.paixing != DDzPaiXingEnum.huojian;
		}
		return RuleDdz.getWeight(this.cards[0]) > RuleDdz.getWeight(target.cards[0]);
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : BasePaixing
	{
		if (weights.length == 4 && weights[0] === weights[3]) {
			return new DDzPaixingZhadan(cards, cards.slice(0), null, weights);
		}
		return null;
	}

}