import RoleEntity from "../../role/RoleEntity";
import { RoleState } from "../StateConst";
import StateBase from "../State";
import TimerManager from "../../../../../../kernel/basic/timer/TimerManager";
import { newHandler } from "../../../../../../kernel/utils/GlobalFuncs";
import RoleFighter from "../../role/RoleFighter";

export default class SkillState extends StateBase {
	protected id:RoleState = RoleState.Skill;
	
	public frameUpdate(who: RoleEntity) {
		
	}

	public onEnter(who: RoleEntity, param:any) {
		TimerManager.delayFrame(10, newHandler((tmr, target)=>{
			this.onComplete(target);
		}, this, who))
	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {
		var a = who as RoleFighter;
		a.getStateMgr().setActionState(a, RoleState.ActBridge, RoleState.Idle)
	}
}