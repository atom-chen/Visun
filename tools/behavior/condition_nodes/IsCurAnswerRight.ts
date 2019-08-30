module behavior {
	export class IsCurAnswerRight extends ConditionNode {
		protected clsName:string = "IsCurAnswerRight";
		
		public constructor() {
			super();
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcIsCurAnswerRight();
		}
	}
}