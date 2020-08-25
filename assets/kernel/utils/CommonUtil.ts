//---------------------------------
// 通用辅助接口
//---------------------------------
import { isNil, newHandler, isEmpty } from "./GlobalFuncs";
import TimerManager from "../basic/timer/TimerManager";


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


export default class CommonUtil {

	public static angle2ridian = Math.PI/180;

	//遍历root节点，将挂在它身上的所有子层次节点根据名字索引到tbl表中
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

	public static traverseLabels(root:cc.Node, tbl:any)
	{
		if(!root) { return; }
		var comps = root.getComponentsInChildren(cc.Label);
		for(var i in comps) {
			tbl[comps[i].node.name] = comps[i];
		}
	}

	//通用到销毁接口，销毁任意对象
	public static safeDelete(obj:any) {
		if(obj===null || obj===undefined) {
			return;
		}
		if(obj.delInstance) {
			obj.delInstance();
			return;
		}
		if(obj.node) {
			obj.node.destroy();
			return;
		}
		obj.destroy();
	}

	public static deleteChildren(obj:cc.Node, from?:number, to?:number) {
		if(isNil(obj)) { return; }
		var childs = obj.children;
		if(childs) {
			if(isNil(from)) { from = 0; }
			if(isNil(to)) { to = childs.length-1; }

			if(from<0) { from = 0; }
			if(to<0 || to>childs.length-1) { to = childs.length-1; }
			
			for(var i=to; i>=from; i--) {
				//childs[i].destroy();
				childs[i].removeFromParent(true);
			}
		}
	}

	//判断root节点下是否挂有输入框
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

	//给节点添加点击事件
	public static addClickEvent(target:cc.Node, callback:Function, thisObj?:any, arg?:any) {
		target.on(cc.Node.EventType.TOUCH_END, callback, thisObj);
	}

	public static addDoubleClick(target:cc.Node, callback:Function, thisObj?:any, arg?:any) {

	}

	//移除节点上到点击事件
	public static delClickEvent(target:cc.Node, callback:Function, thisObj?:any) {
		target.off(cc.Node.EventType.TOUCH_END, callback, thisObj);
	}

	public static longPress(target:cc.Node, cbLongPress:Function, cbClick:Function, thisObj?:any) {
		if(isNil(thisObj)) { thisObj = target; }
		target.on(cc.Node.EventType.TOUCH_START,function(evt){
			this._is_long = false;
			this.holdTimeEclipse = TimerManager.delTimer(this.holdTimeEclipse);
            this.holdTimeEclipse = TimerManager.delaySecond(1, newHandler(()=>{
				this._is_long = true;
				cbLongPress.call(this);
			}, this));
        }, thisObj);

        target.on(cc.Node.EventType.TOUCH_END,function(evt){   
			this.holdTimeEclipse = TimerManager.delTimer(this.holdTimeEclipse);        
			if(!this._is_long) { 
				if(cbClick) {
					cbClick.call(this);
				}
			}
		}, thisObj);
		
		target.on(cc.Node.EventType.TOUCH_CANCEL,function(evt){
			this.holdTimeEclipse = TimerManager.delTimer(this.holdTimeEclipse);
        }, thisObj);
	}

	//将obj节点设置为模态对话框
	public static setModal(obj:cc.Node, bCloseWhenClickMask:boolean)
	{
		if(!obj || !cc.isValid(obj)){ return; }
		obj.on(cc.Node.EventType.TOUCH_START, function(event:any){ 
			event.stopPropagation(); 
		}, obj);
		obj.on(cc.Node.EventType.TOUCH_END, function(event:any){ 
			event.stopPropagation(); 
			if(bCloseWhenClickMask){ this.destroy(); } 
		}, obj);
	}

	//坐标空间转换（原点为左下角）
	public static convertSpace(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2
	{
		var pt = srcObj.convertToWorldSpace(cc.v2(x,y));
		return dstObj.convertToNodeSpace(pt);
	}

	//坐标空间转换（原点为锚点）
	public static convertSpaceAR(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2
	{
		var pt = srcObj.convertToWorldSpaceAR(cc.v2(x,y));
		return dstObj.convertToNodeSpaceAR(pt);
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

	//根据超链接下载网络图片
	public static loadWebImg(sp:cc.Sprite, url:string, auto:boolean): void {
		if(isNil(sp) || isEmpty(url)) { return; }
		
		cc.log("load web img: ", url, auto);
		var width = sp.node.width;
		var height = sp.node.height;

		if ("http" == url.substring(0, 4)) {
			cc.loader.load(url, function (err, textTure) {
				if (err) {
					cc.warn('加载图片出错了' + err);
				} else {
					if(cc.isValid(sp.node)) {
						var spriteFrame = new cc.SpriteFrame();
						spriteFrame.setTexture(textTure);
						sp.spriteFrame = spriteFrame;
						if (!auto) {
							var nWidth = sp.node.width;
							var nHeight = sp.node.height;
							sp.node.setScale(width / nWidth, height / nHeight);
						}
					}
				}
			});
		} else {
			cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
				if (err || !spriteFrame) {
					cc.warn('加载图片出错了' + err);
				} else {
					if(cc.isValid(sp.node)) {
						sp.spriteFrame = spriteFrame;
						if (!auto) {
							var nWidth = sp.node.width;
							var nHeight = sp.node.height;
							sp.node.setScale(width / nWidth, height / nHeight);
						}
					}
				}
			});
		}
	}

	//--------------------------------------------------------------------------------------------
	//--------------------------------------------------------------------------------------------

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

	//随机数
	public static getRandomInt(min:number, max:number) : number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//洗牌算法
	public static shuffle(array: Array<any>) {
		for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	}

	static fixNum(v:number) : string {
		if(v < 10) {
			return "0" + v;
		}
		return v.toString();
	}
	static formatTime(nS) : string {
		if(isNil(nS)) { return ""; }
		var now = new Date(parseInt(nS) * 1000);
		var year = now.getFullYear();
		var month = this.fixNum(now.getMonth() + 1);
		var date = this.fixNum(now.getDate());
		var hour = this.fixNum(now.getHours());
		var minute = this.fixNum(now.getMinutes());
		var second = this.fixNum(now.getSeconds());
		return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
	}

	//
	static limitNum(v:number, minV:number, maxV:number) : number
	{
		if( !isNil(minV) && !isNil(maxV) ) {
			if(minV>maxV){ var tmp = minV; minV = maxV; maxV = tmp; }
		}
		if(!isNil(maxV)) { if(v>maxV) v = maxV; }
		if(!isNil(minV)) { if(v<minV) v = minV; }
		return v;
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
     * @param {number} value  金币数量
	 * @param {number} divNum  value的实际值为value/divNum
     * @param {boolean} showUnit    是否显示单位 ,默认显示单位
     * @param {boolean} add    是否添加符号在前面  ，默认不添加符号
	 * @param {boolean} showComma    是否使用逗号(千分位),默认添加
	 * @param {boolean} showFixed    是否保留俩位小数，默认 没有0
     */
	static formatNumber(value: number, divNum:number, showUnit: boolean = true, add: boolean = false, showComma: boolean = true, showFixed: boolean = false): string {
		if (value == null || value == undefined) {
			console.warn("传入未定义数据！！", value)
			return
		}

		let copyNumber = Math.abs(value / divNum);//最新分单位
		let str = ""   //先确定单位
		let BILLION = 100000000
		let TENTHOUSAND = 10000
		let unit = ""
		showUnit = false; //最新版需求不需要单位了 
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
			// 是否保留 俩位小数  0.00
			if (!showFixed) {
				str = copyNumber.toString()
			} else {
				str = copyNumber.toFixed(2)
			}
			//str = copyNumber.toFixed(2); //保留俩位小数 
		}

		//加，显示 先按照3个长度 解出来 ，倒叙拼接
		let strList = str.split(".")
		let count = Math.floor((strList[0].length - 1) / 3)
		if (showComma && count > 0) {
			str = ""
			let arr = []

			for (let index = 0; index < count; index++) {
				arr.push(strList[0].slice(strList[0].length - 3, strList[0].length));
				strList[0] = strList[0].substring(0, strList[0].length - 3)
			}
			arr.push(strList[0]);
			for (let j = arr.length - 1; j >= 0; j--) {
				if (j == arr.length - 1) {
					str = arr[j];
				} else {
					str = str + "," + arr[j];
				}
			}
			//带小数点的
			if (strList[1]) {
				str = str + "." + strList[1]
			}

		}
		str = str + unit
		// 是否添加符号
		if (value < 0) {
			str = "-" + str
		} else if (add) {
			str = "+" + str
		}

		return str
	}

	//
	static Bytes2Str(arr: Uint8Array, flagPos:number = 7) : string {
		let str = "";
		for (let i = 0; i < arr.length; i++) {
			let tmp = arr[i].toString(16);
			if (tmp.length == 1) {
				tmp = "0" + tmp;
			}
			str += " " + tmp;
			if(i==flagPos) { str += "  "; }
		}
		return str;
	}

	//utf8数组转换为字符串
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

	//字符串转换为utf8数组
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

	//浅复制
	static simpleCopy(target, source, ignoreKeys?:any) {
		if(source === undefined || source === null) { return; }
		if(target === undefined || target === null) { return; }
		for (var key in source) {
			if (source.hasOwnProperty(key)) {
				if(ignoreKeys && ignoreKeys[key]) {
					
				} else {
					target[key] = source[key];
				}
				
			//	cc.log("copy: ", key, target[key]);
			}
		}
	}

	//深复制
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


	//
	static appendArray(dst: any[], arr: any[]): void {
		if (arr) {
			for (var i in arr) {
				dst.push(arr[i]);
			}
		}
	}

	//
	static minusArray(src: any[], arr: any[]): void {
		if (!arr) { return; }
		for (var i = 0; i < arr.length; i++) {
			var idx = src.indexOf(arr[i]);
			if (idx >= 0) {
				src.splice(idx, 1);
			}
		}
	}

	static isSameArray(a1: any[], a2: any[]): boolean {
		if (typeof a1 != typeof a2) { return false; }
		if (a1.length != a2.length) { return false; }
		for (var i in a1) {
			if (a2.indexOf(a1[i]) < 0) {
				return false;
			}
		}
		for (var i in a2) {
			if (a1.indexOf(a2[i]) < 0) {
				return false;
			}
		}
		return true;
	}

	//-----------------------------------------------------------------------------

	//将一个节点，从fromPos位置，移动到toPos位置，用时为duration秒
	public static lineTo0(chipSpr:cc.Node, fromPos:cc.Vec2, toPos:cc.Vec2, duration:number, delay:number) {
		if(!chipSpr) { return; }
		chipSpr.setPosition(fromPos);
		if(delay<=0)
			chipSpr.runAction( cc.moveTo(duration, cc.v2(toPos.x, toPos.y)) );
		else
			chipSpr.runAction( cc.sequence(cc.delayTime(delay), cc.moveTo(duration, cc.v2(toPos.x, toPos.y))) );
	}

	//将一个节点，从fromObj所在的位置，移动到toObj所在的位置，用时为duration秒
	//margin指终点位置距离toObj包围盒内的边距
	public static lineTo1(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, duration:number, delay:number, margin:any=null) {
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		this.lineTo0(chipSpr, fromPos, toPos, duration, delay);
	}

	//将一个节点，从fromObj所在的位置，移动到toObj所在的位置，用时为duration秒
	//margin指终点位置距离toObj包围盒内的边距
	public static lineTo2(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, speed:number, delay:number, margin:any=null) {
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		var duration = Math.sqrt((toPos.x-fromPos.x)*(toPos.x-fromPos.x) + (toPos.y-fromPos.y)*(toPos.y-fromPos.y)) / speed;
		this.lineTo0(chipSpr, fromPos, toPos, duration, delay);
	}

	//将一个节点，从fromPos位置，移动到toPos位置，用时为duration秒
	public static bezierTo0(chipSpr:cc.Node, fromPos:cc.Vec2, toPos:cc.Vec2, duration:number, delay:number) {
		if(!chipSpr) { return; }
		chipSpr.setPosition(fromPos);
		var gj = cc.bezierTo(duration, 
			[
				new cc.Vec2(fromPos.x+15,fromPos.y+20),
				new cc.Vec2(fromPos.x+55,fromPos.y+140), 
				new cc.Vec2(toPos.x,toPos.y)
			]).easing(cc.easeInOut(2))
		if(delay<=0)
			chipSpr.runAction( gj );
		else
			chipSpr.runAction( cc.sequence(cc.delayTime(delay), gj) )
	}

	//将一个节点，从fromObj所在的位置，移动到toObj所在的位置，用时为duration秒
	//margin指终点位置距离toObj包围盒内的边距
	public static bezierTo1(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, duration:number, delay:number, margin:any=null) {
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		this.bezierTo0(chipSpr, fromPos, toPos, duration, delay);
	}

	//将一个节点，从fromObj所在的位置，移动到toObj所在的位置，用时为duration秒
	//margin指终点位置距离toObj包围盒内的边距
	public static bezierTo2(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, speed:number, delay:number, margin:any=null) {
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		var duration = Math.sqrt((toPos.x-fromPos.x)*(toPos.x-fromPos.x) + (toPos.y-fromPos.y)*(toPos.y-fromPos.y)) / speed;
		this.bezierTo0(chipSpr, fromPos, toPos, duration, delay);
	}

	//在dstObj的包围盒内，给srcobj找一个随机位置，margin指位置距离toObj包围盒内的边距
	public static getRandPos(parent:cc.Node, srcObj:cc.Node, dstObj:cc.Node, margin:any) : cc.Vec2
	{
		var toPos = CommonUtil.convertSpaceAR(dstObj, parent);
		
		if(!isNil(margin)) {
			if(!isNil(margin.rx)) {
				var szSrc = srcObj.getContentSize();
				var szDst = dstObj.getContentSize();
				var angle = CommonUtil.getRandomInt(0,360) * this.angle2ridian;
				toPos.x = toPos.x + Math.cos(angle) * margin.rx;
				toPos.y = toPos.y + Math.sin(angle) * margin.ry;
			} else {
				var szSrc = srcObj.getContentSize();
				var szDst = dstObj.getContentSize();
				var srcScale = srcObj.scale;
				var dstScale = dstObj.scale;
				if(srcScale < 0) { srcScale = -srcScale; }
				if(dstScale < 0) { dstScale = -dstScale; }
				var rangeX = Math.abs( (szDst.width*dstScale - szSrc.width*srcScale) / 2 );
				var rangeY = Math.abs( (szDst.height*dstScale - szSrc.height*srcScale) / 2 );
				toPos.x = toPos.x + ( -rangeX+margin.left + Math.random() * (rangeX*2-margin.right-margin.left) );
				toPos.y = toPos.y + ( -rangeY+margin.bottom + Math.random() * (rangeY*2-margin.bottom-margin.top) );
			}
		}
		
		return toPos;
	}

	//
	public static playAddMoney(lab: cc.Label, fromV: number, toV: number, jmpTimes:number, delayT:number) {
		if (isNil(fromV)) { fromV = parseInt(lab.string) || 0; }
		lab.node.active = true;
		lab.node.stopAllActions();

		var delta = toV - fromV;
		if(jmpTimes < 10) { jmpTimes = 10; }
		var tic = Math.ceil(Math.abs(delta) / jmpTimes);
		if(tic < 1) { tic = 1; }
		var prefix = "+";
		if (delta < 0) { tic = -tic; prefix = ""; }

		lab.string = prefix + fromV;
		var f = function () {
			fromV += tic;
			if (fromV >= toV && delta > 0) { 
				fromV = toV; 
				lab.string = prefix + fromV;
				lab.unschedule(f); 
			} else if (fromV <= toV && delta < 0) { 
				fromV = toV; 
				lab.string = prefix + fromV;
				lab.unschedule(f); 
			}
			lab.string = prefix + fromV;
		}

		if(delayT > 0) {
			lab.node.runAction(cc.sequence(
				cc.delayTime(delayT),
				cc.callFunc(()=>{
					lab.schedule(f, 0);
				},lab)
			));
		} else {
			lab.schedule(f, 0);
		}
	}

	public static playShake(obj:cc.Node, duration: number, shakeTimes: number) : void {
		if(isNil(obj)) { return; }
		var dt = duration / (shakeTimes*4);
		obj.runAction( cc.repeat( 
			cc.sequence(
				cc.moveBy(dt, cc.v2(10,0)), 
				cc.moveBy(dt*2, cc.v2(-20, 0)), 
				cc.moveBy(dt, cc.v2(10,0))
			), shakeTimes ) );
	}

	public static arrayBufferToBase64(buffer) : string {
		var binary = '';
		var bytes = new Uint8Array( buffer );  
		var len = bytes.byteLength;  
		for (var i = 0; i < len; i++) { 
			binary += String.fromCharCode( bytes[ i ] );  
		} 
		return window.btoa( binary );
	}

	static isValidBase64Image(base64Str:string) : boolean {
		if(isNil(base64Str)) { return false; }
		if(typeof(base64Str) != "string") { return false; }
		return base64Str.substring(0, 10) == "data:image";
	}

	static getGridInfo(itemCnt:number, wItem:number, hItem:number, parentWid:number, parentHei:number, spaceInfo:any) : any {
        var left = spaceInfo.left;
        var right = spaceInfo.right;
        var top = spaceInfo.top;
        var bottom = spaceInfo.bottom;
        var spaceX = spaceInfo.spaceX;
        var spaceY = spaceInfo.spaceY;

        var col = 0;
        var remainX = parentWid - left - right;
        for(var i=0; i<1000; i++) {
            remainX -= wItem;
            col++;
            if(remainX-spaceX < 0) {
                break;
            } else {
                remainX -= spaceX;
            }
        }
        if(col>1) {
            spaceX = ((parentWid-left-right) - col*wItem) / (col-1);
        }
        
        var rows = Math.ceil(itemCnt/col);
        var totalH = rows*hItem + (rows-1) * spaceY + top + bottom;
        var halfY = totalH/2;
        var halfX = parentWid/2;
        var posList = [];

        for(var ii = 0; ii<itemCnt; ii++) {
            var r = Math.floor((ii)/col) + 1;
            var c = (ii+1) % col;
            if(c==0) { c = col; }
            posList.push(cc.v2(left + wItem/2 + (c-1)*wItem + spaceX*(c-1) - halfX, totalH - top - hItem/2 - (r-1)*hItem - spaceY*(r-1) - halfY));
        }

        return {
            totalW : parentWid,
            totalH : totalH,
            rows : rows,
            cols : col,
            posList : posList
        }
    }

}
