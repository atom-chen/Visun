import { gamecomm } from "../../../../../declares/gamecomm";
import { login } from "../../../../../declares/login";
import { GameTypeEnum } from "../../../../common/script/definer/ConstDefine";
import EventDefine from "../../../../common/script/definer/EventDefine";
import GameConfig from "../../../../common/script/definer/GameConfig";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import GameManager from "../../../../common/script/model/GameManager";
import LoginUser from "../../../../common/script/model/LoginUser";
import { gamecomm_request } from "../../../../common/script/proto/net_gamecomm";
import { login_msgs, login_request } from "../../../../common/script/proto/net_login";
import Adaptor from "../../../../kernel/adaptor/Adaptor";
import AudioManager from "../../../../kernel/audio/AudioManager";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import UIManager from "../../../../kernel/view/UIManager";


const TAB_BUILD = 0;
const TAB_JOIN = 1;

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIBuildRoom extends BaseComponent {
    private gameId;
    private kindId;
    private curTab = 0;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvent();
        this.initNetEvent();
        this.m_ui.btn_fs.active = !cc.sys.isNative;
        var hero = LoginUser.getInstance();
        this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(hero.getMoney());
        this.selectTab(TAB_JOIN);
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
    
    setViewData(info) {
        var GameKind = info.GameKind;
        
        this.gameId = 0;
        this.kindId = GameKind;

        var cfg = GameConfig[GameKind];
        this.m_ui.lab_roomname.getComponent(cc.Label).string = cfg && cfg.name || "";
    }

    createRoom() {
        var roomName = this.m_ui.editRoomName.getComponent(cc.EditBox).string;
        var pswd = this.m_ui.editPswd.getComponent(cc.EditBox).string;
        var strPlayScore = this.m_ui.editTotal.getChildByName("labNum").getComponent(cc.Label).string;
        var strLessScore = this.m_ui.editDizhu.getChildByName("labNum").getComponent(cc.Label).string;
        var strAmount = this.m_ui.editJushu.getChildByName("labNum").getComponent(cc.Label).string;

        if(isEmpty(roomName)) {
            UIManager.toast("请输入房间名");
            return;
        }
        if(isEmpty(pswd)) {
            UIManager.toast("请输入房间密码");
            return;
        }
        if(isEmpty(strPlayScore)) {
            UIManager.toast("请输入携带筹码额度");
            return;
        }
        if(isEmpty(strLessScore)) {
            UIManager.toast("请输入底注");
            return;
        }

        var PlayScore = CommonUtil.toServerMoney(parseFloat(strPlayScore));
        var LessScore = CommonUtil.toServerMoney(parseFloat(strLessScore));
        var Amount = 0;
        if(!isEmpty(strAmount) && parseInt(strAmount)>0) {
            Amount = parseInt(strAmount);
        }
        

        var info:login.IGameInfo = {};
        info.Type = GameTypeEnum.RoomCard as number;
        info.KindID = this.kindId;
        info.Level = 0;
        info.Commission = 1;
        info.MaxChair = 5;
        info.EnterScore = 500;
        info.HostID = LoginUser.getInstance().UserId;

        info.Name = roomName;
        info.PlayScore = PlayScore;
        info.LessScore = LessScore;
        info.Password = pswd;
        info.Amount = Amount;
        
        GameManager.getInstance().enterBuildGame(info);
    }

    joinRoom() {
        var roomName = this.m_ui.editJoinName.getComponent(cc.EditBox).string;
        var pswd = this.m_ui.editJoinPswd.getComponent(cc.EditBox).string;
        if(isEmpty(roomName)) {
            UIManager.toast("请输入房间名");
            return;
        }
        if(isEmpty(pswd)) {
            UIManager.toast("请输入房间密码");
            return;
        }
        UIManager.toast("缺少加入房间协议");
    }

    onBtnEnter() {
        if(this.curTab == TAB_BUILD) {
            this.createRoom();
        } else {
            this.joinRoom();
        }
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
		CommonUtil.addClickEvent(this.m_ui.btn_ok1, this.onBtnEnter, this);
        
        //tab: 创建房间
        CommonUtil.addClickEvent(this.m_ui.btn_build, function(){ 
			this.selectTab(TAB_BUILD);
        }, this);
        
        //tab: 加入房间
        CommonUtil.addClickEvent(this.m_ui.btn_join, function(){ 
			this.selectTab(TAB_JOIN);
		}, this);
    }

    // 0 创建    1 加入
    selectTab(idx:number) {
        this.curTab = idx;
        if(idx == TAB_BUILD) {
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

}
