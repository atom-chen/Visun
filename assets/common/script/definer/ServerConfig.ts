var server_list = {
    test: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        loginServer: "http://sdk.sihai.com/",
        centerServer: "ws://http://center.sihai.com/sdk",
    },

    local1: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        loginServer: "http://172.18.12.251",
        centerServer: "ws://172.18.12.251:9900/sdk",
    },

    local2: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        loginServer: "http://172.18.11.82",
        centerServer: "ws://172.18.11.82:9900/sdk",
    },

    localBain: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        loginServer : "http://172.18.11.21",
        centerServer : "ws://172.18.11.21:9900/sdk",
    },

    localAizen: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        loginServer : "172.18.11.8:8007",
        centerServer : "ws://172.18.11.8:8007/sdk",
    }
};

var ServerConfig = server_list.test;

export default ServerConfig;