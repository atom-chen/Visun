import CommonUtils from "../../../../script/kernel/utils/CommonUtils";

export default class GameUtil {

	public static parseChip(total:number, chipRule:number[]) {
		var chips:number[] = [];
		while(total>0) {
			if(total<chipRule[0]) {
				break;
			}
			for(var i=chipRule.length; i>=0; i--) {
				if(total >= chipRule[i]) {
					total = total-chipRule[i];
					chips.push(chipRule[i]);
				}
			}
		}
		return chips;
	}

	public static flyChip(chipSpr:cc.Node, fromPos:cc.Vec2, toPos:cc.Vec2, duration:number) {
		if(!chipSpr) { return; }
		chipSpr.setPosition(fromPos);
		chipSpr.runAction( cc.moveTo(duration, toPos) );
	}

	public static flyChip2(chipSpr:cc.Node, fromObj:cc.Node, toObj:cc.Node, duration:number, margin:any=null) {
		if(!margin) {
			margin = { left:2,right:2,bottom:2,top:2 };
		}
		var parent = chipSpr.parent;
		var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
		var fromPos = CommonUtils.convertSpaceAR(fromObj, parent);
		this.flyChip(chipSpr, fromPos, toPos, duration);
	}

	public static getRandPos(parent:cc.Node, srcObj:cc.Node, dstObj:cc.Node, margin:any) : cc.Vec2{
		var szSrc = srcObj.getContentSize();
		var szDst = dstObj.getContentSize();
		var srcScale = srcObj.scale;
		var dstScale = dstObj.scale;
		var toPos = CommonUtils.convertSpaceAR(dstObj, parent);
		var rangeX = Math.abs( (szDst.width*dstScale - szSrc.width*srcScale) / 2 );
		var rangeY = Math.abs( (szDst.height*dstScale - szSrc.height*srcScale) / 2 );
		toPos.x = toPos.x + ( -rangeX+margin.left + Math.random() * (rangeX*2-margin.right-margin.left) );
		toPos.y = toPos.y + ( -rangeY+margin.bottom + Math.random() * (rangeY*2-margin.bottom-margin.top) );
		return toPos;
	}

}