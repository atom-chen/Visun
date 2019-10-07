import CommonUtil from "../../../kernel/utils/CommonUtil";

export default class GameUtil {
	public static CHIP_RULE = [1,2,3,8,10,20,100,300,500,800,1000,3000,5000,8000,10000];

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

	public static flyChip(chipSpr:cc.Node, fromPos:cc.Vec3, toPos:cc.Vec3, duration:number) {
		if(!chipSpr) { return; }
		chipSpr.setPosition(fromPos);
		chipSpr.runAction( cc.moveTo(duration, cc.v2(toPos.x, toPos.y)) );
	}

	public static flyChip2(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, duration:number, margin:any=null) {
		if(!margin) {
			margin = { left:2,right:2,bottom:2,top:2 };
		}
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtil.convertSpaceAR(fromObj, parent);
		this.flyChip(chipSpr, fromPos, toPos, duration);
	}

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