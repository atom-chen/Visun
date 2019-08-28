import EventCenter from "../../script/kernel/event/EventCenter";
import EventDef from "../../script/looker/EventDef";
import TimerManager from "../../script/kernel/timer/TimerManager";
import Adaptor from "../../script/kernel/adaptor/Adaptor";

//---------------------------------
// 永驻节点
//---------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class AppNode extends cc.Component {

    onLoad () {
        cc.game.addPersistRootNode(this.node);

        cc.game.on(cc.game.EVENT_HIDE, ()=>{
            console.log("游戏进入后台");
            EventCenter.instance().fire(cc.game.EVENT_HIDE);
        });
        
        cc.game.on(cc.game.EVENT_SHOW, ()=>{
            console.log("游戏进入前台");
            EventCenter.instance().fire(cc.game.EVENT_SHOW);
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        cc.view.setResizeCallback(()=>{
            Adaptor.adaptScreen();
        })

        this.schedule(function(dt:number){
            TimerManager.instance().update(dt)
        }, 0, cc.macro.REPEAT_FOREVER);
    }

    onKeyDown (event:any) {
        if(event.keyCode===cc.macro.KEY.back || event.keyCode===cc.macro.KEY.escape) {
            cc.log("返回键");
            EventCenter.instance().fire(EventDef.keyboard_esc);
        }
    }
}
