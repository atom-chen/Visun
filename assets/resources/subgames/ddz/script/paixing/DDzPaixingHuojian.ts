import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaiXingHuojian extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.huojian;
	pxname:string = "王炸";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		return true;
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : BasePaixing
	{
		if(weights.length === 2) {
			if( weights[0] >= RuleDdz.getWeight(PokerCode.QUEEN) && weights[1] >= RuleDdz.getWeight(PokerCode.QUEEN) ) {
				return new DDzPaiXingHuojian(cards, cards.slice(0), null, weights);
			}
		}
		return null;
	}
}