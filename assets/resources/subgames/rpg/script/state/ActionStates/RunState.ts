import RoleEntity from "../../role/RoleEntity";
import { StateParam, RoleState } from "../StateConst";
import StateBase from "../State";

export default class RunState extends StateBase {
	protected id:RoleState = RoleState.Run;
	
	public frameUpdate(who: RoleEntity) {

	}

	public onEnter(who: RoleEntity, param:StateParam) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}
}