//-----------------------------------
// 某个角色的状态管理
//-----------------------------------
import { RoleState, CrossLayerForbitTable, ActionStateTransTable, GroundStateTransTable, SkyStateTransTable, StateName, StateLayer } from "./StateConst";
import JumpState from "./ActionStates/JumpState";
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
import GroundFreezState from "./GroundMoveStates/GroundFreezState";
import GroundLineState from "./GroundMoveStates/GroundLineState";
import GroundPathState from "./GroundMoveStates/GroundPathState";
import GroundRestState from "./GroundMoveStates/GroundRestState";
import SkyFreezState from "./SkyMoveStates/SkyFreezState";
import SkyLineState from "./SkyMoveStates/SkyLineState";
import SkyPathState from "./SkyMoveStates/SkyPathState";
import SkyRestState from "./SkyMoveStates/SkyRestState";
import RoleFighter from "../role/RoleFighter";
import StateBase from "./State";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";

var ActionStateTable:{[key:number]:StateBase} = {
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
	[RoleState.GroundFreez] : new GroundFreezState(),
	[RoleState.GroundLine] : new GroundLineState(),
	[RoleState.GroundPath] : new GroundPathState(),
	[RoleState.GroundRest] : new GroundRestState(),
}

var SkyMoveStateTable:{[key:number]:StateBase} = {
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

	public getStateLayer(iState:RoleState) : StateLayer {
		if(iState >= RoleState.Idle && iState <= RoleState.Relife) {
			return StateLayer.Action;
		} else if(iState >= RoleState.GroundLine && iState <= RoleState.GroundFreez) {
			return StateLayer.GroundMove;
		} else {
			return StateLayer.SkyMove;
		}
	}

	//检查是否被跨层阻止
	private isCrossLayerForbit(obj:RoleFighter, toState:RoleState) : boolean {
		if(isNil(CrossLayerForbitTable[toState])) { return false; }
		var forbits = CrossLayerForbitTable[toState];
		if(forbits[obj.getStateMgr().mCurActionState.getId()]==true) { return true; }
		if(forbits[obj.getStateMgr().mCurGroundState.getId()]==true) { return true; }
		if(forbits[obj.getStateMgr().mCurSkyState.getId()]==true) { return true; }
		return false;
	}

	public can2ActionState(obj:RoleFighter, toState:RoleState) : boolean {
		if(this.isCrossLayerForbit(obj, toState)) {
			return false;
		}
		if(isNil(obj.getStateMgr().mCurActionState)) {
			return true;
		}
		if(ActionStateTransTable[toState][obj.getStateMgr().mCurActionState.getId()]) {
			return true;
		}
		return false;
	}

	public can2GroundMoveState(obj:RoleFighter, toState:RoleState) : boolean {
		if(this.isCrossLayerForbit(obj, toState)) {
			return false;
		}
		if(isNil(obj.getStateMgr().mCurGroundState)) {
			return true;
		}
		if(GroundStateTransTable[toState][obj.getStateMgr().mCurGroundState.getId()]) {
			return true;
		}
		return false;
	}

	public can2SkyMoveState(obj:RoleFighter, toState:RoleState) : boolean {
		if(this.isCrossLayerForbit(obj, toState)) {
			return false;
		}
		if(isNil(obj.getStateMgr().mCurSkyState)) {
			return true;
		}
		if(SkyStateTransTable[toState][obj.getStateMgr().mCurSkyState.getId()]) {
			return true;
		}
		return false;
	}

	public canToState(obj:RoleFighter, toState:RoleState, param:any) : boolean {
		var stateType = this.getStateLayer(toState);
		if(stateType === StateLayer.Action) {
			return this.can2ActionState(obj, toState);
		} else if(stateType === StateLayer.GroundMove) {
			return this.can2GroundMoveState(obj, toState);
		} else {
			return this.can2SkyMoveState(obj, toState);
		}
	}

	public setActionState(obj:RoleFighter, toState:RoleState, param:any) {
		if(this.mCurActionState) {
			this.mCurActionState.onExit(obj);
		}
		cc.log(obj.getId(), StateName[this.mCurActionState.getId()] + " ---> " + StateName[toState]); 
		this.mCurActionState = ActionStateTable[toState];
		this.mCurActionState.onEnter(obj, param);
	}

	public setGroundMoveState(obj:RoleFighter, toState:RoleState, param:any) {
		if(this.mCurGroundState) {
			this.mCurGroundState.onExit(obj);
		}
		cc.log(obj.getId(), StateName[this.mCurGroundState.getId()] + " ---> " + StateName[toState]); 
		this.mCurGroundState = GroundMoveStateTable[toState];
		this.mCurGroundState.onEnter(obj, param);
	}

	public setSkyMoveState(obj:RoleFighter, toState:RoleState, param:any) {
		if(this.mCurSkyState) {
			this.mCurSkyState.onExit(obj);
		}
		cc.log(obj.getId(), StateName[this.mCurSkyState.getId()] + " ---> " + StateName[toState]); 
		this.mCurSkyState = SkyMoveStateTable[toState];
		this.mCurSkyState.onEnter(obj, param);
	}

	public turnToState(obj:RoleFighter, toState:RoleState, param:any) : boolean {
		var stateType = this.getStateLayer(toState);
		if(stateType === StateLayer.Action) {
			if(this.can2ActionState(obj, toState)) {
				this.setActionState(obj, toState, param);
				return true;
			} else {
				return false;
			}
		} else if(stateType === StateLayer.GroundMove) {
			if(this.can2GroundMoveState(obj, toState)) {
				this.setGroundMoveState(obj, toState, param);
				return true;
			} else {
				return false;
			}
		} else {
			if(this.can2SkyMoveState(obj, toState)) {
				this.setSkyMoveState(obj, toState, param);
				return true;
			} else {
				return false;
			}
		}
	}

}