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

        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_BEGIN, this.onUiLoadingBegin, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_PROGRESS, this.onUiLoadingProgress, this);
        EventCenter.getInstance().listen(KernelEvent.UI_LOADING_FINISH, this.onUiLoadingFinish, this);

        this.m_ui.UILoading.active = !cc.sys.isNative;
    }

    onUiLoadingBegin(loadingType:number) {
        cc.log("loading begin...", loadingType);
        this._tmr = TimerManager.delTimer(this._tmr);
        this.m_ui.UILoading.active = true;
        this.labProg.string = "";
        this.m_ui.bg0.active = loadingType === 2;
        this.m_ui.bg1.active = loadingType === 1;

        // this.m_ui.sprLoading.active = loadingType === 1;
        // if(loadingType===1) {
        //     this.m_ui.sprLoading.runAction(cc.repeatForever(cc.rotateBy(1, 360)));
        // }
        this.m_ui.sprLoading.runAction(cc.repeatForever(cc.rotateBy(1, 360)));

        TimerManager.delayFrame(2, newHandler(function(tmr){
            var comp:cc.Widget = this.m_ui.UILoading.getComponent(cc.Widget);
            comp.updateAlignment();
        }, this))
    }

    onUiLoadingProgress(sub:number, total:number) {
        this._tmr = TimerManager.delTimer(this._tmr);
        this.labProg.string = sub + "/" + total;
    }

    onUiLoadingFinish() {
        cc.log("loading finish...");
        this._tmr = TimerManager.delayFrame(3, newHandler(function(tmr){
            this.m_ui.UILoading.active = false;
        }, this));
    }

}
