var server_list = {
    publish: {
        gateServer: "http://game-cluster.sihai.com/server/gate/ip",
        mainHttpUrl: "http://sdk.sihai.com/",
        leafServer: "ws://127.0.0.1:3653"
    },
    develop: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        mainHttpUrl: "http://172.18.12.251",
        leafServer: "ws://127.0.0.1:9650"
    },
    jetten: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        mainHttpUrl: "http://172.18.12.251",
        leafServer: "ws://172.18.11.216:9650"
    },
};

var ServerConfig = server_list.develop;

export default ServerConfig;