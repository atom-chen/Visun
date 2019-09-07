import CHandler from "../basic/CHandler";
import { PROCEDURE_STATE } from "../looker/KernelDefine";

export interface Smartor {
	clean() : void;
	addPart(part:Smartor) : Smartor;
	addPartCaller(procFunc:CHandler, stopFunc?:CHandler) : Smartor; 
	then(nextNode:Smartor) : Smartor;
	thenCaller(procFunc:CHandler, stopFunc?:CHandler|null) : Smartor;
	succThen(succNode:Smartor) : void;
	failThen(failNode:Smartor) : void;
	onProc() : void;
	run() : PROCEDURE_STATE;
	checkDone() : PROCEDURE_STATE;
	resolve(rlt:PROCEDURE_STATE) : void;
	resolve_fail() : void;
	resolve_succ() : void;
	onStop() : void;
	stop() : void;
	recover() : void;
	isSelfDone() : boolean;
	isPartsDone() : boolean;
	isDone() : boolean;
	getLast() : Smartor;
	getType() : string;
	setName(name:string) : Smartor;
	getName() : string;
}