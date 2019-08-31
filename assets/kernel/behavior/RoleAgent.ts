import Blackboard from "./Blackboard";
import SkillAttack from "./action_nodes/SkillAttack";
import TargetLogic from "./TargetLogic";
import { BT_STATE } from "./AIConst";
import NormalAttack from "./action_nodes/NormalAttack";
import Delay from "./action_nodes/Delay";

//--------------------------------------------------------------------------------------------
// 行为树角色代理。游戏实体可通过继承该类来实现AI
//--------------------------------------------------------------------------------------------
export default abstract class RoleAgent {
	protected _blackboard:Blackboard = new Blackboard(this);

	getBlackboard() : Blackboard 
	{
		return this._blackboard;
	}

	ProcSkillAttack(arg0: SkillAttack, targetLgc: TargetLogic): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcNormalAttack(arg0: NormalAttack, targetLgc: TargetLogic): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcDelay(arg0: Delay, restTime: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcAddSkillEffect(): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcCmpMyHP(cmpMode: string, hpPercent: number, bPercent: boolean): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcCmpTeamHP(cmpMode: string, hp: number, bPercent: boolean): BT_STATE {
		throw new Error("Method not implemented.");
	}
	
	ProcComboRight(cmpMode: string, comboCnt: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcDiedTeammateCount(_cmpMode: string, _diedCound: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcIsCurAnswerRight(): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcIsCurStep(_dstStep: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcIsTeamLeader(): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcQuestionColorNum(cmpMode: string, _count: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTargetIsAttr(target: RoleAgent, attr: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTargetIsRace(target: RoleAgent, race: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamAttrCount(cmpMode: string, side: number, _count: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamAttrMemberCount(cmpMode: string, side: number, dstAttr: number, _count: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamRaceCount(cmpMode: string, side: number, _count: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamRaceMemberCount(cmpMode: string, side: number, dstRace: number, _count: number): BT_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTotalRight(cmpMode: string, totalRight: number): BT_STATE {
		throw new Error("Method not implemented.");
	}
	
	ProcChooseFightTarget(targetLgc: TargetLogic): BT_STATE {
		throw new Error("Method not implemented.");
	}
	
}