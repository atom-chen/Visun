const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');
const cfgData = require("./export_cfg");

function write2file(filepath, str) {
	try {
		fs.writeFileSync(filepath, str, 'utf8');
	} catch (err) {
		console.log(err);
	}
}

//将proto文件filepath的包名修改为wantName
function fixPackageName(filepath, wantName) {
	const data = fs.readFileSync(filepath, 'utf8').split('\n');

	var pkgName = "";
	var needWrite = false;

	for(var i=0, len=data.length; i<len; i++) {
		var str = data[i];
		str = str.replace(';', ' ');  //去分号
		var arr = str.split(/\s+/); 	//去空白字符

		if(arr[0].match("//") || (arr[0]=="" && arr[1] && arr[1].match("//"))){
			//是一个注释
		} else {
			if( arr[0]=="package" && arr[1].indexOf("\.")<0 ) {
				pkgName = arr[1];
				if(pkgName !== wantName) {
					data[i] = "package "+wantName+";";
					needWrite = true;
				}
				break;
			}
			else if( arr[0]=="" && arr[1]=="package" && arr[2].indexOf("\.")<0 ){
				pkgName = arr[2];
				if(pkgName !== wantName) {
					data[i] = "package "+wantName+";";
					needWrite = true;
				}
				break;
			}
		}
	}

	if(needWrite) {
		console.log("package name: ", pkgName, "  修改为：", wantName);
		fs.writeFileSync(filepath, data.join('\n'), 'utf8');
	} else {
		console.log("package name: "+pkgName, "filename: "+wantName);
	}
}

function createDir(dirName) {
	if(!fs.existsSync(dirName)) {
		fs.mkdirSync(dirName);
	}
}

//获取文件名字
//例如：传入"projects/client1/abcefg.txt"，将返回"abcefg"
function getFileName(pathstr) {
	var pt = pathstr.indexOf("\.");
	return pathstr.slice(0, pt);
}

//判断文件后缀是否为"proto"
function isProtoFile(pathstr) {
	if(pathstr.match("proto")) {
		return true;
	} else {
		return false;
	}
}

function fixClientOutput(protoName) {
	var filepath = cfgData.clientOutDir + protoName + ".js";
	const data = fs.readFileSync(filepath, 'utf8').split('\n');

	for(var i=0, len=data.length; i<len; i++) {
		if(data[i].match("require") && data[i].match("protobuf")){
			data.splice(i, 1, 'var $protobuf = protobuf;');
			break;
		}
	}

	if(protoName != "gamecomm") {
		var flag = false;
		for(var from=0, len=data.length; from<len; from++) {
			if(data[from].match("root.gamecomm = ") && data[from].match("function")){
				console.log("第"+from+"行发现累赘import: "+data[from]);
				data.splice(from);
				flag = true;
				break;
			}
		}
		if(flag) {
			data.push("module.exports = $root;");
		}
	}

	fs.writeFileSync(filepath, data.join('\n'), 'utf8');
}

//检查import关系
function getImportMud(data) {
	var tmp = null;
	var len = data.length;
	if(len > 10) { len = 10 }
	for(var n=0; n<len; n++) {
		if(data[n].match("import") && !data[n].match("//")) {
			tmp = data[n].slice(0, data[n].indexOf('\.'));
			tmp = tmp.slice(tmp.indexOf("\"")+1, tmp.length);
			break;
		}
	}
	return tmp;
}

function getPackageName(data) {
	for(var i=0, len=data.length; i<len; i++) {
		var str = data[i];
		str = str.replace(';', ' ');  //去分号
		var arr = str.split(/\s+/); 	//去空白字符
		if(arr[0].match("//") || (arr[0]=="" && arr[1] && arr[1].match("//"))){
			//是一个注释
		}
		else {
			//解析 "message Request"
			if( arr[0]=="package" && arr[1].indexOf("\.")<0 ) {
				return arr[1];
			}
			else if( arr[0]=="" && arr[1]=="package" && arr[2].indexOf("\.")<0 ){
				return arr[2];
			}
		}
	}
	return null;
}


module.exports = {
	write2file: write2file,
	fixPackageName: fixPackageName,
	getFileName: getFileName,
	isProtoFile: isProtoFile,
	fixClientOutput: fixClientOutput,
	createDir: createDir,
	getImportMud: getImportMud,
	getPackageName: getPackageName
}