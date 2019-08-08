import BaseComp from "../../../../script/kernel/gui/BaseComp";
import SceneManager from "../../../../script/kernel/gui/SceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class zjhUI extends BaseComp {

    @property(cc.Button)
    btn_close: cc.Button = null;
    @property(cc.Button)
    btn_help: cc.Button = null;

    
    start () {
        this.btn_close.node.on("click", function(){
			SceneManager.turn2Scene("LobbyScene");
        }, this);
    }
    
}
