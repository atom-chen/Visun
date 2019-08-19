// 异步读取 readFile
const fs = require("fs");
const rules = require("./http_rules");

console.log(rules);

//-------------------------------------------------------------------------

var check = {};		//用于查重

var content = "//---------------------------------------------------------\n";
content += "// 该文件自动生成，不要手动更改\n"
content += "//---------------------------------------------------------\n";
content += "declare module bb {\ndeclare module NetRequest {" + "\n";
for(var i=0; i<rules.length; i++){
	var info = rules[i];
	if(check[info.name]) {
		console.log("有重复命名：", info.name);
	}
	check[info.name] = true;
	
	content += "export function " + info.name + "( tParams:{ ";
	var arglist = "";
	var params = info.params;
	for(var j=0; j<params.length; j++) {
		if(params[j][2] === 1) {
			arglist += params[j][0] + "?:" + params[j][1];
		}
		else{
			arglist += params[j][0] + ":" + params[j][1];
		}
		if(j<params.length-1){
			arglist += ", ";
		}
	}
	content += arglist;
	content += " }, tAddrParams?:object, unsafeCallback?:(data:any)=>void) : void;\n";
}
content += "}\n}"
fs.writeFileSync("../../http_requests.d.ts", content);

const data = fs.readFileSync("./http_rules.js", 'utf8').split('\n');
data.splice(data.length - 1, 1, 'export default http_rules;');
fs.writeFileSync("../../assets/common/scripts/proto/http_rules.ts", data.join('\n'), 'utf8');