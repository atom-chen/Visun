import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { login_msgs, login_request } from "../../../../../common/script/proto/net_login";
import GameManager from "../../../../../common/script/model/GameManager";
import { gamecomm_request } from "../../../../../common/script/proto/net_gamecomm";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGames extends BaseComponent {
    @property(cc.Prefab)
	roomBtn: cc.Prefab = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.initUiEvents();
        this.initNetEvents();
        this.refleshGameList();
    }

    private initUiEvents() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);
    }
    
    private initNetEvents() {
		EventCenter.getInstance().listen(login_msgs.GameList, (param:any)=>{
			this.refleshGameList();
        }, this);
    }
    
    private refleshGameList() {
		this.m_ui.content.removeAllChildren();

		var gameList = GameManager.getInstance().getGameArr();
		if(!gameList) { return; }

		for(var i in gameList) {
			var info = gameList[i];
			var bton = cc.instantiate(this.roomBtn);
            bton["GameInfo"] = info;
            var tbl : any = {};
            CommonUtil.traverseNodes(bton, tbl);
            tbl.lab_roomname.getComponent(cc.Label).string = info.Info.Name;
            tbl.lab_roomnum.getComponent(cc.Label).string = info.Info.EnterScore;
            tbl.lab_roomkey.getComponent(cc.Label).string = info.Info.Level;
			CommonUtil.addClickEvent(bton, function(){ 
				gamecomm_request.ReqEnterGame({
                    GameID: this.GameInfo.ID 
                });
			}, bton);
			this.m_ui.content.addChild(bton);
		}
	}

}
