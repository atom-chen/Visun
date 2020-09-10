import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Dian21UI extends BaseComponent {

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc, true, {kindId:GameKindEnum.Blackjack});
		}, this);
	}
	
}
