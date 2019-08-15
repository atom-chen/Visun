// 异步读取 readFile
const fs = require("fs");
const hall_rules = require("./rules");

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
	content += "import HttpCore from \"../../../../script/kernel/net/HttpCore\";\n";
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

function gen_rule_file(rules, outPath) {
	var check = {};		//用于查重

	var content = "//---------------------------------------------------------\n";
	content += "// 该文件自动生成，不要手动更改\n"
	content += "//---------------------------------------------------------\n";
	content += "export default ";

	for(var i=0; i<rules.length; i++){
		var info = rules[i];
		if(check[info.name]) {
			console.log("有重复命名：", info.name);
		}
		check[info.name] = info;
	}

	content += JSON.stringify(check, null, "\t");

	fs.writeFileSync(outPath, content);
}

//gen_define_file(hall_rules, "./HallRequest.ts", "HallRequest");

//gen_declare_file(hall_rules, "../../HallRequest.d.ts");


gen_rule_file(hall_rules, "./hall_rules.ts");
