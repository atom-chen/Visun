// 异步读取 readFile
const fs = require("fs");
const hall_rules = require("./http_rules");

//-------------------------------------------------------------------------

function gen_declare_file(rules, outPath) {
	var check = {};		//用于查重

	var content = "//---------------------------------------------------------\n";
	content += "// 该文件自动生成，不要手动更改\n"
	content += "//---------------------------------------------------------\n";
	//content += "declare module bb {\n";
	content += "declare module NetRequest {" + "\n";

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
		content += " }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void;\n";
	}

	content += "}\n";
	//content += "}";
	fs.writeFileSync(outPath, content);
}

function gen_define_file(rules, outPath, clsName) {
	var check = {};		//用于查重

	var content = "//---------------------------------------------------------\n";
	content += "// 该文件自动生成，不要手动更改\n"
	content += "//---------------------------------------------------------\n";
	content += "import HttpCore from \"../../../kernel/net/HttpCore\";\n\n";
	content += "export default class " + clsName +"{" + "\n";

	for(var i=0; i<rules.length; i++){
		var info = rules[i];
		if(check[info.name]) {
			console.log("有重复命名：", info.name);
		}
		check[info.name] = true;
		
		content += "public static " + info.name + "( tParams:{ ";
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
		content += " }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void {";
		content += " HttpCore.request(" + "'" + info.name + "'"+ ", tParams, tAddrParams, unsafeCallback); ";
		content += "}\n";
	}

	content += "}\n";
	fs.writeFileSync(outPath, content);
}

function gen_rule_file(srcFile, outPath) {
	const data = fs.readFileSync(srcFile, 'utf8').split('\n');
	data.splice(data.length - 1, 1, 'export default http_rules;');
	fs.writeFileSync(outPath, data.join('\n'), 'utf8');
}

//gen_declare_file(hall_rules, "../../HallRequest.d.ts");
gen_rule_file("./http_rules.js", "../../assets/common/script/proto/http_rules.ts");
gen_define_file(hall_rules, "../../assets/common/script/proto/HallRequest.ts", "HallRequest");
