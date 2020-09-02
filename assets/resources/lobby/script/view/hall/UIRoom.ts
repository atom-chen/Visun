import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import GameManager from "../../../../../common/script/model/GameManager";
import GameConfig from "../../../../../common/script/definer/GameConfig";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../../kernel/view/UIManager";
import { login } from "../../../../../../declares/login";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends BaseComponent {

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);

        CommonUtil.addClickEvent(this.m_ui.btn_close, ()=>{
            CommonUtil.safeDelete(this);
        }, this);
    }

    setViewData(items:Array<login.IGameItem>) {
        this.m_lab.lab_roomname.string = items[0].Info.Name;

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
