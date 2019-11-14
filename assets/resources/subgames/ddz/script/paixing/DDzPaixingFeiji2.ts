import BasePaixing, { parseFeijiParts } from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingFeiji2 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.feiji2;
	pxname:string = "飞机带对子";

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
		if(!weights || weights.length < 10) { return null; }
		if(weights.length%5 != 0) { return null; }

		var partFeiji = [];
		var mapp = {};
		for(var i in weights) {
			mapp[weights[i]] = mapp[weights[i]] || [];
			mapp[weights[i]].push(cards[i]);
		}
		for(var wei in mapp) {
			if(mapp[wei].length == 1) {
				return null;
			}
			else if(mapp[wei].length==3) {
				partFeiji.push(parseInt(wei));
			}
		}
		partFeiji.sort((a,b)=>{
			if(a-b<0) { return -1; } else { return 1; }
		});

		
		var mainpart = [];
		var extpart = [];
		if(weights.length == 10) {
			if(partFeiji.length==2 && partFeiji[0]===partFeiji[1]-1) {
				parseFeijiParts(mapp, partFeiji, mainpart, extpart);
				return new DDzPaixingFeiji2(cards, mainpart, extpart, weights);
			}
		}
		else if(weights.length == 15) {
			if(partFeiji.length==3 && partFeiji[0]===partFeiji[2]-2) {
				parseFeijiParts(mapp, partFeiji, mainpart, extpart);
				return new DDzPaixingFeiji2(cards, mainpart, extpart, weights);
			}
		}
		else if(weights.length == 20) {
			if(partFeiji.length==4 && partFeiji[0]===partFeiji[3]-3) {
				parseFeijiParts(mapp, partFeiji, mainpart, extpart);
				return new DDzPaixingFeiji2(cards, mainpart, extpart, weights);
			}
		}

		return null;
	}
}