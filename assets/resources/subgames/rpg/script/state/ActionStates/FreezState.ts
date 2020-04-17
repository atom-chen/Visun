import RoleEntity from "../../role/RoleEntity";
import { StateParam, RoleState } from "../StateConst";
import { ActionState } from "../State";

export default class FreezState extends ActionState {
	protected id:RoleState = RoleState.Freez;
	
	public frameUpdate(who: RoleEntity) {

	}

	public onEnter(who: RoleEntity, param:StateParam) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}
}