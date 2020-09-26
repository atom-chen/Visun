import GameConfig from "../../../../common/script/definer/GameConfig";
import GameManager from "../../../../common/script/model/GameManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import { login } from "../../../../../declares/login";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import Adaptor from "../../../../kernel/adaptor/Adaptor";
import UIManager from "../../../../kernel/view/UIManager";
import LoginUser from "../../../../common/script/model/LoginUser";
import { login_msgs } from "../../../../common/script/proto/net_login";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import AudioManager from "../../../../kernel/audio/AudioManager";
import EventDefine from "../../../../common/script/definer/EventDefine";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {
    private gameId;
    private kindId;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);
        this.initUIEvent();
        this.initNetEvent();
        this.m_ui.btn_fs.active = !cc.sys.isNative;
        var hero = LoginUser.getInstance();
        this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(hero.getMoney());
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
    }

    setViewData(items:Array<login.IGameItem>) {
        if(isNil(items)) { return; }
        var cfg = GameConfig[items[0].Info.KindID];
        this.m_lab.lab_roomname.string = cfg && cfg.name || items[0].Info.Name;
        this.gameId = items[0].ID;
        this.kindId = items[0].Info.KindID;

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
                    AudioManager.getInstance().playEffectAsync("appqp/audios/selectchip",false);
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
