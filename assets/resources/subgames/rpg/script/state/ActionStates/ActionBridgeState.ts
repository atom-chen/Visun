import StateBase from "../State";
import RoleEntity from "../../role/RoleEntity";
import { StateParam, RoleState } from "../StateConst";

export default class ActionBridgeState extends StateBase {
	protected id:RoleState = RoleState.ActBridge;

	public onEnter(who: RoleEntity, param:StateParam) {

	}

}