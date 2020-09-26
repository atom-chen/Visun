import GameConfig from "../../../../common/script/definer/GameConfig";
import GameManager from "../../../../common/script/model/GameManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import { login } from "../../../../../declares/login";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import Adaptor from "../../../../kernel/adaptor/Adaptor";
import UIManager from "../../../../kernel/view/UIManager";
import LoginUser from "../../../../common/script/model/LoginUser";
import { login_msgs } from "../../../../common/script/proto/net_login";
import EventCenter from "../../../../kernel/basic/event/EventCenter";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);
        this.initUIEvent();
        var hero = LoginUser.getInstance();
        this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(hero.getMoney());
        EventCenter.getInstance().listen(login_msgs.LoginResp, this.LoginResp, this);
        EventCenter.getInstance().listen(login_msgs.ReconnectResp, this.LoginResp, this);
    }

    private LoginResp(param:login.ILoginResp) {
		var hero = LoginUser.getInstance();
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(hero.getMoney());
	}

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
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

    setViewData(items:Array<login.IGameItem>) {
        if(isNil(items)) { return; }
        var cfg = GameConfig[items[0].Info.KindID];
        this.m_lab.lab_roomname.string = cfg && cfg.name || items[0].Info.Name;

        var rrx = this.m_ui.rlist.x;
        if(items.length <= 1) {
            this.m_ui.rlist.x = rrx+100;
        } else if (items.length <= 2) {
            this.m_ui.rlist.x = rrx+60;
        }

        for(var i=0; i<6; i++) {
            var btn = this.m_ui["button"+i];
            if(items[i]) {
                btn["gameData"] = items[i];
                CommonUtil.addClickEvent(btn, function(){
                    GameManager.getInstance().enterGame(this.gameData.ID);
                }, btn);
                btn.getChildByName("lab_zhunru").getComponent(cc.Label).string = ""+(items[i].Info.EnterScore/100);
                btn.getChildByName("lab_dizhu").getComponent(cc.Label).string = ""+(items[i].Info.LessScore/100);
            }
            btn.active = !isNil(items[i]);
        }

        this.runEnterAni();
    }

    runEnterAni() {
        this.m_ui.rlist.scale = 0.1;
        this.m_ui.rlist.runAction(cc.scaleTo(0.25, 1))
    }

}
