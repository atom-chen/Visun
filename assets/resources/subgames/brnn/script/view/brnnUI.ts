import BaseComponent from "../../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../../common/script/model/GameManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import CpnChipbox3d from "../../../../appqp/script/comps/CpnChipbox3d";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import CpnHandcard from "../../../../appqp/script/comps/CpnHandcard";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import { brcowcow_msgs, brcowcow_request } from "../../../../../common/script/proto/net_brcowcow";
import { brcowcow } from "../../../../../../declares/brcowcow";
import { isNil, newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../../common/script/model/LoginUser";



var margin = { left:16,right:16,bottom:16,top:16 };
var testdata = [ 
	{AreaId:1,Money:25280}, 
	{AreaId:2,Money:28650}, 
	{AreaId:3,Money:26455}, 
	{AreaId:4,Money:24255} 
];

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComponent {

	compBox:CpnChipbox3d = null;
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
	});
	
	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.traverseLabels(this.node, this.m_lab);

		var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loadedRes = loadedRes;
		});

		this.compBox = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d);
		this.compBox.setChipValues([1,2,5,10,50])

		this.initNetEvent();
		this.initUIEvent();

		AudioManager.getInstance().playMusicAsync("appqp/audios/music_bg", true);
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

	private onStateTimer(tmr:BaseTimer) {
		this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();

		if(tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("appqp/audios/countdown", false);
	}

	private BrcowcowBetResp(param:brcowcow.BrcowcowBetResp) {
		if(isNil(param)) { return; }
		var money = param.Money;
		if(param.UserId == LoginUser.getInstance().UserId) {
			var idx = this.compBox.getIndexByMoney(money);
			if(idx < 0) {
				idx = this.compBox.getSelectedIndex();
			}
			if(idx >= 1) {
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(this._rule[idx-1], true);
				this.m_ui.chipLayer.addChild(chip);
				CommonUtil.lineTo1(chip, this.compBox.getChipNode(idx), this.m_ui["area"+param.Area], 0.2, 0, margin);
			}
		} else {
			this.onPlayersBet(param)
		}
	}
	private onPlayersBet(param:brcowcow.BrcowcowBetResp) {
		CommonUtil.playShake(this.m_ui.btnPlayerlist, 0.2, 1);
		//飞筹码
		var nums = GameUtil.parseChip(param.Money, this._rule);
		for(var j = 0; j < nums.length; j++) {
			var chip = this._pool.newObject();
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);
			chip.__areaId = param.Area;
			CommonUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["area"+param.Area], 0.14+0.1*param.Area, j*0.01, margin);
		}
		//播音效
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
	}

	private BrcowcowOverResp(param:brcowcow.BrcowcowOverResp) {
		if(isNil(param)) { return; }
		AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();

		var cardlist = [param.BankerCard, param.TianCard, param.DiCard, param.XuanCard, param.HuangCard];
		for(var i = 0; i < cardlist.length; i++) {
			this.m_ui["CpnHandcard"+(i+1)].getComponent(CpnHandcard).resetCards(cardlist[i].Cards, true);
		}

		TimerManager.delaySecond(1, newHandler(this.playCollect, this, param));
	}
	private playCollect(tmr, param) {
		//收集筹码
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);

		var self = this;
		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					var pos = CommonUtil.convertSpaceAR(this.m_ui["area"+childs[i].__areaId], this.m_ui.chipLayer);
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

	private BrcowcowStateFree(param:brcowcow.BrcowcowStateFree) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards(null, false);
	}

	private BrcowcowStateStart(param:brcowcow.BrcowcowStateStart) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setFapai();
	}

	private BrcowcowStatePlaying(param:brcowcow.BrcowcowStatePlaying) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);
	}

	private BrcowcowStateOver(param:brcowcow.BrcowcowStateOver) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateFree, this.BrcowcowStateFree, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateStart, this.BrcowcowStateStart, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStatePlaying, this.BrcowcowStatePlaying, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateOver, this.BrcowcowStateOver, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowBetResp, this.BrcowcowBetResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowOverResp, this.BrcowcowOverResp ,this);
	}

	private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 

		}, this);

		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.area3, function(){ this.onClickArea(3); }, this);
		CommonUtil.addClickEvent(this.m_ui.area4, function(){ this.onClickArea(4); }, this);
	}
	private onClickArea(areaId:number) {
		var idx = this.compBox.getSelectedIndex();
		brcowcow_request.BrcowcowBetReq({Area:areaId, Money:this._rule[idx-1]})
	}

}
