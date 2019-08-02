import WsSocket from "./WsSocket";
import EventCenter from "../../launcher/EventCenter";
import WsRequests from "./WsRequests";

export default class WsHandler {
	private static _protocolTbl: any;
	private static _responder: {};

	private static _regist(ptoname:string, cmdId:number) {
		WsRequests[ptoname] = function(data:any) {
			WsSocket.instance().sendMsg(cmdId, data);
		}
	}

	public static registProtocol(tbl:any, responder:any){
		this._protocolTbl = tbl;
		this._responder = responder;

		for(var ptoname in tbl.names) {
			if(!this._responder[ptoname]) {
				cc.log("未定义ws响应：", ptoname);
			}
		//	this._regist(ptoname, tbl.names[ptoname].cmdId);
		}
	}

	public static setRespondor(tbl:any){
		this._responder = tbl;
	}

	public static request(ptoname:string, data:any){
		var cmdId = this._protocolTbl.names[ptoname].cmdId;
		WsSocket.instance().sendMsg(cmdId, data)
	}

	public static respond(cmdId:number, data:any){
		var cmd_id = cmdId.toString();
		if(this._protocolTbl.cmds[cmd_id])
		{
			var ptoname = this._protocolTbl.cmds[cmd_id].ptoname;
			
			if(this._responder[ptoname]) {
				this._responder[ptoname](data);
			}

			EventCenter.instance().fire(ptoname, data);
		}
	}

}