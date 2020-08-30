import { MajhongCode } from "../definer/MajhongDefine";
import { isNil } from "../../../kernel/utils/GlobalFuncs";
import CommonUtil from "../../../kernel/utils/CommonUtil";

export default class GameUtil {
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
			return "appqp/imgs/chips/cm_"+v;
		} else {
			return "appqp/imgs/chips/chouma"+v;
		}
	}

	//获取扑克图片资源路经
	public static pokerPath(v:number|string) : string {
		if(v===0x0E) { v = 0x4E; }
		if(v===0x0F) { v = 0x5F; }
		return "appqp/imgs/pokers/poker_"+v;
	}

	//获取麻将图片资源路经
	public static majhongPath(v:MajhongCode) : string {
		return "appqp/imgs/majhong/tong"+v;
	}

	//设置头像图片
	public static setHeadIcon(nd:cc.Node, v:number) {
		if(isNil(nd)) { return; }
		GameUtil.setHeadSpr(nd.getComponent(cc.Sprite), v);
	}

	//设置头像图片
	public static setHeadSpr(spr:cc.Sprite, v:number) {
		if(isNil(spr)) { return; }
		if(v!=0 && v!=1 && v<1001 && v>1008 && v<2001 && v>2008) {
			return;
		}
		
		var respath = "appqp/imgs/person/head"+v;

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

	static playAddMoney(nd:cc.Node, v:number, fromPos:cc.Vec3, diff:cc.Vec2) {
		var str = v.toString();
		nd.color = cc.color(200,45,61,255);
		if(v>0) { 
			str = "+"+v;
			nd.color = cc.color(0,145,61,255);
		}
		nd.getComponent(cc.Label).string = str;
		nd.active = true;
		nd.position = fromPos;
		nd.runAction(cc.sequence(
			cc.show(),
			cc.moveBy(1, diff),
			cc.delayTime(1),
			cc.hide()
		));
	}

}