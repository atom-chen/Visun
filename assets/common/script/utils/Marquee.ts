import CHandler from "../../../kernel/basic/datastruct/CHandler";
import TimerManager from "../../../kernel/basic/timer/TimerManager";

//跑马灯
export default class Marquee {
	private _elementCnt:number;
	private _isRunning = true
	private _fromIndex = 0
	private _toIndex = 0
	private _duration = 0
	private _callback = null
	private _circleCnt = 0
	private _curIndex = 0

	constructor(cnt:number) {
		this._elementCnt = cnt;
	}

	setElementCount(cnt:number) {
		this._elementCnt = cnt;
	}

	run(fromIndex:number, toIndex:number, duration:number, callback:CHandler) {
		this._isRunning = true;
		this._fromIndex = fromIndex;
		this._toIndex = toIndex;
		this._duration = duration;
		this._callback = callback;
		this._circleCnt = 0;
		this._curIndex = fromIndex;
		TimerManager.addFrameTimer(0, -1, new CHandler(this, this.frameUpdate));
	}

	stop(bClean:boolean) {
		this._isRunning = false
		if(bClean) this._callback = null;
		TimerManager.removeByTarget(this);
		if (this._callback){
			var callback = this._callback
			this._callback = null
			callback(this._toIndex, this._isRunning)
		}
	}

	private frameUpdate(tmr) {
		if (!this._isRunning) {
			TimerManager.removeByTarget(this);
			return true;
		}
		var curIndex = this._curIndex + 1
		if (curIndex > this._elementCnt) {
			curIndex = 1 
			this._circleCnt = this._circleCnt + 1
		}
		this._curIndex = curIndex

		if (this._circleCnt >= 3 && curIndex == this._toIndex){
			this._isRunning = false
		}
		
		if (this._isRunning){
			this._callback(curIndex, true)
		} else {
			if (this._callback){
				var callback = this._callback
				this._callback = null
				callback(this._toIndex, false)
			}
			TimerManager.removeByTarget(this);
			this._isRunning = false;
		}
	}
}
