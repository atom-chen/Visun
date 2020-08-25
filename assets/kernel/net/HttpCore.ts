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
import EventCenter from "../basic/event/EventCenter";
import UIManager from "../view/UIManager";
import { HttpResult } from "../basic/defines/KernelDefine";
import KernelEvent from "../basic/defines/KernelEvent";
import { isNil, isEmpty } from "../utils/GlobalFuncs";

class HttpDownTask {
	state:HttpResult = HttpResult.Idle;
	data:any = null;
}

export default class HttpCore {
	private static g_timeout:number = 8000;		//超时
	public static token:string = "";			//

	private static _mainUrl:string = "";			//
	private static _coder:ICodec = new HttpCodec;	//编码解码器
	private static g_allProtocol:object = {};		//规则
	private static _responder:any;					//响应句柄
	private static _forbitCache:any = {};			//设置某条协议是否取消缓存
	private static _localCache:LocalCache = LocalCache.getInstance("http");

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
				cc.log("重新注册Http协议：", ptoname);
			} else {
				cc.log("注册Http协议：", ptoname);
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
			var cacheData = HttpCore._localCache.read(ptoname);
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
			} else {
				for(var j = 0,len = ptoinfo.addrparams.length; j < len; j++) {
					if( typeof(tAddrParams[j]) != ptoinfo.addrparams[j] ){
						cc.error("地址参数类型错误");
					}
					addr += "/" + tAddrParams[j];
				}
			}
		}

		var paramStr = this._coder.encode(tParams, ptoinfo.params);

		switch(ptoinfo.reqType) 
		{
			case "GET":
					HttpCore.callGet(domain, addr, paramStr, (iCode:HttpResult, data:any)=>{
						HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
						if(!this._forbitCache[ptoname]){
							HttpCore._localCache.write(ptoname, data);
						}
					});
					break;
			case "POST":
					HttpCore.callPost(domain, addr, paramStr, (iCode:HttpResult, data:any)=>{
						HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
						if(!this._forbitCache[ptoname]){
							HttpCore._localCache.write(ptoname, data);
						}
					});
					break;
			case "UPLOAD":
					HttpCore.callUpload(domain, addr, paramStr, (iCode:HttpResult, data:any)=>{
						HttpCore.onRespData(ptoname, iCode, data, unsafeCallback);
					});
					break;
			case "DOWNLOAD":
					break;
			default:
				cc.error("reqType 拼写错误：", ptoinfo.reqType);
			
		}
	}

	private static onRespData(ptoname:string, iCode:HttpResult, data:any, unsafeCallback?:(data:any)=>void) 
	{
		if(!this.g_allProtocol[ptoname]) {
			cc.log("协议已卸载", ptoname);
			return;
		}

		cc.log("[响应]：", ptoname, iCode);

		if( iCode === HttpResult.Succ ) {
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
				EventCenter.getInstance().fire( ptoname, info );
			} else {
				cc.log(info);
				UIManager.toast(info.msg || "未知错误");
				EventCenter.getInstance().fire(KernelEvent.HTTP_ERROR_CODE, ptoname, info);
			}
		} else {
			UIManager.toast("网络请求失败");
			EventCenter.getInstance().fire(KernelEvent.HTTP_ERROR_CODE, ptoname);
		}
	}

	//--------------------------------------------------------------------------------

	private static commonHead(xhr:XMLHttpRequest) 
	{
		// if (cc.sys.isNative){
		// 	xhr.setRequestHeader("Accept-Encoding","gzip,deflate","text/html;charset=UTF-8");
		// }
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		//跨域访问
		// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		// xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
		// xhr.setRequestHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		// xhr.setRequestHeader("X-Powered-By",' 3.2.1')
		// xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
	}

	public static callGet(url:any, addr:any, params:any, callback:(iCode:HttpResult, data:any)=>void, headinfo?:any) 
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
			callback(HttpResult.Aborted, xhr.responseText);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
			callback(HttpResult.Error, xhr.responseText);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
			callback(HttpResult.Timeout, xhr.responseText);
		}
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
			//	cc.log(xhr.responseText);
				callback(HttpResult.Succ, xhr.responseText);
			}
		};

		cc.log("[GET]: ", finalUrl);
		xhr.open("GET", finalUrl, true);
		xhr.timeout = this.g_timeout;
		this.commonHead(xhr);
		if(headinfo) {
			for(var k in headinfo) {
				xhr.setRequestHeader(k, headinfo[k]);
			}
		}
		xhr.send();
	}

	public static callPost(url:any, addr:any, params:any, callback:(iCode:HttpResult, data:any)=>void) 
	{
		var finalUrl = url;
		if(addr && addr != "") {
			finalUrl = url + "/" + addr;
		}

		var paramStr = this._coder.encode(params, null);

		var xhr = cc.loader.getXMLHttpRequest();

		xhr.onabort = function() {
			cc.log('[onabort]', finalUrl);
			callback(HttpResult.Aborted, xhr.responseText);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
			callback(HttpResult.Error, xhr.responseText);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
			callback(HttpResult.Timeout, xhr.responseText);
		}
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
			//	cc.log(xhr.responseText);
				callback(HttpResult.Succ, xhr.responseText);
			}
		};
		
		cc.log("[POST]: ", finalUrl, paramStr);
		xhr.open("POST", finalUrl, true);
		xhr.timeout = this.g_timeout;
		this.commonHead(xhr);
		xhr.send(paramStr);
	}

	// blob: files[0]
	public static callUpload(dstAddr:string, key:string, blob:Blob|string, formInfo:any, finishCallback?:Function) {
		if(isEmpty(blob) || isEmpty(dstAddr)) {
			cc.warn("无效的上传参数", blob, dstAddr);
			return;
		}
		cc.log("开始上传......", dstAddr, blob);

		var fd = new FormData();
		fd.append(key, blob);
		for(var k in formInfo) {
			fd.append(k, formInfo[k]);
		}
		
		var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", function(ev1) {
			cc.log("上传进度", ev1.loaded/ev1.total*100+"/100");
		}, false);
        xhr.addEventListener("load", function(ev2){
			cc.log("上传完毕", ev2);
		}, false);
        xhr.addEventListener("error", function(ev3) {
			UIManager.toast("文件上传失败");
		}, false);
        xhr.addEventListener("abort", function(ev4) {
			UIManager.toast("文件上传失败");
		}, false);
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", xhr.responseText);
				if(finishCallback) {
					finishCallback(xhr.responseText);
				}
			} else {
				cc.log("......", xhr.readyState, xhr.status, xhr.responseText);
			}
		};
		xhr.open("POST", dstAddr);
		//xhr.setRequestHeader("Content-Type", "application/octet-stream");
		// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		// xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
		// xhr.setRequestHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		// xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        xhr.send(fd);
	}

	public static genKey(url:any, addr:any, params:any, headinfo?:any, extraKey?:string) : string {
		var finalUrl = url;
		if(addr && addr != "") {
			finalUrl = url + "/" + addr;
		}

		var paramStr = this._coder.encode(params, null);
		if(paramStr && paramStr != "") {
			finalUrl = finalUrl + "?" + paramStr;
		}
		
		if(headinfo) {
			for(var k in headinfo) {
				finalUrl += k + headinfo[k];
			}
		}

		if(!isNil(extraKey)) {
			finalUrl += extraKey;
		}

		return finalUrl;
	}

	private static downCache : {[key:string]:HttpDownTask} = {};
	private static downDispatcher = new EventCenter;
	private static dispatchDown(downKey:string, iCode:HttpResult, data:any) {
		this.downDispatcher.triger(downKey, iCode, data);
	}
	public static getDispatcher() {
		return this.downDispatcher;
	}
	public static callDown(url:any, addr:any, params:any, headinfo:any, extraKey:string, callback:(iCode:HttpResult, data:any)=>void, thisObj:any) 
	{
		var finalUrl = url;
		if(addr && addr != "") {
			finalUrl = url + "/" + addr;
		}

		var paramStr = this._coder.encode(params, null);
		if(paramStr && paramStr != "") {
			finalUrl = finalUrl + "?" + paramStr;
		}

		var downKey = this.genKey(url, addr, params, headinfo, extraKey);

		this.downDispatcher.listen(downKey, callback, thisObj);

		if(this.downCache[downKey]) {
			if(this.downCache[downKey].state === HttpResult.Succ) {
				this.dispatchDown(downKey, HttpResult.Succ, HttpCore.downCache[downKey].data);
				return;
			}
			if(this.downCache[downKey].state === HttpResult.Working) {
				return;
			}
		}

		this.downCache[downKey] = new HttpDownTask;
		this.downCache[downKey].state = HttpResult.Working;
		
		var xhr = cc.loader.getXMLHttpRequest();

		xhr.onabort = function() {
			cc.log('[onabort]', finalUrl);
			HttpCore.downCache[downKey].state = HttpResult.Aborted;
			HttpCore.dispatchDown(downKey, HttpCore.downCache[downKey].state, HttpCore.downCache[downKey].data);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
			HttpCore.downCache[downKey].state = HttpResult.Error;
			HttpCore.dispatchDown(downKey, HttpCore.downCache[downKey].state, HttpCore.downCache[downKey].data);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
			HttpCore.downCache[downKey].state = HttpResult.Timeout;
			HttpCore.dispatchDown(downKey, HttpCore.downCache[downKey].state, HttpCore.downCache[downKey].data);
		}
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
				HttpCore.downCache[downKey].state = HttpResult.Succ;
				HttpCore.downCache[downKey].data = xhr.response;
				callback(HttpResult.Succ, xhr.response);
				HttpCore.dispatchDown(downKey, HttpResult.Succ, xhr.response);
			}
		};

		cc.log("[GET]: ", finalUrl);
		xhr.open("GET", finalUrl, true);
		xhr.timeout = this.g_timeout;
		this.commonHead(xhr);
		if(headinfo) {
			for(var k in headinfo) {
				xhr.setRequestHeader(k, headinfo[k]);
			}
		}

		if(cc.sys.isNative) {
			//@ts-ignore
		//	xhr.responseType = "application/octet-stream";
		} else {
			xhr.responseType = "blob";
		}

		xhr.send();
	}
	
}

