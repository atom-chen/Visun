import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LonghuUI extends BaseComponent {
	private tmrState = 0;

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		this.initUIEvent();
		this.initNetEvent();
		this.toStateReady();
	}

	private onStateTimer(tmr:BaseTimer) {
		this.m_ui.lab_cd.getComponent(cc.Label).string = tmr.getRemainTimes().toString();
	}

	private toStateReady() {
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.addSecondTimer(1, 10, new CHandler(this, this.onStateTimer))
	}

	private toStateFapai() {

	}

	private toStateBetting() {

	}

	private toStateOpen() {

	}

	private toStateReward() {

	}

	private initNetEvent() {

	}

	private initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
	}
	
}