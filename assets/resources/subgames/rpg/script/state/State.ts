//-----------------------------------
// 状态基类
//-----------------------------------
import RoleEntity from "../role/RoleEntity";
import { StateParam } from "./StateConst";

export default class StateBase {

	public frameUpdate() {

	}

	public onEnter(who: RoleEntity, param:StateParam) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}

}


export class SkyMoveState extends StateBase {

}


export class GroundMoveState extends StateBase {

}


export class ActionState extends StateBase {

}
