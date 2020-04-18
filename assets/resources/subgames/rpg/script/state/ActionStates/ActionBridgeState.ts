import StateBase from "../State";
import RoleEntity from "../../role/RoleEntity";
import { RoleState } from "../StateConst";
import RoleFighter from "../../role/RoleFighter";

export default class ActionBridgeState extends StateBase {
	protected id:RoleState = RoleState.ActBridge;

	public onEnter(who: RoleEntity, param:any) {
		if(param === RoleState.ActBridge) {
			cc.error("参数错误");
		}
		var a = who as RoleFighter;
		a.getStateMgr().setActionState(a, param, param);
	}

}