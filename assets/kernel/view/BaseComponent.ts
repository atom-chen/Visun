//---------------------------------
// 所有组建的父类
//---------------------------------
import EventCenter from "../event/EventCenter";
import TimerManager from "../timer/TimerManager";
import UIManager from "./UIManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseComponent extends cc.Component {
    protected m_ui:any = {};
    protected m_dtor_listeners:any[] = [];
    
    //放回对象池时回调
    unuse(): void {
        EventCenter.getInstance().removeByTarget(this);
        TimerManager.removeByTarget(this);
    }

    //从对象池取出时回调
    // reuse(): void {
       
    // }

    listenDestory(listener:Function, target:any) {
        this.m_dtor_listeners.push({ callback:listener, target:target });
    }

    onDestroy() {
        EventCenter.getInstance().removeByTarget(this);
        TimerManager.removeByTarget(this);
        if(this.m_dtor_listeners){
            for(var i=0; i<this.m_dtor_listeners.length; i++){
                this.m_dtor_listeners[i].callback.call(this.m_dtor_listeners[i].target, this, this.node);
            }
            this.m_dtor_listeners.length = 0;
            this.m_dtor_listeners = null;
        }
        UIManager.onWindowClose(this.node);
    }
}
