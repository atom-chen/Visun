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
import game_btn from "./game_btn";
import LoginMgr from "../../../../../common/script/model/LoginMgr";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { login_msgs } from "../../../../../common/script/proto/net_login";
import { configure_msgs, configure_request } from "../../../../../common/script/proto/net_configure";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import GameUtil from "../../../../../common/script/utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIHall extends BaseComponent {
	@property(cc.Prefab)
	gameBtn: cc.Prefab = null;

	onLoad () 
	{
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUiEvents();
		this.refleshGameList();
		this.refleshUI(null);
	//	this.testSpine();
		this.m_ui.btn_fs.active = !cc.sys.isNative;
		
		EventCenter.getInstance().listen(login_msgs.UserInfo, this.refleshUI, this);
		EventCenter.getInstance().listen(configure_msgs.GameListResp, this.refleshGameList, this);

	//	LoginMgr.getInstance().checkLogin(true);

		configure_request.GameListReq(null);
	}

	private refleshGameList() {
		this.m_ui.content.removeAllChildren();

		var gameList = GameManager.getInstance().getGameList();
		if(!gameList) { return; }

		for(var i in gameList) {
			var info = gameList[i];
			var cfg = GameConfig[info.GameKind]
			if(cfg) {
				var bton = cc.instantiate(this.gameBtn);
				bton["GameKind"] = info.GameKind;
				bton.getComponent(game_btn).setGameInfo(cfg);
				CommonUtil.addClickEvent(bton, function(){ 
					UIManager.openPopwnd(ViewDefine.UIRoom, false, null, this.GameKind);
				}, bton);
				this.m_ui.content.addChild(bton);
			}
			else {
				cc.log("------ no GameConfig: ", info.GameKind);
			}
		}
	}

	private refleshUI(data:any) {
		var hero = LoginUser.getInstance();
		this.m_ui.lab_name.getComponent(cc.Label).string = "昵称：" + hero.Name;
		this.m_ui.lab_id.getComponent(cc.Label).string = "ID：" + hero.UserID;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = hero.Money.toString();
		GameUtil.setHeadIcon(this.m_ui.headNode, 1);
	}

	private initUiEvents() {
		//头像
		CommonUtil.addClickEvent(this.m_ui.headNode, function(){ 
			UIManager.openPopwnd(ViewDefine.UISetting, true, null); 
		}, this);
		//保险箱
		CommonUtil.addClickEvent(this.m_ui.btn_safebox, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UISafebox, true, null); 
		}, this);
		//邮件
		CommonUtil.addClickEvent(this.m_ui.btn_email, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIEmail, true, null); this.testProcedure(); 
		}, this);
		//商店
		CommonUtil.addClickEvent(this.m_ui.btn_shop, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIShop, true, null); 
		}, this);
		//客服
		CommonUtil.addClickEvent(this.m_ui.btn_kefu, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIKefu, true, null); 
		}, this);
		//提现
		CommonUtil.addClickEvent(this.m_ui.btn_withdraw, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UIWithdraw, true, null); 
		}, this);
		//推广
		CommonUtil.addClickEvent(this.m_ui.btn_spread, function(){ 
			if(!LoginMgr.getInstance().checkLogin(true)) { return; }
			UIManager.openPopwnd(ViewDefine.UISpread, true, null); 
		}, this);
		//设置
		CommonUtil.addClickEvent(this.m_ui.btn_menu, function(){ 
			UIManager.toast("尚未实现"); 
		}, this);
		//全屏
		CommonUtil.addClickEvent(this.m_ui.btn_fs, function(){ 
			Adaptor.setFullScreen(!Adaptor.isFullScreen()); 
		}, this);
	}


	//----------- tests --------------------------------------------

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
