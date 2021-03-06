import EventCenter from "../../kernel/basic/event/EventCenter";
import Adaptor from "../../kernel/adaptor/Adaptor";
import TimerManager from "../../kernel/basic/timer/TimerManager";
import EcsSystem from "../../kernel/ecs/EcsSystem";
import { newHandler } from "../../kernel/utils/GlobalFuncs";
import PlatformUtil from "../../kernel/utils/PlatformUtil";
import UIManager from "../../kernel/view/UIManager";
import GlobalData from "../../kernel/utils/GlobalData";
import KernelEvent from "../../kernel/basic/defines/KernelEvent";


export default class InitLogic {
    private static _inited: boolean = false;
    private static _hideTime: number = 0;

	public static run(node: cc.Component) {
		if(this._inited) { return; }
        this._inited = true;

		cc.game.on(cc.game.EVENT_HIDE, ()=>{
            GlobalData.isInBackgroud = true;
            InitLogic._hideTime = (new Date()).getTime();
            console.log("游戏进入后台", InitLogic._hideTime);
            cc.audioEngine.pauseAll();
            EventCenter.getInstance().fire(KernelEvent.EnterBackground);
        });
        
        cc.game.on(cc.game.EVENT_SHOW, ()=>{
            GlobalData.isInBackgroud = false;
            var passedTime = (new Date()).getTime() - InitLogic._hideTime;
            console.log("游戏进入前台", passedTime);
            cc.audioEngine.resumeAll();
            EventCenter.getInstance().fire(KernelEvent.EnterForground, passedTime);
            TimerManager.amend(passedTime);
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        cc.view.setResizeCallback(()=>{
            Adaptor.adaptScreen();
        })

        TimerManager.start(node);
        EcsSystem.start(node);
	}

    private static tmrId = -1;
	private static onKeyDown (event:any) {
        if(event.keyCode===cc.macro.KEY.back || event.keyCode===cc.macro.KEY.escape) {
            cc.log("返回键");
            if(TimerManager.isValid(this.tmrId)) {
                PlatformUtil.exitApp();
            } else {
                UIManager.toast("再按一次退出程序");
                this.tmrId = TimerManager.delaySecond(1, newHandler(function(tmr){}, this));
            }
        }
        
        //测试重连用，正式版须移除
        if(event.keyCode===cc.macro.KEY.f1) {
            EventCenter.getInstance().fire(KernelEvent.keyboard, event.keyCode);
        }
	}
	
}
