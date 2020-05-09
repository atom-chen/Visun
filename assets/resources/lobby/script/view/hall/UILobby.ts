import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import LoginUser from "../../../../../common/script/model/LoginUser";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { login_msgs, login_request } from "../../../../../common/script/proto/net_login";
import GameManager from "../../../../../common/script/model/GameManager";
import UIManager from "../../../../../kernel/view/UIManager";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import Adaptor from "../../../../../kernel/adaptor/Adaptor";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import { gamecomm_request } from "../../../../../common/script/proto/net_gamecomm";
import GameConfig from "../../../../../common/script/definer/GameConfig";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UILobby extends BaseComponent {
	@property(cc.Prefab)
	gameBtn: cc.Prefab = null;
	@property(cc.Prefab)
	roomTab: cc.Prefab = null;

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUiEvents();
		this.initNetEvents();

		this.refleshRoomsInfo();
		this.refleshGameList();
		this.refleshUI(null);
	}

	private refleshRoomsInfo() {
		this.m_ui.contentLeft.removeAllChildren();

		var roomsInfo = GameManager.getInstance().getRoomsInfo();
		if(!roomsInfo) { return; }

		for(var i in roomsInfo) {
			var info = roomsInfo[i];
			var bton = cc.instantiate(this.roomTab);
			bton["RoomInfo"] = info;
			var m_ui:any = {};
			CommonUtil.traverseNodes(bton, m_ui);
			m_ui.lab_roomname.getComponent(cc.Label).string = info.RoomName;
			CommonUtil.addClickEvent(bton, function(){ 
				login_request.ReqEnterRoom({
					RoomNum: this.RoomInfo.RoomNum,
					RoomKey: this.RoomInfo.RoomKey
				});
			}, bton);
			this.m_ui.contentLeft.addChild(bton);
		}
	}

	private refleshGameList() {
		this.m_ui.content.removeAllChildren();

		var gameList = GameManager.getInstance().getGameArr();
		if(!gameList) { return; }

		for(var i in gameList) {
			var gameData = gameList[i];
			var bton = cc.instantiate(this.gameBtn);
            bton["gameData"] = gameData;
			
			this.m_ui.content.addChild(bton);

			CommonUtil.addClickEvent(bton, function(){ 
				GameManager.getInstance().setGameId(this.gameData.ID);
				gamecomm_request.ReqEnterGame({
                    GameID: this.gameData.ID 
                });
			}, bton);

			this.refreshGameButton(bton, gameData);
		}
	}

	private refreshGameButton(bton, gameData) {
		var cfg = GameConfig[gameData.Info.KindID];

		var tbl : any = {};
		CommonUtil.traverseNodes(bton, tbl);
		tbl.lab_roomname.getComponent(cc.Label).string = gameData.Info.Name;
		tbl.lab_roomnum.getComponent(cc.Label).string = gameData.Info.EnterScore;
		tbl.lab_roomkey.getComponent(cc.Label).string = gameData.Info.Level;
		
		if(cfg) {
			cc.loader.loadRes(cfg.icon, cc.SpriteFrame, (err, rsc)=>{
				if(err) { cc.log("load fail", err); return; }
				tbl.Background.getComponent(cc.Sprite).spriteFrame = rsc;
			});
		} else {
			cc.warn("缺少配置信息：", gameData.Info.KindID);
		}
		
	}

	private refleshUI(data:any) {
		var hero = LoginUser.getInstance();
		this.m_ui.lab_name.getComponent(cc.Label).string = "昵称：" + hero.Name;
		this.m_ui.lab_id.getComponent(cc.Label).string = "ID：" + hero.UserID;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = hero.Gold.toString();
		GameUtil.setHeadIcon(this.m_ui.headNode, 1);
	}

	private initNetEvents() {
		EventCenter.getInstance().listen(login_msgs.MasterInfo, (param:any)=>{
			this.refleshUI(null);
			this.refleshRoomsInfo();
		}, this);
		EventCenter.getInstance().listen(login_msgs.GameList, this.refleshGameList, this);
	}

	private initUiEvents() {
		//头像
		CommonUtil.addClickEvent(this.m_ui.headNode, function(){ 
			UIManager.openPopwnd(ViewDefine.UILogin, false, null); 
		}, this);
		//设置
		CommonUtil.addClickEvent(this.m_ui.btn_menu, function(){
			GameManager.getInstance().enterGameScene(GameKindEnum.Landlord);
		}, this);
		//全屏
		CommonUtil.addClickEvent(this.m_ui.btn_fs, function(){ 
			Adaptor.setFullScreen(!Adaptor.isFullScreen()); 
		}, this);
		//
		CommonUtil.addClickEvent(this.m_ui.btn_chat, function(){
			UIManager.openPanel(ViewDefine.UIChat, null);
		}, this);
	}

}