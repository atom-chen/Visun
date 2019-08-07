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
	public static setOrientation() 
	{

	}

	public static adaptScreen() {
		var fs = cc.view.getFrameSize();
		var aa = 1280/720;
		var bb = fs.width/fs.height;
		if ( aa === bb ){
			cc.view.setDesignResolutionSize( 1280,720, cc.ResolutionPolicy.SHOW_ALL);
		}
		else if (aa > bb) {
			cc.view.setDesignResolutionSize( 1280,fs.height, cc.ResolutionPolicy.FIXED_WIDTH);
		}
		else {
			cc.view.setDesignResolutionSize( fs.width,720, cc.ResolutionPolicy.FIXED_HEIGHT);
		}
	}
	
}
