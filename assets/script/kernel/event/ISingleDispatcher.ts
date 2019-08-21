export default interface ISingleDispatcher {
    registResponder(ptoname:string|number, func:Function, thisObj:any) : void;
    removeResponder(ptoname:string|number) : void;
    removeResponderByTarget(thisObj:any) : void;
    removeAllResponder() : void;
    response(ptoname:string|number, info:any) : void;
}