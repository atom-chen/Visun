import RoleEntity from "../role/RoleEntity";
export enum BuffType {
	Invalid,
}

export default class BuffData {

	private buffType:BuffType;		//buff类型
	private buffName:string;		//名字
	private icon:string;			//图标路经
	private tipWhenMutex:boolean;	//免疫时是否提示
	private maxOverlab:number;		//最大可堆叠数
	private replaceAble:boolean;	//是否可被替换
	private prop:number;			//影响哪个属性
	private value:number;			//影响值
	private percent:number;			//影响值是否指的是百分比
	private keepTime:number;		//持续时长（回合制表示持续回合数）

	//添加时
	public onAdd() {

	}

	//移除时
	public onRemove() {

	}

	//战斗开始时
	public onStartCombat() {

	}

	//战斗结束时
	public onEndCombat() {

	}

	//回合开始时
	public onRoundBegin() {

	}

	//回合结束时
	public onRoundEnd() {

	}

	//受击前
	public onBeforeHit() {

	}

	//受击后
	public onAfterHit() {

	}

	//攻击前
	public onBeforeAttack() {

	}

	//攻击后
	public onAfterAttack() {

	}

	//死亡时
	public onDead() {

	}

	//复活时
	public onRelife() {

	}

}