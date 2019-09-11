import { PROCEDURE_STATE } from "../looker/KernelDefine";

export default abstract class BehaviorBase {
	protected abstract Proc() : void;
	public abstract run(arg?:any) : PROCEDURE_STATE;
	protected abstract checkDone() : PROCEDURE_STATE;
	protected abstract resolve(rlt:PROCEDURE_STATE) : void;
	public abstract resolve_succ() : void;
	public abstract resolve_fail() : void;
	protected abstract onStop() : void;
	public abstract stop() : void;
	public abstract recover() : void
}