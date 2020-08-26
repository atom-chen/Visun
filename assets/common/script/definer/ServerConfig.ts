//服务器列表
// mainHttpUrl: http域名
// leafServer:  游戏连接ip地址/域名
var server_list = {
    publish: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.0.108:9650",
        chatServer: ""
    },
    develop: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.1.108:9650",
        chatServer: ""
    },
    jetten: {
        mainHttpUrl: "",
        leafServer: "ws://127.0.0.1:9650",
        chatServer: ""
    },
    mac: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.43.7:9650",
        chatServer: ""
    }
};

//选定某服
var ServerConfig = server_list.develop;

export default ServerConfig;