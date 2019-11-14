
import DDzPaiXingParser from "./DDzPaixingParser";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import RuleDdz from "./RuleDdz";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

function isNil(v:any) {
	return v===null || v===undefined;
}

export default class SlidePicker {

	public static draw(collects:Array<PokerCode>) : Array<PokerCode> {
		RuleDdz.sortCardsMin2Max(collects);

		var outs = [];

		outs = this.drawLiandui(collects);
		if(outs && outs.length > 0) { return outs; }
		outs = this.drawFeiji2(collects);
		if(outs && outs.length > 0) { return outs; }
		outs = this.drawFeiji1(collects);
		if(outs && outs.length > 0) { return outs; }
		outs = this.drawFeiji0(collects);
		if(outs && outs.length > 0) { return outs; }
		outs = this.drawShunzi(collects);
		if(outs && outs.length > 0) { return outs; }
		outs = this.drawZhadan(collects);
		if(outs && outs.length > 0) { return outs; }

		return outs;
	}

	public static drawLiandui(collects:Array<PokerCode>) : Array<PokerCode> 
	{
		var outs = [];
		var tmpLen = Math.floor(collects.length/2)*2;
		for(var aa=tmpLen; aa>=6; aa-=2) {
			for(var bb=0; bb<=collects.length-6; bb++) {
				var tmpContain = [collects[bb]];
				outs = this.pickPx(DDzPaiXingEnum.liandui, collects, tmpContain, aa);
				if(outs && outs.length > 0) {
					return outs;
				}
			}
		}
		return outs;
	}

	public static drawFeiji2(collects:Array<PokerCode>) : Array<PokerCode> 
	{
		var outs = [];
		var tmpLen = Math.floor(collects.length/5)*5;
		for(var aa=tmpLen; aa>=10; aa-=5) {
			for(var bb=0; bb<=collects.length-10; bb++) {
				var tmpContain = [collects[bb]];
				outs = this.pickPx(DDzPaiXingEnum.feiji2, collects, tmpContain, aa);
				if(outs && outs.length > 0) {
					return outs;
				}
			}
		}
		return outs;
	}

	public static drawFeiji1(collects:Array<PokerCode>) : Array<PokerCode> 
	{
		var outs = [];
		var tmpLen = Math.floor(collects.length/4)*4;
		for(var aa=tmpLen; aa>=8; aa-=4) {
			for(var bb=0; bb<=collects.length-8; bb++) {
				var tmpContain = [collects[bb]];
				outs = this.pickPx(DDzPaiXingEnum.feiji1, collects, tmpContain, aa);
				if(outs && outs.length > 0) {
					return outs;
				}
			}
		}
		return outs;
	}

	public static drawFeiji0(collects:Array<PokerCode>) : Array<PokerCode> 
	{
		var outs = [];
		var tmpLen = Math.floor(collects.length/3)*3;
		for(var aa=tmpLen; aa>=6; aa-=3) {
			for(var bb=0; bb<=collects.length-6; bb++) {
				var tmpContain = [collects[bb]];
				outs = this.pickPx(DDzPaiXingEnum.feiji0, collects, tmpContain, aa);
				if(outs && outs.length > 0) {
					return outs;
				}
			}
		}
		return outs;
	}

	public static drawShunzi(collects:Array<PokerCode>) : Array<PokerCode> 
	{
		var outs = [];
		var tmpLen = collects.length;
		for(var aa=tmpLen; aa>=5; aa-=1) {
			for(var bb=0; bb<=collects.length-5; bb++) {
				var tmpContain = [collects[bb]];
				outs = this.pickPx(DDzPaiXingEnum.shunzi, collects, tmpContain, aa);
				if(outs && outs.length > 0) {
					return outs;
				}
			}
		}
		return outs;
	}

	public static drawZhadan(collects:Array<PokerCode>) : Array<PokerCode> 
	{
		var outs = [];
		var tmpLen = collects.length;
		for(var aa=tmpLen; aa>=4; aa-=1) {
			for(var bb=0; bb<=collects.length-4; bb++) {
				var tmpContain = [collects[bb]];
				outs = this.pickPx(DDzPaiXingEnum.zhadan, collects, tmpContain, aa);
				if(outs && outs.length > 0) {
					return outs;
				}
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

		RuleDdz.sortCardsMin2Max(hands);

		var pxContains = DDzPaiXingParser.getPaiXing(contains);
		if(pxContains.compare(pxEnemy)) {
			return contains;
		}

		return this.pickPx(pxEnemy.paixing, hands, contains, enemyCards.length);
	}

	private static pickPx(px:DDzPaiXingEnum, hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		switch (px) {
			case DDzPaiXingEnum.danpai:
				return this.pickDanpai(hands, contains);
			case DDzPaiXingEnum.duizi:
				return this.pickDuizi(hands, contains);
			case DDzPaiXingEnum.feiji0:
				return this.pickFeiji0(hands, contains, length);
			case DDzPaiXingEnum.feiji1:
				return this.pickFeiji1(hands, contains, length);
			case DDzPaiXingEnum.feiji2:
				return this.pickFeiji2(hands, contains, length);
			case DDzPaiXingEnum.huojian:
				return this.pickHuojian(hands, contains);
			case DDzPaiXingEnum.liandui:
				return this.pickLiandui(hands, contains, length);
			case DDzPaiXingEnum.sandai0:
				return this.pickSandai0(hands, contains);
			case DDzPaiXingEnum.sandai1:
				return this.pickSandai1(hands, contains);
			case DDzPaiXingEnum.sandai2:
				return this.pickSandai2(hands, contains);
			case DDzPaiXingEnum.sidai2:
				return this.pickSidai2(hands, contains);
			case DDzPaiXingEnum.shunzi:
				return this.pickShunzi(hands, contains, length);
			case DDzPaiXingEnum.sidai4:
				return this.pickSidai4(hands, contains);
			case DDzPaiXingEnum.zhadan:
				return this.pickZhadan(hands, contains);
		}
		return null;
	}

	//ok
	protected static pickDanpai(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		if(contains.length===1) {
			return [contains[0]];
		}
		return null;
	}

	//ok
	protected static pickDuizi(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		if(contains.length==1){
			var idx = hands.indexOf(contains[0]);
			if(idx<0 || idx>=hands.length) {
				return null;
			}
			var w = RuleDdz.getWeight(contains[0]);
			if(hands[idx+1] && w === RuleDdz.getWeight(hands[idx+1])) {
				return [hands[idx], hands[idx+1]];
			}
			if(hands[idx-1] && w === RuleDdz.getWeight(hands[idx-1])) {
				return [hands[idx], hands[idx-1]];
			}
		}
		return null;
	}

	//ok
	protected static pickFeiji0(hands:Array<PokerCode>, contains:Array<PokerCode>, length:number) : Array<PokerCode>
	{
		var wMap = RuleDdz.getWeightMap(hands);
		var wc0 = RuleDdz.getWeight(contains[0]);
		
		var outs = [];
		for(var i=0; i<length/3; i++) {
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

	protected static pickFeiji1(hands:Array<PokerCode>, contains:Array<PokerCode>, length:number) : Array<PokerCode>
	{
		return this.pickFeiji0(hands, contains, length/4*3);
	}

	protected static pickFeiji2(hands:Array<PokerCode>, contains:Array<PokerCode>, length:number) : Array<PokerCode>
	{
		return this.pickFeiji0(hands, contains, length/5*3);
	}

	//ok
	protected static pickHuojian(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		return null; //没有牌能大过王炸
	}

	//ok
	protected static pickLiandui(hands:Array<PokerCode>, contains:Array<PokerCode>, length:number) : Array<PokerCode>
	{
		var outs = [];
		var wMap = RuleDdz.getWeightMap(hands);
		var beginWei = RuleDdz.getWeight(contains[0]);
		var endWei = beginWei + length/2 - 1;
		for(var i=beginWei; i<=endWei; i++){
			if(wMap[i] && wMap[i].length>=2) {
				outs.push(wMap[i][0]);
				outs.push(wMap[i][1]);
			} else {
				break;
			}
		}
		if(outs.length===length) {
			return outs;
		}
		return null;
	}

	//ok
	protected static pickSandai0(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		var idx = hands.indexOf(contains[0]);
		if(idx<0){ return null; }
		var wMap = RuleDdz.getWeightMap(hands);
		var dstWei = RuleDdz.getWeight(contains[0]);
		if(wMap[dstWei].length>=3){
			return wMap[dstWei].slice(0,3);
		}
		return null;
	}

	protected static pickSandai1(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		return this.pickSandai0(hands, contains);
	}

	protected static pickSandai2(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		return this.pickSandai0(hands, contains);
	}

	//ok
	protected static pickShunzi(hands:Array<PokerCode>, contains:Array<PokerCode>, length:number) : Array<PokerCode>
	{
		var beginIdx = hands.indexOf(contains[0]);
		if(beginIdx<0) { return null; }
		var outs = [];
		outs.push(contains[0]);
		var len = length;
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

	protected static pickSidai2(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		return this.pickZhadan(hands, contains);
	}

	protected static pickSidai4(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
		return this.pickZhadan(hands, contains);
	}

	//ok
	protected static pickZhadan(hands:Array<PokerCode>, contains:Array<PokerCode>, length?:number) : Array<PokerCode>
	{
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