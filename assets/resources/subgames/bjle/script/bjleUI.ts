import BaseComp from "../../../../script/kernel/view/BaseComp";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";
import SceneManager from "../../../../script/kernel/view/SceneManager";
import WsCore from "../../../../script/kernel/net/WsCore";
import EventCenter from "../../../../script/kernel/event/EventCenter";
import GameUtil from "../../../lobby/script/utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class bjleUI extends BaseComp {
	_players : any[] = [];

	onLoad () {
		CommonUtils.traverseNodes(this.node, this.m_ui);

		CommonUtils.addClickEvent(this.m_ui.btn_close, function(){ 
            WsCore.request("MSG_USER_LEAVE_ROOM_REQUEST", {});
        }, this);

		var rule = [1,10,20,100,500];
		this.m_ui.ChipBox.getComponent("ChipBox").setChipValues(rule);

		EventCenter.instance().listen("MSG_USER_LEAVE_ROOM_PUSH", this.MSG_USER_LEAVE_ROOM_PUSH, this);
		EventCenter.instance().listen("MSG_GAME_OTHER_BET_ACK", this.MSG_GAME_OTHER_BET_ACK, this);
		EventCenter.instance().listen("MSG_GAME_ROOM_START_PUSH", this.MSG_GAME_ROOM_START_PUSH, this);
		EventCenter.instance().listen("MSG_JOIN_COIN_ACK", this.MSG_JOIN_COIN_ACK, this);
		EventCenter.instance().listen("MSG_GAME_ADD_BET_ACK", this.MSG_GAME_ADD_BET_ACK, this);
	}

	private findPlayer(userId) {
		for(var i=0, len=this._players.length; i<len; i++) {
			if(this._players[i].getUserId()==userId) {
				return this._players[i];
			}
		}
		return null;
	}

	private bet(userId:number, areaId:number, money:number) {
		var self = this;

		var comp = this.findPlayer(userId);
		if(!comp){ cc.log("find player fail"); return; }
		if(!areaId || !money){ cc.log("arguments errer", areaId, money); return; }
		comp = comp.node;
		var area = this.m_ui["area"+areaId];
		if(!area){ cc.log("no area: ", areaId); return; }

		var margin = { left:5,right:5,bottom:5,top:5 };
		
		//todo: 须 改为ChipSpr预制体 + 对象池
		cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, function (err, atlas) {
			if(err) { cc.log("error: "+err); return; }
			var flys = GameUtil.parseChip(money);
			for(var i=0; i<flys.length; i++){
				var name = CommonUtils.getFrameName("common/imgs/chip/chip_"+flys[i]);
				if(!atlas.getSpriteFrame(name)){ return; }
				var chip = new cc.Node();
				chip.scale = 0.4
				chip.addComponent(cc.Sprite);
				chip.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
				self.m_ui["chiplayer"].addChild(chip);
				GameUtil.flyChip2(chip, comp, area, 0.25, margin);
			}
		});
	}

	private MSG_USER_LEAVE_ROOM_PUSH(info) {
		SceneManager.turn2Scene("LobbyScene");
	}

	private MSG_GAME_OTHER_BET_ACK(info) {
		var comp = this.findPlayer(info.userId);
		if(!comp){ return; }
	}

	private MSG_GAME_ADD_BET_ACK(info) {
		try{
			this.bet(info.userId, info.betPos, info.betValue);
		}finally{

		}
	}

	private MSG_GAME_ROOM_START_PUSH(info) {

	}

	private MSG_JOIN_COIN_ACK(info){
		for(var i=0; i<info.richManList.length; i++){
			var comp = this.m_ui["richman"+(i+1)].getComponent("PlayerUI");
			comp.setUserId(info.richManList[i].userId);
			comp.label_name.string = info.richManList[i].nickname;
			comp.label_money.string = info.richManList[i].coin.toString();
			this._players[i] = comp;
		}
		this.m_ui.HeroUI.getComponent("HeroUI").label_name.string = info.player.nickname
		this.m_ui.HeroUI.getComponent("HeroUI").label_id.string = info.player.coin.toString();
	}
}
