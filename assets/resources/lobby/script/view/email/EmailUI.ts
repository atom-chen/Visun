import BaseComp from "../../../../../script/kernel/gui/BaseComp";
import TimerManager from "../../../../../script/kernel/timer/TimerManager";
import Caller from "../../../../../script/kernel/promise/Caller";
import UIManager from "../../../../../script/kernel/gui/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmailUI extends BaseComp {
	onLoad() {
		TimerManager.instance().addFrameTimer(1, new Caller(function(a){
			UIManager.toast("----"+a)
		}, null), 5);
	}
}
