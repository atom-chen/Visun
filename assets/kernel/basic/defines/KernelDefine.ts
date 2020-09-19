//---------------------------------
// 常量
//---------------------------------

export const DESIGN_VIEW_SIZE = {
	width : 1334,
	height : 750
}

// UI设计尺寸
export const DESIGN_SIZE = {
	width : 1334,
	height : 750,
	crown : 1334/750
}

// UI层次
export enum LayerDefine {
	Panel = 0,
	Popup,
	Dialog,
	Tips,
	Loading,
}

// 热更状态
export enum HOT_STATE {
	READY = 0,
	UPENGINE = 1,		//下载引擎包
	UPDATING = 2,		//下载资源
	DOWNOVER = 3,		//下载完毕
	UNZIPING = 4,		//解压资源
	SUCCESS = 5,		//更新成功
	FAIL = 6,			//更新失败
	LOADINGRES = 7,		//加载资源
}

// 网络连接状态
export enum ConnState {
	unconnect = 0, 	//尚未连接
	
	connecting,		//正在连接
	connectsucc,	//连接成功
	connectfail,	//连接失败

	reconnecting,	//正在重连
	reconnectsucc,	//重连成功
	reconnectfail,	//重连失败
}

// 网络包编解码格式
export enum ProcessorType {
	Json,
	T4C4Protobuff,
	LeafTcp,
	LeafWs,
	Stream
}

// 网络通道类型
export enum ChannelType {
	Ws,
	Tcp,
	Udp,
	Http,
}

// HTTP响应状态
export enum HttpResult {
	Idle,
	Working,
	Succ,
	Timeout,
	Aborted,
	Error
}

// 行为树状态
export enum BEHAVIOR_STATE {
	READY = 1,
	RUNNING,
	SUCC,
	FAIL,
	STOPED
};

export const IMG_BASE64_PNG = "data:image/jpeg;base64,";
export const IMG_BASE64_JPEG = "data:image/jpeg;base64,";

export enum FILE_TYPE {
	Image,
	Video,
	Other,
}
