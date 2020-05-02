//-----------------------------------
// 战斗：基类
//-----------------------------------
import { CombatStopReason } from "../define";
import CombatReport from "./CombatReport";


export default class CombatBase {

	public startCombat() {

	}

	public stopCombat(reason:CombatStopReason) {

	}

	public genResult() : CombatReport {
		return null;
	}

}