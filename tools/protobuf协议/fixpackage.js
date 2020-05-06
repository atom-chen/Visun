

const fs = require("fs");

var arguments = process.argv.splice(2);
var pbfilename = arguments[0];
console.log('所传递的参数是：', arguments);

function getPackageName(data) {
	for(var i=0, len=data.length; i<len; i++) {
		var str = data[i];
		str = str.replace(';', ' ');  //去分号
		var arr = str.split(/\s+/); 	//去空白字符
		if(arr[0].match("//") || (arr[0]=="" && arr[1] && arr[1].match("//"))){
			//是一个注释
		}
		else {
			if( arr[0]=="package" && arr[1].indexOf("\.")<0 ) {
				data[i] = "package "+pbfilename+";";
				return arr[1];
			}
			else if( arr[0]=="" && arr[1]=="package" && arr[2].indexOf("\.")<0 ){
				data[i] = "package "+pbfilename+";";
				return arr[2];
			}
		}
	}
	return null;
}

var filepath = "in/" + pbfilename + ".proto";
const data = fs.readFileSync(filepath, 'utf8').split('\n');

var mudname = getPackageName(data);
console.log("package name: ", mudname, "  修改为：", pbfilename);

fs.writeFileSync(filepath, data.join('\n'), 'utf8');