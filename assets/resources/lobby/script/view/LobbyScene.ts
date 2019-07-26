import UIManager from "../../../../Script/kernel/manager/UIManager";
import BaseComp from "../../../../Script/launcher/view/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseComp {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.showPanel("lobby/prefabs/LobbyUI", null);
    }

    start () {
        
    }

    // update (dt) {}
}
