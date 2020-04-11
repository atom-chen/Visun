//-----------------------------------
// 战斗：基类
//-----------------------------------
import { CombatStopReason, CombatReport } from "../define";


export default class CombatBase {

	public startCombat() {

	}

	public stopCombat(reason:CombatStopReason) {

	}

	public genResult() : CombatReport {
		return null;
	}

}