import GameManager from "../../../../../common/script/model/GameManager";
import GameConfig from "../../../../../common/script/definer/GameConfig";
import UIManager from "../../../../../kernel/view/UIManager";
import HttpCore from "../../../../../kernel/net/HttpCore";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/event/EventCenter";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import http_rules from "../../proto/http_rules";
import HallRequest from "../../proxy/HallRequest";
import HallRespond from "../../proxy/HallRespond";
import PlatformUtil from "../../../../../kernel/utils/PlatformUtil";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import { ProcessorType, ChannelType } from "../../../../../kernel/looker/KernelDefine";
import ChannelMgr from "../../../../../kernel/net/channel/ChannelMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { MAIN_HTTP_URL, MAIN_WS_URL } from "../../../../../common/script/definer/ConstDefine";
import UserMgr from "../../../../../common/script/model/UserMgr";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import Procedure from "../../../../../kernel/promise/Procedure";
import CHandler from "../../../../../kernel/basic/CHandler";
import TimerManager from "../../../../../kernel/timer/TimerManager";
import ServerConfig from "../../../../../common/script/definer/ServerConfig";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComponent {

	onLoad () 
	{
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUiEvents();
		this.initNet();
	//	this.testSpine();
	//	this.testWs()
		TimerManager.addSecondTimer(2, 1, new CHandler(this, this.testProcedure));

		var param = { 
			deviceID : PlatformUtil.getDeviceId(), 
			platformId : 3
		};
		HallRequest.req_youke_login(param);
	}

	private initUiEvents(){
		CommonUtil.addClickEvent(this.m_ui.btn_safebox, function(){ 
			UIManager.openPopwnd(ViewDefine.SafeboxUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_email, function(){ 
			UIManager.openPopwnd(ViewDefine.EmailUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_shop, function(){ 
			UIManager.openPopwnd(ViewDefine.ShopUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_kefu, function(){ 
			UIManager.openPopwnd(ViewDefine.KefuUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_withdraw, function(){ 
			UIManager.openPopwnd(ViewDefine.WithdrawUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_spread, function(){ 
			UIManager.openPopwnd(ViewDefine.SpreadUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.HeroUI, function(){ 
			UIManager.openPopwnd(ViewDefine.PersonUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_user, function(){ 
			UIManager.openPopwnd(ViewDefine.LoginUI.path, null);
		}, this);

		// 
		var gameBtnList = [
			{ id:GameConfig["40000040"].id, btn:"btn_ddz" },
			{ id:GameConfig["90000040"].id, btn:"btn_brnn" },
			{ id:GameConfig["80000044"].id, btn:"btn_fqzs" },
			{ id:GameConfig["40070012"].id, btn:"btn_zjh" },
			{ id:GameConfig["80000041"].id, btn:"btn_buyu" }
		];
		
		for(var i=0; i<gameBtnList.length; i++) {
			var cfg = gameBtnList[i];
			var bton = this.m_ui[cfg.btn];
			bton.gameId = cfg.id;
			CommonUtil.addClickEvent(bton, function(){ 
				GameManager.instance().enterGame(this.gameId);
			}, bton);
		}
	}

	private initNet() {
		HttpCore.setMainUrl(ServerConfig.loginServer);
		HttpCore.registProcotol(http_rules, HallRequest, HallRespond);
		HttpCore.setCacheAble("req_youke_login", false);

		EventCenter.instance().listen("req_youke_login", this.req_userinfo, this);
		EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
		EventCenter.instance().listen("req_room_select_info", this.req_room_select_info, this);
		EventCenter.instance().listen("req_enter_br_room", this.req_enter_br_room, this);
	}

	private req_userinfo(data:any) {
		this.m_ui.HeroUI.getComponent("HeroUI").setUserInfo(UserMgr.instance().getHero());
	}

	private req_room_select_info(info){
		cc.log(info);
	}

	private req_enter_br_room(info) {
		cc.log("------------------");
		cc.log(info);
	}


	private testWs() {
		var processor = ProcessorMgr.instance().createProcessor(ChannelDefine.game, ProcessorType.Protobuff);
		var hall_channel = ChannelMgr.instance().createChannel(ChannelDefine.game, ChannelType.Ws);
		hall_channel.setProcessor(processor);
		hall_channel.registProtocol(null);
		hall_channel.connect(MAIN_WS_URL, 0);
	}


	private testSpine() {
		cc.view.enableAntiAlias(true);
		var self = this;

		//加载spine
		cc.loader.loadRes("common/spines/bairenniuniu_kaishixiazhu.json", sp.SkeletonData, 
		function(err, resc){
			if( err ) { cc.log( '载入spine失败:' + err ); return; }
			//var obj = cc.instantiate(resc);
			var obj = new cc.Node();
			var sk = obj.addComponent(sp.Skeleton);
			sk.skeletonData = resc;
			self.node.addChild(obj, 10);
			//obj.scale = 0.2;
			sk.setAnimation(1, "animation", true);
		});
	}


	private createProcedure(duration:number, name:string) {
		var node = new Procedure();
		node.setProcFunc(new CHandler( null,
			(part?:Procedure)=>{
				if(duration>0){
					TimerManager.addSecondTimer(duration, 1, new CHandler( part,
						function(tmr){ 
							this.resolve_succ();
						})
					);
				}
				else{
					part.resolve_succ();
				}
			} 
		));
		node.setStopFunc(new CHandler(null, (part?:Procedure)=>{ cc.log(part.getName()+" stoped") }));
		node.setName(name)
		return node;
	}
	private _flag = false;
	private testProcedure() {
		if(this._flag) { return; }
		this._flag = true;
		var root = this.createProcedure(1, "root");
		var aaa = this.createProcedure(1, "aaa");
		var bbb = this.createProcedure(2, "bbb");
		var ccc = this.createProcedure(1.2, "ccc");
		var ddd = this.createProcedure(1, "ddd");
		var eee = this.createProcedure(1.4, "eee");
		var fff = this.createProcedure(1.4, "fff");
		var ggg = this.createProcedure(1.4, "ggg");
		var hhh = this.createProcedure(1.4, "hhh");
		var iii = this.createProcedure(1.4, "iii");
		root.then(aaa);
		aaa.addPart(bbb);
		aaa.addPart(ccc);
		ccc.addPart(fff);
		ccc.addPart(ggg);
		ggg.then(hhh);
		aaa.then(ddd);
		ddd.then(eee);
		eee.addPart(iii);
		ccc.run();
		//root.thenCaller(new CHandler(null, (part:Procedure)=>{ root.stop(); })).setName("last");
	}

}
