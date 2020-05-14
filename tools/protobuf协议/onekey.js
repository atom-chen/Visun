const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');
const helputil = require("./helputil");
const cfgData = require("./export_cfg");


helputil.createDir("tmps");

var protoFiles = [];



function genProto() {
	var filename = protoFiles.pop();
	
	if(!filename) {  
		console.log("-------完成生成客户端协议-------");
		exec("node gen_code.js", (a,b,c)=>{
			console.log(a,b,c);
		});
		return;
	}

	console.log("生成：", filename);

	var Proto = helputil.getFileName(filename);
	var dependMuds = helputil.fixPackageName(cfgData.protoDir+"/"+filename, Proto);
	exec("pbjs -t json " + cfgData.protoDir+"/"+filename + " -o tmps/" + Proto + ".json", (err, stdout, stderr)=>{
		exec("pbjs -t static-module -w commonjs -o " + cfgData.clientOutDir + Proto + ".js " + cfgData.protoDir + "/" + Proto + ".proto" + " " + "--no-comments", (err1, aaa, bbb)=>{
			helputil.fixClientOutput(Proto, dependMuds);
			genProto();
		});
	});
}


fs.readdir(cfgData.protoDir, null, (err, files)=>{
	if(err) {
		console.log(err);
		return;
	}

	files.forEach( (filename, index) => {
		console.log(index, filename, helputil.getFileName(filename), helputil.isProtoFile(filename));
		if(helputil.isProtoFile(filename)) {
			protoFiles.push(filename);
		}
	});

	console.log("-------开始生成客户端协议-------");
	genProto();
});
