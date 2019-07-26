import HttpCore from "../../../kernel/net/HttpCore";
var g_allProtocol = HttpCore.g_allProtocol;

g_allProtocol["req_hallinfo"] = {
	name : "req_hallinfo",
	reqType : "GET",
	respType : 0,
	domain : "",
	addr : "user/getHallInfo",
	addrparams : [],
	params : [
		[ "token", "string" ],
		[ "mobileType", "number" ],
		[ "gameType", "number", 0 ],
	]
}

g_allProtocol["req_userinfo"] = {
	name : "req_userinfo",
	reqType : "GET",
	respType : 0,
	domain : "",
	addr : "user/getUserInfo",
	addrparams : [],
	params : [
		[ "token", "string" ],
	]
}