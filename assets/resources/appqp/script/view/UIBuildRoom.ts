import { gamecomm } from "../../../../../declares/gamecomm";
import { login } from "../../../../../declares/login";
import { GameModel } from "../../../../common/script/definer/ConstDefine";
import EventDefine from "../../../../common/script/definer/EventDefine";
import GameConfig from "../../../../common/script/definer/GameConfig";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../common/script/model/GameManager";
import LoginUser from "../../../../common/script/model/LoginUser";
import { gamecomm_request } from "../../../../common/script/proto/net_gamecomm";
import { login_msgs } from "../../../../common/script/proto/net_login";
import Adaptor from "../../../../kernel/adaptor/Adaptor";
import AudioManager from "../../../../kernel/audio/AudioManager";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import UIManager from "../../../../kernel/view/UIManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIBuildRoom extends BaseComponent {
    private gameId;
    private kindId;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvent();
        this.initNetEvent();
        this.m_ui.btn_fs.active = !cc.sys.isNative;
        var hero = LoginUser.getInstance();
        this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(hero.getMoney());
        this.selectTab(1);
    }

    initNetEvent() {
        EventCenter.getInstance().listen(login_msgs.LoginResp, this.LoginResp, this);
        EventCenter.getInstance().listen(login_msgs.ReconnectResp, this.LoginResp, this);
        EventCenter.getInstance().listen(EventDefine.game_mode_chg, this.onGameModeChg, this);
    }

    onGameModeChg(mode) {
        CommonUtil.safeDelete(this);
    }

    private LoginResp(param:login.ILoginResp) {
		var hero = LoginUser.getInstance();
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(hero.getMoney());
	}

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
            AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
        }, this);
        //设置
		CommonUtil.addClickEvent(this.m_ui.btn_menu, function(){ 
            UIManager.openPopwnd(ViewDefine.UISetting2, true);
            AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		//游戏记录
		CommonUtil.addClickEvent(this.m_ui.btn_game_record, function(){ 
            if(isEmpty(this.gameId) || isEmpty(this.kindId)) {
                return;
            }
            UIManager.openPopwnd(ViewDefine.UIGameRecord1, true, {kindId:this.kindId,gameId:this.gameId});
            AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		//帮助
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:this.kindId});
            AudioManager.getInstance().playEffectAsync("appqp/audios/wnd_open",false);
		}, this);
		//全屏
		CommonUtil.addClickEvent(this.m_ui.btn_fs, function(){ 
			Adaptor.setFullScreen(!Adaptor.isFullScreen()); 
        }, this);
        
        //进入游戏
		CommonUtil.addClickEvent(this.m_ui.btn_ok1, function(){ 
            var info:gamecomm.IConfigInfo = {};
            info.Amount = parseInt(this.m_ui.editJushu.getChildByName("labNum").getComponent(cc.Label).string);
            info.Commission = 0.05;
            info.MaxChair = 5;
            info.PlayScore = parseFloat(this.m_ui.editTotal.getChildByName("labNum").getComponent(cc.Label).string);
            info.LessScore = parseFloat(this.m_ui.editDizhu.getChildByName("labNum").getComponent(cc.Label).string);
            info.EnterScore = 500;
            info.Password = this.m_ui.editPswd.getComponent(cc.EditBox).string;
            info.Name = this.m_ui.editRoomName.getComponent(cc.EditBox).string;
            gamecomm_request.SettingGameReq({
                Model:GameModel.RoomCard,
                KindID:this.kindId,
                Info:info
            });
			GameManager.getInstance().enterGame(this.gameId);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_build, function(){ 
			this.selectTab(0);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_join, function(){ 
			this.selectTab(1);
		}, this);
    }

    // 0 创建    1 加入
    selectTab(idx:number) {
        if(idx == 0) {
            this.m_ui.buildNode.active = true;
            this.m_ui.joinNode.active = false;

            this.m_ui.btn_build.getChildByName("tab_sel").active = true;
            this.m_ui.btn_build.getChildByName("tab_unsel").active = false;
            this.m_ui.btn_build.getChildByName("labTtt").color = cc.color(250,51,93,255);
            this.m_ui.btn_build.getChildByName("labTtt").opacity = 255;

            this.m_ui.btn_join.getChildByName("tab_sel").active = false;
            this.m_ui.btn_join.getChildByName("tab_unsel").active = true;
            this.m_ui.btn_join.getChildByName("labTtt").color = cc.color(166,166,166,255);
            this.m_ui.btn_join.getChildByName("labTtt").opacity = 122;
        } else {
            this.m_ui.buildNode.active = false;
            this.m_ui.joinNode.active = true;

            this.m_ui.btn_build.getChildByName("tab_sel").active = false;
            this.m_ui.btn_build.getChildByName("tab_unsel").active = true;
            this.m_ui.btn_build.getChildByName("labTtt").color = cc.color(166,166,166,255);
            this.m_ui.btn_build.getChildByName("labTtt").opacity = 122;

            this.m_ui.btn_join.getChildByName("tab_sel").active = true;
            this.m_ui.btn_join.getChildByName("tab_unsel").active = false;
            this.m_ui.btn_join.getChildByName("labTtt").color = cc.color(250,51,93,255);
            this.m_ui.btn_join.getChildByName("labTtt").opacity = 255;
        }
    }

    setViewData(items:login.IGameItem) {
        if(isNil(items)) { return; }
        var cfg = GameConfig[items.Info.KindID];
        this.gameId = items.ID;
        this.kindId = items.Info.KindID;

        this.m_ui.lab_roomname.getComponent(cc.Label).string = cfg && cfg.name || items.Info.Name;
    }

}
