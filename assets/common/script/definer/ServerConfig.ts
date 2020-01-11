//服务器列表
// mainHttpUrl: http域名
// leafServer:  游戏连接ip地址/域名
var server_list = {
    publish: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.0.10:9650"
    },
    develop: {
        mainHttpUrl: "",
        leafServer: "ws://172.18.11.133:9650"
    },
    jetten: {
        mainHttpUrl: "",
        leafServer: "ws://172.18.11.216:9650"
    },
    mac: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.0.10:9650"
    }
};

//选定某服
var ServerConfig = server_list.publish;

export default ServerConfig;