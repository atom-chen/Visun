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
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import NoticeMgr from "../../../../../common/script/model/NoticeMgr";
import EventDefine from "../../../../../common/script/definer/EventDefine";


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
		NoticeMgr.getInstance().addNotice("公告测试，我来自哈拉呀星系", true);
		NoticeMgr.getInstance().addNotice("今晚6点11分维护，别瞎几把玩", true);
	}

	private LoginResp(param:login.ILoginResp) {
		this.refleshUI(null);
	}

	private initNetEvents() {
		EventCenter.getInstance().listen(login_msgs.LoginResp, this.LoginResp, this);
		EventCenter.getInstance().listen(login_msgs.ReconnectResp, this.LoginResp, this);
		EventCenter.getInstance().listen(login_msgs.EnterRoomResp, this.refleshGameList, this);
		EventCenter.getInstance().listen(EventDefine.down_progress, this.onDownProgress, this);
	}

	private onDownProgress(gameKind:number|string, curCnt:number, totalCnt:number) {
		var chalds = this.m_ui.content.children;
		for(var i in chalds) {
			if(chalds[i]["game_kind"] == gameKind) {
				chalds[i].getChildByName("labDown").active = true;
				var nn = GameManager.getInstance().getDownProgress(gameKind) * 100;
				chalds[i].getChildByName("labDown").getComponent(cc.Label).string = "下载中："+parseInt(nn.toString())+"/"+100;
				break;
			}
		}
	}

	private refleshGameList() {
		this.m_ui.content.removeAllChildren();

		var gameList = GameManager.getInstance().gamesByKindId();
		if(!gameList) { return; }

		for(var KindID in gameList) {
			var arr = gameList[KindID];

			var bton = cc.instantiate(this.gameBtn);
			bton["game_kind"] = KindID;

			if(arr.length == -99) {
				bton["gameData"] = arr[0];
	
				CommonUtil.addClickEvent(bton, function(){ 
					GameManager.getInstance().enterGame(this.gameData.ID);
				}, bton);
	
				this.m_ui.content.addChild(bton);
				this.refreshGameButton(bton, arr[0]);
			} 
			else if(arr.length >= 1) {
				bton["gameData"] = arr;
	
				CommonUtil.addClickEvent(bton, function(){ 
					UIManager.openPopwnd(ViewDefine.UIRoom, false, this.gameData)
				}, bton);
	
				this.m_ui.content.addChild(bton);
				this.refreshGameButton(bton, arr[0]);
			}

			bton.getChildByName("labDown").active = GameManager.getInstance().isDowning(KindID);
		}

		var waitlist = [];
		for(var iii in GameConfig) {
			if(!gameList[iii]) {
				waitlist.push(GameConfig[iii]);
			}
		}
		waitlist.sort(function(a, b){
			if(!isNil(a.orderv) && !isNil(b.orderv)) {
				return a.orderv - b.orderv;
			}
			if(isNil(a.orderv)) {
				return -1;
			}
			if(isNil(b.orderv)) {
				return 1;
			}
			return -1;
		});
		for(var aaa in waitlist) {
			var cfg = waitlist[aaa];
			var testBtn:any = cc.instantiate(this.gameBtn);
			this.m_ui.content.addChild(testBtn);
			testBtn["game_kind"] = cfg.GameKind;
			testBtn.getChildByName("labDown").active = GameManager.getInstance().isDowning(cfg.GameKind);
			var tbl : any = {};
			CommonUtil.traverseNodes(testBtn, tbl);
			Preloader.setNodeSprite(tbl.Background.getComponent(cc.Sprite), cfg.icon, this);
			testBtn.gameType = cfg.GameKind;
			CommonUtil.addClickEvent(testBtn, function(){
				GameManager.getInstance().enterGameScene(this.gameType);
			}, testBtn);
			testBtn.getComponent(cc.Button).enabled = false;
			CommonUtil.grayNode(testBtn, true);
		}
	}

	private refreshGameButton(bton:cc.Node, gameData:login.IGameItem) {
		var cfg = GameConfig[gameData.Info.KindID];
		if(!cfg) { 
			cc.warn("no client GameConfig", gameData.Info.KindID);
			var nd = bton.getChildByName("_tmpLab_");
			if(isNil(nd)) {
				nd = new cc.Node;
				bton.addChild(nd);
				var comp = nd.addComponent(cc.Label);
				comp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
			}
			nd.getComponent(cc.Label).string = gameData.Info.Name+"\n("+gameData.Info.KindID+")";
			return; 
		}
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
			UIManager.openPopwnd(ViewDefine.UISetting2, true);
		}, this);
		//游戏记录
		CommonUtil.addClickEvent(this.m_ui.btn_game_record, function(){ 
			UIManager.openPopwnd(ViewDefine.UIGameRecord2, true);
		}, this);
		//公告
		CommonUtil.addClickEvent(this.m_ui.btn_notice, function(){ 
			UIManager.openPopwnd(ViewDefine.UINotices, true);
		}, this);
		//全屏
		CommonUtil.addClickEvent(this.m_ui.btn_fs, function(){ 
			Adaptor.setFullScreen(!Adaptor.isFullScreen()); 
		}, this);
	}


	//----------- tests --------------------------------------------

	private test() {
		this.m_ui.content.removeAllChildren();
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
