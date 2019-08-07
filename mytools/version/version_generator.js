var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

//定义manifest默认值
var manifest = {
	// packageUrl: 'http://localhost/visun/assets/',
	// remoteManifestUrl: 'http://localhost/visun/assets/project.manifest',
	// remoteVersionUrl: 'http://localhost/visun/assets/version.manifest',
	// version: '1.0',
	assets: {},
	searchPaths: []
};

var g_dest = './assets/';     //输出目录
var g_src = './pack/';        //输入目录

// 解析命令行参数
function parseArgv(argv) {
	var i = 2;
	while ( i < argv.length) {
		var arg = argv[i];
	
		switch (arg) {
		case '--url' :
		case '-u' :
			var url = argv[i+1];
			manifest.packageUrl = url;
			manifest.remoteManifestUrl = url + 'project.manifest';
			manifest.remoteVersionUrl = url + 'version.manifest';
			i += 2;
			break;
		case '--version' :
		case '-v' :
			manifest.version = argv[i+1];
			i += 2;
			break;
		case '--src' :
		case '-s' :
			g_src = argv[i+1];
			i += 2;
			break;
		case '--dest' :
		case '-d' :
			g_dest = argv[i+1];
			i += 2;
			break;
		default :
			i++;
			break;
		}
	}
}

//接口：遍历目录
function readDir (dir, obj) {
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
			readDir(subpath, obj);
		}
		else if (stat.isFile()) {
			// Size in Bytes
			size = stat['size'];
			md5 = crypto.createHash('md5').update(fs.readFileSync(subpath, 'binary')).digest('hex');
			compressed = path.extname(subpath).toLowerCase() === '.zip';

			relative = path.relative(g_src, subpath);
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
var mkdirSync = function (path) {
	try {
		fs.mkdirSync(path);
	} catch(e) {
		if ( e.code != 'EEXIST' ) throw e;
	}
}

//接口：拷贝文件夹
function copyDirectory(fromDir, toDir) {
	if (IsFileExist(toDir) == false) {
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

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

parseArgv(process.argv);

// 遍历src和res文件夹，生成manifest的assets列表
// todo: 暂时没有做源码和资源的加密处理，需加上
readDir(path.join(g_src, 'src'), manifest.assets);
readDir(path.join(g_src, 'res'), manifest.assets);

// 生成 project.manifest 和 version.manifest 文件
var destManifest = path.join(g_dest, 'project.manifest');
var destVersion = path.join(g_dest, 'version.manifest');

mkdirSync(g_dest);

fs.writeFile(destManifest, JSON.stringify(manifest), (err) => {
	if (err) throw err;
	console.log('Manifest successfully generated');
});

delete manifest.assets;
delete manifest.searchPaths;
fs.writeFile(destVersion, JSON.stringify(manifest), (err) => {
	if (err) throw err;
	console.log('Version successfully generated');
});
