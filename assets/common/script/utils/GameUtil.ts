import { MajhongCode } from "../definer/MajhongDefine";
import { isNil, newHandler } from "../../../kernel/utils/GlobalFuncs";
import GameConfig from "../definer/GameConfig";
import TimerManager from "../../../kernel/basic/timer/TimerManager";
import { PokerCode } from "../definer/PokerDefine";

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
				chips.push(chipRule[0]);
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

	public static splitChip(total:number, chipRule?:number[]) : number[] {
		if(!chipRule) {
			chipRule = this.CHIP_RULE;
		}
		var tmpRule = [];
		for(var i=0; i<chipRule.length; i++) {
			if(total > chipRule[i]) {
				tmpRule.push(chipRule[i]);
			}
		}
		if(tmpRule.length > 1 && total < tmpRule[tmpRule.length-1]*2) {
			tmpRule.splice(tmpRule.length-1, 1);
		}
		return GameUtil.parseChip(total, tmpRule);
	}

	//获取筹码图片资源路经
	public static chipPath(v:number|string, b3d:boolean) : string {
		if(b3d) {
			return "appqp/imgs/chips2/cm"+v;
		} else {
			return "appqp/imgs/chips2/cmz"+v;
		}
	}

	//获取扑克图片资源路经
	public static pokerPath(v:number|string, style:number) : string {
		if(v===0x0E) { v = 0x4E; }
		if(v===0x0F) { v = 0x5F; }
		if(style == 1) {
			return "appqp/imgs/pokers1/poker1_"+v;
		} else {
			cc.warn("no poker style: ", style);
		}
	}

	//获取麻将图片资源路经
	public static majhongPath(v:number) : string {
		if(v == 0) {
			return "appqp/imgs/majhong/mjback1";
		}
		if(v===0x0A || v===0x1A || v===0x2A || v===0x3A) {
			return "appqp/imgs/majhong/baiban1";
		}

		if(v>=0x31 && v<=0x39) {
			var n = v - 0x30;
			return "appqp/imgs/majhong/tong"+n;
		}

		if(v >= MajhongCode.TONG_1 && v <= MajhongCode.TONG_9) {
			return "appqp/imgs/majhong/tong"+v;
		}
		else if(v >= MajhongCode.WAN_1 && v <= MajhongCode.WAN_9) {
			return "appqp/imgs/majhong/wan"+v;
		}
		else {
			return "appqp/imgs/majhong/tiao"+v;
		}
	}

	//设置头像图片
	public static setHeadIcon(nd:cc.Node, v:number) {
		if(isNil(nd)) { return; }
		GameUtil.setHeadSpr(nd.getComponent(cc.Sprite), v);
	}

	//设置头像图片
	public static setHeadSpr(spr:cc.Sprite, v:number) {
		if(isNil(spr)) { return; }
		if(isNil(v)) {
			cc.warn("无效的头像ID: ", v);
			return;
		}
		if( !(v==0 || v==1 || (v>=1001 && v<=1008) || (v>=2001 && v<2008)) ) {
			cc.warn("无效的头像ID：", v);
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
		nd.stopAllActions();
		nd.position = fromPos;
		nd.runAction(cc.sequence(
			cc.show(),
			cc.moveBy(0.5, diff),
			cc.delayTime(1),
			cc.hide()
		));
	}

	static roomNameByLevel(lvl:number) {
		if(isNil(lvl)) { lvl = 0; }
		if(lvl==0) {
			return "新手场";
		} else if(lvl==1) {
			return "初级场";
		} else if(lvl==2) {
			return "中级场";
		} else if(lvl==3) {
			return "高级场";
		} else if(lvl==4) {
			return "至尊场";
		} else if(lvl==5) {
			return "王者场";
		} else if(lvl==6) {
			return "赌神场";
		}
	}

	//------游戏通用资源预加载----------------------------------------------------
	private static flagGameIcons = false;
	static loadGameIcons() {
		if(this.flagGameIcons){return;}
		this.flagGameIcons = true;
		var i = 1;
		for(var k in GameConfig) {
			i += 2;
			TimerManager.delayFrame(i, newHandler(function(tmr, kk){
			//	cc.log("---preload---", GameConfig[kk].icon);
				cc.loader.loadRes(GameConfig[kk].icon, cc.SpriteFrame);
			}, GameUtil, k));
		}
	}

	private static flagChipIcons = false;
	static loadChipIcons() {
		if(this.flagChipIcons){ return; }
		this.flagChipIcons = true;
		var n = 2;
		for(var i in GameUtil.CHIP_RULE) {
			n += 2;
			TimerManager.delayFrame(n, newHandler(function(tmr, ii){
				var respath1 = GameUtil.chipPath(GameUtil.CHIP_RULE[ii], true);
				cc.loader.loadRes(respath1, cc.SpriteFrame);
				var respath2 = GameUtil.chipPath(GameUtil.CHIP_RULE[ii], false);
				cc.loader.loadRes(respath2, cc.SpriteFrame);
			//	cc.log("---preload---", respath1);
			//	cc.log("---preload---", respath2);
			}, GameUtil, i));
		}
	}

	private static flagPokers = false;
	static loadPokers() {
		if(this.flagPokers){ return; }
		this.flagPokers = true;
		var n = 3;
		for(var k in PokerCode) {
			if(typeof PokerCode[k] == typeof(1)) {
				n += 2;
				TimerManager.delayFrame(n, newHandler(function(tmr, kk){
					cc.loader.loadRes(GameUtil.pokerPath(PokerCode[kk], 1), cc.SpriteFrame);
				}, GameUtil, k));
			}
		}
	}

	private static flagMj = false;
	static loadMj() {
		if(this.flagMj){ return; }
		this.flagMj = true;
		var n = 4;
		for(var k in MajhongCode) {
			if(typeof MajhongCode[k] == typeof(1)) {
				n += 4;
				TimerManager.delayFrame(n, newHandler(function(tmr, kk){
					//@ts-ignore
					cc.loader.loadRes(GameUtil.majhongPath(MajhongCode[kk]), cc.SpriteFrame);
				}, GameUtil, k));
			}
		}
	}

	static loadAllGameRes() {
		GameUtil.loadGameIcons();
        GameUtil.loadChipIcons();
        GameUtil.loadPokers();
        GameUtil.loadMj();
	}

}