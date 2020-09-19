import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import CpnCircleCD from "../../../../appqp/script/comps/CpnCircleCD";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../../kernel/view/UIManager";


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

	getNextIndex(curIdx:number) {
		var nextIdx = curIdx + 1;
		if(nextIdx >= MAX_PLAYER) { nextIdx = 0; }
		return nextIdx;
	}

	toStateFight(idx:number) {
		//当前操作者倒计时
		for(var i=0; i<MAX_PLAYER; i++) {
			this._pnList[i].CpnCircleCD.active = idx===i;
			if(idx===i) {
				this._pnList[i].CpnCircleCD.getComponent(CpnCircleCD).setRemainCD(15, 15);
			}
		}

		//5秒后下一个
		TimerManager.delaySecond(5, new CHandler(this, ()=>{
			this.toStateFight(this.getNextIndex(idx));
		}))
	}

	initNetEvent() {

	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.Suoha});
		}, this);
	}
	
}
