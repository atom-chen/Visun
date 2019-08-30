module behavior {
	export class CmpMyHP extends ConditionNode {
		protected clsName:string = "CmpMyHP";
		private cmpMode:string;
		private hpPercent:number;
		private bPercent:boolean;

		public constructor(cmpMode:string, hpPercent:number, bPercent:boolean) {
			super();
			this.cmpMode = cmpMode;
			this.hpPercent = hpPercent;
			this.bPercent = bPercent;
		}
		
		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcCmpMyHP(this.cmpMode, this.hpPercent, this.bPercent);
		}
	}
}