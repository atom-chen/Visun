const {ccclass, property} = cc._decorator;

@ccclass
export default class CommonUtils {

	public static traverseNodes(root:any, tbl:any) 
	{
		if(!root || !root.children) { return; }
		var childlist = root.children;
		for (var i = 0; i < childlist.length; i++){
			tbl[childlist[i].getName()] = childlist[i];
		//	cc.log("----", childlist[i].getName());
			CommonUtils.traverseNodes(childlist[i], tbl)
		}
	}

	public static setModal(obj:cc.Node, closeWhenClickMask:boolean)
	{
		if(!obj || !cc.isValid(obj)){
			return;
		}
		var frame = cc.find("frame", obj);
		if(frame){
			frame.on("touchstart", function(event:any){ event.stopPropagation(); });
			frame.on("touchend", function(event:any){ event.stopPropagation(); });
		}
		obj.on("touchstart", function(event:any){ event.stopPropagation(); });
		obj.on("touchend", function(event:any){ 
			event.stopPropagation(); 
			if(closeWhenClickMask){
				obj.destroy();
			}
		});
	}

	public static convertSpace(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2
	{
		var pt = srcObj.convertToWorldSpace(cc.v2(x,y));
		return dstObj.convertToNodeSpace(pt);
	}

	public static convertSpaceAR(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2
	{
		var pt = srcObj.convertToWorldSpaceAR(cc.v2(x,y));
		return dstObj.convertToNodeSpace(pt);
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

	public static getFrameName(name:string) : string 
	{
		return name.replace(/\//g,"-");
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

}
