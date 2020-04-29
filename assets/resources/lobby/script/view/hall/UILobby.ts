import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import LoginUser from "../../../../../common/script/model/LoginUser";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { login_msgs, login_request } from "../../../../../common/script/proto/net_login";
import GameManager from "../../../../../common/script/model/GameManager";
import room_btn from "./room_btn";
import UIManager from "../../../../../kernel/view/UIManager";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import Adaptor from "../../../../../kernel/adaptor/Adaptor";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UILobby extends BaseComponent {
	@property(cc.Prefab)
	roomBtn: cc.Prefab = null;

	onLoad () 
	{
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.initUiEvents();
		this.initNetEvents();
		this.refleshRoomsInfo();
		this.refleshUI(null);
	}

	private refleshRoomsInfo() {
		this.m_ui.content.removeAllChildren();

		var roomsInfo = GameManager.getInstance().getRoomsInfo();
		if(!roomsInfo) { return; }

		for(var i in roomsInfo) {
			var info = roomsInfo[i];
			var bton = cc.instantiate(this.roomBtn);
			bton["RoomInfo"] = info;
			bton.getComponent(room_btn).setRoomInfo(info);
			CommonUtil.addClickEvent(bton, function(){ 
				login_request.ReqEnterRoom({
					RoomNum: this.RoomInfo.RoomNum,
					RoomKey: this.RoomInfo.RoomKey
				});
				UIManager.openPopwnd(ViewDefine.UIGames, false, null, this.GameKind);
			}, bton);
			this.m_ui.content.addChild(bton);
		}
	}

	private refleshUI(data:any) {
		var hero = LoginUser.getInstance();
		this.m_ui.lab_name.getComponent(cc.Label).string = "昵称：" + hero.Name;
		this.m_ui.lab_id.getComponent(cc.Label).string = "ID：" + hero.UserID;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = hero.Money.toString();
		GameUtil.setHeadIcon(this.m_ui.headNode, 1);
	}

	private initNetEvents() {
		EventCenter.getInstance().listen(login_msgs.MasterInfo, (param:any)=>{
			this.refleshUI(null);
			this.refleshRoomsInfo();
        }, this);
	}

	private initUiEvents() {
		//头像
		CommonUtil.addClickEvent(this.m_ui.headNode, function(){ 
			UIManager.openPopwnd(ViewDefine.UILogin, true, null); 
		}, this);
		//设置
		CommonUtil.addClickEvent(this.m_ui.btn_menu, function(){
			GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
		}, this);
		//全屏
		CommonUtil.addClickEvent(this.m_ui.btn_fs, function(){ 
			Adaptor.setFullScreen(!Adaptor.isFullScreen()); 
		}, this);
	}

}