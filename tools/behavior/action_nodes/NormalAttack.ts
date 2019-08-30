module behavior {
	export class NormalAttack extends ActionNode{
		protected clsName:string = "NormalAttack";

		private targetLgc:behavior.TargetLogic;

		public constructor(targetLgc:behavior.TargetLogic) {
			super();
			this.targetLgc = targetLgc;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcNormalAttack(this, this.targetLgc);
		}
	}
}