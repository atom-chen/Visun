module behavior {
	export class TeamAttrMemberCount extends ConditionNode {
		protected clsName:string = "TeamAttrMemberCount";
		private cmpMode:string;
		private side:number;
		private dstAttr:number;
		private _count:number;

		public constructor(cmpMode:string, side:number, dstAttr:number, cnt:number) {
			super();
			this.cmpMode = cmpMode;
			this.side = side;
			this.dstAttr = dstAttr;
			this._count = cnt;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcTeamAttrMemberCount(this.cmpMode, this.side, this.dstAttr, this._count);
		}
	}
}