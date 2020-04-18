//-----------------------------------
// 状态基类
//-----------------------------------
import RoleEntity from "../role/RoleEntity";
import { StateParam, RoleState } from "./StateConst";

export default class StateBase {
	protected id:RoleState = -1;

	public frameUpdate(who: RoleEntity) {

	}

	public onEnter(who: RoleEntity, param:StateParam) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}

	public getId() : RoleState {
		return this.id;
	}

}

