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

    onLoad () {
        cc.log("UIloading.onLoad");
        this.loading.node.runAction(cc.repeatForever(cc.rotateBy(1, 360)));
    }

    onUiLoadingProgress(sub:number, total:number) {
        this.labelProgress.string = sub + "/" + total;
    }

    onDestroy() {
        cc.error("donnot delete me");
    }
}
