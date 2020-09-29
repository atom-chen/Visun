import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { newHandler } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CpnDice from "../../../appqp/script/comps/CpnDice";
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
        this.m_ui.ndDice1.getComponent(CpnDice).setDiceValue(3,true);
        this.m_ui.ndDice2.getComponent(CpnDice).setDiceValue(5,true);
    }

    initNetEvent() {

    }

    initUIEvent() {

    }

    //-------tests------------
    toStateReady() {

    }

    toStateFapai() {

    }

    toStateFight(idx:number) {

    }

    toStateKaipai() {

    }

    toStateJiesuan() {
        
    }

}
