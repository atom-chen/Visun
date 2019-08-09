import EventCenter from "../kernel/event/EventCenter";
import EventDef from "../looker/EventDef";
import PlatformUtil from "../kernel/utils/PlatformUtil";
import TimerManager from "../kernel/timer/TimerManager";

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
            PlatformUtil.adaptScreen();
        })

        this.schedule(function(dt){
            TimerManager.instance().update(dt)
        }, 1, cc.macro.REPEAT_FOREVER);
    }

    onKeyDown (event:any) {
        if(event.keyCode===cc.macro.KEY.back || event.keyCode===cc.macro.KEY.escape) {
            cc.log("返回键");
            EventCenter.instance().fire(EventDef.keyboard_esc);
        }
    }
}
