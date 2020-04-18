export enum RoleState {
	//动作状态层（原子级动作
	Idle,		//站
	Walk,		//走
	Run,		//跑
	Rush,		//冲
	Jump,		//跳
	Skill,		//攻击
	Defend,		//防御
	Hit,		//受击
	Flight,		//击飞
	Freez,		//冻结
	Lie,		//倒地
	Die,		//死亡
	Relife,		//复活
	//水平方向移动层
	GroundLine,		//击退
	GroundPath,		//寻路移动
	GroundRest,		//休息
	GroundFreez,	//冻结
	//重力方向移动层
	SkyLine,		//腾空
	SkyPath,		//飞翔
	SkyRest,		//着地
	SkyFreez,		//悬空
}

//状态转换表（动作层）
export enum StateLayer {
	Action,			//动作层
	GroundMove,		//水平移动层
	SkyMove,		//垂直移动层
}

export var StateName = {
		[RoleState.Idle] : "a站立",
		[RoleState.Walk] : "a走",
		[RoleState.Run] : "a跑",
		[RoleState.Rush] : "a冲",
		[RoleState.Jump] : "a跳",
		[RoleState.Skill] : "a攻击",
		[RoleState.Defend] : "a防御",
		[RoleState.Hit] : "a受击",
		[RoleState.Flight] : "a浮空",
		[RoleState.Freez] : "a冻结",
		[RoleState.Lie] : "a倒地",
		[RoleState.Die] : "a死亡",
		[RoleState.Relife] : "a复活",

		[RoleState.GroundRest] : "g休息",
		[RoleState.GroundLine] : "g击退",
		[RoleState.GroundPath] : "g寻路",
		[RoleState.GroundFreez] : "g束缚",

		[RoleState.SkyRest] : "s着地",
		[RoleState.SkyLine] : "s浮空",
		[RoleState.SkyPath] : "s飞行",
		[RoleState.SkyFreez] : "s锁定",
}

//状态转换表（动作层）
export var ActionStateTransTable = {
	[RoleState.Idle] : {
	//	[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Walk] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Run] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Rush] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Rush] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Jump] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Skill] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
	//	[RoleState.Skill] : true,
		[RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Defend] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Hit] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
	//	[RoleState.Skill] : true,
	//	[RoleState.Defend] : true,
		[RoleState.Hit] : true,
		[RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Flight] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Freez] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
	//	[RoleState.Skill] : true,
	//	[RoleState.Defend] : true,
		[RoleState.Hit] : true,
		[RoleState.Flight] : true,
		[RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Lie] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
	//	[RoleState.Skill] : true,
	//	[RoleState.Defend] : true,
		[RoleState.Hit] : true,
		[RoleState.Flight] : true,
		[RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Die] : {
		[RoleState.Idle] : true,
		[RoleState.Walk] : true,
		[RoleState.Run] : true,
		[RoleState.Rush] : true,
		[RoleState.Jump] : true,
		[RoleState.Skill] : true,
		[RoleState.Defend] : true,
		[RoleState.Hit] : true,
		[RoleState.Flight] : true,
		[RoleState.Freez] : true,
		[RoleState.Lie] : true,
		// [RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
	[RoleState.Relife] : {
		// [RoleState.Idle] : true,
		// [RoleState.Walk] : true,
		// [RoleState.Run] : true,
		// [RoleState.Rush] : true,
		// [RoleState.Jump] : true,
		// [RoleState.Skill] : true,
		// [RoleState.Defend] : true,
		// [RoleState.Hit] : true,
		// [RoleState.Flight] : true,
		// [RoleState.Freez] : true,
		// [RoleState.Lie] : true,
		[RoleState.Die] : true,
		// [RoleState.Relife] : true,
	},
}

//状态转换表（水平移动层）
export var GroundStateTransTable = {
	[RoleState.GroundRest] : {
		[RoleState.GroundRest] : true,
		[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
	//	[RoleState.GroundFreez] : true,
	},
	[RoleState.GroundLine] : {
		[RoleState.GroundRest] : true,
		[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
	//	[RoleState.GroundFreez] : true,
	},
	[RoleState.GroundPath] : {
		[RoleState.GroundRest] : true,
	//	[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
	//	[RoleState.GroundFreez] : true,
	},
	[RoleState.GroundFreez] : {
		[RoleState.GroundRest] : true,
		[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
		[RoleState.GroundFreez] : true,
	},
}

//状态转换表（空中移动层）
export var SkyStateTransTable = {
	[RoleState.SkyRest] : {
	//	[RoleState.SkyRest] : true,
	//	[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
	//	[RoleState.SkyFreez] : true,
	},
	[RoleState.SkyLine] : {
		[RoleState.SkyRest] : true,
		[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
	//	[RoleState.SkyFreez] : true,
	},
	[RoleState.SkyPath] : {
		[RoleState.SkyRest] : true,
	//	[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
	//	[RoleState.SkyFreez] : true,
	},
	[RoleState.SkyFreez] : {
		[RoleState.SkyRest] : true,
		[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
		[RoleState.SkyFreez] : true,
	},
}

//跨层阻止
export var CrossLayerForbitTable = {
	//ActState阻止SkyMovState
	[RoleState.SkyLine] : {
		[RoleState.Skill] : true,
		[RoleState.Defend] : true,
		[RoleState.Die] : true,
	},
	[RoleState.SkyPath] : {
		[RoleState.Skill] : true,
		[RoleState.Defend] : true,
		[RoleState.Hit] : true,
		[RoleState.Flight] : true,
		[RoleState.Freez] : true,
		[RoleState.Lie] : true,
		[RoleState.Die] : true,
		[RoleState.Relife] : true,
	},
	[RoleState.SkyFreez] : {
		[RoleState.Skill] : true,
		[RoleState.Defend] : true,
		[RoleState.Die] : true,
	},
	//ActState阻止GrdMovState
	[RoleState.GroundLine] : {
		[RoleState.Defend] : true,
		[RoleState.Die] : true,
		[RoleState.Relife] : true,
	},
	[RoleState.GroundPath] : {
		[RoleState.Skill] : true,
		[RoleState.Defend] : true,
		[RoleState.Hit] : true,
		[RoleState.Flight] : true,
		[RoleState.Freez] : true,
		[RoleState.Lie] : true,
		[RoleState.Die] : true,
		[RoleState.Relife] : true,
	},
	[RoleState.GroundFreez] : {
		[RoleState.Skill] : true,
		[RoleState.Defend] : true,
		[RoleState.Die] : true,
	},
	//SkyMovState阻止GrdMovState
	[RoleState.GroundPath] : {
		[RoleState.SkyFreez] : true,
		[RoleState.SkyLine] : true,
	},
	[RoleState.GroundLine] : {
		[RoleState.SkyFreez] : true,
	},
	//GrdMovState阻止SkyMovState
	[RoleState.SkyPath] : {
		[RoleState.GroundLine] : true,
		[RoleState.GroundFreez] : true,
	},
	[RoleState.SkyLine] : {
		[RoleState.GroundFreez] : true,
	},
}