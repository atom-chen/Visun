//---------------------------------
// Http接口
//---------------------------------
const {ccclass, property} = cc._decorator;

import * as Consts from "../../looker/Consts";
import DataProcessor from "../codec/DataProcessor";
import JsonCodec from "../codec/JsonCodec";
import NetRequest from "./NetRequest";
import EventCenter from "../../launcher/EventCenter";

@ccclass
export default class HttpCore {
	public static token:string = "";
	private static g_timeout:number = 8000;
	private static _dataProcessor:DataProcessor = new JsonCodec;
	private static g_allProtocol:object = {};
	private static _responder:any;
	
	private static _regist(ptoname:string)
	{
		NetRequest[ptoname] = function(tAddrParams:object, tParams:object, unsafeCallback:(data:any)=>void) {
			HttpCore.request(ptoname, tAddrParams, tParams, unsafeCallback);
		}
	}

	public static registProcotol(ruleList:any[], respondor:any)
	{
		this._responder = respondor;
		
		for( var i=0; i<ruleList.length; i++) {
			var ptoname:string = ruleList[i].name

			if(this.g_allProtocol[ptoname]) {
				cc.error("重新注册：", ptoname);
			} 
			else {
				cc.log("注册协议：", ptoname);
			}

			this.g_allProtocol[ptoname] = ruleList[i];
		//	this._regist(ptoname);
		}
	}

	public static unregistAll() {

	}

	//--------------------------------------------------------------------------------

	//将表形式的数据转换成 "k1=v1&k2=v2&k3=v3" 格式的字符串
	public static convertParam(param:any, rule:any) : string
	{
		if( typeof(param) === typeof("") ){
			return param;
		}
	
		var paramStr = "";
	
		if(rule) {
			if(param){
				for(var j = 0,len = rule.length; j < len; j++) {
					var k = rule[j][0];
					var wantType = rule[j][1];
					if(wantType && wantType != "" && typeof(param[k]) != wantType) {
						if( (rule[j][2]!=undefined && rule[j][2]!=null) && rule[j][2]===0 && (param[k]==undefined || param[k]==null) ) {
	
						} 
						else {
							cc.error("参数类型错误", k, param[k]);
						}
					} 
					else {
						if(paramStr != "") { paramStr += "&" }
						paramStr += k + "=" + param[k];
					}
				}
			}
			else{
				if(rule.length > 0){
					cc.error("参数不符合规则");
				}
			}
		}
		else {
			if(param) {
				for (var kk in param) {
					if(paramStr != "") { paramStr += "&" }
					paramStr += kk + "=" + param[kk];
				}
			}
		}
	
		return paramStr;
	}

	//根据协议规则文件发送请求
	public static request(ptoname:string, tAddrParams:object, tParams:object, unsafeCallback:(data:any)=>void = null)
	{
		var ptoinfo = this.g_allProtocol[ptoname]
		if(!ptoinfo) { cc.log("未定义该协议：", ptoname); return; }
		cc.log("[请求]：", ptoname);

		var domain = Consts.MAIN_URL;
		if(ptoinfo.domain && ptoinfo.domain != "") {
			domain = ptoinfo.domain;
		}

		var addr = ptoinfo.addr
		if(ptoinfo.addrparams && ptoinfo.addrparams.length > 0) {
			if(!addr) { addr = ""; }
			for(var j = 0,len = ptoinfo.addrparams.length; j < len; j++) {
				if( typeof(tAddrParams[j]) != ptoinfo.addrparams[j] ){
					cc.error("地址参数类型错误");
				}
				addr += "/" + tAddrParams[j];
			}
		}

		var paramStr = HttpCore.convertParam(tParams, ptoinfo.params);
		if(ptoinfo.reqType==="POST") {
			paramStr = "data="+JSON.stringify(tParams);
		}

		if(ptoinfo.reqType === "GET") {
			HttpCore.callGet(domain, addr, paramStr, (iCode:number, data:any)=>{
				HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
			});
		}
		else if(ptoinfo.reqType === "POST") {
			HttpCore.callPost(domain, addr, paramStr, (iCode:number, data:any)=>{
				HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
			});
		}
		else if(ptoinfo.reqType === "UPLOAD") {

		}
		else if(ptoinfo.reqType === "DOWNLOAD") {

		}
	}

	private static onRespData(ptoname:string, iCode:number, data:any, unsafeCallback:(data:any)=>void) 
	{
		cc.log("[响应]：", ptoname, iCode);
		if(iCode===0){
			// 解码
			var info = this._dataProcessor.decode(data);

			// 调用响应协议
			if(this._responder[ptoname]) { this._responder[ptoname](info); }

			// 调用unsafeCallback
			if(unsafeCallback) { unsafeCallback(info); }

			// 触发事件
			EventCenter.instance().fire( ptoname, info );
		}
	}

	//--------------------------------------------------------------------------------

	private static commonHead(xhr:XMLHttpRequest) 
	{
		// if (cc.sys.isNative){
		// 	xhr.setRequestHeader("Accept-Encoding","gzip,deflate","text/html;charset=UTF-8");
		// }
		//跨域访问
		// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		// xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
		// xhr.setRequestHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		// xhr.setRequestHeader("X-Powered-By",' 3.2.1')
		// xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
	}

	public static callGet(url:any, addr:any, params:any, callback:(iCode:number, data:any)=>void) 
	{
		var finalUrl = url
		if(addr && addr != "") {
			finalUrl = url + "/" + addr
		}

		var paramStr = this.convertParam(params, null);
		if(paramStr && paramStr != "") {
			finalUrl = finalUrl + "?" + paramStr
		}

		var xhr = cc.loader.getXMLHttpRequest();

		xhr.onabort = function() {
			cc.log('[onabort]', finalUrl);
			callback(4, xhr.responseText);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
			callback(3, xhr.responseText);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
			callback(2, xhr.responseText);
		}
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
			//	cc.log(xhr.responseText);
				callback(0, xhr.responseText);
			}
		};

		cc.log("[GET]: ", finalUrl)
		xhr.open("GET", finalUrl, true);
		xhr.timeout = this.g_timeout;
		this.commonHead(xhr);
		xhr.send();
	}

	public static callPost(url:any, addr:any, params:any, callback:(iCode:number, data:any)=>void) 
	{
		var finalUrl = url
		if(addr && addr != "") {
			finalUrl = url + "/" + addr
		}

		var paramStr = this.convertParam(params, null);

		var xhr = cc.loader.getXMLHttpRequest();

		xhr.onabort = function() {
			cc.log('[onabort]', finalUrl);
			callback(4, xhr.responseText);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
			callback(3, xhr.responseText);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
			callback(2, xhr.responseText);
		}
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
			//	cc.log(xhr.responseText);
				callback(0, xhr.responseText);
			}
		};
		
		cc.log("[POST]: ", finalUrl, paramStr)
		xhr.open("POST", finalUrl, true);
		xhr.timeout = this.g_timeout;
		this.commonHead(xhr);
		xhr.send(paramStr);
	}

	public static callUpload(url:any, addr:any, params:any, callback:(iCode:number, data:any)=>void)
	{

	}
	
}

