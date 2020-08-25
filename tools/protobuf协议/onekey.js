const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');
const helputil = require("./helputil");
const cfgData = require("./export_cfg");
const genDeclare = require("./genDeclare");


helputil.createDir("tmps");

var protoFiles = [];



function genProto() {
	var filename = protoFiles.pop();
	
	if(!filename) {  
		console.log("-------完成生成客户端协议-------");
		exec("node gen_code.js", (err3, stdout3, stderr3)=>{
			console.log(err3, stdout3, stderr3);
			genDeclare();
		});
		return;
	}

	console.log("生成：", filename);

	var Proto = helputil.getFileName(filename);
	var dependMuds = helputil.fixPackageName(cfgData.protoDir+"/"+filename, Proto);
	exec("pbjs -t json " + cfgData.protoDir+"/"+filename + " -o tmps/" + Proto + ".json", 
	(err1, stdout1, stderr1)=>{
		exec("pbjs -t static-module -w commonjs -o " + cfgData.clientOutDir + Proto + ".js " + cfgData.protoDir + "/" + Proto + ".proto" + " " + "--no-comments", 
		(err2, stdout2, stderr2)=>{
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
