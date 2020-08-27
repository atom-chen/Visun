//-------------------------------------
//-- 屏幕适配
//-------------------------------------
import { DESIGN_SIZE } from "../basic/defines/KernelDefine";


if(CC_EDITOR) {
	console.log("------editor------");
}

//切后台回来时布局错乱了，暂时这样处理
if(cc.sys.isBrowser) {
	console.log("------browser------");
	// window["__origin_onresize"] = window.onresize;
	// window.onresize = function(this: any, ev: any) {
	// //	window["__origin_onresize"](...args);
	// 	Adaptor.adaptScreen();
	// }
}



export default class Adaptor {

	private static s_is_full_screen:boolean = false;

	//全屏适配
	//调用时机：在监听到窗口大小变化时 + 场景onLoad时
	//场景onLoad时的调用是因为场景初始化时是用编辑器里的设计尺寸布局的，所以需要在调用一次重新布局
	//如果要优化，最简单的就是，采用全局设计尺寸的概念，忽略编辑器的设计尺寸，需要改引擎层
	public static adaptScreen() : void
	{
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

	//与adaptScreen是一样的
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
	public static isFullScreen() : boolean
	{
		return this.s_is_full_screen;
	}
	
	public static setFullScreen(bFull:boolean) : void
	{
		if(cc.sys.isNative){ return; }
		if(bFull===Adaptor.s_is_full_screen){
			return;
		}
		
		Adaptor.s_is_full_screen = bFull;

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