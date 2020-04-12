export enum RoleState {
	//动作状态层（原子级动作）
	ActBridge = 1,	//
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
	GroundBridge,	//
	GroundLine,		//击退
	GroundPath,		//寻路移动
	GroundRest,		//休息
	GroundFreez,	//冻结
	//重力方向移动层
	SkyBridge,		//
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

//状态转换表（动作层）
var ActionStateTransTable = {
	[RoleState.ActBridge] : {
	//	[RoleState.ActBridge] : false,
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
		[RoleState.Die] : true,
		[RoleState.Relife] : true,
	},
	[RoleState.Idle] : {
		[RoleState.ActBridge] : false,
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
		[RoleState.ActBridge] : false,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
		[RoleState.ActBridge] : true,
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
var GroundStateTransTable = {
	[RoleState.GroundBridge] : {
	//	[RoleState.GroundBridge] : true,
		[RoleState.GroundRest] : true,
		[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
		[RoleState.GroundFreez] : true,
	},
	[RoleState.GroundRest] : {
		[RoleState.GroundBridge] : true,
		[RoleState.GroundRest] : true,
		[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
	//	[RoleState.GroundFreez] : true,
	},
	[RoleState.GroundLine] : {
		[RoleState.GroundBridge] : true,
		[RoleState.GroundRest] : true,
		[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
	//	[RoleState.GroundFreez] : true,
	},
	[RoleState.GroundPath] : {
		[RoleState.GroundBridge] : true,
		[RoleState.GroundRest] : true,
	//	[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
	//	[RoleState.GroundFreez] : true,
	},
	[RoleState.GroundFreez] : {
		[RoleState.GroundBridge] : true,
		[RoleState.GroundRest] : true,
		[RoleState.GroundLine] : true,
		[RoleState.GroundPath] : true,
		[RoleState.GroundFreez] : true,
	},
}

//状态转换表（空中移动层）
var SkyStateTransTable = {
	[RoleState.SkyBridge] : {
	//	[RoleState.SkyBridge] : true,
		[RoleState.SkyRest] : true,
		[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
		[RoleState.SkyFreez] : true,
	},
	[RoleState.SkyRest] : {
		[RoleState.SkyBridge] : true,
	//	[RoleState.SkyRest] : true,
	//	[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
	//	[RoleState.SkyFreez] : true,
	},
	[RoleState.SkyLine] : {
		[RoleState.SkyBridge] : true,
		[RoleState.SkyRest] : true,
		[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
	//	[RoleState.SkyFreez] : true,
	},
	[RoleState.SkyPath] : {
		[RoleState.SkyBridge] : true,
		[RoleState.SkyRest] : true,
	//	[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
	//	[RoleState.SkyFreez] : true,
	},
	[RoleState.SkyFreez] : {
		[RoleState.SkyBridge] : true,
		[RoleState.SkyRest] : true,
		[RoleState.SkyLine] : true,
		[RoleState.SkyPath] : true,
		[RoleState.SkyFreez] : true,
	},
}

//跨层阻止
var CrossLayerForbitTable = {
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

export class StateParam {
	public toState:number = -1;
	public args:any;
}