import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import CpnCircleCD from "../../../../appqp/script/comps/CpnCircleCD";
import { sangong_msgs } from "../../../../../common/script/proto/net_sangong";
import { sangong } from "../../../../../../declares/sangong";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import SangongMgr from "../model/SangongMgr";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../../kernel/view/UIManager";


var MAX_PLAYER = 5;

const {ccclass, property} = cc._decorator;

@ccclass
export default class SangongUI extends BaseComponent {

	_pnList:Array<{[key:string]:cc.Node}> = [];

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUIEvent();
		this.initNetEvent();

		this.SangongSceneResp(SangongMgr.getInstance().getEnterData());
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
	}

	private SangongSceneResp(data:sangong.ISangongSceneResp) {
		
	}

	initNetEvent() {
		EventCenter.getInstance().listen(sangong_msgs.SangongSceneResp, this.SangongSceneResp, this);
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc, true, {kindId:GameKindEnum.Sangong});
		}, this);
	}
	
}
