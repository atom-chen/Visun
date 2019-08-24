//---------------------------------
// 平台相关接口导出
//---------------------------------
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
	
}
