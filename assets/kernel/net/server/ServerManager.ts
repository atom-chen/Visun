import ModelInterface from "../../model/ModelInterface";
import VirtualServer from "./VirtualServer";

export default class ServerManager implements ModelInterface {
	private static _instance:ServerManager = null;
	private _all_service:{[key: string]: VirtualServer;} = {};

	public static instance() {
		if(!ServerManager._instance){ ServerManager._instance = new ServerManager; }
		return ServerManager._instance;
	}

	clear(): void {
		
	}
	
	addService(name:string, service:VirtualServer) {
		this.delService(name);
		this._all_service[name] = service;
	}

	delService(name:string) {
		if(this._all_service[name]){
			this._all_service[name].destroy();
			this._all_service[name] = null;
		}
	}

	getService(name:string) {
		return this._all_service[name];
	}
}
