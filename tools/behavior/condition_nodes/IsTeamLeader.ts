module behavior {
	export class IsTeamLeader extends ConditionNode {
		protected clsName:string = "IsTeamLeader";

		public constructor() {
			super();
		}
		
		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcIsTeamLeader();
		}
	}
}