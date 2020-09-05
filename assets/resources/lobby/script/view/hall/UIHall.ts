import GameManager from "../../../../../common/script/model/GameManager";
import GameConfig from "../../../../../common/script/definer/GameConfig";
import UIManager from "../../../../../kernel/view/UIManager";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import Procedure from "../../../../../kernel/promise/Procedure";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import LoginUser from "../../../../../common/script/model/LoginUser";
import Adaptor from "../../../../../kernel/adaptor/Adaptor";
import PF from "../../../../../kernel/pathfinder/PathFinding";
import LoginMgr from "../../../../../common/script/model/LoginMgr";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { login_msgs } from "../../../../../common/script/proto/net_login";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { login } from "../../../../../../declares/login";
import Preloader from "../../../../../kernel/utils/Preloader";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIHall extends BaseComponent {
	@property(cc.Prefab)
	gameBtn: cc.Prefab = null;

	onLoad () 
	{
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUiEvents();
		this.initNetEvents();

		this.refleshGameList();
		this.refleshUI(null);
	
		this.m_ui.btn_fs.active = !cc.sys.isNative;

		//this.test();
	}

	private LoginResp(param:login.ILoginResp) {
		this.refleshUI(null);
	}

	private initNetEvents() {
		EventCenter.getInstance().listen(login_msgs.LoginResp, this.LoginResp, this);
		EventCenter.getInstance().listen(login_msgs.EnterRoomResp, this.refleshGameList, this);
	}

	private refleshGameList() {
		this.m_ui.content.removeAllChildren();

		var gameList = GameManager.getInstance().gamesByKindId();
		if(!gameList) { return; }

		for(var KindID in gameList) {
			var arr = gameList[KindID];

			var bton = cc.instantiate(this.gameBtn);

			if(arr.length == 1) {
				bton["gameData"] = arr[0];
	
				CommonUtil.addClickEvent(bton, function(){ 
					GameManager.getInstance().enterGame(this.gameData.ID);
				}, bton);
	
				this.m_ui.content.addChild(bton);
				this.refreshGameButton(bton, arr[0]);
			} 
			else if(arr.length > 1) {
				bton["gameData"] = arr;
	
				CommonUtil.addClickEvent(bton, function(){ 
					UIManager.openPopwnd(ViewDefine.UIRoom, false, this.gameData)
				}, bton);
	
				this.m_ui.content.addChild(bton);
				this.refreshGameButton(bton, arr[0]);
			}
		}
	}

	private refreshGameButton(bton:cc.Node, gameData:login.IGameItem) {
		var cfg = GameConfig[gameData.Info.KindID];
		if(!cfg) { return; }
		Preloader.setNodeSprite(bton.getChildByName("Background").getComponent(cc.Sprite), cfg.icon, this);
		// if(cfg.spine) {
		// 	Preloader.showSpineAsync(cfg.spine, 0, "animation", -1, bton, {zIndex:10, x:0, y:-150, scale:0.4});
		// }
	}

	private refleshUI(data:any) {
		var hero = LoginUser.getInstance();
		this.m_ui.lab_name.getComponent(cc.Label).string = "昵称：" + hero.Name;
		this.m_ui.lab_id.getComponent(cc.Label).string = "ID：" + hero.UserId;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(hero.getMoney());
		GameUtil.setHeadIcon(this.m_ui.headNode, LoginUser.getInstance().getHead());
	}

	private initUiEvents() {
		//头像
		CommonUtil.addClickEvent(this.m_ui.headNode, function(){ 
			if(LoginMgr.getInstance().checkLogin(false)) {
				UIManager.openPopwnd(ViewDefine.UIPerson, true);
			} else {
				UIManager.openPopwnd(ViewDefine.UILogin, false);
			}
		}, this);
		//保险箱
		CommonUtil.addClickEvent(this.m_ui.btn_safebox, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UISafebox, true); 
		}, this);
		//邮件
		CommonUtil.addClickEvent(this.m_ui.btn_email, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIEmail, true); 
		}, this);
		//商店
		CommonUtil.addClickEvent(this.m_ui.btn_shop, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIShop, true); 
		}, this);
		//客服
		CommonUtil.addClickEvent(this.m_ui.btn_kefu, function(){ 
		//	if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIKefu, true); 
		}, this);
		//提现
		CommonUtil.addClickEvent(this.m_ui.btn_withdraw, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIWithdraw, true); 
		}, this);
		//推广
		CommonUtil.addClickEvent(this.m_ui.btn_spread, function(){ 
		//	if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UISpread, true); 
		}, this);
		//设置
		CommonUtil.addClickEvent(this.m_ui.btn_menu, function(){ 
			UIManager.openPopwnd(ViewDefine.UISetting, true);
		}, this);
		//全屏
		CommonUtil.addClickEvent(this.m_ui.btn_fs, function(){ 
			Adaptor.setFullScreen(!Adaptor.isFullScreen()); 
		}, this);
	}


	//----------- tests --------------------------------------------

	private test() {
		for(var i in GameConfig) {
			var bton:any = cc.instantiate(this.gameBtn);
			this.m_ui.content.addChild(bton);
			var tbl : any = {};
			CommonUtil.traverseNodes(bton, tbl);
			Preloader.setNodeSprite(tbl.Background.getComponent(cc.Sprite), GameConfig[i].icon, this);
			bton.gameType = GameConfig[i].GameKind;
			CommonUtil.addClickEvent(bton, function(){
				GameManager.getInstance().enterGameScene(this.gameType);
			}, bton);
		}
	}

	private testAStart() {
		var matrix = [
			[0, 0, 0, 1, 0],
			[1, 0, 0, 0, 1],
			[0, 0, 1, 0, 0],
		];
		var grid = new PF.Grid(matrix, null);
		var finder = new PF.AStarFinder(null);
		var path = finder.findPath(1, 2, 4, 2, grid);
		cc.log("**********************");
		cc.log(path);
	}

	private createProcedure(duration:number, name:string) {
		var node = new Procedure();
		node.setProcFunc(new CHandler( null,
			(part?:Procedure)=>{
				if(duration>0){
					TimerManager.loopSecond(duration, 1, new CHandler( part,
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
		node.setStopFunc(new CHandler(null, (part?:Procedure)=>{ }));
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
