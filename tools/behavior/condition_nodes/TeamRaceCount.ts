module behavior {
	export class TeamRaceCount extends ConditionNode {
		protected clsName:string = "TeamRaceCount";
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
			return theOwner.ProcTeamRaceCount(this.cmpMode, this.side, this._count);
		}
	}
}