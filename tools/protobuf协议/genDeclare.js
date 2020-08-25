const fs = require("fs");
const { exec } = require('child_process');
const helputil = require("./helputil");
const cfgData = require("./export_cfg");


var protoFiles = [];


function genProto() {
	var filename = protoFiles.pop();
	
	if(!filename) {  
		console.log("-------完成生成客户端声明-------");
		return;
	}

	console.log("生成：", filename);

	var Proto = helputil.getFileName(filename);
	//var dependMuds = helputil.fixPackageName(cfgData.protoDir+"/"+filename, Proto);
	exec("pbjs -t static-module -w commonjs -o tmps/" + Proto + ".js " + cfgData.protoDir + "/" + Proto + ".proto", 
	(err1, aaa1, bbb1)=>{
		console.log(err1, aaa1, bbb1);
		exec("pbts -o ../../declares/" + Proto + ".d.ts tmps/" + Proto + ".js", 
		(err2,bbb2,ccc2)=>{
			console.log(err2,bbb2,ccc2);
		})
		genProto();
	});
}

function doGenerate() {
	helputil.createDir("tmps");

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
	
		console.log("-------开始生成客户端声明-------");
		genProto();
	});
}

module.exports = doGenerate;
