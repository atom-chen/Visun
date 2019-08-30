module behavior {
	export class as_test extends BehaviorTree {
		protected clsName:string = "as_test";
		
		private static _instance = new as_test();
		public static getInstance() : as_test { return as_test._instance; }

		private constructor() {
			super();

			let isSoliderAttackStep = new IsCurStep(3);
			let isAnswerRight = new IsCurAnswerRight();
			let liandui3 = new ComboRight("ge", 1);
			var dto = new fight2.SkillActionDTO()
			dto.type = fight2.SkillEffectType.HuiFu;
			let huifu = new AddSkillEffect(fight2.SkillEffect.createSkillEffect(dto, new TargetLogic(FOR_BUDDY.SELF_TEAMMATE, PRIORITY_TYPE.RANDOM, 5, 7, 7)))
			let normalAttack = new NormalAttack(new TargetLogic(FOR_BUDDY.ENEMY, PRIORITY_TYPE.RANDOM, 1));

			let andLogic = new AndCompositeNode();
			andLogic.addElement(isSoliderAttackStep);
			andLogic.addElement(isAnswerRight);
			andLogic.addElement(liandui3);
			this.setRootNode(andLogic);
			andLogic.setRightNode(huifu);
			huifu.setLeftNode(normalAttack);
			huifu.setRightNode(normalAttack);
		}
	}
}