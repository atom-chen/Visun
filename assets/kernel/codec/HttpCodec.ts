//---------------------------------
// Json格式数据编码解码
//---------------------------------
import ICodec from "./ICodec";

export default class HttpCodec implements ICodec {
    
    //将表形式的数据转换成 "k1=v1&k2=v2&k3=v3" 格式的字符串
	encode(param:any, rule:any) : string
	{
		if(param === undefined || param === null) {
			return null;
		}
		if( typeof(param) === typeof("") ){
			return param;
		}
	
		var paramStr = "";
	
		if(rule) {
			if(param) {
				for(var j = 0,len = rule.length; j < len; j++) {
					var k = rule[j][0];
					var wantType = rule[j][1];
					if(wantType && wantType != "" && typeof(param[k]) != wantType) {
						if( rule[j][2]===1 && (param[k]==undefined || param[k]==null) ) {
	
						} 
						else {
							cc.error("参数类型错误", k, wantType, typeof(param[k]));
							if(paramStr != "") { paramStr += "&" }
							paramStr += k + "=" + param[k];
						}
					} 
					else {
						if(paramStr != "") { paramStr += "&" }
						paramStr += k + "=" + param[k];
					}
				}
			}
			else {
				if(rule.length > 0){
					cc.error("参数不符合规则");
				}
			}
		}
		else {
			if(param) {
				for (var kk in param) {
					if(paramStr != "") { paramStr += "&" }
					paramStr += kk + "=" + param[kk];
				}
			}
		}
	
		return paramStr;
	}

	decode(data: any) 
	{
		return JSON.parse(data);
	}

}