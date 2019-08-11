import EventCenter from "../event/EventCenter";
import TimerManager from "../timer/TimerManager";
import IPoolObject from "../pool/IPoolObject";


//---------------------------------
// 所有组建的父类
//---------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseComp extends cc.Component implements IPoolObject {
    unuse(): void {
        
    }
    reuse(): void {
       
    }

    onDestroy() {
        EventCenter.instance().removeByTarget(this);
        TimerManager.instance().removeByTarget(this);
    }
}
