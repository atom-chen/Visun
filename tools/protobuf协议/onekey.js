const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');

function write2file(filepath, str) {
	try {
		fs.writeFileSync(filepath, str, 'utf8');
	} catch (err) {
		console.log(err);
	}
}

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

function getFileName(pathstr) {
	var pt = pathstr.indexOf("\.");
	return pathstr.slice(0, pt);
}

function isProtoFile(pathstr) {
	if(pathstr.match("proto")) {
		return true;
	} else {
		return false;
	}
}

function fix(protoName) {
	var filepath = "../../assets/common/script/proto/" + protoName + ".js";
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

//------------------------------------------------------------
if(!fs.existsSync("tmps")) {
	fs.mkdirSync("tmps");
}


const inputdir = "in";
var protoFiles = [];



function genProto() {
	var filename = protoFiles.pop();
	
	if(!filename) {  
		console.log("--------------完成生成--------------");
		exec("node gen_code.js", (a,b, c)=>{
			console.log(a,b,c);
		});
		return;
	}

	console.log("生成：", filename);

	var Proto = getFileName(filename);
	fixPackageName(inputdir+"/"+filename, Proto);
	exec("pbjs -t json " + inputdir+"/"+filename + " -o tmps/" + Proto + ".json", (err, stdout, stderr)=>{
		exec("pbjs -t static-module -w commonjs -o ../../assets/common/script/proto/" + Proto + ".js in/" + Proto + ".proto" + " " + "--no-comments", (err1, aaa, bbb)=>{
			fix(Proto);
			genProto();
		});
	});
}


fs.readdir(inputdir, null, (err, files)=>{
	if(err) {
		console.log(err);
		return;
	}

	files.forEach( (filename, index) => {
		console.log(index, filename, getFileName(filename), isProtoFile(filename));
		if(isProtoFile(filename)) {
			protoFiles.push(filename);
		}
	});

	console.log("--------------开始生成--------------");
	genProto();
});
