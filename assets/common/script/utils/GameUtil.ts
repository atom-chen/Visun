import CommonUtil from "../../../kernel/utils/CommonUtil";

export default class GameUtil {
	public static CHIP_RULE = [1,2,3,8,10,20,100,300,500,800,1000,3000,5000,8000,10000];

	//将总金额total，拆分成指定面额规则的序列
	//如总额1185，游戏中的筹码面额有"5, 10, 50, 100, 500"
	//拆分后的序列就是：1185 == 500 + 500 + 100 + 50 + 10 + 10 + 10 + 5
	public static parseChip(total:number, chipRule?:number[]) {
		if(!chipRule) {
			chipRule = this.CHIP_RULE;
		}
		var chips:number[] = [];
		while(total>0) {
			if(total<chipRule[0]) {
				break;
			}
			for(var i=chipRule.length-1; i>=0; i--) {
				if(total >= chipRule[i]) {
					total -= chipRule[i];
					chips.push(chipRule[i]);
					break;
				}
			}
		}
		return chips;
	}

	public static chipPath(v:number|string) {
		return "common/imgs/chips/chouma"+v;
	}

	public static pokerPath(v:number|string) {
		return "common/imgs/pokers/poker_"+v;
	}

	//将一个节点，从fromPos位置，移动到toPos位置，用时为duration秒
	public static lineTo0(chipSpr:cc.Node, fromPos:cc.Vec3, toPos:cc.Vec3, duration:number, delay:number) {
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
		if(!margin) {
			margin = { left:2,right:2,bottom:2,top:2 };
		}
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		this.lineTo0(chipSpr, fromPos, toPos, duration, delay);
	}

	//将一个节点，从fromPos位置，移动到toPos位置，用时为duration秒
	public static bezierTo0(chipSpr:cc.Node, fromPos:cc.Vec3, toPos:cc.Vec3, duration:number, delay:number) {
		if(!chipSpr) { return; }
		chipSpr.setPosition(fromPos);
		var gj = cc.bezierTo(duration, 
			[
				new cc.Vec2(fromPos.x+15,fromPos.y+20),
				new cc.Vec2(fromPos.x+55,fromPos.y+140), 
				new cc.Vec2(toPos.x,toPos.y)
			]).easing(cc.easeInOut(0.5))
		if(delay<=0)
			chipSpr.runAction( gj );
		else
			chipSpr.runAction( cc.sequence(cc.delayTime(delay), gj) )
	}

	//将一个节点，从fromObj所在的位置，移动到toObj所在的位置，用时为duration秒
	//margin指终点位置距离toObj包围盒内的边距
	public static bezierTo1(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, duration:number, delay:number, margin:any=null) {
		if(!margin) {
			margin = { left:2,right:2,bottom:2,top:2 };
		}
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		this.bezierTo0(chipSpr, fromPos, toPos, duration, delay);
	}

	//在dstObj的包围盒内，给srcobj找一个随机位置，margin指位置距离toObj包围盒内的边距
	public static getRandPos(parent:cc.Node, srcObj:cc.Node, dstObj:cc.Node, margin:any) : cc.Vec3
	{
		var szSrc = srcObj.getContentSize();
		var szDst = dstObj.getContentSize();
		var srcScale = srcObj.scale;
		var dstScale = dstObj.scale;
		var toPos = CommonUtil.convertSpaceAR(dstObj, parent);
		var rangeX = Math.abs( (szDst.width*dstScale - szSrc.width*srcScale) / 2 );
		var rangeY = Math.abs( (szDst.height*dstScale - szSrc.height*srcScale) / 2 );
		toPos.x = toPos.x + ( -rangeX+margin.left + Math.random() * (rangeX*2-margin.right-margin.left) );
		toPos.y = toPos.y + ( -rangeY+margin.bottom + Math.random() * (rangeY*2-margin.bottom-margin.top) );
		return toPos;
	}

	//
	public static playFlipCard(cards:Array<cc.Node>) {
		
	}

}