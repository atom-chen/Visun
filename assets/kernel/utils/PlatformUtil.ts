//---------------------------------
// 平台相关接口导出
//---------------------------------
import EventCenter from "../basic/event/EventCenter";
import KernelEvent from "../basic/defines/KernelEvent";
import TimerManager from "../basic/timer/TimerManager";
import { newHandler, isEmpty } from "./GlobalFuncs";
import UIManager from "../view/UIManager";
import LoginUser from "../../common/script/model/LoginUser";


export default class PlatformUtil {
	private static externalPath = null;

	public static exitApp() {
		cc.director.end();
		cc.game.end();
	}

	//是否支持webp
	public static isSupportWebp() : boolean {
		return cc.sys.capabilities.webp;
	}
	
	//获取设备ID
	public static getDeviceId() : string {
		return "622892525";
	}

	//手动设置横竖屏
	public static setOrientation(bLandspace:boolean) {
		UIManager.toast("尚未实现");
	}

	//复制到粘贴板
	public static copy(content:string) {
		UIManager.toast("尚未实现");
	}

	//粘贴
	public static paste(content:string) {
		UIManager.toast("尚未实现");
	}

	//保存到相册
	public static saveToPhotoAlbum() {
		UIManager.toast("尚未实现");
	}

	// strQR : "data:image/jpeg;base64," + base64编码的图像数据字符串
	public static setQRCode(nd:cc.Node, strQR:any, cb?:Function) {
		if(nd && cc.isValid(nd)) {
			let img = new Image();
			img.src = strQR;
			let texture = new cc.Texture2D();
			texture.initWithElement(img);
			texture.handleLoadedTexture();
			nd.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
			img.onload = function(){
				if(cb) { cb(img.width, img.height); }
			};
		}
	}

	public static testHttp() {
		if(!cc.sys.isNative) { return; }
		if (cc.sys.os === cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("vvasist/VisunTool", "testHttp", "()V");
        }
	}

	public static applyAllSysAuth() {
		if(!cc.sys.isNative) { return; }
		if (cc.sys.os === cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("vvasist/AuthorHelper", "applyAllSysAuth", "()V");
        }
	}

	public static getWriteablePath() : string {
		if(cc.sys.isNative) {
			return jsb.fileUtils.getWritablePath();
		} else {
			return "";
		}
	}

	public static getExternalStoragePath() : string {
		if(!cc.sys.isNative) { return ""; }
		if(this.externalPath) {
			return this.externalPath;
		}
		if (cc.sys.os === cc.sys.OS_ANDROID) {
			var str = jsb.reflection.callStaticMethod("vvasist/FileHelper", "getExternalStoragePath", "()Ljava/lang/String;");
			this.externalPath = str;
			return str;
		}
		return "";
	}

	//截屏
	public static captureScreen(fname:string) {
		
	}

	//打开相机
	public static openCamera(outFileName:string, w:number, h:number, quality:number) {
		if(!cc.sys.isNative) { return; }
		if(cc.sys.os === cc.sys.OS_ANDROID) {
			var runStr = "cc.java2js.handleGallery";
            jsb.reflection.callStaticMethod("vvasist/ImagePicker", "openCamera", "(Ljava/lang/String;Ljava/lang/String;III)V", runStr, outFileName, w, h, quality);
		}
		if(cc.sys.os === cc.sys.OS_IOS) {
			jsb.reflection.callStaticMethod("AppController", "openCamera:height:quality:", w, h, quality);
		}
	}

	//打开相册
	public static openGallery(outFileName:string, w:number, h:number, quality:number) {
		if(!cc.sys.isNative) { return; }
		if(cc.sys.os === cc.sys.OS_ANDROID) {
			var runStr = "cc.java2js.handleGallery";
            jsb.reflection.callStaticMethod("vvasist/ImagePicker", "openPhoto", "(Ljava/lang/String;Ljava/lang/String;III)V", runStr, outFileName, w, h, quality);
		}
		if(cc.sys.os === cc.sys.OS_IOS) {
			jsb.reflection.callStaticMethod("AppController", "openPhoto:height:quality:", w, h, quality);
		}
	}
	
	//
	public static h5OpenGallery(cb?:Function) {
		if(cc.sys.isNative) { return; }

		// 在static/preview-templates/index.jade中加上下面这行
		// input#input_picture(type='file' accept="image/*" style="display: none")
		var input_picture = document.getElementById('input_picture');
		if(!input_picture) {
			cc.warn("no input_picture");
			return;
		}

		input_picture.onchange = function (event1) {
			var files = event1.target["files"];
			if (files && files.length > 0) {
				try {
					var fileReader = new FileReader();
					fileReader.onload = function(event2) {
						if (fileReader.readyState == fileReader.DONE) {
							if(cb) {
								cb(event2.target.result, files[0]);
							}
						}
					};
					fileReader.readAsDataURL(files[0]);
				} catch (e) {
					alert('拍照失败,请联系客服或尝试更换手机再试!');
				}
			}
		}
		
		input_picture.click();
	}


	public static uploadAndroid(url:string, fileKey:string, filepath:string, fileName:string, jsonParam:string) {
		if(!cc.sys.isNative) { return; }
		if (cc.sys.os === cc.sys.OS_ANDROID) {
			cc.log("uploadAndroid", url, fileKey, filepath, fileName, jsonParam);
            jsb.reflection.callStaticMethod("vvasist/VisunTool", "uploadFile", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", url, fileKey, filepath, fileName, jsonParam);
        }
	}

	// blob: files[0]
	public static uploadFile(blob:any, dstAddr:string, finishCallback?:Function) {
		if(isEmpty(blob) || isEmpty(dstAddr)) {
			cc.warn("无效的上传参数", blob, dstAddr);
			return;
		}
		cc.log("开始上传......", dstAddr, blob);

		var fd = new FormData();
		fd.append("image", blob);
		fd.append("userid", LoginUser.getInstance().UserId.toString());
		
		var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", function(ev1) {
			cc.log("上传进度", ev1.loaded/ev1.total*100+"/100");
		}, false);
        xhr.addEventListener("load", function(ev2){
			cc.log("上传完毕", ev2);
		}, false);
        xhr.addEventListener("error", function(ev3) {
			UIManager.toast("图片发送失败");
		}, false);
        xhr.addEventListener("abort", function(ev4) {
			UIManager.toast("图片发送失败");
		}, false);
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", xhr.responseText);
				if(finishCallback) {
					finishCallback(xhr.responseText);
				}
			} else {
				cc.log("0000", xhr.readyState, xhr.status, xhr.responseText);
			}
		};
		xhr.open("POST", dstAddr);
	//	xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.send(fd);
	}

	// "http://8.129.175.179:9800/static/saveimage/5eca567169a16e1b344f1d28.png"
	static download(url:string) {
		cc.log("开始下载: ", url);
		if(isEmpty(url)) {
			cc.warn("无效的地址", url);
			return;
		}
		var xhr2 = new XMLHttpRequest();
		xhr2.onreadystatechange = function() {
			if(xhr2.readyState === 4 && xhr2.status >= 200 && xhr2.status < 207) {
				cc.log("完成下载: ", xhr2.responseText.length, url);
				cc.log(xhr2.responseText);
			}
		}
		xhr2.open("GET", url);
		xhr2.setRequestHeader("Access-Control-Allow-Origin", "*");
	//	xhr2.setRequestHeader("Content-Type", "image/*");
		xhr2.setRequestHeader("userid", LoginUser.getInstance().UserId.toString());
		xhr2.send();
	}


	/**
	 * 以obj.height 为基准 压缩
	 * baseImage base64 图片
	 * obj { width: 900, height: 35 }
	 * quality 图像质量  0 - 1   1 质量越高
	 */
	public static imageCompression(baseImage:string, obj:cc.Size, quality:number, callback:Function) {
		if(cc.sys.isNative) {
			callback(baseImage);
			return;
		}
		var img = new Image();
		img.src = baseImage;
		img.onload = function () {
			var that = this;
			var w = img.width, h = img.height;
			//按照h 压缩后的base64 和 width
			var compressionResult,compressionWidth,compressionHeight;
			if(h>obj.height){
				//生成canvas
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				//创建属性节点
				var createw = document.createAttribute('width');
				var createh = document.createAttribute('height');
				h = obj.height;
				w = (h/img.height) * w;
				compressionWidth = w;
				compressionHeight = h;
				//@ts-ignore
				createw.nodeValue = w;  createh.nodeValue = h;
				canvas.setAttributeNode(createw);
				canvas.setAttributeNode(createh);
				ctx.drawImage(img,0,0,w,h);
				var base64 = canvas.toDataURL('image/png', quality);
				compressionResult = base64;
			}else {
				compressionResult = baseImage;
				compressionWidth = img.width;
				compressionHeight = img.height;
			}
			//width > 默认width  做截取处理
			if (compressionWidth > obj.width){
				PlatformUtil.ClippingImage(compressionResult,obj.width,compressionHeight,quality,function (base64Clipping) {
					callback(base64Clipping);
				});
			}else {
				callback(compressionResult);
			}
		}
	}

	/**
	 * 图片截取
	 * base64Codes  图片base64 码
	 * 从 (0,0) 开始截取   宽高分别为 width，height
	 * quality  图片质量  0 - 1 ，  1 图片质量最高
	 * callback  返回的是 截取后的base64 字符串
	 */
	public static ClippingImage(base64Codes:string, width:number, height:number, quality:number, callback:Function) {
		if(cc.sys.isNative) {
			callback(base64Codes);
			return;
		}
		var img = new Image();
		img.src = base64Codes;
		//生成canvas
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var createw = document.createAttribute('width');
		var createh = document.createAttribute('height');
		//@ts-ignore
		createw.nodeValue = width;  createh.nodeValue = height;
		canvas.setAttributeNode(createh);
		canvas.setAttributeNode(createw);
		img.onload = function () {
			ctx.drawImage(img,0,0,width,height,0,0,width,height);
			var base64Result = canvas.toDataURL('image/png', quality);
			callback(base64Result)
		}
	}
	
}


cc["java2js"] = {};

cc["java2js"].handleScreenShot = function(str, imgPath) {
	TimerManager.delayFrame(1, newHandler(function(){
		EventCenter.getInstance().fire(KernelEvent.PIC_LOADED, "data:image/jpeg;base64,"+str);
	}, null));
};

cc["java2js"].handleGallery = function(imgStr, imgPath) {
	cc.log("相册相机回调", imgPath)
	TimerManager.delayFrame(1, newHandler(function(){
		EventCenter.getInstance().fire(KernelEvent.PIC_LOADED, "data:image/jpeg;base64,"+imgStr, imgPath);
	}, null));
}
