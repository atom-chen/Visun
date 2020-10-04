//服务器列表
// mainHttpUrl: http域名
// leafServer:  游戏连接ip地址/域名
var hotdominList = [
    "http://192.168.1.101:8081/hotupdate/fingerqp/",
];

var server_list = {
    publish: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.0.108:9950",
        chatServer: "",
        hotdomins: hotdominList,
    },
    develop: {
        mainHttpUrl: "",
        leafServer: "ws://8.129.175.179:9950",
        chatServer: "",
        hotdomins: hotdominList,
    },
    jetten: {
        mainHttpUrl: "",
        leafServer: "ws://127.0.0.1:9950",
        chatServer: "",
        hotdomins: hotdominList,
    },
    mac: {
        mainHttpUrl: "",
        leafServer: "ws://192.168.1.100:9950",
        chatServer: "",
        hotdomins: hotdominList,
    }
};

//选定某服
var ServerConfig = server_list.jetten;

export default ServerConfig;