module behavior {
	export class DiedTeammateCount extends ConditionNode {
		protected clsName:string = "DiedTeammateCount";
		private _diedCound:number;
		private _cmpMode:string;

		public constructor(cmpMode:string, diedCound:number) {
			super();
			this._diedCound = diedCound;
			this._cmpMode = cmpMode;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcDiedTeammateCount(this._cmpMode, this._diedCound);
		}
	}
}