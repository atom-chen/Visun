module behavior {
	export class TotalRight extends ConditionNode {
		protected clsName:string = "CurTotalRight";
		private cmpMode:string;
		private totalRight:number;

		public constructor(cmpMode:string, Count:number) {
			super();
			this.totalRight = Count;
			this.cmpMode = cmpMode;
		}
		
		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcTotalRight(this.cmpMode, this.totalRight);
		}
	}
}