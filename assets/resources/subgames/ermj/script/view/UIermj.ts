import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import CpnGameMenu from "../../../../appqp/script/comps/CpnGameMenu";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIermj extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.m_ui.CpnGameMenu.getComponent(CpnGameMenu).setGameInfo(GameKindEnum.Ermj, GameManager.getInstance().getGameId());
    }

}
