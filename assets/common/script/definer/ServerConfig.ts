var server_list = {
    test: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        mainUrl: "http://sdk.sihai.com/",
    },
    develop: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        mainUrl: "http://172.18.12.251",
    },
};

var ServerConfig = server_list.test;

export default ServerConfig;