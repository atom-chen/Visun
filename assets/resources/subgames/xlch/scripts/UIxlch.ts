import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { newHandler } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CpnFrameAni from "../../../appqp/script/comps/CpnFrameAni";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIxlch extends BaseComponent {

    start() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initNetEvent();
        this.initUIEvent();
        TimerManager.delaySecond(3, newHandler(function(){
            this.m_ui.sprZhan.getComponent(CpnFrameAni).setAni("zhan", 9, 1, 6);
        }, this));
    }

    initNetEvent() {

    }

    initUIEvent() {

    }

}
