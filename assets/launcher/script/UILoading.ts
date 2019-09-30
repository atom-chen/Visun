import LoadCenter from "../../kernel/load/LoadCenter";
import EventCenter from "../../kernel/event/EventCenter";
import KernelEvent from "../../kernel/looker/KernelEvent";
import TimerManager from "../../kernel/timer/TimerManager";
import CHandler from "../../kernel/basic/CHandler";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UILoading extends cc.Component {
    @property(cc.Label)
    labelProgress: cc.Label = null;

    private _tmr: number;

    onLoad () {
        LoadCenter.getInstance().retainNodeRes(this.node);
        cc.log("显示加载页");
        EventCenter.getInstance().listen(KernelEvent.SCENE_BEFORE_SWITCH, this.onBeforeSwitch, this);
    //    EventCenter.getInstance().listen(KernelEvent.SCENE_AFTER_SWITCH, ()=>{ this.node.active=false; }, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING, this.onProgress, this);
    }

    private onBeforeSwitch() {
        TimerManager.delTimer(this._tmr);
        this._tmr = 0;
        this.node.active = true;
        this.labelProgress.string = "资源加载中";
    }

    private onProgress(sub:number, total:number) {
        //cc.log("========", sub, total);
        TimerManager.delTimer(this._tmr);
        this._tmr = 0;
        this.labelProgress.string = sub + "/" + total;
        if(sub===total) {
            TimerManager.delayFrame(5, new CHandler(this, (tmr)=>{
                this._tmr = 0;
                this.node.active = false;
            }));
        }
    }

    onDestroy() {
        cc.error("donnot delete me");
        EventCenter.getInstance().removeByTarget(this);
    }
}
