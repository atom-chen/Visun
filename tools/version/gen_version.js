var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var hot_cfg = require("./hot_cfg");
const { exec } = require('child_process');
const os = require('os');
const { stdout } = require('process');

//接口：遍历目录
function readDirectory (dir, obj, rootSrc) {
	var stat = fs.statSync(dir);
	if (!stat.isDirectory()) {
		return;
	}
	var subpaths = fs.readdirSync(dir), subpath, size, md5, compressed, relative;
	for (var i = 0; i < subpaths.length; ++i) {
		if (subpaths[i][0] === '.') {
			continue;
		}
		subpath = path.join(dir, subpaths[i]);
		stat = fs.statSync(subpath);
		if (stat.isDirectory()) {
			readDirectory(subpath, obj, rootSrc);
		}
		else if (stat.isFile()) {
			// Size in Bytes
			size = stat['size'];
			md5 = crypto.createHash('md5').update(fs.readFileSync(subpath, 'binary')).digest('hex');
			compressed = path.extname(subpath).toLowerCase() === '.zip';

			relative = path.relative(rootSrc, subpath);
			relative = relative.replace(/\\/g, '/');
			relative = encodeURI(relative);
			obj[relative] = {
				'size' : size,
				'md5' : md5
			};
			if (compressed) {
				obj[relative].compressed = true;
			}
		}
	}
}

//接口：创建文件夹
function createDirectory(path) {
	try {
		fs.mkdirSync(path);
	} catch(e) {
		if ( e.code != 'EEXIST' ) throw e;
	}
}

//接口：删除文件夹
function deleteDirectory(dir) {
	if (fs.existsSync(dir) == true) {
		var files = fs.readdirSync(dir);
		files.forEach(function(item){
			var item_path = path.join(dir, item);
		   // console.log(item_path);
			if (fs.statSync(item_path).isDirectory()) {
				deleteDirectory(item_path);
			}
			else {
				fs.unlinkSync(item_path);
			}
		});
		fs.rmdirSync(dir);
	}
}

//接口：拷贝文件夹
function copyDirectory(fromDir, toDir) {
	if (fs.existsSync(toDir) == false) {
		fs.mkdirSync(toDir);
	}
	if (fs.existsSync(fromDir) == false) {
		return false;
	}
	// console.log("fromDir:" + fromDir + ", toDir:" + toDir);
	// 拷贝新的内容进去
	var dirs = fs.readdirSync(fromDir);
	dirs.forEach(function(item){
		var item_path = path.join(fromDir, item);
		var temp = fs.statSync(item_path);
		if (temp.isFile()) { // 是文件
		   // console.log("Item Is File:" + item);
			fs.copyFileSync(item_path, path.join(toDir, item));
		} else if (temp.isDirectory()){ // 是目录
			// console.log("Item Is Directory:" + item);
			copyDirectory(item_path, path.join(toDir, item));
		}
	});
}


//生产热更包
function genHotPackage() {
	console.log(hot_cfg);
	
	var manifest = {
		packageUrl: hot_cfg.packageUrl,
		remoteManifestUrl: hot_cfg.packageUrl + 'project.manifest',
		remoteVersionUrl: hot_cfg.packageUrl + 'version.manifest',
		version: hot_cfg.version,
		assets: {},
		searchPaths: []
	};
	var g_dest = hot_cfg.dstDir;	//输出目录
	var g_src = hot_cfg.srcDir;		//输入目录
	
	//先清空输出目录
	deleteDirectory(g_dest);
	createDirectory(g_dest);
	
	//
	copyDirectory(path.join(g_src, 'src'), path.join(g_dest, 'src'));
	copyDirectory(path.join(g_src, 'res'), path.join(g_dest, 'res'));
	
	// 遍历src和res文件夹，生成manifest上的assets列表
	// todo: 暂时没有做源码和资源的加密处理，需加上
	readDirectory(path.join(g_src, 'src'), manifest.assets, g_src);
	readDirectory(path.join(g_src, 'res'), manifest.assets, g_src);
	
	// 生成 project.manifest 和 version.manifest 文件
	var destManifest = path.join(g_dest, 'project.manifest');
	var destVersion = path.join(g_dest, 'version.manifest');
	
	var strManifest = JSON.stringify(manifest);
	fs.writeFile(destManifest, strManifest, (err) => {
		if (err) throw err;
		console.log('Manifest successfully generated');
	});
	fs.writeFile(path.join("../../assets/resources/launcher/version", "project.manifest"), strManifest, (err1) => {
		if(err1) throw err1;
		console.log("succ project.manifest");
	})
	
	delete manifest.assets;
	delete manifest.searchPaths;
	var strVersion = JSON.stringify(manifest)
	fs.writeFile(destVersion, strVersion, (err) => {
		if (err) throw err;
		console.log('Version successfully generated');
	});
	fs.writeFile(path.join("../../assets/resources/launcher/version", "version.manifest"), strVersion, (err2) => {
		if (err2) throw err2;
		console.log('succ version.manifest');
	});
}

//------------------------------------------------------------------------

var sysType = os.type();
console.log("当前平台: ", sysType);

if(sysType == "Darwin") {

	var willBuild = false;
	if(willBuild) {
		var projPath = "/users/liuhaopeng/Documents/Visun/";
		exec("/Applications/CocosCreator/Creator/2.3.4/CocosCreator.app/Contents/MacOS/CocosCreator --path " + projPath + " --build \"platform=android;debug=true\"",
		(err, std_out, std_err)=>{
			if(err) {
				console.log("------构建失败------");
				console.log(std_out);
				console.log("error: ", std_err);
			} else {
				console.log("------构建成功------");
				console.log(std_out);
				console.log("error: ", std_err);
				genHotPackage();
			}
		});
	} else {
		genHotPackage();
	}
	
}
