//---------------------------------
// 永驻节点
//---------------------------------
import KernelEvent from "../../kernel/basic/defines/KernelEvent";
import EventCenter from "../../kernel/basic/event/EventCenter";
import TimerManager from "../../kernel/basic/timer/TimerManager";
import CommonUtil from "../../kernel/utils/CommonUtil";
import { newHandler } from "../../kernel/utils/GlobalFuncs";
import InitLogic from "./InitLogic";


const {ccclass, property} = cc._decorator;

@ccclass
export default class AppNode extends cc.Component {
    private m_ui: {[key:string]:cc.Node} = {};
    private labProg: cc.Label = null;
    private _tmr: number = 0;

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        InitLogic.run(this);

        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.labProg = this.m_ui.labelProg.getComponent(cc.Label);

        this.onUiLoadingBegin();

        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_BEGIN, this.onUiLoadingBegin, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_PROGRESS, this.onUiLoadingProgress, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_FINISH, this.onUiLoadingFinish, this);
    }

    onUiLoadingBegin() {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.m_ui.UILoading.active = true;
        this.m_ui.sprLoading.runAction(cc.repeatForever(cc.rotateBy(1, 360)));
    }

    onUiLoadingProgress(sub:number, total:number) {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.labProg.string = sub + "/" + total;
    }

    onUiLoadingFinish() {
        this._tmr = TimerManager.delayFrame(3, newHandler(function(tmr){
            this.m_ui.UILoading.active = false;
        }, this));
    }

}
