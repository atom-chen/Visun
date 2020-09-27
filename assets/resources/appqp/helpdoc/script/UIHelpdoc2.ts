import GameConfig from "../../../../common/script/definer/GameConfig";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import Preloader from "../../../../kernel/utils/Preloader";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import HelpDocDefine from "./HelpDocDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIHelpdoc2 extends BaseComponent {
    private kindId:number = 0;

    onLoad () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            CommonUtil.safeDelete(this);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.tab_btn0, function(){ this.selectTab(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.tab_btn1, function(){ this.selectTab(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.tab_btn2, function(){ this.selectTab(2); }, this);

        this.selectTab(0);
    }

    private selectTab(idx:number) {
        for(var i=0; i<3; i++) {
            this.m_ui["tab_btn"+i].getChildByName("tab1_sel").active = idx == i;
            this.m_ui["tab_btn"+i].getChildByName("tab1_unsel").active = idx != i;
        }

        this.m_ui.content.removeAllChildren(true);
        var doc = HelpDocDefine[this.kindId];
        if(isNil(doc)) { return; }
        var imglist:Array<string> = doc.TabList[idx] && doc.TabList[idx].imgcont;
        if(imglist) {
            for(var n in imglist) {
                if(imglist[n]==="newline") {
                    var line = new cc.Node;
                    line.width = 200;
                    line.height = 10;
                    this.m_ui.content.addChild(line);
                } else {
                    var nd = new cc.Node;
                    var sprNd = nd.addComponent(cc.Sprite);
                    sprNd.sizeMode = cc.Sprite.SizeMode.RAW;
                    Preloader.setNodeSprite(sprNd, "appqp/helpdoc/imgs/"+imglist[n], this);
                    this.m_ui.content.addChild(nd);
                }
            }
        }
    }

    setViewData(data) {
        this.kindId = data.kindId;

        var cfg = GameConfig[this.kindId];

        this.m_ui.label_title.getComponent(cc.Label).string = cfg && cfg.name || "";
        
        this.selectTab(0);
    }

}
