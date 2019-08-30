module behavior {
	export class SkillAttack extends ActionNode {
		protected clsName:string = "SkillAttack";

		private targetLgc:behavior.TargetLogic;

		public constructor(targetLgc:behavior.TargetLogic) {
			super();
			this.targetLgc = targetLgc;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcSkillAttack(this, this.targetLgc);
		}
	}
}