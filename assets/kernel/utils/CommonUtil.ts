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
		obj.on(cc.Node.EventType.TOUCH_START, function(event:any){ event.stopPropagation(); });
		obj.on(cc.Node.EventType.TOUCH_END, function(event:any){ event.stopPropagation(); if(flag){ this.destroy(); } }, obj);
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

}
