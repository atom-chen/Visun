import EventCenter from "../event/EventCenter";
import TimerManager from "../timer/TimerManager";
import IPoolObject from "../pool/IPoolObject";


//---------------------------------
// 所有组建的父类
//---------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseComp extends cc.Component implements IPoolObject {

    //放回对象池时回调
    unuse(): void {
        EventCenter.instance().removeByTarget(this);
        TimerManager.instance().removeByTarget(this);
    }

    //从对象池取出时回调
    reuse(): void {
       
    }

    onDestroy() {
        EventCenter.instance().removeByTarget(this);
        TimerManager.instance().removeByTarget(this);
    }
}
