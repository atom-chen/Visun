import HttpCore from "../../../kernel/net/HttpCore";

HttpCore.g_allProtocol["req_hallinfo"] = {
	name : "req_hallinfo",
	reqType : "GET",
	respType : 0,
	domain : "",
	addr : "user/getHallInfo",
	addrparams : [],
	params : [
		[ "token", "string" ],
		[ "mobileType", "number" ],
	]
}