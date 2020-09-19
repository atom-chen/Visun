import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../../kernel/view/UIManager";
import Preloader from "../../../../../kernel/utils/Preloader";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RedbagUI extends BaseComponent {
	private _pnode:Array<cc.Node> = [];
	private _posList:Array<cc.Vec3> = [];

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		for(var i=0; i<8; i++) {
			this._pnode[i] = this.m_ui["p"+i];
			this._posList[i] = this.m_ui["p"+i].position;
		}

		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.Redpacket});
		}, this);

		for(var j=0; j<8; j++) {
			var dis = 560;
			if(j%2 == 0) { dis = -560; }
			this._pnode[j].runAction(cc.sequence(
				cc.place(this._posList[j].x+dis, this._posList[j].y),
				cc.delayTime(CommonUtil.getRandomInt(50,100)/100),
				cc.moveTo(0.3, cc.v2(this._posList[j].x, this._posList[j].y)),
				cc.callFunc(function(){
					Preloader.showSpineAsync("appqp/spines/headflower/ky_lhd_js", 0, "1", 5, this, {zIndex:10, x:-67, y:3});
				}, this._pnode[j])
			))
		}
	}
	
}