module behavior {
	export class ChooseFightTarget extends ConditionNode {
		protected clsName:string = "ChooseFightTarget";

		private targetLgc:behavior.TargetLogic;

		public constructor(targetLgc:behavior.TargetLogic) {
			super();
			this.targetLgc = targetLgc;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcChooseFightTarget(this.targetLgc);
		}
	}
}