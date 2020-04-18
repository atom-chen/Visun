//-----------------------------------
// 某个角色的状态管理
//-----------------------------------

import { RoleState, StateParam, CrossLayerForbitTable, ActionStateTransTable, GroundStateTransTable, SkyStateTransTable } from "./StateConst";
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
import StateBase from "./State";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";

var ActionStateTable:{[key:number]:StateBase} = {
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

var GroundMoveStateTable:{[key:number]:StateBase} = {
	[RoleState.GroundBridge] : new GroundBridgeState(),
	[RoleState.GroundFreez] : new GroundFreezState(),
	[RoleState.GroundLine] : new GroundLineState(),
	[RoleState.GroundPath] : new GroundPathState(),
	[RoleState.GroundRest] : new GroundRestState(),
}

var SkyMoveStateTable:{[key:number]:StateBase} = {
	[RoleState.SkyBridge] : new SkyBridgeState(),
	[RoleState.SkyFreez] : new SkyFreezState(),
	[RoleState.SkyLine] : new SkyLineState(),
	[RoleState.SkyPath] : new SkyPathState(),
	[RoleState.SkyRest] : new SkyRestState(),
}


export default class StateMgr {
	private mCurActionState : StateBase;
	private mCurGroundState : StateBase;
	private mCurSkyState : StateBase;
//	private mTarget : RoleFighter;

	constructor() {
		this.mCurActionState = new IdleState();
		this.mCurGroundState = new GroundRestState();
		this.mCurSkyState = new SkyRestState();
	}

	public frameUpdate(obj:RoleFighter, dt:number) {
		this.mCurActionState.frameUpdate(obj);
		this.mCurGroundState.frameUpdate(obj);
		this.mCurSkyState.frameUpdate(obj);
	}

	public resetStates(obj:RoleFighter) {
		obj.setPos(null, null, 0);
		this.setActionState(obj, RoleState.Idle, null);
		this.setGroundMoveState(obj, RoleState.GroundRest, null);
		this.setSkyMoveState(obj, RoleState.SkyRest, null);
	}

	//检查是否被跨层阻止
	public checkCrossLayerForbit(obj:RoleFighter, iState:RoleState) : boolean {
		if(isNil(CrossLayerForbitTable[iState])) { return true; }
		var forbits = CrossLayerForbitTable[iState];
		if(forbits[obj.getStateMgr().mCurActionState.getId()]==true) { return false; }
		if(forbits[obj.getStateMgr().mCurGroundState.getId()]==true) { return false; }
		if(forbits[obj.getStateMgr().mCurSkyState.getId()]==true) { return false; }
		return false;
	}

	public can2ActionState(obj:RoleFighter, iState:RoleState) : boolean {
		if(!this.checkCrossLayerForbit(obj, iState)) {
			return false;
		}
		if(isNil(obj.getStateMgr().mCurActionState)) {
			return true;
		}
		if(ActionStateTransTable[iState][obj.getStateMgr().mCurActionState.getId()]) {
			return true;
		}
		return false;
	}

	public can2GroundMoveState(obj:RoleFighter, iState:RoleState) : boolean {
		if(!this.checkCrossLayerForbit(obj, iState)) {
			return false;
		}
		if(isNil(obj.getStateMgr().mCurGroundState)) {
			return true;
		}
		if(GroundStateTransTable[iState][obj.getStateMgr().mCurGroundState.getId()]) {
			return true;
		}
		return false;
	}

	public can2SkyMoveState(obj:RoleFighter, iState:RoleState) : boolean {
		if(!this.checkCrossLayerForbit(obj, iState)) {
			return false;
		}
		if(isNil(obj.getStateMgr().mCurSkyState)) {
			return true;
		}
		if(SkyStateTransTable[iState][obj.getStateMgr().mCurSkyState.getId()]) {
			return true;
		}
		return false;
	}

	public setActionState(obj:RoleFighter, iState:RoleState, param:StateParam) {
		if(this.mCurActionState) {
			this.mCurActionState.onExit(obj);
		}
		cc.log(obj.getId(), this.mCurActionState.getId() + " ---> " + iState); 
		this.mCurActionState = ActionStateTable[iState];
		this.mCurActionState.onEnter(obj, param);
	}

	public setGroundMoveState(obj:RoleFighter, iState:RoleState, param:StateParam) {
		if(this.mCurGroundState) {
			this.mCurGroundState.onExit(obj);
		}
		cc.log(obj.getId(), this.mCurGroundState.getId() + " ---> " + iState); 
		this.mCurGroundState = GroundMoveStateTable[iState];
		this.mCurGroundState.onEnter(obj, param);
	}

	public setSkyMoveState(obj:RoleFighter, iState:RoleState, param:StateParam) {
		if(this.mCurSkyState) {
			this.mCurSkyState.onExit(obj);
		}
		cc.log(obj.getId(), this.mCurSkyState.getId() + " ---> " + iState); 
		this.mCurSkyState = SkyMoveStateTable[iState];
		this.mCurSkyState.onEnter(obj, param);
	}

}