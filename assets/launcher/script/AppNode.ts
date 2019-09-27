//---------------------------------
// 永驻节点
//---------------------------------
import InitLogic from "./InitLogic";


const {ccclass, property} = cc._decorator;

@ccclass
export default class AppNode extends cc.Component {

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        InitLogic.run(this);
    }

}
