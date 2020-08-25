//---------------------------------
// 平台相关接口导出
//---------------------------------
import EventCenter from "../basic/event/EventCenter";
import KernelEvent from "../basic/defines/KernelEvent";
import TimerManager from "../basic/timer/TimerManager";
import { newHandler, isEmpty, isNil } from "./GlobalFuncs";
import UIManager from "../view/UIManager";
import { IMG_BASE64_JPEG, FILE_TYPE } from "../basic/defines/KernelDefine";


export default class PlatformUtil {
	private static externalPath = null;
	private static MaxUploadSize = 10 * 1024 * 1024;

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

	static webCopyString(str) {
		var input = str;
		const el = document.createElement('textarea');
		el.value = input;
		el.setAttribute('readonly', '');
		//@ts-ignore
		el.style.contain = 'strict';
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		el.style.fontSize = '12pt'; // Prevent zooming on iOS

		const selection = getSelection();
		var originalRange = false;
		if (selection.rangeCount > 0) {
			//@ts-ignore
			originalRange = selection.getRangeAt(0);
		}
		document.body.appendChild(el);
		el.select();
		el.selectionStart = 0;
		el.selectionEnd = input.length;

		var success = false;
		try {
			success = document.execCommand('copy');
		} catch (err) {}

		document.body.removeChild(el);

		if (originalRange) {
			selection.removeAllRanges();
			//@ts-ignore
			selection.addRange(originalRange);
		}

		return success;
	}

	//复制到粘贴板
	public static copy(content:string) {
		if(!cc.sys.isNative) {
			this.webCopyString(content);
			return;
		}
		if (cc.sys.os === cc.sys.OS_ANDROID) {
			jsb.reflection.callStaticMethod("org.cocos2dx.javascript.AppActivity", "copy", "(Ljava/lang/String;)V");
		}
		else if(cc.sys.os === cc.sys.OS_IOS) {
			
		}
		else if(cc.sys.os === cc.sys.OS_WINDOWS) {
			
		}
		else if(cc.sys.os === cc.sys.OS_LINUX) {
			
		}
	}

	//粘贴
	public static paste() : string {
		if (cc.sys.os === cc.sys.OS_ANDROID) {
			return "";
		}
		else if(cc.sys.os === cc.sys.OS_IOS) {
			return "";
		}
		else if(cc.sys.os === cc.sys.OS_WINDOWS) {
			return "";
		}
		else if(cc.sys.os === cc.sys.OS_LINUX) {
			return "";
		}
		return "";
	}

	//保存到相册
	public static saveToPhotoAlbum() {
		UIManager.toast("尚未实现");
	}

	public static applyAllSysAuth() {
		if(!cc.sys.isNative) { return; }
		if (cc.sys.os === cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org.cocos2dx.javascript.AppActivity", "applyAllSysAuth", "()V");
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
			var str = jsb.reflection.callStaticMethod("org.cocos2dx.javascript.AppActivity", "getExternalStoragePath", "()Ljava/lang/String;");
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
            jsb.reflection.callStaticMethod("org.cocos2dx.javascript.AppActivity", "openCamera", "(Ljava/lang/String;Ljava/lang/String;III)V", runStr, outFileName, w, h, quality);
		}
		if(cc.sys.os === cc.sys.OS_IOS) {
			//@ts-ignore
			jsb.reflection.callStaticMethod("AppController", "openCamera:height:quality:", w, h, quality);
		}
	}

	//打开相册
	public static openGallery(outFileName:string, w:number, h:number, quality:number) {
		if(!cc.sys.isNative) { return; }
		if(cc.sys.os === cc.sys.OS_ANDROID) {
			var runStr = "cc.java2js.handleGallery";
            jsb.reflection.callStaticMethod("org.cocos2dx.javascript.AppActivity", "openPhoto", "(Ljava/lang/String;Ljava/lang/String;III)V", runStr, outFileName, w, h, quality);
		}
		if(cc.sys.os === cc.sys.OS_IOS) {
			//@ts-ignore
			jsb.reflection.callStaticMethod("AppController", "openPhoto:height:quality:", w, h, quality);
		}
	}


	private static createInput(id:string, inputType:string, accept:string, inputStyle:string, aDiv, capt) {
		if(document.getElementById(id)) {
			return document.getElementById(id);
		}
		var inputor = document.createElement("input");
		inputor.setAttribute("id",id);
		inputor.setAttribute("type",inputType);
		inputor.setAttribute("accept", accept);
		inputor.setAttribute("style", inputStyle);
		if(capt && !isEmpty(capt)) {
			inputor.setAttribute("capture", capt);
		}
		if(aDiv) {
			aDiv.appendChild(inputor);
		}
	}

	public static isImageFile(fname:string, ftype:string) : boolean {
		if(isNil(fname) && isNil(ftype)) {
			return false;
		}
		if(!isNil(ftype) && ftype.indexOf("image") >= 0) {
			return true;
		}
		if(!isNil(fname)) {
			var houzhui = fname.substr(-3, 3);
			houzhui = houzhui.toLowerCase();
			if(houzhui=="png" || houzhui=="jpg") {
				return true;
			}
			
			houzhui = fname.substr(-4, 4);
			houzhui = houzhui.toLowerCase();
			if(houzhui=="jpeg" || houzhui=="jepg") {
				return true;
			}
		}
		return false;
	}

	public static isVideoFile(fname:string, ftype:string) : boolean {
		if(isNil(fname) && isNil(ftype)) {
			return false;
		}
		if(!isNil(ftype) && ftype.indexOf("video") >= 0) {
			return true;
		}
		if(!isNil(fname)) {
			if( fname.indexOf("mp4") >= 0 || fname.indexOf("avi") >= 0 ) {
				return true;
			}
		}
		return false;
	}

	public static getFileType(fname:string, ftype:string) : FILE_TYPE {
		if(this.isImageFile(fname, ftype)) {
			return FILE_TYPE.Image;
		}
		else if(this.isVideoFile(fname, ftype)) {
			return FILE_TYPE.Video;
		}
		return FILE_TYPE.Other;
	}

	public static h5OpenFile(cb?:Function) {
		if(cc.sys.isNative) { return; }
		
		var id = "input_file";

		var inputor = document.getElementById(id);
		if(!inputor) {
			this.createInput(id, "file", "*.*", "display: none", document.body, null);
			inputor = document.getElementById(id);
		}
		if(!inputor) {
			UIManager.toast("打开文件失败");
			return;
		}

		inputor.onchange = function (event1) {
			if(isNil(event1) || isNil(event1.target)) {
				UIManager.toast("打开文件失败");
				return;
			}
			var files = event1.target["files"];
			if (files && files.length > 0) {
				try {
					var filetype = PlatformUtil.getFileType(files[0].name, files[0].type);

					if(filetype == FILE_TYPE.Other) {
						UIManager.toast("请选择视频或图片");
						return;
					}

					if(files[0].size && files[0].size > PlatformUtil.MaxUploadSize) {
						UIManager.toast("上传文件不得超过10M");
						return;
					}

					var fileReader = new FileReader();
					fileReader.onload = function(event2) {
						if (fileReader.readyState == fileReader.DONE) {
							if(cb) {
								cb(event2.target.result, files[0], filetype);
							}
						}
					};
					fileReader.readAsArrayBuffer(files[0]);
				} catch (e) {
					alert('拍照失败,请联系客服或尝试更换手机再试!');
				}
			}
		}
		
		inputor.click();
	}

	public static h5OpenVideo(cb?:Function) {
		if(cc.sys.isNative) { return; }
		
		var id = "input_video";

		var inputor = document.getElementById(id);
		if(!inputor) {
			this.createInput(id, "file", "file/*.mp4", "display: none", document.body, null);
			inputor = document.getElementById(id);
		}
		if(!inputor) {
			UIManager.toast("打开文件失败");
			return;
		}

		inputor.onchange = function (event1) {
			if(isNil(event1) || isNil(event1.target)) {
				UIManager.toast("打开文件失败");
				return;
			}
			var files = event1.target["files"];
			if (files && files.length > 0) {
				try {
					if(!PlatformUtil.isVideoFile(files[0].name, files[0].type)) {
						UIManager.toast("请选择视频");
						return;
					}

					if(files[0].size && files[0].size > PlatformUtil.MaxUploadSize) {
						UIManager.toast("上传文件不得超过10M");
						return;
					}

					var fileReader = new FileReader();
					fileReader.onload = function(event2) {
						if (fileReader.readyState == fileReader.DONE) {
							if(cb) {
								cb(event2.target.result, files[0]);
							}
						}
					};
					fileReader.readAsArrayBuffer(files[0]);
				} catch (e) {
					alert('拍照失败,请联系客服或尝试更换手机再试!');
				}
			}
		}
		
		inputor.click();
	}
	
	// 在static/preview-templates/index.jade中加上下面这行
	// input#input_picture(type='file' accept="image/*" style="display: none")
	public static h5OpenGallery(cb?:Function) {
		if(cc.sys.isNative) { return; }

		var id = "input_picture";
		
		var inputor = document.getElementById(id);
		if(!inputor) {
			this.createInput(id, "file", "image/*", "display: none", document.body, null);
			inputor = document.getElementById(id);
		}
		if(!inputor) {
			UIManager.toast("打开相册失败");
			return;
		}

		inputor.onchange = function (event1) {
			if(isNil(event1) || isNil(event1.target)) {
				UIManager.toast("打开文件失败");
				return;
			}
			var files = event1.target["files"];
			if (files && files.length > 0) {
				try {
					if(!PlatformUtil.isImageFile(files[0].name, files[0].type)) {
						UIManager.toast("请选择图片");
						return;
					}

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
		
		inputor.click();
	}

	//
	public static h5OpenCamera(cb?:Function) {
		if(cc.sys.isNative) { return; }

		var id = "input_camera";

		var inputor = document.getElementById(id);
		if(!inputor) {
			this.createInput(id, "file", "image/*", "display: none", document.body, null);
			inputor = document.getElementById(id);
		}
		if(!inputor) {
			UIManager.toast("打开相机失败");
			return;
		}

		inputor.onchange = function (event1) {
			if(isNil(event1) || isNil(event1.target)) {
				UIManager.toast("打开文件失败");
				return;
			}
			var files = event1.target["files"];
			if (files && files.length > 0) {
				try {
					if(!PlatformUtil.isImageFile(files[0].name, files[0].type)) {
						UIManager.toast("请选择图片");
						return;
					}

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
		
		inputor.click();
	}

	// strQR : base64编码的图像数据字符串
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
	
	static Base64ToBlob(dataurl) {
		var arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]);
		var u8arr = [];
		for(var i=0; i<bstr.length; i++) {
			u8arr.push( bstr.charCodeAt(i) );
		}
		return new Blob([new Uint8Array(u8arr)], { type: mime });
	}

	static BlobToBase64(blob, callback) {
		let a = new FileReader();
		a.onload = function (e) { callback(e.target.result); }
		a.readAsDataURL(new Blob([blob], {type:"image/png"}));
	}


	/**
	 * 以obj.height 为基准 压缩
	 * baseImage base64 图片
	 * obj { width: 900, height: 35 }
	 * quality 图像质量  0 - 1   1 质量越高
	 */
	public static imageCompression(baseImage:string, sz:cc.Size, quality:number, callback:Function) {
		if(cc.sys.isNative || isNil(sz)) {
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
			if(h>sz.height){
				//生成canvas
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				//创建属性节点
				var createw = document.createAttribute('width');
				var createh = document.createAttribute('height');
				h = sz.height;
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
			if (compressionWidth > sz.width){
				PlatformUtil.ClippingImage(compressionResult,sz.width,compressionHeight,quality,function (base64Clipping) {
					callback(base64Clipping);
				});
			} else {
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

	//bufs为二进制流
	public static playAudio(bufs:any) {
		if(cc.sys.isNative) { return; }
		if(isNil(bufs)) { return; }
		var sblod = new Blob([bufs]);
		var audioView = document.getElementById("audioView"); // 设置路径使用jQuery或者直接生成dom都不生效
		if(isNil(audioView)) {
			return;
		}     
		if (window.URL) {
			//@ts-ignore
			audioView.src = window.URL.createObjectURL(sblod);
		} else {
			//@ts-ignore
			audioView.src = sblod;
		}
		//@ts-ignore
		audioView.autoplay = true;//自动播放
	}
	
}


cc["java2js"] = {};

cc["java2js"].handleScreenShot = function(str, imgPath) {
	TimerManager.delayFrame(1, newHandler(function(){
		EventCenter.getInstance().fire(KernelEvent.PIC_LOADED, IMG_BASE64_JPEG+str);
	}, null));
};

cc["java2js"].handleGallery = function(imgStr, imgPath) {
	TimerManager.delayFrame(1, newHandler(function(){
		EventCenter.getInstance().fire(KernelEvent.PIC_LOADED, IMG_BASE64_JPEG+imgStr, imgPath);
	}, null));
}
