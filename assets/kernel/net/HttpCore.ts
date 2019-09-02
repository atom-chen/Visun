//---------------------------------
// Http接口
// 注意:
// 1. unsafeCallback之所以称其unsafe，是因为请求是异步的，
//    如果在里面调用了ui操作，而ui可能在响应前已经关闭销毁了,这时候在回调里使用的就是野指针。
// 2. 如果设置了缓存，会收到两次响应，第一次是从缓存获取的数据，第二次是从服务端拉取的数据。
//---------------------------------
import ICodec from "../codec/ICodec";
import HttpCodec from "../codec/HttpCodec";
import LocalCache from "../localcache/LocalCache";
import EventCenter from "../event/EventCenter";
import UIManager from "../view/UIManager";
import { NetResult } from "../looker/KernelDefine";



export default class HttpCore {
	private static g_timeout:number = 8000;		//超时
	public static token:string = "";

	private static _mainUrl:string = "";
	private static _coder:ICodec = new HttpCodec;	//编码解码器
	private static g_allProtocol:object = {};	//规则
	private static _responder:any;				//响应句柄
	private static _forbitCache:any = {};
	private static _localCache:LocalCache = LocalCache.instance("http");

	//@注册一组协议
	//ruleList:  规则
	//requestor: 请求句柄
	//responder: 响应句柄
	public static registProcotol(ruleList:object, requestor:any, respondor:any)
	{
		this._responder = respondor;
		
		for( var i in ruleList) {
			var ptoname:string = ruleList[i].name

			if(this.g_allProtocol[ptoname]) {
				cc.log("重新注册：", ptoname);
			} 
			else {
				cc.log("注册协议：", ptoname);
			}
			if(!requestor[ptoname]) {
				cc.error("没有请求接口", ptoname);
			}

			this.g_allProtocol[ptoname] = ruleList[i];
		}
	}

	//卸载所有协议
	public static unregist() {
		this.g_allProtocol = {};
		this._responder = null;
	}

	//设置域名
	public static setMainUrl(url:string) 
	{
		this._mainUrl = url;
	}

	//设置某条协议是否缓存
	public static setCacheAble(ptoname:string, bFlag:boolean)
	{
		this._forbitCache[ptoname] = !bFlag;
	}

	//--------------------------------------------------------------------------------

	//根据协议规则发送请求
	public static request(ptoname:string, tParams:object, tAddrParams?:any[], unsafeCallback?:(data:any)=>void)
	{
		var ptoinfo = this.g_allProtocol[ptoname];

		if(!ptoinfo) { 
			cc.log("未定义该协议或改协议已卸载：", ptoname); 
			return; 
		}

		cc.log("[请求]：", ptoname);

		if(!this._forbitCache[ptoname]){
			var cacheData = HttpCore._localCache.get(ptoname);
			if(cacheData){
				cc.log("---- 从缓存获取http数据: ", ptoname);
				this.onRespData(ptoname, 0, cacheData, unsafeCallback);
			}
		}

		var domain = this._mainUrl;
		if(ptoinfo.domain && ptoinfo.domain != "") {
			domain = ptoinfo.domain;
		}

		var addr = ptoinfo.addr
		if(ptoinfo.addrparams && ptoinfo.addrparams.length > 0) {
			if(!addr) { addr = ""; }
			if(!tAddrParams) {
				cc.error("地址参数类型错误");
			}
			else {
				for(var j = 0,len = ptoinfo.addrparams.length; j < len; j++) {
					if( typeof(tAddrParams[j]) != ptoinfo.addrparams[j] ){
						cc.error("地址参数类型错误");
					}
					addr += "/" + tAddrParams[j];
				}
			}
		}

		var paramStr = this._coder.encode(tParams, ptoinfo.params);

		if(ptoinfo.reqType==="POST") {
			paramStr = "data=" + JSON.stringify(tParams);
		}

		switch(ptoinfo.reqType) 
		{
			case "GET":
					HttpCore.callGet(domain, addr, paramStr, (iCode:NetResult, data:any)=>{
						HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
						if(!this._forbitCache[ptoname]){
							HttpCore._localCache.set(ptoname, data);
						}
					});
					break;
			case "POST":
					HttpCore.callPost(domain, addr, paramStr, (iCode:NetResult, data:any)=>{
						HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
						if(!this._forbitCache[ptoname]){
							HttpCore._localCache.set(ptoname, data);
						}
					});
					break;
			case "UPLOAD":
					HttpCore.callUpload(domain, addr, paramStr, (iCode:NetResult, data:any)=>{
						HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
					});
					break;
			case "DOWNLOAD":
					break;
			default:
				cc.error("reqType 拼写错误：", ptoinfo.reqType);
			
		}
	}

	private static onRespData(ptoname:string, iCode:NetResult, data:any, unsafeCallback?:(data:any)=>void) 
	{
		if(!this.g_allProtocol[ptoname]) {
			cc.log("协议已卸载", ptoname);
			return;
		}

		cc.log("[响应]：", ptoname, iCode);

		if( iCode === NetResult.Succ ) {
			// 解码
			var info = this._coder.decode(data);

			if(info.code === 200) {
				// 调用响应协议
				if(this._responder && this._responder[ptoname]) { 
					this._responder[ptoname].call(this._responder, info); 
				}
				// 调用unsafeCallback
				if(unsafeCallback) { unsafeCallback(info); }
				// 触发事件
				EventCenter.instance().fire( ptoname, info );
			}
			else {
				cc.log(info);
				UIManager.toast(info.msg || "未知错误");
			}
		}
		else {
			UIManager.toast("网络请求失败");
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

	public static callGet(url:any, addr:any, params:any, callback:(iCode:NetResult, data:any)=>void) 
	{
		var finalUrl = url;
		if(addr && addr != "") {
			finalUrl = url + "/" + addr;
		}

		var paramStr = this._coder.encode(params, null);
		if(paramStr && paramStr != "") {
			finalUrl = finalUrl + "?" + paramStr;
		}

		var xhr = cc.loader.getXMLHttpRequest();

		xhr.onabort = function() {
			cc.log('[onabort]', finalUrl);
			callback(NetResult.Aborted, xhr.responseText);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
			callback(NetResult.Error, xhr.responseText);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
			callback(NetResult.Timeout, xhr.responseText);
		}
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
			//	cc.log(xhr.responseText);
				callback(NetResult.Succ, xhr.responseText);
			}
		};

		cc.log("[GET]: ", finalUrl);
		xhr.open("GET", finalUrl, true);
		xhr.timeout = this.g_timeout;
		this.commonHead(xhr);
		xhr.send();
	}

	public static callPost(url:any, addr:any, params:any, callback:(iCode:NetResult, data:any)=>void) 
	{
		var finalUrl = url;
		if(addr && addr != "") {
			finalUrl = url + "/" + addr;
		}

		var paramStr = this._coder.encode(params, null);

		var xhr = cc.loader.getXMLHttpRequest();

		xhr.onabort = function() {
			cc.log('[onabort]', finalUrl);
			callback(NetResult.Aborted, xhr.responseText);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
			callback(NetResult.Error, xhr.responseText);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
			callback(NetResult.Timeout, xhr.responseText);
		}
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
			//	cc.log(xhr.responseText);
				callback(NetResult.Succ, xhr.responseText);
			}
		};
		
		cc.log("[POST]: ", finalUrl, paramStr);
		xhr.open("POST", finalUrl, true);
		xhr.timeout = this.g_timeout;
		this.commonHead(xhr);
		xhr.send(paramStr);
	}

	public static callUpload(url:any, addr:any, params:any, callback:(iCode:NetResult, data:any)=>void)
	{

	}
	
}

