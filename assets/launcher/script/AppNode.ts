//---------------------------------
// 永驻节点
//---------------------------------
import KernelEvent from "../../kernel/basic/defines/KernelEvent";
import EventCenter from "../../kernel/basic/event/EventCenter";
import TimerManager from "../../kernel/basic/timer/TimerManager";
import { newHandler } from "../../kernel/utils/GlobalFuncs";
import InitLogic from "./InitLogic";
import UILoading from "./UILoading";


const {ccclass, property} = cc._decorator;

@ccclass
export default class AppNode extends cc.Component {
    private _tmr: number = 0;

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        InitLogic.run(this);

        this.onUiLoadingBegin();

        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_BEGIN, this.onUiLoadingBegin, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_PROGRESS, this.onUiLoadingProgress, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_FINISH, this.onUiLoadingFinish, this);
    }

    onUiLoadingBegin() {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.node.getChildByName("UILoading").active = true;
    }

    onUiLoadingProgress(sub:number, total:number) {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.node.getChildByName("UILoading").getComponent(UILoading).onUiLoadingProgress(sub, total);
    }

    onUiLoadingFinish() {
        this._tmr = TimerManager.delayFrame(3, newHandler(function(tmr){
            this.node.getChildByName("UILoading").active = false;
        }, this));
    }

}
