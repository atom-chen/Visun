//---------------------------------
// http/socket/websocket请求句柄
// 主要为了统一网络层请求的形式为：NetRequest.req_xxxxxxx(arg)
// 开发阶段可以根据协议规则用工具生成具体的函数代码，方便智能提示。
//---------------------------------
var NetRequest:any;
NetRequest = {};
export default NetRequest;