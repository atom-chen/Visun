module behavior {
	export class CmpTeamHP extends ConditionNode {
		protected clsName:string = "CmpTeamHP";
		private cmpMode:string;
		private hp:number;
		private bPercent:boolean;

		public constructor(cmpMode:string, hp:number, bPercent:boolean) {
			super();
			this.hp = hp;
			this.cmpMode = cmpMode;
			this.bPercent = bPercent;
		}
		
		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcCmpTeamHP(this.cmpMode, this.hp, this.bPercent);
		}
	}
}