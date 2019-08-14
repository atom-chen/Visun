import { DESIGN_SIZE } from "../../looker/Consts";

//---------------------------------
// 平台相关接口导出
//---------------------------------
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlatformUtil {

	//是否支持webp
	public static isSupportWebp() : boolean
	{
		return true;
	}
	
	//获取设备ID
	public static getDeviceId() : string 
	{
		return "622892525";
	}

	//复制到粘贴板
	public static copy(content:string) 
	{

	}

	//粘贴
	public static paste(content:string) 
	{

	}

	//保存到相册
	public static saveToPhotoAlbum() 
	{

	}

	//打开相册
	public static openGallery() 
	{

	}

	//手动设置横竖屏
	public static setOrientation(bLandspace:boolean) 
	{
		let n:number = bLandspace ? cc.macro.ORIENTATION_LANDSCAPE : cc.macro.ORIENTATION_PORTRAIT;
		cc.view.setOrientation(n);
	}

	//手动对指定节点进行全屏适配（没什么用，统一用adaptScreen方案，然后在编辑器中编辑控件的布局即可）
	public static adaptUI(node:cc.Node) {
		node.setContentSize(cc.view.getFrameSize());
	}

	//全屏适配
	public static adaptScreen() {
		var fs = cc.view.getFrameSize();
		var aa = DESIGN_SIZE.crown;
		var bb = fs.width/fs.height;
		if ( aa === bb ){
			cc.view.setDesignResolutionSize( DESIGN_SIZE.width, DESIGN_SIZE.height, cc.ResolutionPolicy.SHOW_ALL);
		}
		else if (aa > bb) {
			cc.view.setDesignResolutionSize( DESIGN_SIZE.width, fs.height, cc.ResolutionPolicy.FIXED_WIDTH);
		}
		else {
			cc.view.setDesignResolutionSize( fs.width, DESIGN_SIZE.height, cc.ResolutionPolicy.FIXED_HEIGHT);
		}
	}

	//全屏适配
	public static adaptScreen2(){
		var fs = cc.view.getFrameSize();
		var scaleX = fs.width / DESIGN_SIZE.width;
		var scaleY = fs.height / DESIGN_SIZE.height;
		var fitScale = Math.min(scaleX, scaleY);
		var width = fs.width / fitScale;
		var height = fs.height / fitScale;
		cc.view.setDesignResolutionSize( width, height, cc.ResolutionPolicy.SHOW_ALL);
	}

	//进入全屏
	public static setFullScreen(bFull:boolean) {
		if(cc.sys.isNative){ return; }
		if(bFull) {
			var de = document.documentElement;
			if (de.requestFullscreen) {
				de.requestFullscreen();
			} else if (de["mozRequestFullScreen"]) {
				de["mozRequestFullScreen"]();
			} else if (de["webkitRequestFullScreen"]) {
				de["webkitRequestFullScreen"]();
			}
		}
		else {
			var dc = document;
			if (dc.exitFullscreen) {
				dc.exitFullscreen();
			} else if (dc["mozCancelFullScreen"]) {
				dc["mozCancelFullScreen"]();
			} else if (dc["webkitCancelFullScreen"]) {
				dc["webkitCancelFullScreen"]();
			}
		}
	}
	
}
