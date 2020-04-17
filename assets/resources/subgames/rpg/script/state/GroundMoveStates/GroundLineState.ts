import RoleEntity from "../../role/RoleEntity";
import { StateParam, RoleState } from "../StateConst";
import { GroundMoveState } from "../State";

export default class GroundLineState extends GroundMoveState {
	protected id:RoleState = RoleState.GroundLine;
	
	public frameUpdate(who: RoleEntity) {

	}

	public onEnter(who: RoleEntity, param:StateParam) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}
}