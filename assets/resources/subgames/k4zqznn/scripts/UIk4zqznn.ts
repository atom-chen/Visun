import GameManager from "../../../../common/script/model/GameManager";
import AudioManager from "../../../../kernel/audio/AudioManager";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isNil, newHandler } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CpnHandcard2 from "../../../appqp/script/comps/CpnHandcard2";
import CpnPaixing from "../../../appqp/script/comps/CpnPaixing";
import CpnPlayer1 from "../../../appqp/script/comps/CpnPlayer1";
import CpnWinLoseMoney from "../../../appqp/script/comps/CpnWinLoseMoney";


const MAX_SOLDIER = 5;
const CARD_CNT = 5;
const HAS_SEARCHING = false;


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIk4zqznn extends BaseComponent {

    private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
    private _handors:Array<CpnHandcard2> = [];
    private _pxCpns:Array<CpnPaixing> = [];
	private _winloses:Array<CpnWinLoseMoney> = [];
	private originZpos = null;
	private tmrState = 0;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.originZpos = this.m_ui.cpzhuang.position;
        for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer").getComponent(CpnPlayer1));
			this._handors.push(nd.getChildByName("handor").getComponent(CpnHandcard2));
            this._winloses.push(nd.getChildByName("CpnWinLoseMoney").getComponent(CpnWinLoseMoney));
            this._pxCpns.push(nd.getChildByName("CpnPaixing1").getComponent(CpnPaixing));
		}

        this.initUIEvent();
        this.initNetEvent();
        
        this.playFapaiAni();
    }

    private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<MAX_SOLDIER; i++){
            this._handors[i].resetCards([0,0,0,0,0]);
            this._pxCpns[i].setCardType(-1,-1);
            //if(!isNil(this.getPlayerByIndex(i))) {
                var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
                for(var j=0; j<CARD_CNT; j++) {
                    nn++;
                    CommonUtil.bezierTo3(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
                    TimerManager.delaySecond(nn*0.06, newHandler(function(){
                        AudioManager.getInstance().playEffectAsync("appqp/audios/deal", false);
                    }, this));
                }
            //}
        }
    }

    initNetEvent() {

    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
    }

}
