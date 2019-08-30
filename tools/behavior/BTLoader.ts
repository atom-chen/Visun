module behavior {
	export class BTLoader {
		private static genNode(clsName:string, ...args:any[]) :BehaviorNodeBase {
			switch(clsName) {
				case "QuestionColorNum": return new QuestionColorNum(args[0], args[1]);
				case "CmpMyHP": return new CmpMyHP(args[0], args[1], true);
				case "ChooseFightTarget": return new ChooseFightTarget(args[0]);
				case "ComboRight": return new ComboRight(args[0],args[1]);
				case "DiedTeammateCount": return new DiedTeammateCount(args[0], args[1]);
				case "IsCurAnswerRight": return new IsCurAnswerRight();
				case "IsCurStep": return new IsCurStep(args[0]);
				case "IsTeamLeader": return new IsTeamLeader();

				case "Delay": return new Delay(args[0]);
				case "NormalAttack": return new NormalAttack(args[0]);
				case "SkillAttack": return new SkillAttack(args[0]);

				//case "AddSkillEffect"
			}
		}

		private static btMap: Object = new Object();
		public static genBT(btName:string) : BehaviorTree {
			if(this.btMap[btName]) return this.btMap[btName];
			this.btMap[btName] = behavior[btName].getInstance();
			return this.btMap[btName];
		}

		private loadBT(btName) : BehaviorTree {
			return null;
		}
	}
}