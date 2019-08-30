module behavior {
	export class ComboRight extends ConditionNode {
		protected clsName:string = "ComboRight";
		private cmpMode:string;
		private comboCnt:number;

		public constructor(cmpMode:string, Count:number) {
			super();
			this.comboCnt = Count;
			this.cmpMode = cmpMode;
		}
		
		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcComboRight(this.cmpMode, this.comboCnt);
		}
	}
}