import BasePaixing from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingSidai4 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.sidai4;
	pxname:string = "四带两对";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		if(DDzPaiXingParser.isInValid(target)){ return true; }
		if(target.paixing != this.paixing) {
			return false;
		}

		return RuleDdz.getWeight(this.main_part[0]) > RuleDdz.getWeight(target.main_part[0]);
	}

	public static isMyType(cards:Array<PokerCode>, weights:Array<number>) : BasePaixing
	{
		if(weights.length !== 8) { return null; }

		if(weights[0]===weights[3] && weights[4]===weights[5] && weights[6]===weights[7]) {
			return new DDzPaixingSidai4(cards, cards.slice(0,4), [cards[4],cards[5],cards[6],cards[7]], weights);
		}
		else if(weights[2]===weights[5] && weights[0]===weights[1] && weights[6]===weights[7]) {
			return new DDzPaixingSidai4(cards, cards.slice(2,6), [cards[0],cards[1],cards[6],cards[7]], weights);
		}
		else if(weights[4]===weights[7] && weights[0]===weights[1] && weights[2]===weights[3]) {
			return new DDzPaixingSidai4(cards, cards.slice(4), [cards[0],cards[1],cards[2],cards[3]], weights);
		}

		return null;
	}

}