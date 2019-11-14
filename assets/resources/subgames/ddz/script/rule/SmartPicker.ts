
import DDzPaiXingParser from "./DDzPaixingParser";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "./RuleDdz";
import DDzPaiXingHuojian from "../paixing/DDzPaixingHuojian";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";

function isNil(v:any) {
	return v===null || v===undefined;
}

export default class SmartPicker {

	public static aiPick(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, isFriend:boolean) : Array<PokerCode>
	{
		RuleDdz.sortCardsMin2Max(hands);
		RuleDdz.sortCardsMin2Max(enemyCards);

		var outs = [];
		var pxEnemy = DDzPaiXingParser.getPaiXing(enemyCards);

		if(DDzPaiXingParser.isInValid(pxEnemy)) {
			if(hands.length===2 && DDzPaiXingHuojian.isMyType(hands, RuleDdz.getWeightList(hands))){
				outs = hands.slice(0);
				return outs;
			}
			outs.push(hands[0]);
			var i = 0;
			while(RuleDdz.getWeight(hands[i+1])===RuleDdz.getWeight(hands[i])){
				i += 1;
				outs.push(hands[i]);
			}
			return outs;
		}

		for(var iii in hands) {
			outs = this.pick(hands, enemyCards, [hands[iii]]);
			if(outs&&outs.length>0) {
				break;
			}
		}
		return outs;
	}

	// 从一手牌(hands)中，检测出【可以打过当前出牌且包含了contains】的出牌序列
	public static pick(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(isNil(hands) || isNil(contains) || hands.length<=0 || contains.length<=0) {
			return null;
		}

		var pxEnemy = DDzPaiXingParser.getPaiXing(enemyCards);
		cc.log("敌方牌型: ", pxEnemy && pxEnemy.format());
		if(DDzPaiXingParser.isInValid(pxEnemy)) {
			return null;
		}

		var pxContains = DDzPaiXingParser.getPaiXing(contains);
		if(pxContains.compare(pxEnemy)) {
			return contains;
		}

		switch (pxEnemy.paixing) {
			case DDzPaiXingEnum.danpai:
				return this.pickDanpai(hands, enemyCards, contains);
			case DDzPaiXingEnum.duizi:
				return this.pickDuizi(hands, enemyCards, contains);
			case DDzPaiXingEnum.feiji0:
				return this.pickFeiji0(hands, enemyCards, contains);
			case DDzPaiXingEnum.feiji1:
				return this.pickFeiji1(hands, enemyCards, contains);
			case DDzPaiXingEnum.feiji2:
				return this.pickFeiji2(hands, enemyCards, contains);
			case DDzPaiXingEnum.huojian:
				return this.pickHuojian(hands, enemyCards, contains);
			case DDzPaiXingEnum.liandui:
				return this.pickLiandui(hands, enemyCards, contains);
			case DDzPaiXingEnum.sandai0:
				return this.pickSandai0(hands, enemyCards, contains);
			case DDzPaiXingEnum.sandai1:
				return this.pickSandai1(hands, enemyCards, contains);
			case DDzPaiXingEnum.sandai2:
				return this.pickSandai2(hands, enemyCards, contains);
			case DDzPaiXingEnum.sidai2:
				return this.pickSidai2(hands, enemyCards, contains);
			case DDzPaiXingEnum.shunzi:
				return this.pickShunzi(hands, enemyCards, contains);
			case DDzPaiXingEnum.sidai4:
				return this.pickSidai4(hands, enemyCards, contains);
			case DDzPaiXingEnum.zhadan:
				return this.pickZhadan(hands, enemyCards, contains);
		}
		
		return null;
	}

	//ok
	protected static pickDanpai(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		return null;
	}

	//ok
	protected static pickDuizi(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		var outs = null;
		if(contains.length==1){
			var idx = hands.indexOf(contains[0]);
			if(idx<0 || idx>=hands.length) {
				return null;
			}
			outs = [hands[idx], hands[idx+1]];
			var aaa = DDzPaiXingParser.getPaiXing(outs);
			if(aaa && aaa.compare(DDzPaiXingParser.getPaiXing(enemyCards))){
				return outs;
			};
		}
		return null;
	}

	//ok
	protected static pickFeiji0(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		var pxEnemy = DDzPaiXingParser.getPaiXing(enemyCards);
		if(DDzPaiXingParser.getPaiXing(contains).compare(pxEnemy)){
			return contains;
		};
		
		var wMap = RuleDdz.getWeightMap(hands);
		var wc0 = RuleDdz.getWeight(contains[0]);
		var wcN = RuleDdz.getWeight(contains[contains.length-1]);
		if(wc0<=RuleDdz.getWeight(enemyCards[0]) || wcN-wc0+1>enemyCards.length/3){
			return null;
		}
		var outs = [];
		for(var i=0; i<enemyCards.length/3; i++) {
			if(!wMap[wc0+i] || wMap[wc0+i].length<3){
				return null;
			} else {
				for(var j=0; j<3; j++){
					outs.push(wMap[wc0+i][j]);
				}
			}
		}
		return outs;
	}

	protected static pickFeiji1(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		var pxEnemy = DDzPaiXingParser.getPaiXing(enemyCards);
		if(DDzPaiXingParser.getPaiXing(contains).compare(pxEnemy)) {
			return contains;
		};

		var outs = [];
		var wMapHands = RuleDdz.getWeightMap(hands);
		var wMapContains = RuleDdz.getWeightMap(contains);
		var threeList = [];
		for(var w in wMapContains) {
			if(wMapHands[w].length>=3) {
				threeList.push(wMapHands[w]);
			}
		}
		if(threeList.length<pxEnemy.main_part.length/3) {
			return null;
		}
		threeList.sort( (a,b)=>{
			let cmp = RuleDdz.getWeight(a[0]) - RuleDdz.getWeight(b[0]);
			if(cmp>0) return 1;
			if(cmp<0) return -1;
			return 0;
		} );
		return null;
	}

	protected static pickFeiji2(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		var pxEnemy = DDzPaiXingParser.getPaiXing(enemyCards);
		if(DDzPaiXingParser.getPaiXing(contains).compare(pxEnemy)){
			return contains;
		};

		var outs = [];
		var wHands = RuleDdz.getWeightMap(hands);

		return null;
	}

	//ok
	protected static pickHuojian(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		return null; //没有牌能大过王炸
	}

	//ok
	protected static pickLiandui(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		if(RuleDdz.getWeight(contains[0])<=RuleDdz.getWeight(enemyCards[0])){
			return null;
		}

		var outs = [];
		var wMap = RuleDdz.getWeightMap(hands);
		var beginWei = RuleDdz.getWeight(contains[0]);
		var endWei = beginWei+enemyCards.length/2-1;
		for(var i=beginWei; i<=endWei; i++){
			if(wMap[i] && wMap[i].length>=2) {
				outs.push(wMap[i][0]);
				outs.push(wMap[i][1]);
			} else {
				break;
			}
		}
		if(outs.length===enemyCards.length) {
			return outs;
		}
		return null;
	}

	//ok
	protected static pickSandai0(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		if(RuleDdz.getWeight(contains[0])<=RuleDdz.getWeight(enemyCards[0])){
			return null;
		}
		var idx = hands.indexOf(contains[0]);
		if(idx<0){ return null; }
		var wMap = RuleDdz.getWeightMap(hands);
		var dstWei = RuleDdz.getWeight(contains[0]);
		if(wMap[dstWei].length>=3){
			return wMap[dstWei].slice(0,3);
		}
		return null;
	}

	protected static pickSandai1(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		var idx = hands.indexOf(contains[0]);
		if(idx<0){ return null; }
		
		var wMapContains = RuleDdz.getWeightMap(contains);
		if(Object.keys(wMapContains).length>2){
			return null;
		}

		var outs = [];
		for(var w in wMapContains) {
			//wMapContains[w].length
		}
		
		return null;
	}

	protected static pickSandai2(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};

		return null;
	}

	//ok
	protected static pickShunzi(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		if(RuleDdz.getWeight(contains[0])<=RuleDdz.getWeight(enemyCards[0])){
			return null;
		}
		var beginIdx = hands.indexOf(contains[0]);
		if(beginIdx<0) { return null; }
		var outs = [];
		outs.push(contains[0]);
		var len = enemyCards.length;
		while(outs.length<len) {
			if(RuleDdz.getWeight(hands[beginIdx+1])===RuleDdz.getWeight(hands[beginIdx])){
				beginIdx++;
			}
			else if(RuleDdz.getWeight(hands[beginIdx+1])===RuleDdz.getWeight(hands[beginIdx])+1){
				outs.push(hands[beginIdx+1]);
				beginIdx++;
			}
			else {
				break;
			}
		}
		if(outs.length===len){
			return outs;
		}
		return null;
	}

	protected static pickSidai2(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		var wMapContains = RuleDdz.getWeightMap(contains);
		if(Object.keys(wMapContains).length > 3) {
			return null;
		}
		var outs = [];
		var wHands = RuleDdz.getWeightMap(hands);
		for(var w in wMapContains) {
			if(wHands[w].length === 4) {
				CommonUtil.appendArray(outs, wHands[w].slice(0,4));
			} else {
				for(var i in wMapContains[w]) {
					outs.push(contains[i]);
					if(outs.length>=6){ break; }
				}
			}
		}
		return outs;
	}

	protected static pickSidai4(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		var wMapContains = RuleDdz.getWeightMap(contains);
		if(Object.keys(wMapContains).length > 3) {
			return null;
		}
		var outs = [];
		var wHands = RuleDdz.getWeightMap(hands);
		
		return null;
	}

	//ok
	protected static pickZhadan(hands:Array<PokerCode>, enemyCards:Array<PokerCode>, contains:Array<PokerCode>) : Array<PokerCode>
	{
		if(DDzPaiXingParser.getPaiXing(contains).compare(DDzPaiXingParser.getPaiXing(enemyCards))){
			return contains;
		};
		if(RuleDdz.getWeight(contains[0])<=RuleDdz.getWeight(enemyCards[0])){
			return null;
		}
		var idx = hands.indexOf(contains[0]);
		if(idx<0) { return null; }
		
		if(contains[0]===PokerCode.QUEEN || contains[0]===PokerCode.KING){
			var i1 = hands.indexOf(PokerCode.KING);
			var i2 = hands.indexOf(PokerCode.QUEEN);
			if(i1>=0 && i2>=0) {
				return [PokerCode.KING, PokerCode.QUEEN];
			}
			return null;
		}

		var outs = [];
		outs.push(contains[0]);
		for(var i=idx-1; i>=0; i--) {
			if(RuleDdz.getWeight(hands[i]) === RuleDdz.getWeight(hands[idx])){
				outs.push(hands[i]);
			} else {
				break;
			}
		}
		for(var i=idx+1; i<hands.length; i++) {
			if(RuleDdz.getWeight(hands[i]) === RuleDdz.getWeight(hands[idx])){
				outs.push(hands[i]);
			} else {
				break;
			}
		}
		if(outs.length===4) {
			return outs;
		}
		return null;
	}

}