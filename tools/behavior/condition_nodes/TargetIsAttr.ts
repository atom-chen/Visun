module behavior {
	export class TargetIsAttr extends ConditionNode {
		protected clsName:string = "TargetIsAttr";
		private target:fight.CardDataObject;
		private attr:number;

		public constructor(target:fight.CardDataObject, attr:number) {
			super();
			this.target = target;
			this.attr = attr;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcTargetIsAttr(this.target, this.attr);
		}
	}
}