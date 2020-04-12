import RoleEntity from "../../role/RoleEntity";
import { StateParam, RoleState } from "../StateConst";
import { SkyMoveState } from "../State";

export default class SkyBridgeState extends SkyMoveState {
	protected id:RoleState = RoleState.SkyBridge;
	
	public frameUpdate() {

	}

	public onEnter(who: RoleEntity, param:StateParam) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}
}