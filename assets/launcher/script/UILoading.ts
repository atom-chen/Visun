import LoadCenter from "../../kernel/load/LoadCenter";
import EventCenter from "../../kernel/basic/event/EventCenter";
import KernelEvent from "../../kernel/basic/defines/KernelEvent";
import CHandler from "../../kernel/basic/datastruct/CHandler";
import TimerManager from "../../kernel/basic/timer/TimerManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UILoading extends cc.Component {
    @property(cc.Label)
    labelProgress: cc.Label = null;

    @property(cc.Sprite)
    loading: cc.Sprite = null;

    private _tmr: number = 0;

    onLoad () {
        LoadCenter.getInstance().retainNodeRes(this.node);
        cc.log("显示加载页");
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_BEGIN, this.onBeforeSwitch, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_PROGRESS, this.onProgress, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_FINISH, this.onHideView, this);
        this.loading.node.runAction(cc.repeatForever(cc.rotateBy(1, 360)));
    }

    private onBeforeSwitch() {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.node.active = true;
        this.labelProgress.string = "";
    }

    private onProgress(sub:number, total:number) {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.labelProgress.string = sub + "/" + total;
        if(sub===total || total == 0) {
            this._tmr = TimerManager.delayFrame(2, new CHandler(this, this.onHideView));
        }
    }

    private onHideView() {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.node.active = false;
    }

    onDestroy() {
        cc.error("donnot delete me");
        EventCenter.getInstance().removeByTarget(this);
        TimerManager.delTimer(this._tmr);
    }
}
