//-----------------------------------
// 某个角色身上的Buff集合
//-----------------------------------
import RoleEntity from "../role/RoleEntity";
import BuffData from "./BuffData";

export default class BuffMgr {

	public addBuff(attacker:RoleEntity, buffObj:BuffData) : boolean {
		return false;
	}

	public removeBuff(buffObj:BuffData) : boolean {
		return false;
	}

	public clearBuff() : boolean {
		return false;
	}


	//战斗开始时
	public onStartCombat() {

	}

	//战斗结束时
	public onEndCombat() {

	}

	//回合开始时
	public onRoundBegin() {

	}

	//回合结束时
	public onRoundEnd() {

	}

	//受击前
	public onBeforeHit() {

	}

	//受击后
	public onAfterHit() {

	}

	//攻击前
	public onBeforeAttack() {

	}

	//攻击后
	public onAfterAttack() {

	}

	//死亡时
	public onDead() {

	}

	//复活时
	public onRelife() {

	}
	
}