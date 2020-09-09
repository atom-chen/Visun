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


var MAX_PLAYER = 5;

const {ccclass, property} = cc._decorator;

@ccclass
export default class QznnUI extends BaseComponent {

	_pnList:Array<{[key:string]:cc.Node}> = [];

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUIEvent();
		this.initNetEvent();

		this.QzcowcowSceneResp(QznnMgr.getInstance().getEnterData());
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
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