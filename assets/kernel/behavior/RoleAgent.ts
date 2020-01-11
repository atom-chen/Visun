import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";

//--------------------------------------------------------------------------------------------
// 行为树角色代理。游戏实体可通过继承该类来实现AI
//--------------------------------------------------------------------------------------------
export default abstract class RoleAgent {

	ProcCmpMyHP(cmpMode: string, hpPercent: number, bPercent: boolean): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcCmpTeamHP(cmpMode: string, hp: number, bPercent: boolean): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}
	
	ProcComboRight(cmpMode: string, comboCnt: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcDiedTeammateCount(_cmpMode: string, _diedCound: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcIsCurAnswerRight(): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcIsCurStep(_dstStep: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcIsTeamLeader(): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcQuestionColorNum(cmpMode: string, _count: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTargetIsAttr(target: RoleAgent, attr: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTargetIsRace(target: RoleAgent, race: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamAttrCount(cmpMode: string, side: number, _count: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamAttrMemberCount(cmpMode: string, side: number, dstAttr: number, _count: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamRaceCount(cmpMode: string, side: number, _count: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTeamRaceMemberCount(cmpMode: string, side: number, dstRace: number, _count: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}

	ProcTotalRight(cmpMode: string, totalRight: number): BEHAVIOR_STATE {
		throw new Error("Method not implemented.");
	}
	
}