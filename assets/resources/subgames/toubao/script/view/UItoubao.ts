import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChipbox3d from "../../../../appqp/script/comps/CpnChipbox3d";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import { brtoubao } from "../../../../../../declares/brtoubao";
import Preloader from "../../../../../kernel/utils/Preloader";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";


var margin = { rx:10, ry:10 };
var testdata = [ 
	{AreaId:0,Money:5280},
	{AreaId:1,Money:5280},
	{AreaId:2,Money:8650},
	{AreaId:3,Money:6455},
	{AreaId:4,Money:4255},
	{AreaId:5,Money:5280},
	{AreaId:6,Money:5280},
	{AreaId:7,Money:8650},
	{AreaId:8,Money:6455},
	{AreaId:9,Money:4255},
	{AreaId:10,Money:5280},
	{AreaId:11,Money:5280},
	{AreaId:12,Money:8650},
	{AreaId:13,Money:6455},
	{AreaId:14,Money:4255},
	{AreaId:15,Money:5280},
	{AreaId:16,Money:5280},
	{AreaId:17,Money:8650},
	{AreaId:18,Money:6455},
	{AreaId:19,Money:4255},
	{AreaId:20,Money:5280},
	{AreaId:21,Money:5280},
	{AreaId:22,Money:8650},
	{AreaId:23,Money:6455},
	{AreaId:24,Money:4255},
];

const {ccclass, property} = cc._decorator;

@ccclass
export default class ToubaoUI extends BaseComponent {

	compBox:CpnChipbox3d = null;
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.14;
		return obj;
	});
	touzilist = [];
	touziposlist = [];
	touziscalelist = [];
	
	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

		for(var i=0; i<3; i++) {
			this.touzilist.push(this.m_ui["touzi"+i]);
			this.touziposlist.push(this.m_ui["touzi"+i].position);
			this.touziscalelist.push(this.m_ui["touzi"+i].scale);
		}

		var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loadedRes = loadedRes;
		});

		this.compBox = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d);

		this.initNetEvent();
		this.initUIEvent();

		this.toStateReady();

		AudioManager.getInstance().playMusicAsync("appqp/audios/music_bg", true);
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

	private onStateTimer(tmr:BaseTimer) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	private playTipBetting() {
		// var childs = this.m_ui.highLayer.children;
		// for (var i in childs) {
		// 	childs[i].runAction(cc.blink(1, 3));
		// }
		this.m_ui.highLayer.runAction(cc.sequence(cc.blink(1, 3), cc.hide()));
	}

	//准备阶段
	private toStateReady() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(0);
		this.m_ui.tzNode.active = false;
		this.m_ui.hg_shaibao.getComponent(sp.Skeleton).setAnimation(0, "shake", false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.delaySecond(3, new CHandler(this, (tmr:BaseTimer)=>{
			this.toStateBetting();
			this.playTipBetting();
		}));
	}

	//下注阶段
	private toStateBetting() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(2);
		AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);

		this.m_ui.tzNode.active = false;
		this.m_ui.hg_shaibao.getComponent(sp.Skeleton).setAnimation(0, "wait", true);

		Preloader.showSpineAsync("appqp/spines/startani/skeleton", 0, "animation", 1, this.node, {zIndex:10, x:0, y:160, scale:0.5}, {
			on_complete: (sk, trackEntry)=>{
				CommonUtil.safeDelete(sk);
			}
		});

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 10, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(1, 9, new CHandler(this, this.onPlayersBet));
		TimerManager.delaySecond(10, new CHandler(this, (tmr:BaseTimer)=>{
			this.toStateJiesuan();
		}));
	}

	private playJiesuan() {
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);
		var self = this;
		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					var pos = CommonUtil.convertSpaceAR(this.m_ui["betBtn"+childs[i].__areaId], this.m_ui.chipLayer);
					childs[i].runAction(cc.sequence(
						cc.moveTo(0.3, cc.v2(pos.x, pos.y)),
						cc.callFunc(function(obj){
							self._pool.delObject(obj);
						}, childs[i])
					))
				}
			}, this)
		));
	}

	private setPoints(points:Array<number>) {
		if(isNil(points) || points.length < 3) {
			return;
		}
		for(var i=0; i<3; i++) {
			Preloader.setNodeSprite(this.touzilist[i].getComponent(cc.Sprite), "appqp/imgs/games/saizi"+points[i], this);
		}
	}
	//结算阶段
	private toStateJiesuan() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(4);
		AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);

		//开拍动画
		this.m_ui.hg_shaibao.getComponent(sp.Skeleton).setAnimation(0, "open", false);
		this.m_ui.tzNode.active = true;
		this.setPoints([
			CommonUtil.getRandomInt(1,6),
			CommonUtil.getRandomInt(1,6),
			CommonUtil.getRandomInt(1,6),
		]);
		for(var n=0; n<3; n++) {
			this.touzilist[n].scale = this.touziscalelist[n];
			this.touzilist[n].position = this.touziposlist[n];
			this.touzilist[n].runAction(cc.sequence(
				cc.hide(),
				cc.delayTime(0.4),
				cc.show(),
				cc.delayTime(1.3),
				cc.spawn(
					cc.scaleTo(0.3, 2),
					cc.moveTo(0.3, cc.v2((n-1)*100, -120))
				),
				cc.delayTime(0.5),
				cc.spawn(
					cc.scaleTo(0.3, 0.8),
					cc.moveTo(0.3, cc.v2((n-1)*38+200, -4))
				)
			));
		}
		

		this.playJiesuan();

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 5, new CHandler(this, this.onStateTimer), true);
		TimerManager.delaySecond(5, new CHandler(this, ()=>{
			this.toStateReady();
		}));
	}

	private onPlayersBet(tmr:BaseTimer, param:any) {
		CommonUtil.playShake(this.m_ui.btnPlayerlist, 0.2, 1);
		//飞筹码
		param = param || testdata;
		for(var i in param) {
			var info = param[i];
			var nums = GameUtil.parseChip(info.Money, this._rule);
			for(var j in nums) {
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(nums[j], true);
				this.m_ui.chipLayer.addChild(chip);
				chip.__areaId = info.AreaId;
				CommonUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["betBtn"+info.AreaId], 0.14+0.02*info.AreaId, parseInt(j)*0.01, margin);
			}
		}
		//播音效
		if(tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("appqp/audios/countdown", false);
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
	}

	private initNetEvent() {
		
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            GameManager.getInstance().quitGame(true);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn0, function(){ this.onClickArea(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn2, function(){ this.onClickArea(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn3, function(){ this.onClickArea(3); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn4, function(){ this.onClickArea(4); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn5, function(){ this.onClickArea(5); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn6, function(){ this.onClickArea(6); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn7, function(){ this.onClickArea(7); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn8, function(){ this.onClickArea(8); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn9, function(){ this.onClickArea(9); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn10, function(){ this.onClickArea(10); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn11, function(){ this.onClickArea(11); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn12, function(){ this.onClickArea(12); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn13, function(){ this.onClickArea(13); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn14, function(){ this.onClickArea(14); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn15, function(){ this.onClickArea(15); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn16, function(){ this.onClickArea(16); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn17, function(){ this.onClickArea(17); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn18, function(){ this.onClickArea(18); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn19, function(){ this.onClickArea(19); }, this);

		CommonUtil.addClickEvent(this.m_ui.betBtn20, function(){ this.onClickArea(20); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn21, function(){ this.onClickArea(21); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn22, function(){ this.onClickArea(22); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn23, function(){ this.onClickArea(23); }, this);
		CommonUtil.addClickEvent(this.m_ui.betBtn24, function(){ this.onClickArea(24); }, this);
	}
	onClickArea(idx) {
		cc.log("投", idx);
		//brtoubao_request.BrtoubaoBetReq({})
	}

}