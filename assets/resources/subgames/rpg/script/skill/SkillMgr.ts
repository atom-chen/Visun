import Skill from "./Skill";

export default class SkillMgr {

	skillList: Array<Skill> = [];

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

}