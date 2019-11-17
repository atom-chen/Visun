import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { zhajinhua_msgs, zhajinhua_request } from "../../../../../common/script/proto/net_zhajinhua";
import GameManager from "../../../../../common/script/model/GameManager";
import HandCard from "../../../../../common/script/view/HandCard";
import PlayerUI from "../../../../../common/script/view/PlayerUI";


const {ccclass, property} = cc._decorator;

@ccclass
export default class zjhUI extends BaseComponent {
    private _handcardList:Array<HandCard> = [];
    private _playerList:Array<PlayerUI> = [];
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        for(var i = 0; i <= 4; i++) {
            this._handcardList.push(this.m_ui["HandCard"+i].getComponent(HandCard));
            this._playerList.push(this.m_ui["PlayerUI"+i].getComponent(PlayerUI));
        }

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
