import SecretBase from "./SecretBase";

export default class MyCrypto implements SecretBase {

	encrypt(buf: any, key: string, len: number) : any {
		var last = "";
		for(var i=0; i<buf.length; i++) {
			for(var j=0; j<key.length; j++) {
				var k = key.charCodeAt(j);
				var txt = buf.charCodeAt(i) ^ k;
			}
			last += String.fromCharCode(txt);
		}
		return last;
	}

	decrypt(buf: any, key: string, len: number) : any {
		var last = "";
		for(var i=0; i<buf.length; i++) {
			for(var j=0; j<key.length; j++) {
				var k = key.charCodeAt(j);
				var txt = buf.charCodeAt(i) ^ k;
			}
			last += String.fromCharCode(txt);
		}
		return last;
	}
	
}
