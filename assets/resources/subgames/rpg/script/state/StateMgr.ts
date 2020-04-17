//-----------------------------------
// 某个角色的状态管理
//-----------------------------------

import { RoleState } from "./StateConst";
import JumpState from "./ActionStates/JumpState";
import ActionBridgeState from "./ActionStates/ActionBridgeState";
import DefendState from "./ActionStates/DefendState";
import DieState from "./ActionStates/DieState";
import FlightState from "./ActionStates/FlightState";
import FreezState from "./ActionStates/FreezState";
import HitState from "./ActionStates/HitState";
import IdleState from "./ActionStates/IdleState";
import LieState from "./ActionStates/LieState";
import RelifeState from "./ActionStates/RelifeState";
import RunState from "./ActionStates/RunState";
import RushState from "./ActionStates/RushState";
import SkillState from "./ActionStates/SkillState";
import WalkState from "./ActionStates/WalkState";
import GroundBridgeState from "./GroundMoveStates/GroundBridgeState";
import GroundFreezState from "./GroundMoveStates/GroundFreezState";
import GroundLineState from "./GroundMoveStates/GroundLineState";
import GroundPathState from "./GroundMoveStates/GroundPathState";
import GroundRestState from "./GroundMoveStates/GroundRestState";
import SkyBridgeState from "./SkyMoveStates/SkyBridgeState";
import SkyFreezState from "./SkyMoveStates/SkyFreezState";
import SkyLineState from "./SkyMoveStates/SkyLineState";
import SkyPathState from "./SkyMoveStates/SkyPathState";
import SkyRestState from "./SkyMoveStates/SkyRestState";
import RoleFighter from "../role/RoleFighter";
import { ActionState, GroundMoveState, SkyMoveState } from "./State";

var ActionStateTable = {
	[RoleState.ActBridge] : new ActionBridgeState(),
	[RoleState.Defend] : new DefendState(),
	[RoleState.Die] : new DieState(),
	[RoleState.Flight] : new FlightState(),
	[RoleState.Freez] : new FreezState(),
	[RoleState.Hit] : new HitState(),
	[RoleState.Idle] : new IdleState(),
	[RoleState.Jump] : new JumpState(),
	[RoleState.Lie] : new LieState(),
	[RoleState.Relife] : new RelifeState(),
	[RoleState.Run] : new RunState(),
	[RoleState.Rush] : new RushState(),
	[RoleState.Skill] : new SkillState(),
	[RoleState.Walk] : new WalkState(),
}

var GroundMoveStateTable = {
	[RoleState.GroundBridge] : new GroundBridgeState(),
	[RoleState.GroundFreez] : new GroundFreezState(),
	[RoleState.GroundLine] : new GroundLineState(),
	[RoleState.GroundPath] : new GroundPathState(),
	[RoleState.GroundRest] : new GroundRestState(),
}

var SkyMoveStateTable = {
	[RoleState.SkyBridge] : new SkyBridgeState(),
	[RoleState.SkyFreez] : new SkyFreezState(),
	[RoleState.SkyLine] : new SkyLineState(),
	[RoleState.SkyPath] : new SkyPathState(),
	[RoleState.SkyRest] : new SkyRestState(),
}


export default class StateMgr {
	private mCurActionState : ActionState;
	private mCurGroundState : GroundMoveState;
	private mCurSkyState : SkyMoveState;

	public frameUpdate(obj:RoleFighter, dt:number) {
		this.mCurActionState.frameUpdate(obj);
		this.mCurGroundState.frameUpdate(obj);
		this.mCurSkyState.frameUpdate(obj);
	}
}