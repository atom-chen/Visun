import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";
import GameManager from "../../../../common/script/model/GameManager";
import AudioManager from "../../../../kernel/audio/AudioManager";
import CHandler from "../../../../kernel/basic/datastruct/CHandler";
import { BaseTimer } from "../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isNil, newHandler } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CpnGameMenu from "../../../appqp/script/comps/CpnGameMenu";
import CpnGameState from "../../../appqp/script/comps/CpnGameState";
import CpnHandcard2 from "../../../appqp/script/comps/CpnHandcard2";
import CpnPaixing from "../../../appqp/script/comps/CpnPaixing";
import CpnPlayer1 from "../../../appqp/script/comps/CpnPlayer1";
import CpnUserState from "../../../appqp/script/comps/CpnUserState";
import CpnWinLoseMoney from "../../../appqp/script/comps/CpnWinLoseMoney";


const MAX_SOLDIER = 5;
const CARD_CNT = 3;

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIjszjh extends BaseComponent {

    private tmrState = 0;
    private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
    private _userStateCpns:Array<CpnUserState> = [];
    private _handors:Array<CpnHandcard2> = [];
    private _pxCpns:Array<CpnPaixing> = [];
    private _winloses:Array<CpnWinLoseMoney> = [];
    private _cpnGameState:CpnGameState = null;

    start() {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this._cpnGameState = this.m_ui.CpnGameState2d.getComponent(CpnGameState);
        for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer").getComponent(CpnPlayer1));
            this._userStateCpns.push(nd.getChildByName("CpnUserState").getComponent(CpnUserState));
            this._handors.push(nd.getChildByName("handor").getComponent(CpnHandcard2));
            this._pxCpns.push(nd.getChildByName("CpnPaixing1").getComponent(CpnPaixing));
            this._winloses.push(nd.getChildByName("CpnWinLoseMoney").getComponent(CpnWinLoseMoney));
            this._winloses[i].stopPlay();
            this._pxCpns[i].setGameType(GameKindEnum.Zhajinhua);
        }

        this.initUIEvent();
        this.initNetEvent();
        this.m_ui.CpnGameMenu.getComponent(CpnGameMenu).setGameInfo(GameKindEnum.Jszjh, GameManager.getInstance().getGameId());

        this.toStateReady();
    }

    private onStateTimer(tmr:BaseTimer, bSound:boolean=false) {
    //    this.m_ui.lab_cd.getComponent(cc.Label).string = tmr.getRemainTimes().toString();
        if(bSound) {
            AudioManager.getInstance().playEffectAsync("appqp/audios/countdown", false);
        }
    }
    
    private resetCD(WaitTime:number, bSound:boolean=false) {
        TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, WaitTime, new CHandler(this, this.onStateTimer, bSound), true);
    }

    private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<MAX_SOLDIER; i++){
        //    if(this.getPlayerByIndex(i)) {
                this._handors[i].resetCards([0,0,0]);
                this._pxCpns[i].setCardType(-1,-1);
        //        if(!isNil(this.getPlayerByIndex(i))) {
                    var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
                    for(var j=0; j<CARD_CNT; j++) {
                        nn++;
                        CommonUtil.bezierTo3(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
                        TimerManager.delaySecond(nn*0.06, newHandler(function(){
                            AudioManager.getInstance().playEffectAsync("appqp/audios/deal", false);
                        }, this));
        //            }
                }
        //    }
        }
    }

    initNetEvent() {

    }

    initUIEvent() {

    }

    //
    toStateReady() {
        this._cpnGameState.setZhunbei(true);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._handors[i].resetCards(null);
            this._pxCpns[i].setCardType(-1,-1);
            this._userStateCpns[i].idle();
        }
        TimerManager.delaySecond(3, newHandler(function(tmr){
            this.toStateDeing();
        }, this));
    }

    toStateDeing() {
        this._cpnGameState.setFapai(true);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._userStateCpns[i].idle();
        }
        this.playFapaiAni();
        TimerManager.delaySecond(2, newHandler(function(tmr){
            this.toStateOpen();
        }, this));
    }

    toStateOpen() {
        this._cpnGameState.setKaipai(true);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._handors[i].resetCards([0x01,0x01,0x01]);
            this._handors[i].playOpen(true);
            this._pxCpns[i].setCardType(-1,-1);
            this._userStateCpns[i].idle();
        }
        TimerManager.delaySecond(2, newHandler(function(tmr){
            this.toStateJiesuan();
        }, this));
    }

    toStateJiesuan() {
        this._cpnGameState.setPaijiang(true);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._winloses[i].playMoney(CommonUtil.getRandomInt(500,1000)-750, 50, 3);
        }
        TimerManager.delaySecond(3, newHandler(function(tmr){
            this.toStateReady();
        }, this));
    }

}
