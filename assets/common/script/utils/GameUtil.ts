import CommonUtil from "../../../kernel/utils/CommonUtil";
import { MajhongCode } from "../definer/MajhongDefine";
import { isNil } from "../../../kernel/utils/GlobalFuncs";

export default class GameUtil {
	public static angle2ridian = Math.PI/180;
	public static CHIP_RULE = [1,5,10,20,50,100,200,500,1000,5000,10000];

	//将总金额total，拆分成指定面额规则的序列
	//如总额1185，游戏中的筹码面额有"5, 10, 50, 100, 500"
	//拆分后的序列就是：1185 == 500 + 500 + 100 + 50 + 10 + 10 + 10 + 5
	public static parseChip(total:number, chipRule?:number[]) : number[] {
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

	//获取筹码图片资源路经
	public static chipPath(v:number|string, b3d:boolean) : string {
		if(b3d) {
			return "common/imgs/chips/cm_"+v;
		} else {
			return "common/imgs/chips/chouma"+v;
		}
	}

	//获取扑克图片资源路经
	public static pokerPath(v:number|string) : string {
		return "common/imgs/pokers/poker_"+v;
	}

	//获取麻将图片资源路经
	public static majhongPath(v:MajhongCode) : string {
		return "common/imgs/majhong/tong"+v;
	}

	//设置头像图片
	public static setHeadIcon(nd:cc.Node, v:number) {
		if(isNil(nd)) { return; }
		GameUtil.setHeadSpr(nd.getComponent(cc.Sprite), v);
	}

	//设置头像图片
	public static setHeadSpr(spr:cc.Sprite, v:number) {
		if(isNil(spr)) { return; }
		if(v<0) { v=0; } 
		if(v>1) { v=1; }
		var respath = "common/imgs/person/headIcon_"+v;

		var sf0 = cc.loader.getRes(respath, cc.SpriteFrame);
		if(sf0) {
			spr.spriteFrame = sf0;
			return;
		}

		cc.loader.loadRes(respath, cc.SpriteFrame, (err, sf)=>{
			if(err) { cc.warn("error: "+err); return; }
			if(cc.isValid(spr)) {
				spr.spriteFrame = sf;
			}
		})
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
	public static bezierTo0(chipSpr:cc.Node, fromPos:cc.Vec3, toPos:cc.Vec3, duration:number, delay:number) {
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
	public static getRandPos(parent:cc.Node, srcObj:cc.Node, dstObj:cc.Node, margin:any) : cc.Vec3
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

}