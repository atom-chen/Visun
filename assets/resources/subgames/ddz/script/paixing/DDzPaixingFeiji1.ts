import BasePaixing, { parseFeijiParts } from "./BasePaixing";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "../rule/RuleDdz";
import DDzPaiXingParser from "../rule/DDzPaixingParser";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaixingFeiji1 extends BasePaixing {
	paixing:DDzPaiXingEnum = DDzPaiXingEnum.feiji1;
	pxname:string = "飞机带单牌";

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
		if(!weights || weights.length < 8) { return null; }
		if(weights.length%4 != 0) { return null; }

		var partFeiji = [];
		var mapp = {};
		for(var i in weights) {
			mapp[weights[i]] = mapp[weights[i]] || [];
			mapp[weights[i]].push(cards[i]);
			if(mapp[weights[i]].length===3) {
				partFeiji.push(weights[i]);
			}
		}
		partFeiji.sort((a,b)=>{
			if(a-b<0) { return -1; } else { return 1; }
		});

		var mainpart = [];
		var extpart = [];
		if(weights.length == 8) {
			if(partFeiji.length==2 && partFeiji[0]===partFeiji[1]-1) {
				parseFeijiParts(mapp, partFeiji, mainpart, extpart);
				return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
			}
		}
		else if(weights.length == 12) {
			if(partFeiji.length==3 && partFeiji[0]===partFeiji[2]-2) {
				parseFeijiParts(mapp, partFeiji, mainpart, extpart);
				return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
			}
			if( partFeiji.length==4 ) {
				if(partFeiji[0]===partFeiji[3]-3) {
					partFeiji.splice(0, 1);
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
				if(partFeiji[0]===partFeiji[2]-2) {
					partFeiji.length = 3;
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
				if(partFeiji[1]===partFeiji[3]-2) {
					partFeiji.splice(0, 1);
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
			}
		}
		else if(weights.length == 16) {
			if(partFeiji.length==4 && partFeiji[0]===partFeiji[3]-3) {
				parseFeijiParts(mapp, partFeiji, mainpart, extpart);
				return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
			}
			if( partFeiji.length==5 ) {
				if(partFeiji[0]===partFeiji[4]-4) {
					partFeiji.splice(0, 1);
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
				if(partFeiji[0]===partFeiji[3]-3) {
					partFeiji.length = 4;
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
				if(partFeiji[1]===partFeiji[4]-3) {
					partFeiji.splice(0, 1);
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
			}
		}
		else if(weights.length == 20) {
			if(partFeiji.length==5 && partFeiji[0]===partFeiji[4]-4) {
				parseFeijiParts(mapp, partFeiji, mainpart, extpart);
				return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
			}
			if( partFeiji.length==6 ) {
				if(partFeiji[0]===partFeiji[5]-5) {
					partFeiji.splice(0, 1);
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
				if(partFeiji[0]===partFeiji[4]-4) {
					partFeiji.length = 4;
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
				if(partFeiji[1]===partFeiji[5]-4) {
					partFeiji.splice(0, 1);
					parseFeijiParts(mapp, partFeiji, mainpart, extpart);
					return new DDzPaixingFeiji1(cards, mainpart, extpart, weights);
				}
			}
		}

		return null;
	}
}