module behavior {
	export class AddSkillEffect extends ActionNode{
		protected clsName:string = "AddSkillEffect";
		private _skillEff:fight2.SkillEffect;

		public constructor(eff:fight2.SkillEffect) {
			super();
			this._skillEff = eff;
		}

		public Proc(theOwner:fight.CardDataObject) : BT_STATE{
			return theOwner.ProcAddSkillEffect(this, this._skillEff);
		}
	}
}