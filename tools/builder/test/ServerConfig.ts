var server_list = {

    test: {
        gateServer: "https://tp2.game-gate.sihai.com/server/gate/ip",
        gateWsAddr: "wss://api.chesssh.com",
    },

    test2: {
        gateServer: "http://172.18.12.251:8001/server/gate/ip",
        gateWsAddr: "ws://172.18.12.251:8007",
    },

    cabin: {
        gateServer: "http://172.18.11.8:8001/server/gate/ip",
        gateWsAddr: "ws://172.18.11.8:8007",
    },

};

for (var k in server_list) {
    server_list[k].branch_name = k;
}

var ServerConfig = server_list.test;
console.log(ServerConfig);

export default ServerConfig;