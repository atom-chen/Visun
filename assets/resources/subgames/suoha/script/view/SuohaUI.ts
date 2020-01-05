import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnCircleCD from "../../../../../common/script/comps/CpnCircleCD";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";


var MAX_PLAYER = 5;

const {ccclass, property} = cc._decorator;

@ccclass
export default class SuohaUI extends BaseComponent {
	_pnList:Array<{[key:string]:cc.Node}> = [];

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		for(var i=0; i<MAX_PLAYER; i++) {
			this._pnList[i] = {};
			CommonUtil.traverseNodes(this.m_ui["p"+i], this._pnList[i]);
		}

		this.initUIEvent();
		this.initNetEvent();

		this.toStateFight(0);
	}

	toStateFight(idx:number) {
		for(var i=0; i<MAX_PLAYER; i++) {
			this._pnList[i].CpnCircleCD.active = idx===i;
			if(idx===i) {
				this._pnList[i].CpnCircleCD.getComponent(CpnCircleCD).setRemainCD(15, 15);
			}
		}

		TimerManager.delaySecond(5, new CHandler(this, ()=>{
			var nextIdx = idx+1;
			if(nextIdx >= MAX_PLAYER) { nextIdx = 0; }
			this.toStateFight(nextIdx);
		}))
	}

	initNetEvent() {

	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
	}
	
}
