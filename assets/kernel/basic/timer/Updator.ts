import CHandler from "../datastruct/CHandler";

export default class Updator {
	private static s_inited:boolean = false;
	private static funcs:Array<CHandler> = [];

	private static update(dt:number) {
		var len = Updator.funcs.length;
		for(var i = 0; i < len; i++) {
			Updator.funcs[i].invoke();
		}
	}

	public static start(node:cc.Component) {
		if(Updator.s_inited){ return; }
		Updator.s_inited = true;
		node.schedule(Updator.update, 0, cc.macro.REPEAT_FOREVER);
	}

	public static registerUpdator(func:CHandler) {
		var idx = Updator.funcs.indexOf(func);
		if(idx >= 0) {
			cc.error("重复注册");
			return;
		}
		Updator.funcs.push(func);
	}

	public static unregisterUpdator(func:CHandler) {
		var idx = Updator.funcs.indexOf(func);
		if(idx >= 0) {
			Updator.funcs.splice(idx);
		}
	}

}