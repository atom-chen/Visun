//-------------------------------------
//-- 计时器
//-------------------------------------
import { BaseTimer, TimerType } from "./BaseTimer";
import CHandler from "../datastruct/CHandler";
//import JTPool from "../pool/JTPool";


export default class TimerManager {
	private static s_inited:boolean = false;
	private static autoId:number = 0;
	private static s_updating:boolean = false;
	private static _timers:BaseTimer[] = [];
//	private static _pool:JTPool<BaseTimer> = JTPool.getInstance(BaseTimer) as JTPool<BaseTimer>;
	private static willAment = false;
	private static amentMillSec = 0;
	
	private constructor() {
		
	}

	public static amend(millSec:number) {
		if(TimerManager.s_updating) { 
			TimerManager.willAment = true;
			TimerManager.amentMillSec = millSec;
			return; 
		}
		TimerManager.willAment = false;
		TimerManager.amentMillSec = 0;
		TimerManager.s_updating = true;
		for(var i=0, len=TimerManager._timers.length; i<len; i++) {
			let curTmr = TimerManager._timers[i];
			try{
				if(curTmr.isUseFix()) {
					curTmr.doFix(millSec);
				}
			}
			catch(err) {
				curTmr.stop();
				cc.log(err);
			}

			if(curTmr.isStoped()) {
				curTmr.stop();
				TimerManager._timers.splice(i, 1);
				i--;
				len--;
			}
		}
		TimerManager.s_updating = false;
	}

	public static start(node:cc.Component) {
		if(TimerManager.s_inited){ return; }
		TimerManager.s_inited = true;
		node.schedule(TimerManager.update, 0, cc.macro.REPEAT_FOREVER);
	}


	private static update(dt:number) {
		TimerManager.s_updating = true;
		for(var i=0, len=TimerManager._timers.length; i<len; i++) {
			let curTmr = TimerManager._timers[i];
			try{
				curTmr.tick(dt);
			}
			catch(err) {
				curTmr.stop();
				cc.log(err);
			}

			if(curTmr.isStoped()) {
				curTmr.stop();
				TimerManager._timers.splice(i, 1);
				i--;
				len--;
			}
		}
		TimerManager.s_updating = false;
		
		if(TimerManager.willAment) {
			TimerManager.amend(TimerManager.amentMillSec);
		}
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

	public static loopFrame(interval:number, looptimes:number, callback:CHandler) : number
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

	public static loopSecond(interval:number, looptimes:number, callback:CHandler, callOnAdd:boolean=false, useFix:boolean=false) : number
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
		tmr.reset(TimerType.second, id, interval, looptimes, callback, callOnAdd);
		TimerManager._timers.push(tmr);
		return id;
	}

	public static delayFrame(delay:number, callback:CHandler) : number
	{
		return TimerManager.loopFrame(delay, 1, callback);
	}

	public static delaySecond(delay:number, callback:CHandler) : number
	{
		return TimerManager.loopSecond(delay, 1, callback);
	}

	public static delTimer(id:number) {
		if(id===null || id===undefined || id <= 0){ return -1; }
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
		return -1;
	}

	public static isValid(id:number) : boolean
	{
		if(id===null || id===undefined || id <= 0){ return false; }
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
