import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class BuyuUI extends BaseComponent {

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(true);
		}, this);

		// CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
        //     GameManager.getInstance().quitGame(true);
		// }, this);
	}
	
}
