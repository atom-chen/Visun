import CHandler from "../basic/datastruct/CHandler";

export function newHandler(func:Function, thisObj:any, ...args:any[]) : CHandler
{
	return new CHandler(thisObj, func, ...args);
}

export function isNil(v:any) {
	return v===undefined || v===null;
}

export function isEmpty(v:any) {
	return v===undefined || v===null || v===0 || v==="";
}
