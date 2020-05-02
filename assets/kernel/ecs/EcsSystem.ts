import CHandler from "../basic/datastruct/CHandler";

export default class EcsSystem {
	private static s_inited:boolean = false;
	private static funcs:Array<CHandler> = [];

	private static update(dt:number) {
		var len = EcsSystem.funcs.length;
		for(var i = 0; i < len; i++) {
			EcsSystem.funcs[i].invoke();
		}
	}

	public static start(node:cc.Component) {
		if(EcsSystem.s_inited){ return; }
		EcsSystem.s_inited = true;
		node.schedule(EcsSystem.update, 0, cc.macro.REPEAT_FOREVER);
	}

	public static registerUpdator(func:CHandler) {
		var idx = EcsSystem.funcs.indexOf(func);
		if(idx >= 0) {
			cc.error("重复注册");
			return;
		}
		EcsSystem.funcs.push(func);
	}

	public static unregisterUpdator(func:Function, thisObj:any) {
		for(var i=0; i<EcsSystem.funcs.length; i++) {
			if(EcsSystem.funcs[i].isSelf(func, thisObj)) {
				EcsSystem.funcs.splice(i);
			}
		}
	}
}