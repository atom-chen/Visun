import UIManager from "../../../../Script/kernel/manager/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.showPanel("lobby/prefabs/LobbyUI", null);
    }

    start () {
        
    }

    // update (dt) {}
}
