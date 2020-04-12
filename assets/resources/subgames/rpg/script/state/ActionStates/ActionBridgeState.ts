import { ActionState } from "../State";
import RoleEntity from "../../role/RoleEntity";
import { StateParam, RoleState } from "../StateConst";

export default class ActionBridgeState extends ActionState {
	protected id:RoleState = RoleState.ActBridge;

	public onEnter(who: RoleEntity, param:StateParam) {

	}

}