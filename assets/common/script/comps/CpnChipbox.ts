import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnChipbox extends BaseComponent {

    private selectedIndex:number = 1;

    onLoad() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.addClickEvent(this.m_ui.chip1, function(){ this.onSelect(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip2, function(){ this.onSelect(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip3, function(){ this.onSelect(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip4, function(){ this.onSelect(4); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip5, function(){ this.onSelect(5); }, this);
    }

    private onSelect(idx:number) {
        this.selectedIndex = idx; 
        this.m_ui.hilightSpr.x = this.m_ui["chip"+idx].x - 2;
        this.m_ui.hilightSpr.y = this.m_ui["chip"+idx].y + 3;
    }

    public getButton(idx:number) : cc.Node {
        return this.m_ui["chip"+idx];
    }

    public getSelectedIndex() : number {
        return this.selectedIndex;
    }

    public setChipValues(values:number[]) {
        var self = this
        cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, function (err, atlas) {
            if(err) { cc.log("error: "+err); return; }
            for(var i=1; i<=5; i++){
                var name = CommonUtil.getFrameName("common/imgs/chip/chip_"+values[i-1]);
                self.m_ui["chip"+i].getComponent(cc.Button).normalSprite = atlas.getSpriteFrame(name);
                self.m_ui["chip"+i].getComponent(cc.Button).hoverSprite = atlas.getSpriteFrame(name);
                self.m_ui["chip"+i].getComponent(cc.Button).pressedSprite = atlas.getSpriteFrame(name);
                self.m_ui["chip"+i].getComponent(cc.Button).disabledSprite = atlas.getSpriteFrame(name);
            }
        });
    }

}
