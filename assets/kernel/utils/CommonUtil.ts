//---------------------------------
// 通用辅助接口
//---------------------------------
if(!ArrayBuffer["transfer"]) {
    ArrayBuffer["transfer"] = function (source, length) {
        source = Object(source);
		var dest = new ArrayBuffer(length);
		
        if(!(source instanceof ArrayBuffer) || !(dest instanceof ArrayBuffer)) {
            throw new TypeError("ArrayBuffer.transfer, error: Source and destination must be ArrayBuffer instances");
		}
		
        if(dest.byteLength >= source.byteLength) {
			var buf = new Uint8Array(dest);
			buf.set(new Uint8Array(source), 0);
		}
		else {
			throw new RangeError("ArrayBuffer.transfer, error: destination has not enough space");
		}
		
		return dest;
    };
};

if(!String.prototype["format"]) {
	String.prototype["format"] = function() {
		var values = arguments;
		return this.replace(/\{(\d+)\}/g, function(match, index) {
			if (values.length > index) {
				return values[index];
			} 
			else {
				return "";
			}
		});
	};
}

export default class CommonUtil {

	public static traverseNodes(root:any, tbl:any) 
	{
		if(!root || !root.children) { return; }
		var childlist = root.children;
		for (var i = 0; i < childlist.length; i++){
			tbl[childlist[i].getName()] = childlist[i];
		//	cc.log("----", childlist[i].getName());
			CommonUtil.traverseNodes(childlist[i], tbl)
		}
	}

	public static getUUID(): string {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";

		var uuid = s.join("");
		return uuid;
	}

	public static hasEditbox(root:any) 
	{
		if(!root || !root.children) { return false; }
		var childlist = root.children;
		for (var i = 0; i < childlist.length; i++){
			if(childlist[i].getComponent(cc.EditBox)) {
				return true;
			}
			return CommonUtil.hasEditbox(childlist[i]);
		}
		return false;
	}

	public static addClickEvent(target:cc.Node, callback:Function, thisObj?:any, arg?:any) {
		target.on(cc.Node.EventType.TOUCH_END, callback, thisObj);
	}

	public static delClickEvent(target:cc.Node, callback:Function, thisObj?:any){
		target.off(cc.Node.EventType.TOUCH_END, callback, thisObj);
	}

	// 直接add一个layer然后设置localZOrder为-1的方式，在手机浏览器上有时候挡不住事件，改为这样了
	public static setModal(obj:cc.Node, flag:boolean)
	{
		if(!obj || !cc.isValid(obj)){ return; }
		obj.on(cc.Node.EventType.TOUCH_START, function(event:any){ 
			event.stopPropagation(); 
		}, obj);
		obj.on(cc.Node.EventType.TOUCH_END, function(event:any){ 
			event.stopPropagation(); 
			if(flag){ this.destroy(); } 
		}, obj);
	}

	public static convertSpace(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2
	{
		var pt = srcObj.convertToWorldSpace(cc.v2(x,y));
		return dstObj.convertToNodeSpace(pt);
	}

	public static convertSpaceAR(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec3
	{
		var pt = srcObj.convertToWorldSpaceAR(cc.v2(x,y));
		return dstObj.convertToNodeSpaceAR(pt);
	}

	public static getFrameName(name:string) : string 
	{
		return name.replace(/\//g,"-");
	}

	public static isNil(obj:any) : boolean
	{
		if(obj===undefined || obj===null) {
			return true;
		}
		else {
			return false;
		}
	}

	static Bytes2Str(arr: Uint8Array) {
		let str = "";
		for (let i = 0; i < arr.length; i++) {
			let tmp = arr[i].toString(16);
			if (tmp.length == 1) {
				tmp = "0" + tmp;
			}
			str += " " + tmp;
			if(i==7) { str += "  "; }
		}
		return str;
	}

	// Returns a random integer between min and max
	public static getRandomInt(min:number, max:number) : number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	public static shuffle(array: Array<any>) {
		for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	}

	public static utf8ArrayToString(array) : string
	{
		var out:string, i:number, len:number, c:number;
		var char2:number, char3:number;
	
		out = "";
		len = array.length;
		i = 0;
	
		while(i < len)
		{
			c = array[i++];
	
			switch(c >> 4)
			{
				case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
				// 0xxxxxxx
				out += String.fromCharCode(c);
				break;
				case 12: case 13:
				// 110x xxxx   10xx xxxx
				char2 = array[i++];
				out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
				break;
				case 14:
					// 1110 xxxx  10xx xxxx  10xx xxxx
					char2 = array[i++];
					char3 = array[i++];
					out += String.fromCharCode(((c & 0x0F) << 12) |
						((char2 & 0x3F) << 6) |
						((char3 & 0x3F) << 0));
					break;
			}
		}
		
		return out;
	}

	public static stringToUTF8Bytes(str:string) : any[] 
	{
		var utf8 = [];
		for (var i=0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);
			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
			}
			else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode>>6) & 0x3f), 0x80 | (charcode & 0x3f));
			}
			// surrogate pair
			else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + (((charcode & 0x3ff)<<10) | (str.charCodeAt(i) & 0x3ff))
				utf8.push( 	0xf0 | (charcode >>18), 
							0x80 | ((charcode>>12) & 0x3f), 
							0x80 | ((charcode>>6) & 0x3f), 
							0x80 | (charcode & 0x3f) );
			}
		}
		return utf8;
	}

	static limitNum(v:number, minV:number, maxV:number) : number
	{
		if(maxV!==null) { if(v>maxV) v = maxV; }
		if(minV!==null) { if(v<minV) v = minV; }
		return v;
	}

	static simpleCopy(target, source) {
		if(source === undefined || source === null) { return; }
		for (var key in source) {
			if (source.hasOwnProperty(key)) {
				target[key] = source[key];
				cc.log("copy: ", key, target[key]);
			}
		}
	}

	static deepClone(source: Object): any {
		if (null == source || {} == source || [] == source) {
			return source;
		}

		let newObject: any;
		let isArray = false;
		if ((source as any).length) {
			newObject = [];
			isArray = true;
		} else {
			newObject = {};
			isArray = false;
		}
		for (let key of Object.keys(source)) {
			if (null == source[key]) {
				if (isArray) {
					newObject.push(null);
				} else {
					newObject[key] = null;
				}
			} else {
				let sub = (typeof source[key] == 'object') ? this.deepClone(source[key]) : source[key];
				if (isArray) {
					newObject.push(sub);
				} else {
					newObject[key] = sub;
				}
			}
		}
		return newObject;
	}

	public static loadWebImg(sp, url, auto): void {
		var width = sp.node.width;
		var height = sp.node.height;
		if ("http" == url.substring(0, 4)) {
			if (cc.sys.os == cc.sys.OS_IOS) {
				if ("http:" == url.substring(0, 5)) {
					url = "https" + url.substring(4, url.length);
				}
			}
			cc.loader.load(url, function (err, textTure) {
				if (err) {
					cc.error('加载图片出错了' + err);
				} else {
					var spriteFrame = new cc.SpriteFrame();
					spriteFrame.setTexture(textTure);
					sp.spriteFrame = spriteFrame;
					if (!auto) {
						var nWidth = sp.node.width;
						var nHeight = sp.node.height;
						sp.node.setScale(width / nWidth, height / nHeight);
					}
				}
			});
		} else {
			cc.loader.loadRes(url, cc.SpriteFrame, function (spriteFrame) {
				if (!spriteFrame) {
					// 	cc.error('加载图片出错了' + err);
				} else {
					sp.spriteFrame = spriteFrame;
					if (!auto) {
						var nWidth = sp.node.width;
						var nHeight = sp.node.height;
						sp.node.setScale(width / nWidth, height / nHeight);
					}
				}
			});
		}
	}

	/**
	 * 精确浮点数，只截取不四舍五入
	 * @param {*} number    需要补齐的数字
	 * @param {*} length    精确位数
	 * @returns
	 */
	static interceptNumber(number: number, length: number = 2): string {
		if (number === Math.ceil(number)) {
			return number.toString()
		}
		let n = number.toString()
		let strList = n.split(".")

		return strList[0] + "." + strList[1].substring(0, length)
	}

	/**
     * 格式化金币展示 保留俩位小数
     * 每隔三位一个逗号
     * @param {number} number
     * @param {boolean} showUnit    是否显示单位 万 或者 亿 ,默认显示单位
     * @param {boolean} add    是否添加符号在前面  ，默认不添加符号
     */
	static setScoreNumber(number: number, showUnit: boolean = true, add: boolean = false): string {
		if (number == null || number == undefined) {
			console.warn("传入未定义数据！！", number)
			return
		}
		let copyNumber = Math.abs(number)
		let str = ""   //先确定单位
		let BILLION = 100000000
		let TENTHOUSAND = 10000
		let unit = ""
		if (showUnit && copyNumber >= 100000) {
			if (Math.floor(copyNumber / BILLION) > 0) {
				unit = "亿"
				str = this.interceptNumber(copyNumber / BILLION, 1)
			} else {
				if (Math.floor(copyNumber / TENTHOUSAND) > 0) {
					unit = "万"
					str = this.interceptNumber(copyNumber / TENTHOUSAND, 1)
				}
			}
		} else {
			// // 是不是带小数
			// if (copyNumber === Math.ceil(copyNumber)) {
			// 	str = copyNumber.toString()
			// } else {
			// 	str = copyNumber.toFixed(2)
			// }
			str = copyNumber.toFixed(2); //保留俩位小数 
		}

		let strList = str.split(".")
		let count = Math.floor((strList[0].length - 1) / 3)
		if (count > 0) {
			str = ""
			for (let index = 0; index < count; index++) {
				str = str + "," + strList[0].slice(strList[0].length - 3, strList[0].length)
				strList[0] = strList[0].substring(0, strList[0].length - 3)
			}
			str = strList[0] + str
			if (strList[1]) {
				str = str + "." + strList[1]
			}
		}
		str = str + unit
		// 是否添加符号
		if (number < 0) {
			str = "-" + str
		} else if (add) {
			str = "+" + str
		}

		return str
	}

	/**
     * 处理节点及其所有子节点的置灰和恢复 state: 1置灰，0正常
     * @static
     * @memberof Util
     */
	static grayNode(node: cc.Node, state: number) {
		cc.log(node)
		if (node == null) { return }
		let s = node.getComponentsInChildren(cc.Sprite);
		for (let i = 0; i < s.length; i++) {
			if (state === 1) {
				s[i].setMaterial(0, cc["Material"]["getInstantiatedBuiltinMaterial"]('2d-gray-sprite', s[i]));
			} else if (state === 0) {
				s[i].setMaterial(0, cc["Material"]["getInstantiatedBuiltinMaterial"]('2d-sprite', s[i]));
			}
		}
	}


	static appendArray(dst: any[], arr: any[]): void {
		if (arr) {
			for (var i in arr) {
				dst.push(arr[i]);
			}
		}
	}

	static minusArray(src: any[], arr: any[]): void {
		if (!arr) { return; }
		for (var i = 0; i < arr.length; i++) {
			var idx = src.indexOf(arr[i]);
			if (idx >= 0) {
				src.splice(idx, 1);
			}
		}
	}

}
