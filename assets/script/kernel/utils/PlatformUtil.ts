import { DESIGN_SIZE } from "../../looker/Consts";

//---------------------------------
// 平台相关接口导出
//---------------------------------
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlatformUtil {
	
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
	
}
