import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import CpnCircleCD from "../../../../appqp/script/comps/CpnCircleCD";
import { qzcowcow_msgs } from "../../../../../common/script/proto/net_qzcowcow";
import { qzcowcow } from "../../../../../../declares/qzcowcow";
import QznnMgr from "../model/QznnMgr";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import CpnPlayer1 from "../../../../appqp/script/comps/CpnPlayer1";
import CpnHandcard2 from "../../../../appqp/script/comps/CpnHandcard2";


const MAX_SOLDIER = 5;
const CARD_CNT = 5;


const {ccclass, property} = cc._decorator;

@ccclass
export default class QznnUI extends BaseComponent {
	private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
    private _handors:Array<CpnHandcard2> = [];
    private _cdCpns:Array<CpnCircleCD> = [];

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer1").getComponent(CpnPlayer1));
            this._handors.push(nd.getChildByName("CpnHandcard2").getComponent(CpnHandcard2));
            this._cdCpns.push(nd.getChildByName("CpnCircleCD").getComponent(CpnCircleCD));
        }

		this.initUIEvent();
		this.initNetEvent();

		this.QzcowcowSceneResp(QznnMgr.getInstance().getEnterData());
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
		
		this.playFapaiAni();
	}

	private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<MAX_SOLDIER; i++){
            this._handors[i].resetCards([0,0,0,0,0]);
            var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
            for(var j=0; j<CARD_CNT; j++) {
                nn++;
                CommonUtil.bezierTo3(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
            }
        }
    }

	private QzcowcowSceneResp(data:qzcowcow.IQzcowcowSceneResp) {

	}

	initNetEvent() {
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowSceneResp, this.QzcowcowSceneResp, this);
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            GameManager.getInstance().quitGame(true);
		}, this);
	}
	
}