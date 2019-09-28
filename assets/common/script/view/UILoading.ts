import EventCenter from "../../../kernel/event/EventCenter";
import KernelEvent from "../../../kernel/looker/KernelEvent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UILoading extends cc.Component {
    @property(cc.Label)
    labelProgress: cc.Label = null;

    onLoad () {
        cc.log("显示加载页")
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING, this.onProgress, this);
    }

    private onProgress(sub:number, total:number) {
        cc.log("========", sub, total);
        this.labelProgress.string = sub + "/" + total;
        if(sub===total) {
            this.node.destroy();
        }
    }

    onDestroy() {
        EventCenter.getInstance().removeByTarget(this);
    }
}
