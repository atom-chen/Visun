import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";
import GameManager from "../../../../common/script/model/GameManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CpnGameMenu from "../../../appqp/script/comps/CpnGameMenu";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIjszjh extends BaseComponent {

    start() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvent();
        this.initNetEvent();
        this.m_ui.CpnGameMenu.getComponent(CpnGameMenu).setGameInfo(GameKindEnum.Jszjh, GameManager.getInstance().getGameId());
    }

    initUIEvent() {

    }

    initNetEvent() {

    }

}
