import BaseComp from "../../../../script/kernel/gui/BaseComp";
import PlatformUtil from "../../../../script/kernel/utils/PlatformUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends BaseComp {
    onLoad () {
        PlatformUtil.adaptScreen();
    }
}
