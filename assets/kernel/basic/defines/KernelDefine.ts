//---------------------------------
// 常量
//---------------------------------
export const DESIGN_SIZE = {
	width : 1280,
	height : 720,
	crown : 1280/720
}

export enum LayerDefine {
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

export enum ConnState {
	unconnect = 0, 	//尚未连接
	connecting,		//正在连接
	connectsucc,	//连接成功
	connectfail,	//连接失败

	reconnecting,	//正在重连
	reconnectsucc,	//重连成功
	reconnectfail,	//重连失败
}

export enum ProcessorType {
	Json,
	T4C4Protobuff,
	LeafTcp,
	LeafWs,
	Stream
}

export enum ChannelType {
	Ws,
	Tcp,
	Udp,
	Http,
}

export enum HttpResult {
	Succ = 0,
	Timeout,
	Aborted,
	Error
}

export enum BEHAVIOR_STATE {
	READY = 1,
	RUNNING,
	SUCC,
	FAIL,
	STOPED
};
