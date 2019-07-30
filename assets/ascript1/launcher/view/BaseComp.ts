import EventCenter from "../EventCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseComp extends cc.Component {
    onDestroy() {
        EventCenter.instance().removeByTarget(this);
    }
}
