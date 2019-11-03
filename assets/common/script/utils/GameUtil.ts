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
			for(var i=chipRule.length; i>=0; i--) {
				if(total >= chipRule[i]) {
					total -= chipRule[i];
					chips.push(chipRule[i]);
				}
			}
		}
		return chips;
	}

	//将一个节点，从fromPos位置，移动到toPos位置，用时为duration秒
	public static flyChip(chipSpr:cc.Node, fromPos:cc.Vec3, toPos:cc.Vec3, duration:number) {
		if(!chipSpr) { return; }
		chipSpr.setPosition(fromPos);
		chipSpr.runAction( cc.moveTo(duration, cc.v2(toPos.x, toPos.y)) );
	}

	//将一个节点，从fromObj所在的位置，移动到toObj所在的位置，用时为duration秒
	//margin指终点位置距离toObj包围盒内的边距
	public static flyChip2(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, duration:number, margin:any=null) {
		if(!margin) {
			margin = { left:2,right:2,bottom:2,top:2 };
		}
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		this.flyChip(chipSpr, fromPos, toPos, duration);
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

}