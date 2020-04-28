//---------------------------------
// 模块管理器
//---------------------------------
import LoginMgr from "./LoginMgr";
import GameManager from "./GameManager";
import LoginUser from "./LoginUser";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../definer/ChannelDefine";
import { ProcessorType } from "../../../kernel/basic/defines/KernelDefine";
import { login_packet_define } from "../proto/net_login";
import { gamecomm_packet_define } from "../proto/net_gamecomm";
import proxy_login from "../proxy/proxy_login";
import { comand_packet_define } from "../proto/net_comand";
import { baccarat_packet_define } from "../proto/net_baccarat";
import { landLords_packet_define } from "../proto/net_landLords";
import { cowcow_packet_define } from "../proto/net_cowcow";
import { fishLord_packet_define } from "../proto/net_fishLord";
import { mahjong_packet_define } from "../proto/net_mahjong";


//模块管理器
export default class LogicCenter {
    private static _instance:LogicCenter = null;

    private _managers:any[] = [];

    private constructor() {
        //初始化游戏协议
        var g_leafProcessor = ProcessorMgr.getInstance().createProcessor(ChannelDefine.game, ProcessorType.LeafWs);
		g_leafProcessor.unregistAllCmds();
		g_leafProcessor.registCmds(login_packet_define);
        g_leafProcessor.registCmds(gamecomm_packet_define);
        g_leafProcessor.registCmds(comand_packet_define);
        g_leafProcessor.registCmds(baccarat_packet_define);
        g_leafProcessor.registCmds(landLords_packet_define);
        g_leafProcessor.registCmds(cowcow_packet_define);
        g_leafProcessor.registCmds(fishLord_packet_define);
        g_leafProcessor.registCmds(mahjong_packet_define);
        g_leafProcessor.getDispatcher().addObserver(proxy_login);
    }
    
    public static getInstance() : LogicCenter {
        if(!LogicCenter._instance){ LogicCenter._instance = new LogicCenter; }
        return LogicCenter._instance;
    }
    public static delInstance() : void {
		if(LogicCenter._instance) {
			LogicCenter._instance.clear();
			LogicCenter._instance = null;
		}
	}

    //初始化逻辑数据
    //调用时机：登录前
    public init() {
        this.registModel(LoginMgr);
        this.registModel(LoginUser);
        this.registModel(GameManager);
    }

    //清理逻辑数据
    //调用时机：重新登录时
    public clear() {
        for(var i=0; i<this._managers.length; i++){
            this._managers[i].getInstance().clear();
            this._managers[i].delInstance();
            cc.log("unregist model ", i+1);
        }
        this._managers.length = 0;
        this._managers = [];
    }

    
    public registModel(cls:any) {
        if(!cls.delInstance) { cc.error("no delInstance", cls); }
        cls.getInstance();
        if(this._managers.indexOf(cls) < 0){
            this._managers.push(cls);
            cc.log("regist model ", this._managers.length);
        }
    }

    public unregistModel(cls:any) {
        var idx = this._managers.indexOf(cls);
        if(idx >= 0) {
            this._managers.splice(idx);
            cls.getInstance().clear();
            cls.delInstance();
            cc.log("unregist model ", this._managers.length);
        }
    }
}

LogicCenter.getInstance();
