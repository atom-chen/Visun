import BaseComponent from "../../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../../common/script/model/GameManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import CpnChipbox3d from "../../../../appqp/script/comps/CpnChipbox3d";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import CpnHandcard from "../../../../appqp/script/comps/CpnHandcard";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import { brcowcow_msgs, brcowcow_request } from "../../../../../common/script/proto/net_brcowcow";
import { brcowcow } from "../../../../../../declares/brcowcow";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../../common/script/model/LoginUser";
import UIManager from "../../../../../kernel/view/UIManager";
import BrnnMgr from "../model/BrnnMgr";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";


var margin = { left:16,right:16,bottom:16,top:16 };


const {ccclass, property} = cc._decorator;

@ccclass
export default class BrnnUI extends BaseComponent {

	compBox:CpnChipbox3d = null;
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.2;
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
		this.compBox.setChipValues(this._rule);

		this.initNetEvent();
		this.initUIEvent();

		AudioManager.getInstance().playMusicAsync("appqp/audios/music_bg", true);

		this.GoldChangeInfo(null);

		this.initContext();
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

	private initContext() {
		var enterData = BrnnMgr.getInstance().getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				var areaName = "area"+(i+1);
				this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = enterData.AreaBets[i];
				this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = enterData.MyBets[i];
			}
		}
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
		var money = CommonUtil.fixRealMoney(param.Money);
		var nums = GameUtil.parseChip(money, this._rule);
		var fromObj = this.m_ui.btnPlayerlist;
		if(param.UserId == LoginUser.getInstance().UserId) {
            var idx = Math.max(0, this._rule.indexOf(money));
			fromObj = this.compBox.getChipNode(idx);
			this.isJoined = true;
		}
		for(var j = 0; j < nums.length; j++) {
			var chip = this._pool.newObject();
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);
			chip.__areaId = param.Area;
			CommonUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["area"+param.Area], 0.14+0.1*param.Area, j*0.01, margin);
		}
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
	}

	private BrcowcowOverResp(param:brcowcow.BrcowcowOverResp) {
		if(isNil(param)) { return; }
		AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);
		this.m_ui.CpnGameState.getComponent(CpnGameState).setKaipai();
		this.isJoined = false;

		var cardlist = [param.BankerCard, param.TianCard, param.DiCard, param.XuanCard, param.HuangCard];
		for(var i = 0; i < cardlist.length; i++) {
			this.m_ui["CpnHandcard"+(i+1)].getComponent(CpnHandcard).resetCards(cardlist[i].Cards, true);
		}
	}

	private BrcowcowCheckoutResp(param:brcowcow.BrcowcowCheckoutResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();

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

		GameUtil.playAddMoney(this.m_ui.lab_magic_money, CommonUtil.fixRealMoney(param.MySettlement), cc.v3(0,0,0), cc.v2(0, 100));
	}

	private BrcowcowStateFree(param:brcowcow.BrcowcowStateFreeResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		this.m_ui.CpnHandcard1.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard2.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard3.getComponent(CpnHandcard).resetCards(null, false);
		this.m_ui.CpnHandcard4.getComponent(CpnHandcard).resetCards(null, false);
	}

	private BrcowcowStateStart(param:brcowcow.BrcowcowStateStartResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setFapai();
	}

	private BrcowcowStatePlaying(param:brcowcow.BrcowcowStatePlayingResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);
	}

	private BrcowcowStateOver(param:brcowcow.BrcowcowStateOverResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
	}

	private GoldChangeInfo(param:gamecomm.GoldChangeInfo) {
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().getMoney());
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateFreeResp, this.BrcowcowStateFree, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateStartResp, this.BrcowcowStateStart, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStatePlayingResp, this.BrcowcowStatePlaying, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowStateOverResp, this.BrcowcowStateOver, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowBetResp, this.BrcowcowBetResp, this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowOverResp, this.BrcowcowOverResp ,this);
		EventCenter.getInstance().listen(brcowcow_msgs.BrcowcowCheckoutResp, this.BrcowcowCheckoutResp, this);
	}

	private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
			if(this.isJoined) {
				UIManager.openDialog("cfmquitgame", "确认退出游戏？", 2, function(mnuId){
					if(mnuId==1) { GameManager.getInstance().quitGame(); }
				})
			} else {
				GameManager.getInstance().quitGame();
			}
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            GameManager.getInstance().quitGame(true);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.area1, function(){ this.onClickArea(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ this.onClickArea(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.area3, function(){ this.onClickArea(3); }, this);
		CommonUtil.addClickEvent(this.m_ui.area4, function(){ this.onClickArea(4); }, this);
	}
	private onClickArea(areaId:number) {
		var idx = this.compBox.getSelectedIndex();
		brcowcow_request.BrcowcowBetReq({Area:areaId, Money:CommonUtil.toServerMoney(this._rule[idx-1])})
	}

}
