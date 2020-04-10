import { CombatStopReason, CombatResult } from "../define";


export default class CombatBase {

	public startCombat() {

	}

	public stopCombat(reason:CombatStopReason) {

	}

	public genResult() : CombatResult {
		return null;
	}

}