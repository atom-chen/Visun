//---------------------------------
// 永驻节点
//---------------------------------
import KernelEvent from "../../kernel/basic/defines/KernelEvent";
import EventCenter from "../../kernel/basic/event/EventCenter";
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
        this.node.getChildByName("UILoading").active = true && !cc.sys.isNative;
    }

    onUiLoadingProgress(sub:number, total:number) {
        this.node.getChildByName("UILoading").getComponent(UILoading).onUiLoadingProgress(sub, total);
    }

    onUiLoadingFinish() {
        this.node.getChildByName("UILoading").active = false;
    }

}
