import BaseComponent from "../../../../../kernel/view/BaseComponent";
import ChipBox from "../../../../../common/script/view/ChipBox";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import GameManager from "../../../../../common/script/model/GameManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class bjleUI extends BaseComponent {
	_chipBox:ChipBox;
	_players : any[] = [];

	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		var rule = [1,10,20,100,500];
		this._chipBox = this.m_ui.ChipBox.getComponent(ChipBox);
		this._chipBox.setChipValues(rule);

		this.initUIEvents();
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
				var name = CommonUtil.getFrameName("common/imgs/chip/chip_"+flys[i]);
				if(!atlas.getSpriteFrame(name)){ return; }
				var chip = new cc.Node();
				chip.scale = 0.4
				chip.addComponent(cc.Sprite);
				chip.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
				self.m_ui["chiplayer"].addChild(chip);
				GameUtil.flyChip2(chip, comp, area, 0.2, margin);
			}
		});
	}
	
	private initUIEvents() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_he, function(){ 
			cc.log("和");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_xian, function(){ 
            cc.log("闲");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_zhuang, function(){ 
            cc.log("庄");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_xian_dui, function(){ 
            cc.log("闲对");
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area_zhuang_dui, function(){ 
            cc.log("庄对");
		}, this);
	}
}
