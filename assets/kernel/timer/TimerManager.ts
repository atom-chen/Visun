import { BaseTimer, TimerType } from "./BaseTimer";
import CHandler from "../basic/CHandler";
//import JTPool from "../pool/JTPool";


export default class TimerManager {
	
	private static autoId:number = 0;
	private static s_updating:boolean = false;
	private static _timers:BaseTimer[] = [];
//	private static _pool:JTPool<BaseTimer> = JTPool.getInstance(BaseTimer) as JTPool<BaseTimer>;
	
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
		TimerManager.s_updating = true;
		try{
			for(var i=0, len=TimerManager._timers.length; i<len; i++) {
				try{
					TimerManager._timers[i].tick(dt);
				}
				catch(err) {
					TimerManager._timers[i].stop();
					cc.log(err);
				}

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
		TimerManager.s_updating = false;
	}

	private static getIndex(callback:CHandler) : number
	{
		for(var i=TimerManager._timers.length-1; i>=0; i--) {
			if(TimerManager._timers[i].isSame(callback) && !TimerManager._timers[i].isStoped()) {
				return i;
			}
		}
		return -1;
	}

	public static addFrameTimer(interval:number, looptimes:number, callback:CHandler) : number
	{
		var tmp = TimerManager.getIndex(callback);
		if(tmp >= 0) {
			cc.log("already exist this timer handler");
			return TimerManager._timers[tmp].getId();
		}
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = new BaseTimer;
	//	var tmr = TimerManager._pool.get();
		tmr.reset(TimerType.frame, id, interval, looptimes, callback);
		TimerManager._timers.push(tmr);
		return id;
	}

	public static addSecondTimer(interval:number, looptimes:number, callback:CHandler) : number
	{
		var tmp = TimerManager.getIndex(callback);
		if(tmp >= 0) {
			cc.log("already exist this timer handler");
			return TimerManager._timers[tmp].getId();
		}
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = new BaseTimer;
	//	var tmr = TimerManager._pool.get();
		tmr.reset(TimerType.second, id, interval, looptimes, callback);
		TimerManager._timers.push(tmr);
		return id;
	}

	public static delayFrame(delay:number, callback:CHandler) : number
	{
		return TimerManager.addFrameTimer(delay, 1, callback);
	}

	public static delaySecond(delay:number, callback:CHandler) : number
	{
		return TimerManager.addSecondTimer(delay, 1, callback);
	}

	public static delTimer(id:number) {
		if(id===null || id===undefined){ return; }
		for(var i=TimerManager._timers.length-1; i>=0; i--) {
			if(TimerManager._timers[i].getId()===id) {
				TimerManager._timers[i].stop();
			//	TimerManager._pool.put(TimerManager._timers[i]);
				if(!TimerManager.s_updating) {
					TimerManager._timers.splice(i, 1);
				}
				break;
			}
		}
	}

	public static isValid(id:number) : boolean
	{
		if(id===null || id===undefined){ return false; }
		for(var i=TimerManager._timers.length-1; i>=0; i--) {
			if(TimerManager._timers[i].getId()===id) {
				return !TimerManager._timers[i].isStoped();
			}
		}
		return false;
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
