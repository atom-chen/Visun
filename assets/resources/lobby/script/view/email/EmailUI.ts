import BaseComponent from "../../../../../kernel/view/BaseComponent";
import TimerManager from "../../../../../kernel/timer/TimerManager";
import UIManager from "../../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmailUI extends BaseComponent {
	onLoad() {
		TimerManager.instance().addFrameTimer(1, function(a){
			UIManager.toast("----"+a)
		}, null, 5);
	}
}
