import { PROCEDURE_STATE } from "../looker/KernelDefine";

export default abstract class BehaviorBase {
	protected _cur_state:PROCEDURE_STATE = PROCEDURE_STATE.READY;
	
	protected abstract Proc() : void;
	public abstract run(arg?:any) : PROCEDURE_STATE;
	protected abstract checkDone() : PROCEDURE_STATE;
	protected abstract resolve(rlt:PROCEDURE_STATE) : void;
	public abstract resolve_succ() : void;
	public abstract resolve_fail() : void;
	protected abstract onStop() : void;
	public abstract stop() : void;
	public abstract recover() : void;
	
	public abstract getSelfResult() : PROCEDURE_STATE;
	public abstract getPartsResult() : PROCEDURE_STATE;
	public abstract getResult() : PROCEDURE_STATE;
	public abstract isSelfDone() : boolean;
	public abstract isPartsDone() : boolean;
	public abstract isDone() : boolean;
}