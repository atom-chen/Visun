import ViewDefine from "../../../../common/script/definer/ViewDefine";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { newHandler } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnNumEdit extends cc.Component {
    
    onLoad() {
        CommonUtil.addClickEvent(this.node, this.onClickMe, this);
	}

	onClickMe() {
		UIManager.openPopwnd(ViewDefine.UINumInput, true, newHandler(this.onInputCb, this));
	}

	onInputCb(v) {
		this.node.getChildByName("labNum").getComponent(cc.Label).string = v;
		return true;
	}
	
}
