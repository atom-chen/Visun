module behavior {
	export class IsCurStep extends ConditionNode {
		protected clsName:string = "IsCurStep";
		private _dstStep:number;

		public constructor(dstStep:number) {
			super();
			this._dstStep = dstStep;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcIsCurStep(this._dstStep);
		}
	}
}