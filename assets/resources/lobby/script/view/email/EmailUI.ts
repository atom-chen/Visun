import BaseComp from "../../../../../script/kernel/view/BaseComp";
import TimerManager from "../../../../../script/kernel/timer/TimerManager";
import Caller from "../../../../../script/kernel/promise/Caller";
import UIManager from "../../../../../script/kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmailUI extends BaseComp {
	onLoad() {
		TimerManager.instance().addFrameTimer(1, new Caller(function(a){
			UIManager.toast("----"+a)
		}, null), 5);
	}
}
