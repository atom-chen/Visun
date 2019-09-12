import { BEHAVIOR_STATE } from "../looker/KernelDefine";

export default abstract class BehaviorBase {
	protected _cur_state:BEHAVIOR_STATE = BEHAVIOR_STATE.READY;
	
	protected _node_type:string = "unknown";
	protected _name:string = "";

	protected _groupNode:BehaviorBase = null;
	protected _partList:Array<BehaviorBase> = null;


	public get groupNode() : BehaviorBase
	{
		return this._groupNode;
	}

	public set groupNode(v:BehaviorBase)
	{
		this._groupNode = v;
	}

	public setName(name:string) : BehaviorBase
	{
		this._name = name;
		return this;
	}

	public getName() : string
	{
		return this._name;
	}

	public fixedName() : string
	{
		if(this._groupNode)
			return this._groupNode["_name"] + "." + this._name;
		else 
			return "null."+this._name;
	}

	public getType() : string 
	{
		return this._node_type;
	}


	public abstract Proc() : void;
	public abstract run(arg?:any) : BEHAVIOR_STATE;
	public abstract checkDone() : BEHAVIOR_STATE;
	public abstract resolve(rlt:BEHAVIOR_STATE) : void;
	public abstract resolve_succ() : void;
	public abstract resolve_fail() : void;
	public abstract onStop() : void;
	public abstract stop() : void;
	public abstract recover() : void;

	public abstract getSelfResult() : BEHAVIOR_STATE;
	public abstract getPartsResult() : BEHAVIOR_STATE;
	public abstract getResult() : BEHAVIOR_STATE;
	public abstract isSelfDone() : boolean;
	public abstract isPartsDone() : boolean;
	public abstract isDone() : boolean;

}