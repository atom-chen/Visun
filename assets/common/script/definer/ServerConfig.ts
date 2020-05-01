//服务器列表
// mainHttpUrl: http域名
// leafServer:  游戏连接ip地址/域名
var server_list = {
    publish: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.0.108:9650"
    },
    develop: {
        mainHttpUrl: "",
        leafServer: "ws://172.18.11.133:9650"
    },
    jetten: {
        mainHttpUrl: "",
        leafServer: "ws://127.0.0.1:9650"
    },
    mac: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.58.126:9650"
    }
};

//选定某服
var ServerConfig = server_list.jetten;

export default ServerConfig;