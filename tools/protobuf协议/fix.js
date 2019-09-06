"use strict";

const fs = require("fs");

var arguments = process.argv.splice(2);
console.log('所传递的参数是：', arguments);

var filepath = "../../assets/common/script/proto/" + arguments[0] + ".js";
const data = fs.readFileSync(filepath, 'utf8').split('\n');
data.splice(3, 1, 'var $protobuf = protobuf;');
fs.writeFileSync(filepath, data.join('\n'), 'utf8');