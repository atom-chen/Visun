var protoDir = "in";

var serverOutDir = "E:/go_prj/go_server";

var clientOutDir = "../../assets/common/script/proto/";

//要生成的pb文件
var pbfiles = [
	{ 
		name:"login",
		router:"login",
		channel:"game"
	},
	{ 
		name:"comand", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"gamecomm", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"baccarat", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"cowcow", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"landLords", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"mahjong", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"fishLord", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"brcowcow", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"zhajinhua", 
		router:"game",
		channel:"game"
	},
	{ 
		name:"brtoubao", 
		router:"game",
		channel:"game"
	},
]

module.exports = {
	protoDir: protoDir,
	serverOutDir: serverOutDir,
	clientOutDir: clientOutDir,
	pbfiles: pbfiles,
}