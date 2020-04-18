//-----------------------------------
// 角色身上的技能包
//-----------------------------------
import Skill from "./Skill";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";

export default class SkillMgr {

	private skillList: Array<Skill> = [];
	private curSkill:Skill;

	public addSkill(idx:number, skillObj:Skill) : boolean {
		for(var i=0; i<5; i++) {
			if(this.skillList[i].getId() === skillObj.getId()) {
				return false;
			}
		}
		this.skillList[idx] = skillObj;
		return true;
	}

	public delSkill(skillId:number) : boolean {
		for(var i=0; i<5; i++) {
			if(this.skillList[i].getId() === skillId) {
				this.skillList[i] = null;
				return true;
			}
		}
		return false;
	}

	public playSkill(skillIndex:number) {
		if(isNil(this.skillList[skillIndex])) {
			cc.log("尚未学习该技能：", skillIndex);
			return;
		}
		this.curSkill = this.skillList[skillIndex];
		this.skillList[skillIndex].play(null, null);
	}

	public interruptSkill() {
		if(!isNil(this.curSkill)) {
			this.curSkill.interrupt();
		}
	}

}