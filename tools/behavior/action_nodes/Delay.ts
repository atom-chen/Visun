module behavior {
	export class Delay extends ActionNode{
		protected clsName:string = "Delay";
		private restTime:number;

		public constructor(restTime:number) {
			super();
			this.restTime = restTime;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcDelay(this, this.restTime);
		}
	}
}