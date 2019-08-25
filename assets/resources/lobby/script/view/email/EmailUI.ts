import BaseComp from "../../../../../script/kernel/view/BaseComp";
import TimerManager from "../../../../../script/kernel/timer/TimerManager";
import UIManager from "../../../../../script/kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmailUI extends BaseComp {
	onLoad() {
		TimerManager.instance().addFrameTimer(1, function(a){
			UIManager.toast("----"+a)
		}, null, 5);
	}
}
