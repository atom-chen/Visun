module behavior {
	export class TeamAttrCount extends ConditionNode {
		protected clsName:string = "TeamAttrCount";
		private cmpMode:string;
		private side:number;
		private _count:number;

		public constructor(cmpMode:string, side:number, cnt:number) {
			super();
			this.cmpMode = cmpMode;
			this.side = side;
			this._count = cnt;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcTeamAttrCount(this.cmpMode, this.side, this._count);
		}
	}
}