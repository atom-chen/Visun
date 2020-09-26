import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnBrnnLudan extends BaseComponent {
    private flagnn = false;

    onLoad () {
    //    CommonUtil.traverseNodes(this.node, this.m_ui);
    }

    private setFlag() {
        if(this.flagnn) { return; }
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.flagnn = true;
    }

    reflesh(data) {
        this.setFlag();
        if(isNil(data) || data.length <= 0) {
            this.m_ui.bbbb.active = false;
            return;
        }
        this.m_ui.bbbb.active = true;
        var lasdData = data.length-1;
        var childs = this.m_ui.content.children;
        var idx = 0;
        for(var i=lasdData; i>=0; i--) {
            var item = this.m_ui.bbbb;
            if(idx != 0) {
                item = childs[idx];
                if(!item) {
                    item = cc.instantiate(this.m_ui.bbbb);
                    this.m_ui.content.addChild(item);
                }
            }
            idx++;

            for(var j=0; j<4; j++) {
                var respath = "appqp/imgs/games/ic_dui";
                if(isNil(data[i][j]) || data[i][j]==0) {
                    respath = "appqp/imgs/games/ic_cuo";
                }
                item.getChildByName("item"+j).getComponent(cc.Sprite).spriteFrame = cc.loader.getRes(respath, cc.SpriteFrame);
            }
        }
        for(var n=childs.length-1; n>lasdData; n--) {
            childs[n].active = false;
            if(n!=0) {
                childs[n].destroy();
            }
        }
    }

}
