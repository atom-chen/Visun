import SubgameEntry from "../../utils/SubgameEntry";
import GameConfig from "../../utils/GameConfig";
import UIManager from "../../../../../script/kernel/gui/UIManager";
import HttpCore from "../../../../../script/kernel/net/HttpCore";
import CommonUtils from "../../../../../script/kernel/utils/CommonUtils";
import WsCore from "../../../../../script/kernel/net/WsCore";
import http_rules from "../../proxy/rule/http_rules";
import ws_rules from "../../proxy/rule/ws_rules";
import http_responds from "../../proxy/http_responds";
import ws_responds from "../../proxy/ws_responds";
import EventCenter from "../../../../../script/kernel/event/EventCenter";
import BaseComp from "../../../../../script/kernel/gui/BaseComp";
import PlatformUtil from "../../../../../script/kernel/utils/PlatformUtil";
import UserMgr from "../../model/UserMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComp {
    m_ui:any;

	onLoad () 
	{
        this.m_ui = {};
        CommonUtils.traverseNodes(this.node, this.m_ui);

        this.initUiEvents();
        this.initNet();
        // this.tests();

        var param = { 
            deviceID : PlatformUtil.getDeviceId(), 
            platformId : 3
        };
        HttpCore.request("req_youke_login", null, param);
    }

    private initUiEvents(){
        this.m_ui.btn_safebox.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/SafeboxUI", null);
        }, this);

        this.m_ui.btn_email.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/EmailUI", null);
        }, this);

        this.m_ui.btn_shop.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/ShopUI", null);
        }, this);

        this.m_ui.btn_kefu.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/KefuUI", null);
        }, this);

        this.m_ui.btn_withdraw.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/WithdrawUI", null);
        }, this);

        this.m_ui.btn_spread.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/SpreadUI", null);
        }, this);

        this.m_ui.HeroUI.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/PersonUI", null);
        }, this.m_ui.HeroUI);

        this.m_ui.btn_user.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/LoginUI", null);
        }, this);

        // 
        var gameBtnList = [
            { id:GameConfig["40000040"].id, btn:"btn_ddz" },
            { id:GameConfig["90000040"].id, btn:"btn_brnn" },
            { id:GameConfig["80000044"].id, btn:"btn_fqzs" },
            { id:GameConfig["40070012"].id, btn:"btn_zjh" },
            { id:GameConfig["80000041"].id, btn:"btn_buyu" }
        ]
        
        for(var i=0; i<gameBtnList.length; i++) {
            var cfg = gameBtnList[i];
            var bton = this.m_ui[cfg.btn];
            bton.gameId = cfg.id;
            bton.on("click", function(){
                SubgameEntry.instance().enterGame(this.gameId);
            }, bton);
        }
    }

    private initNet() {
        HttpCore.registProcotol(http_rules, http_responds);
        WsCore.registProtocol(ws_rules, ws_responds);

        EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
        EventCenter.instance().listen("req_room_select_info", this.req_room_select_info, this);
        EventCenter.instance().listen("req_enter_br_room", this.req_enter_br_room, this);
    }

    private req_userinfo(data:any) {
        UIManager.toast("登录成功");
        this.m_ui.HeroUI.getComponent("HeroUI").setUserInfo(UserMgr.instance().getHero());
    }

    private req_room_select_info(info){
        cc.log(info);
    }

    private req_enter_br_room(info) {
        cc.log("------------------");
        cc.log(info);
    }

    private tests() {
        //加载spine
        var self = this;
        cc.loader.loadRes("common/spines/bairenniuniu_kaishixiazhu.json", sp.SkeletonData, 
		function(err, resc){
			if( err ) { cc.log( '载入spine失败:' + err ); return; }
            //var obj = cc.instantiate(resc);
            var obj = new cc.Node();
            var sk = obj.addComponent(sp.Skeleton);
            sk.skeletonData = resc;
            self.node.addChild(obj, 10);
            sk.setAnimation(1, "animation", true);
        });
        cc.loader.loadRes("common/prefabs/PokerCard", cc.Prefab, 
		function(err, resc){
			if( err ) { cc.log( '载入prefab失败:' + err ); return; }
            var obj = cc.instantiate(resc);
            var cpn = obj.getComponent("PokerCard");
            cpn.state = 1;
            self.node.addChild(obj, 10);
        });
        cc.loader.loadRes("common/prefabs/HandCard", cc.Prefab, 
		function(err, resc){
			if( err ) { cc.log( '载入prefab失败:' + err ); return; }
            var obj = cc.instantiate(resc);
            var cpn = obj.getComponent("HandCard");
            self.node.addChild(obj, 10);
		});
    }

}
