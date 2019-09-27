import EventCenter from "../../kernel/event/EventCenter";
import Adaptor from "../../kernel/adaptor/Adaptor";
import TimerManager from "../../kernel/timer/TimerManager";
import KernelEvent from "../../kernel/looker/KernelEvent";

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
	}

	private static onKeyDown (event:any) {
        if(event.keyCode===cc.macro.KEY.back || event.keyCode===cc.macro.KEY.escape) {
            cc.log("返回键");
            EventCenter.getInstance().fire(KernelEvent.keyboard_esc);
        }
	}
	
}
