module behavior {
	export class TeamRaceMemberCount extends ConditionNode {
		protected clsName:string = "TeamRaceMemberCount";
		private cmpMode:string;
		private side:number;
		private dstRace:number;
		private _count:number;

		public constructor(cmpMode:string, side:number, dstRace:number, cnt:number) {
			super();
			this.cmpMode = cmpMode;
			this.side = side;
			this.dstRace = dstRace;
			this._count = cnt;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcTeamRaceMemberCount(this.cmpMode, this.side, this.dstRace, this._count);
		}
	}
}