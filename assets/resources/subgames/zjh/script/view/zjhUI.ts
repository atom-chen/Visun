import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { zhajinhua_msgs, zhajinhua_request } from "../../../../../common/script/proto/net_zhajinhua";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnPlayer from "../../../../../common/script/comps/CpnPlayer";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";


const {ccclass, property} = cc._decorator;

@ccclass
export default class zjhUI extends BaseComponent {
    private _players:Array<CpnPlayer> = [];
    private _handors:Array<CpnHandcard> = [];
    private _stateNodes:Array<cc.Label> = [];
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        for(var i = 0; i <= 4; i++) {
            this._players.push(this.m_ui["CpnPlayer"+i].getComponent(CpnPlayer));
            this._handors.push(this.m_ui["CpnHandcard"+i].getComponent(CpnHandcard));
            this._stateNodes.push(this.m_ui["stateTip"+i].getComponent(cc.Label));
        }

        this.initUIEvent();
        this.initNetEvent();
    }

    //场景信息
    onRespZhajinhuaGameEnv(param:any) {

    }

    //准备
    onRespZhajinhuaReady(param:any) {
        this.m_ui.gameLayer.active = true;
        this.m_ui.opLayer.active = true;
    }

    //跟注
    onRespZhajinhuaFollow(param:any) {
        
    }

    //加注
    onRespZhajinhuaRaise(param:any) {

    }

    //看牌
    onRespZhajinhuaLook(param:any) {

    }

    //比牌
    onRespZhajinhuaCompare(param:any) {

    }

    //弃牌
    onRespZhajinhuaGiveup(param:any) {

    }

    initNetEvent() {
    //    EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaGameEnv, this.onRespZhajinhuaGameEnv, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaReady, this.onRespZhajinhuaReady, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaCompare, this.onRespZhajinhuaCompare, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaFollow, this.onRespZhajinhuaFollow, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaGiveup, this.onRespZhajinhuaGiveup, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaLook, this.onRespZhajinhuaLook, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaRaise, this.onRespZhajinhuaRaise, this);
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_giveup, function(){ 
            zhajinhua_request.ReqZhajinhuaGiveup(null);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_look, function(){ 
            zhajinhua_request.ReqZhajinhuaLook(null);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_follow, function(){ 
            zhajinhua_request.ReqZhajinhuaFollow({Money:10});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_add, function(){ 
            zhajinhua_request.ReqZhajinhuaRaise({Money:20});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_compare, function(){ 
            zhajinhua_request.ReqZhajinhuaCompare({HitId:10002});
		}, this);
    }
    
}
