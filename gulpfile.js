
var gulp = require('gulp');
const fs = require("fs");


gulp.task("pub", ["one", "two"], 
	function()
	{
		console.log("a");
	}
)

gulp.task("one",  
	function()
	{
		console.log("a");
	}
)

gulp.task("two", [], 
	function()
	{
		console.log("a");
	}
)

// gulp.task("pub", [], 
// 	function()
// 	{
// 		var arguments = process.argv.splice(2);
// 		console.log('所传递的参数是：', arguments);
// 		var filepath = "../../assets/common/script/proto/" + arguments[0] + ".js";
// 		const data = fs.readFileSync(filepath, 'utf8').split('\n');
// 		for(var i=0, len=data.length; i<len; i++) {
// 		if(data[i].match("require") && data[i].match("protobuf")){
// 			data.splice(i, 1, 'var $protobuf = protobuf;');
// 				break;
// 			}
// 		}
// 		fs.writeFileSync(filepath, data.join('\n'), 'utf8');
// 	}
// )

