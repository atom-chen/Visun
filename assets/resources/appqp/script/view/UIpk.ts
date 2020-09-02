import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import GameUtil from "../../../../common/script/utils/GameUtil";
import Preloader from "../../../../kernel/utils/Preloader";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import { newHandler } from "../../../../kernel/utils/GlobalFuncs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIpk extends BaseComponent {
    private pPos;
    private kPos;

    onLoad() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.pPos = this.m_ui.pk_p.position;
        this.kPos = this.m_ui.pk_k.position;
        this.m_ui.pk_p.x = -750;
        this.m_ui.pk_k.x = 750;
    }

    setViewData(info) {
        GameUtil.setHeadIcon(this.m_ui.sprP, info.phead);
        this.m_ui.labP.getComponent(cc.Label).string = info.pname;
        GameUtil.setHeadIcon(this.m_ui.sprK, info.khead);
        this.m_ui.labK.getComponent(cc.Label).string = info.kname;
        
        this.m_ui.pk_p.runAction(cc.sequence(
            cc.delayTime(0.1),
            cc.moveTo(0.2, this.pPos)
        ));
        this.m_ui.pk_k.runAction(cc.sequence(
            cc.delayTime(0.1),
            cc.moveTo(0.2, this.kPos),
            cc.callFunc(function(){
                Preloader.showSpineAsync("appqp/spines/headflower/ky_lhd_js", 0, "1", 3, this.m_ui[info.winner], null);
            }, this)
        ));

        TimerManager.delaySecond(3.1, newHandler(function(){ CommonUtil.safeDelete(this); }, this));
    }

}
