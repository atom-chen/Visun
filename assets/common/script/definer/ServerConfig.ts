var server_list = {
    publish: {
        mainHttpUrl: "http://sdk.sihai.com/",
        leafServer: "ws://172.18.11.133:9650"
    },
    develop: {
        mainHttpUrl: "http://sdk.sihai.com/",
        leafServer: "ws://172.18.11.133:9650"
    },
    jetten: {
        mainHttpUrl: "http://sdk.sihai.com/",
        leafServer: "ws://172.18.11.216:9650"
    },
    mac: {
        mainHttpUrl: "http://sdk.sihai.com/",
        leafServer: "ws://localhost:9650"
    }
};

var ServerConfig = server_list.mac;

export default ServerConfig;