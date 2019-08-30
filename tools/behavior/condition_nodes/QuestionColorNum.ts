module behavior {
	export class QuestionColorNum extends ConditionNode {
		protected clsName:string = "QuestionColorNum";
		private cmpMode:string;
		private _count:number;

		public constructor(cmpMode:string, Count:number) {
			super();
			this.cmpMode = cmpMode;
			this._count = Count;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcQuestionColorNum(this.cmpMode, this._count);
		}
	}
}