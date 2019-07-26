import HttpCore from "../../kernel/net/HttpCore";

export default class HttpRequests {

	public static req_hallinfo(tAddrParams:object, tParams:object, unsafeCallback:Function) : void{
		HttpCore.request("req_hallinfo", tAddrParams, tParams, unsafeCallback);
	}
	public static req_userinfo(tAddrParams:object, tParams:object, unsafeCallback:Function) : void{
		HttpCore.request("req_userinfo", tAddrParams, tParams, unsafeCallback);
	}

}