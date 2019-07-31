//---------------------------------
// 常量
//---------------------------------
export const MAIN_URL:string = "http://gameser.lg98.tech";

export enum LAYER {
	Panel = 0,
	Popup,
	Dialog,
	Tips,
	Loading,
}

export enum HOT_STATE {
	READY = 0,
	UPENGINE = 1,		//下载引擎包
	CHECKING = 2,		//检查更新
	UPDATING = 3,		//下载资源
	DOWNOVER = 4,		//下载完毕
	UNZIPING = 5,		//解压资源
	SUCCESS = 6,		//更新成功
	FAIL = 7,			//更新失败
	LOADINGRES = 8,		//加载资源
}
