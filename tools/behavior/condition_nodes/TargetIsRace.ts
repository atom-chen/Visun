module behavior {
	export class TargetIsRace extends ConditionNode {
		protected clsName:string = "TargetIsRace";
		private target:fight.CardDataObject;
		private race:number;

		public constructor(target:fight.CardDataObject, race:number) {
			super();
			this.target = target;
			this.race = race;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcTargetIsRace(this.target, this.race);
		}
	}
}