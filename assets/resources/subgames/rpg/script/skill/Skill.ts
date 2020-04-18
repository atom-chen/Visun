//-----------------------------------
// 技能
//-----------------------------------
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";


export default class Skill {
	private skillId:number;

	constructor(id:number) {
		this.skillId = id;
	}

	public getId() : number {
		return this.skillId;
	}

	public isPlaying() : boolean {
		return false;
	}

	public play(param:any, onFinish:CHandler) {

	}

	public interrupt() {

	}
	
}