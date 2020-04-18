import RoleEntity from "../../role/RoleEntity";
import { RoleState } from "../StateConst";
import StateBase from "../State";

export default class SkyRestState extends StateBase {
	protected id:RoleState = RoleState.SkyRest;
	
	public frameUpdate(who: RoleEntity) {

	}

	public onEnter(who: RoleEntity, param:any) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}
}