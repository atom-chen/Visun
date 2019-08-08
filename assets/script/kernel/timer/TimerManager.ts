export default class TimerManager {

	private static _instance:TimerManager = null;
	private _timers = [];
	
	private constructor() {}
	public static instance() {
		if(TimerManager._instance) { return TimerManager._instance; }
		TimerManager._instance = new TimerManager;
		return TimerManager._instance;
	}

	public update(dt:number) {

	}

	public addTimer() {

	}

	public delTimer() {

	}

	public removeByTarget(target:any) {
		
	}

}
