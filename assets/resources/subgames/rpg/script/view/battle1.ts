//-----------------------------------
// 战斗操作UI
//-----------------------------------
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import RoleFighter from "../role/RoleFighter";
import { RoleState } from "../state/StateConst";

const {ccclass, property} = cc._decorator;

@ccclass
export default class battle1 extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

		CommonUtil.addClickEvent(this.m_ui.btn_quit, function(){ 
            GameManager.getInstance().quitGame(0);
        }, this);
        
        var r1 = new RoleFighter(1);
        r1.getStateMgr().setActionState(r1, RoleState.Skill, null);
        var a1 = r1.getStateMgr().can2ActionState(r1, RoleState.Run);
        var a2 = r1.getStateMgr().can2GroundMoveState(r1, RoleState.SkyFreez);
        cc.log(a1, a2);
    }

}
