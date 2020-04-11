//-----------------------------------
// 实体：战士
//-----------------------------------
import RoleEntity from "./RoleEntity";
import { BEHAVIOR_STATE } from "../../../../../kernel/basic/defines/KernelDefine";
import StateMgr from "../state/StateMgr";
import SkillMgr from "../skill/SkillMgr";
import BuffMgr from "../buff/BuffMgr";


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
	
	private stateObj:StateMgr;
	private skillObj:SkillMgr;
	private buffObj:BuffMgr;
	
	public ProcCmpMyHP(cmpMode:string, hpValue:number, bPercent:boolean) : BEHAVIOR_STATE {
		return BEHAVIOR_STATE.FAIL;
	}

	public ProcRest(restTime:number) : BEHAVIOR_STATE {
		return BEHAVIOR_STATE.FAIL;
	}
	
}