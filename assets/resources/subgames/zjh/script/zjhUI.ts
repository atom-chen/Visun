import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../common/script/model/GameManager";
import { zhajinhua_request, zhajinhua_msgs } from "../../../../common/script/proto/net_zhajinhua";
import EventCenter from "../../../../kernel/basic/event/EventCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class zjhUI extends BaseComponent {
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.initUIEvent();
        this.initNetEvent();
    }

    onRespZhajinhuaReady(param:any) {

    }

    onRespZhajinhuaCompare(param:any) {

    }

    onRespZhajinhuaFollow(param:any) {

    }

    onRespZhajinhuaGiveup(param:any) {

    }

    onRespZhajinhuaLook(param:any) {

    }

    onRespZhajinhuaRaise(param:any) {

    }

    initNetEvent() {
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
