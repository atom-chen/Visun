
import RuleDdz from "./RuleDdz";
import { DDzPaiXingEnum } from "../definer/DDzDefine";
import BasePaixing, { PaiXingInvalid } from "../paixing/BasePaixing";
import DDzPaixingDanpai from "../paixing/DDzPaixingDanpai";
import DDzPaixingDuizi from "../paixing/DDzPaixingDuizi";
import DDzPaiXingHuojian from "../paixing/DDzPaixingHuojian";
import DDzPaixingFeiji0 from "../paixing/DDzPaixingFeiji0";
import DDzPaixingFeiji1 from "../paixing/DDzPaixingFeiji1";
import DDzPaixingFeiji2 from "../paixing/DDzPaixingFeiji2";
import DDzPaixingLiandui from "../paixing/DDzPaixingLiandui";
import DDzPaixingSandai0 from "../paixing/DDzPaixingSandai0";
import DDzPaixingSandai1 from "../paixing/DDzPaixingSandai1";
import DDzPaixingSandai2 from "../paixing/DDzPaixingSandai2";
import DDzPaixingShunzi from "../paixing/DDzPaixingShunzi";
import DDzPaixingSidai2 from "../paixing/DDzPaixingSidai2";
import DDzPaixingSidai4 from "../paixing/DDzPaixingSidai4";
import DDzPaixingZhadan from "../paixing/DDzPaixingZhadan";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DDzPaiXingParser {

	public static isInValid(px:BasePaixing) : boolean {
		if(px===null || px===undefined || px.paixing === DDzPaiXingEnum.invalid) {
			return true;
		}
		return false;
	}
	
	// 获取牌型
	public static getPaiXing(cards:Array<PokerCode>) : BasePaixing
	{
		if(cards===null || cards===undefined || cards.length === 0) { 
			return PaiXingInvalid.create(); 
		}

		RuleDdz.sortCardsMin2Max(cards);

		var weights = RuleDdz.getWeightList(cards);

		var curWanfa = RuleDdz.classic_type;

		for(var i in curWanfa) {
			var result = DDzPaiXingParser.getParser(curWanfa[i])(cards, weights);
			if(result) { return result; }
		}

		return PaiXingInvalid.create();
	}

	// 取得牌型检测函数
	public static getParser(px:DDzPaiXingEnum) : Function
	{
		switch(px) {
			case DDzPaiXingEnum.danpai:
				return DDzPaixingDanpai.isMyType;
			case DDzPaiXingEnum.duizi:
				return DDzPaixingDuizi.isMyType;
			case DDzPaiXingEnum.huojian:
				return DDzPaiXingHuojian.isMyType;
			case DDzPaiXingEnum.feiji0:
				return DDzPaixingFeiji0.isMyType;
			case DDzPaiXingEnum.feiji1:
				return DDzPaixingFeiji1.isMyType;
			case DDzPaiXingEnum.feiji2:
				return DDzPaixingFeiji2.isMyType;
			case DDzPaiXingEnum.liandui:
				return DDzPaixingLiandui.isMyType;
			case DDzPaiXingEnum.sandai0:
				return DDzPaixingSandai0.isMyType;
			case DDzPaiXingEnum.sandai1:
				return DDzPaixingSandai1.isMyType;
			case DDzPaiXingEnum.sandai2:
				return DDzPaixingSandai2.isMyType;
			case DDzPaiXingEnum.shunzi:
				return DDzPaixingShunzi.isMyType;
			case DDzPaiXingEnum.sidai2:
				return DDzPaixingSidai2.isMyType;
			case DDzPaiXingEnum.sidai4:
				return DDzPaixingSidai4.isMyType;
			case DDzPaiXingEnum.zhadan:
				return DDzPaixingZhadan.isMyType;
		}
	}
	
}