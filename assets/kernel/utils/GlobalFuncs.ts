import CHandler from "../basic/CHandler";

export function newHandler(func:Function, thisObj:any, ...args:any[]) : CHandler
{
	return new CHandler(thisObj, func, ...args);
}