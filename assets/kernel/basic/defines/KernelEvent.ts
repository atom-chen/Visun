//---------------------------------
// 事件名
//---------------------------------
var KernelEvent = {
	EnterBackground: "EnterBackground",
	EnterForground: "EnterForground",
	keyboard_esc : "keyboard_esc",
	recv_proto : "recv_proto",
	NET_STATE : "NET_STATE",
	WS_ERROR_CODE : "WS_ERROR_CODE",
	HTTP_ERROR_CODE : "HTTP_ERROR_CODE",

	SCENE_BEFORE_SWITCH : "SCENE_BEFORE_SWITCH",
	SCENE_AFTER_SWITCH : "SCENE_AFTER_SWITCH",
	UI_LOADING_BEGIN : "UI_LOADING_BEGIN",
	UI_LOADING_PROGRESS : "UI_LOADING_PROGRESS",
	UI_LOADING_FINISH : "UI_LOADING_FINISH",
	
	PIC_LOADED : "PIC_LOADED"
}

export default KernelEvent;
