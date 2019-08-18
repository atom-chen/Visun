import BaseModel from "../../model/BaseModel";
import VirtualServer from "./VirtualServer";

export default class ServerManager implements BaseModel {
	private static _instance:ServerManager = null;
	private _all_service:{[key: string]: VirtualServer;} = {};

	public static instance() {
		if(!ServerManager._instance){ ServerManager._instance = new ServerManager; }
		return ServerManager._instance;
	}

	clear(): void {
		
	}
	
}
