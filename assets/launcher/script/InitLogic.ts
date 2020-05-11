import EventCenter from "../../kernel/basic/event/EventCenter";
import Adaptor from "../../kernel/adaptor/Adaptor";
import KernelEvent from "../../kernel/basic/defines/KernelEvent";
import TimerManager from "../../kernel/basic/timer/TimerManager";
import KernelUIDefine from "../../kernel/basic/defines/KernelUIDefine";
import EcsSystem from "../../kernel/ecs/EcsSystem";


export default class InitLogic {
	private static _inited: boolean = false;

	public static run(node: cc.Component) {
		if(this._inited) { return; }
        this._inited = true;

		cc.game.on(cc.game.EVENT_HIDE, ()=>{
            console.log("游戏进入后台");
            cc.audioEngine.pauseAll();
            EventCenter.getInstance().fire(cc.game.EVENT_HIDE);
        });
        
        cc.game.on(cc.game.EVENT_SHOW, ()=>{
            console.log("游戏进入前台");
            cc.audioEngine.resumeAll();
            EventCenter.getInstance().fire(cc.game.EVENT_SHOW);
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        cc.view.setResizeCallback(()=>{
            Adaptor.adaptScreen();
        })

        TimerManager.start(node);
        EcsSystem.start(node);
	}

	private static onKeyDown (event:any) {
        if(event.keyCode===cc.macro.KEY.back || event.keyCode===cc.macro.KEY.escape) {
            cc.log("返回键");
            EventCenter.getInstance().fire(KernelEvent.keyboard_esc);
        }
	}
	
}
