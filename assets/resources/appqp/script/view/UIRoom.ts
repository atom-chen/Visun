import GameConfig from "../../../../common/script/definer/GameConfig";
import GameManager from "../../../../common/script/model/GameManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CpnGameMenu from "../comps/CpnGameMenu";
import { login } from "../../../../../declares/login";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import Adaptor from "../../../../kernel/adaptor/Adaptor";
import UIManager from "../../../../kernel/view/UIManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);
        this.initUIEvent();
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
        var cfg = GameConfig[items[0].Info.KindID];
        this.m_lab.lab_roomname.string = cfg && cfg.name || items[0].Info.Name;

        for(var i=0; i<4; i++) {
            var idx = i+1;
            var btn = this.m_ui["button"+idx];
            if(items[i]) {
                btn["gameData"] = items[i];
                CommonUtil.addClickEvent(btn, function(){
                    GameManager.getInstance().enterGame(this.gameData.ID);
                }, btn);
                this.m_lab["Label"+idx].string = ""+(items[i].Info.EnterScore/100);
            }
            btn.active = !isNil(items[i]);
        }

        this.runEnterAni();
    }

    runEnterAni() {
        for(var i=1; i<=4; i++) {
            var btn = this.m_ui["button"+i];
            var oldPos = btn.position;
            btn.y = -1000;
            btn.runAction(cc.moveTo(0.15, cc.v2(oldPos.x, oldPos.y)));
        }
    }

}
