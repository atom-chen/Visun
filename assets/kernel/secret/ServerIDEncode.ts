"use strict";

/**
 * 加密原理：
 * 		创建一个数组Ary， 数组的第一位为字符串serverID长度 L, Ary = [L]。把一个时间戳转换成一个字符串 timeStamp = Date.now().tostring();
 * 		从数组的第二位开始：使用for循环字符串serverID的每一个字符，serverID的每一个字符由三个字符数字记录,设数组下标为I
 * 	   		 第一步：	第一个字符为一个随机数子N1 =（1~6），第二个字符为N2 = serverID[I], 第三个字符为N3 = timeStamp[I],
 * 			 第二步：   取N2的低N1位和N3的高（8-N1）位组成一个字符数字Nc2， 	 取N3的低N1位和N2的高（8-N1）位组成一个字符数字Nc3，
 * 			 Ary.push(N1);	 Ary.push(Nc2); Ary.push(Nc3);
 * 		最终生成一个字符串数组为  Ary = [L,   N1, Nc2, Nc3,   N1, Nc2, Nc3  。。。] 
 * 		将Ary转换成一个字符串，并转换成base64
 */

const maskAry = [
	parseInt('00000000', 2),
	parseInt('00000001', 2),
	parseInt('00000011', 2),
	parseInt('00000111', 2),
	parseInt('00001111', 2),
	parseInt('00011111', 2),
	parseInt('00111111', 2),
	parseInt('01111111', 2),
	parseInt('11111111', 2),
]

export default class encodeServerID {
	static randInt() {
		return Math.floor(Math.random() * 6) + 1;
	}


	static valueAtBit(num, bit) {
		if (8 < bit) {
			return 0
		}
		if (1 << bit === (num & (1 << bit))) {
			return 1 << bit
		}

		return 0
		//return (num >> (bit -1)) & 1; //
	}

	//加密字节
	static enword2(nBit, nFirst, nSecond) {
		if (8 < nBit) {//
			return [0, 0]
		}

		// 密文 || 闲置字节(闲文)
		var data = 0
		var idle = 0
		var i = 0
		for (; i < nBit; i++) {
			data += this.valueAtBit(nSecond, i)
			idle += this.valueAtBit(nFirst, i)
		}
		for (; i < 8; i++) {
			data += this.valueAtBit(nFirst, i)
			idle += this.valueAtBit(nSecond, i)
		}
		return [data, idle]
	}

	static enword(nBit, nFirst, nSecond) {
		if (8 < nBit) {//
			return [0, 0]
		}

		// 密文 || 闲置字节(闲文)
		var data0 = nSecond & maskAry[nBit];
		var idle0 = nFirst & maskAry[nBit];

		var data1 = nFirst - idle0;
		var idle1 = nSecond - data0;


		return [data0 + data1, idle0 + idle1];
	}

	static encodedata(serverIID) {
		var ary = [];
		var byteTimeStamp = Date.now().toString();
		//console.log("byteTimeStamp:", byteTimeStamp)
		if (serverIID.length > byteTimeStamp.length) {
			return console.error("serverIID too long")
		}

		ary.push(serverIID.length);

		for (var i = 0; i < serverIID.length; ++i) {
			var randNumber = this.randInt();
			var charCode = serverIID.charCodeAt(i);
			var [mi, idle] = this.enword(randNumber, charCode, byteTimeStamp.charCodeAt(i));
			//console.log("加密前：" + " randNumber=" + randNumber + " mi=" + charCode + " idle=" + byteTimeStamp[i]);
			ary.push(randNumber);
			ary.push(mi);
			ary.push(idle);
			//console.log("加密后：" + " randNumber=" + randNumber + " mi=" + mi + " idle=" + idle);
		}
		console.log(ary)
		var result = String.fromCharCode(...ary);
		cc.log("input:" + serverIID + " output" + result);
		cc.log(byteTimeStamp)
		cc.log("berfore add remaind byteTimeStamp result = " + result)
		result = result + byteTimeStamp.substring(serverIID.length);
		cc.log("after add remaind byteTimeStamp result = " + result)

		result = btoa(result);
		console.log(result);
		console.log(atob(result));

		return result;
	}
}
