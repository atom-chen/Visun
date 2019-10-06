import GameManager from "../../../../../common/script/model/GameManager";
import GameConfig from "../../../../../common/script/definer/GameConfig";
import UIManager from "../../../../../kernel/view/UIManager";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/event/EventCenter";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import UserMgr from "../../../../../common/script/model/UserMgr";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import Procedure from "../../../../../kernel/promise/Procedure";
import CHandler from "../../../../../kernel/basic/CHandler";
import TimerManager from "../../../../../kernel/timer/TimerManager";
import LoginMgr, { LoginUser } from "../../../../../common/script/model/LoginMgr";
import HeroUI from "../../../../../common/script/view/HeroUI";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComponent {
	@property(cc.Prefab)
	gameBtn: cc.Prefab = null;

	onLoad () 
	{
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUiEvents();
		this.refleshGameList();
		this.refleshUI(null);
		this.testSpine();

		LoginMgr.getInstance().loginAsYouke();
	}

	private refleshGameList() {
		for(var gameId in GameConfig) {
			var cfg = GameConfig[gameId];
			var bton = cc.instantiate(this.gameBtn);
			bton["gameId"] = gameId;
			CommonUtil.addClickEvent(bton, function(){ 
				GameManager.getInstance().enterGame(this.gameId);
			}, bton);
			this.m_ui.content.addChild(bton);
		}
	}

	private refleshUI(data:any) {
		this.m_ui.HeroUI.getComponent(HeroUI).setUserInfo(LoginUser.getInstance());
	}

	private initUiEvents() {
		CommonUtil.addClickEvent(this.m_ui.btn_safebox, function(){ 
			UIManager.openPopwnd(ViewDefine.SafeboxUI.path, null);
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_email, function(){ 
			UIManager.openPopwnd(ViewDefine.EmailUI.path, null);
			this.testProcedure();
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
	}


	private testSpine() {
		UIManager.showSpineAsync("common/spines/jack", 0, "a", true, this.node, {zIndex:10, x:-400, y:280, scale:0.5});
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
