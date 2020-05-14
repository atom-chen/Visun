var protoDir = "in";

var serverOutDir = "E:/Go_PRJ/server";

var clientOutDir = "../../assets/common/script/proto/";

//要生成的pb文件
var pbfiles = [
	{ 
		name:"login", 
		router:"login", 
	},
	{ 
		name:"chat", 
		router:"chat",
	},
	{ 
		name:"luck", 
		router:"chat",
	},
	{ 
		name:"comand", 
		router:"game",
	},
	{ 
		name:"gamecomm", 
		router:"game",
	},
	{ 
		name:"baccarat", 
		router:"game",
	},
	{ 
		name:"cowcow", 
		router:"game",
	},
	{ 
		name:"landLords", 
		router:"game",
	},
	{ 
		name:"mahjong", 
		router:"game",
	},
	{ 
		name:"fishLord", 
		router:"game",
	},
]

module.exports = {
	protoDir: protoDir,
	serverOutDir: serverOutDir,
	clientOutDir: clientOutDir,
	pbfiles: pbfiles,
}