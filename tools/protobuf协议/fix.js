

const fs = require("fs");

var arguments = process.argv.splice(2);
console.log('所传递的参数是：', arguments);
var protoName = arguments[0];

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