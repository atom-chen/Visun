//---------------------------------
// 平台相关接口导出
//---------------------------------
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlatformUtil {
	
	//获取设备ID
	public static getDeviceId() : string 
	{
		return "";
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
	
}
