import { CombatStopReason } from "../define";

//战报
export default class CombatReport {
	result:CombatStopReason = CombatStopReason.unknown;
	score:number = 0;
}