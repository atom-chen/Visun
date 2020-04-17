import RoleEntity from "../../role/RoleEntity";
import { StateParam, RoleState } from "../StateConst";
import { SkyMoveState } from "../State";

export default class SkyPathState extends SkyMoveState {
	protected id:RoleState = RoleState.SkyPath;
	
	public frameUpdate(who: RoleEntity) {

	}

	public onEnter(who: RoleEntity, param:StateParam) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}
}