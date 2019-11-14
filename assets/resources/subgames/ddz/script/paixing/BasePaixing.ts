import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import { PokerCode, pokerName } from "../../../../../common/script/definer/PokerDefine";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";

export default abstract class BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.invalid;
	pxname:string = "";
	cards:Array<PokerCode>;
	weights:Array<number>;
	main_part:Array<PokerCode>;
	ext_part:Array<PokerCode>;

	protected constructor(cards:Array<PokerCode>, mainpart:Array<PokerCode>, extpart:Array<PokerCode>, weights?:Array<number>) {
		this.cards = cards;
		this.main_part = mainpart;
		this.ext_part = extpart;
		if(!weights) {
			weights = [];
			for(var i in cards) {
				weights.push(RuleDdz.getWeight(cards[i]));
			}
		}
		this.weights = weights;
	}

	//比较自己是否大过target
	public abstract compare(target:BasePaixing) : boolean;

	public format() : string
	{
		var str = this.paixing + "(" + this.pxname + "): ";
		for(var i in this.main_part) {
			str += " " + pokerName(this.main_part[i]);
		}
		if(this.ext_part && this.ext_part.length > 0) {
			str += " | ";
			for(var j in this.ext_part) {
				str += " " + pokerName(this.ext_part[j]);
			}
		}
		return str;
	}
}



export class PaiXingInvalid extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.invalid;
	pxname:string = "无效";

	//比较自己是否大过target
	public compare(target:BasePaixing) : boolean
	{
		return false;
	}

	public static create() : BasePaixing {
		return new PaiXingInvalid(null, null, null, null);
	}
}


export function parseFeijiParts(mapp:{}, partFeiji:Array<number>, mainpart:Array<PokerCode>, extpart:Array<PokerCode>)
{
	for(var wei in mapp) {
		if(mapp[wei].length<3) {
			CommonUtil.appendArray(extpart, mapp[wei]);
		}
		else if(mapp[wei].length===3) {
			let bIn = false;
			for(var x in partFeiji) {
				if( RuleDdz.getWeight(mapp[wei][0]) === partFeiji[x] ) {
					bIn = true;
					CommonUtil.appendArray(mainpart, mapp[wei]);
					break;
				}
			}
			if(!bIn) {
				CommonUtil.appendArray(extpart, mapp[wei]);
			}
		}
		else if(mapp[wei].length===4) {
			let bIn2 = false;
			for(var x in partFeiji) {
				if( RuleDdz.getWeight(mapp[wei][0]) === partFeiji[x] ) {
					bIn2 = true;
					CommonUtil.appendArray(mainpart, mapp[wei]);
					mainpart.length = mainpart.length-1;
					extpart.push(mapp[wei][3]);
					break;
				}
			}
			if(!bIn2) {
				CommonUtil.appendArray(extpart, mapp[wei]);
			}
		}
	}
}