//-----------------------------------
// 实体：战士
//-----------------------------------
import RoleEntity from "./RoleEntity";
import { BEHAVIOR_STATE } from "../../../../../kernel/basic/defines/KernelDefine";
import StateMgr from "../state/StateMgr";
import SkillMgr from "../skill/SkillMgr";
import BuffMgr from "../buff/BuffMgr";
import { AiCompare } from "../../../../../kernel/behaviour/AIUtil";
import BehaviorNodeBase from "../../../../../kernel/behaviour/BehaviorNode";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import { newHandler, isNil } from "../../../../../kernel/utils/GlobalFuncs";


const {ccclass, property} = cc._decorator;

@ccclass
export default class RoleFighter extends RoleEntity {
	protected curMp:number;
	protected curHp:number;
	protected MaxHp:number;
	protected MagicAtk:number;
	protected MagicDef:number;
	protected PhyAtk:number;
	protected PhyDef:number;
	protected CriAtk:number;
	protected CriDef:number;
	protected CriProb:number;

	protected stateObj:StateMgr;
	protected skillObj:SkillMgr;
	protected buffObj:BuffMgr;

	protected roleId: number;

	constructor(id:number) {
		super();
		this.roleId = id;
		this.stateObj = new StateMgr();
		this.skillObj = new SkillMgr();
		this.buffObj = new BuffMgr();
	//	this.stateObj.resetStates(this);
	//	Updator.registerUpdator(newHandler(this.update, this));
	}

	public update() {
		this.stateObj.frameUpdate(this, 0);
	}

	public getId() : number {
		return this.roleId;
	}

	public getStateMgr() : StateMgr {
		return this.stateObj;
	}

	public setPos(x:number, y:number, h:number) {
		if(!isNil(x)) { this.posX = x; } 
		if(!isNil(y)) { this.posY = y; }
		if(!isNil(h)) { this.posH = h; }
	}

	public addHP(v:number) : number {
		this.curHp = this.curHp + v;
		return this.curHp;
	}
	
	public ProcCmpMyHP(cmpMode:string, hpValue:number, bPercent:boolean) : BEHAVIOR_STATE {
		var finalV = this.curHp;
		if(bPercent) { finalV = this.curHp/this.MaxHp; }
		if( AiCompare(cmpMode, finalV, hpValue) ) {
			return BEHAVIOR_STATE.SUCC;
		} else {
			return BEHAVIOR_STATE.FAIL;
		}
	}

	public ProcRest(btNode:BehaviorNodeBase, restTime:number) : BEHAVIOR_STATE {
		TimerManager.delayFrame(restTime, newHandler(function(tmr, node:BehaviorNodeBase){
			node.onDealOver(this, BEHAVIOR_STATE.SUCC);
		}, this, btNode));
		return BEHAVIOR_STATE.RUNNING;
	}
	
}