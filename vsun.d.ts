// vsun.d.ts
declare module vsun{
	//codec
	export interface DataProcessor {
		encode(...args:any[]):any;
		decode(...args:any[]): any;
	}
	export class JsonCodec implements DataProcessor {
		encode(data: any):any;
		decode(data: any):any;
	}
	export class ProtobufCodec implements DataProcessor {
		encode(proto:any, mud:string, data:any) : any;
		decode(proto:any, mud:string, bytes:any) :any;
	}

	//manager
	export class AudioManager {

	}
	export class LoadCenter {
		static loadRes(url: string, type: typeof cc.Asset, completeCallback:((resource: any) => void), progressCallback:((completedCount: number, totalCount: number, item: any) => void)|null) : void

	}
	export class UIManager {
		static initWindow(layerId:Consts.LAYER, prefabName:string, bModal:boolean, bCloseWhenClickMask:boolean, callback:Function) : void;
		static openPanel(prefabName:string, callback:Function):void;
		static openPopwnd(prefabName:string, callback:Function):void;
		static hidePanelsExcept(obj:cc.Node):void;
		static openDialog(dlgName:string, prefabName:string, callback:Function) :void;
		static toast(content:string):void;
		static announce():void;
		static barrage():void;
	}

	//net
	export class HttpCore {
		static token:string;
		static registProcotols(ruleList:any[]):void;
		static convertParam(param:any, rule:any) : string;
		static request(ptoname:string, tAddrParams:object, tParams:object, unsafeCallback:(data:any)=>void):void;
		static callGet(url:any, addr:any, params:any, callback:(iCode:number, data:any)=>void) : void;
		static callPost(url:any, addr:any, params:any, callback:(iCode:number, data:any)=>void) : void;
		static callUpload(url:any, addr:any, params:any, callback:(iCode:number, data:any)=>void): void;
	}
	export class WsSocket {
		static instance() : WsSocket;
		connect(url:string, processor:DataProcessor) :void;
		close() : void;
		sendData(data:any) : boolean;
	}
	export class TcpSocket {

	}
	// export module HttpRequests {

	// }
	// export module HttpResponds {
		
	// }

	//promise
	export class Caller {
		call(part:any=null) : void;
		clear() : void;
		setAutoClean(bFlag:boolean) : void;
	}
	export abstract class PlayUnit {
		abstract play(procedure:Procedure) : void;
		stop(procedure:Procedure) : void;
	}
	export class Procedure {
		setStopFunc(stop_func:Caller) : Procedure;
		setProcFunc(proc_func:Caller) : Procedure;
		setPlayUnit(playUnit:PlayUnit) : Procedure;
		addPart(part:Procedure) : Procedure;
		addPartCaller(caller1:Caller, caller2:Caller=null) : Procedure;
		then(nextNode:Procedure) : Procedure;
		thenCall(caller:Caller) : Procedure;
		getLast() : Procedure;
		run() : void;
		onPartFinished() : void;
		resolve() : void;
		stop() : void;
		isFinished() : boolean;
		isPartsFinished() : boolean;
		isFullFinished() : boolean;
	}

	//utils
	export class CommonUtils {
		static traverseNodes(root:any, tbl:any) : void;
		static setModal(obj:cc.Node, closeWhenClickMask:boolean) : void;
		static convertSpace(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2;
		static convertSpaceAR(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2;
		static isNil(obj:any) : boolean;
		static getFrameName(name:string) : string;
		static shuffle(array: Array<any>) : void;
		static utf8ArrayToString(array) : string;
		static stringToUTF8Bytes(str:string) : any[];
	}
}