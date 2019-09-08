import { BaseTimer, TimerType } from "./BaseTimer";
import CHandler from "../basic/CHandler";
//import JTPool from "../pool/JTPool";


export default class TimerManager {
	
	private static autoId:number = 0;
	private static _instance:TimerManager = null;

	private static _timers:BaseTimer[] = [];
//	private static _pool:JTPool<BaseTimer> = JTPool.instance(BaseTimer) as JTPool<BaseTimer>;
	
	private constructor() {
		
	}

	public static start(node:cc.Component) {
		node.schedule(TimerManager.update, 0, cc.macro.REPEAT_FOREVER);
	}

	private static delByIndex(idx:number) {
		TimerManager._timers[idx].stop();
		TimerManager._timers.splice(idx, 1);
	}

	private static update(dt:number) {
		try{
			for(var i=0, len=TimerManager._timers.length; i<len; i++) {
				TimerManager._timers[i].tick(dt);
				if(TimerManager._timers[i].isStoped()) {
					TimerManager.delByIndex(i);
					i--;
					len--;
				}
			}
		}
		catch(err) {
			cc.log(err)
		}
	}

	public static addFrameTimer(interval:number, looptimes:number, callback:CHandler) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = new BaseTimer;
	//	var tmr = TimerManager._pool.get();
		tmr.reset(TimerType.frame, id, interval, looptimes, callback);
		TimerManager._timers.push(tmr);
		return id;
	}

	public static addSecondTimer(interval:number, looptimes:number, callback:CHandler) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = new BaseTimer;
	//	var tmr = TimerManager._pool.get();
		tmr.reset(TimerType.second, id, interval, looptimes, callback);
		TimerManager._timers.push(tmr);
		return id;
	}

	public static delTimer(id:number) {
		if(id===null || id===undefined){ return; }
		for(var i=TimerManager._timers.length-1; i>=0; i--) {
			if(TimerManager._timers[i].getId()===id) {
				TimerManager._timers[i].stop();
			//	TimerManager._pool.put(TimerManager._timers[i]);
				TimerManager._timers.splice(i, 1);
				break;
			}
		}
	}

	public static removeByTarget(target:any) {
		for(var i=TimerManager._timers.length-1; i>=0; i--) {
			if(TimerManager._timers[i].getTarget()===target) {
				TimerManager._timers[i].stop();
				TimerManager._timers.splice(i, 1);
			}
		}
	}

}
