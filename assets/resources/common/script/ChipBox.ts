import CommonUtils from "../../../script/kernel/utils/CommonUtils";
import BaseComp from "../../../script/kernel/gui/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipBox extends BaseComp {

    private selectedIndex:number = 1;

    onLoad() {
        CommonUtils.traverseNodes(this.node, this.m_ui);
        CommonUtils.addClickEvent(this.m_ui.chip1, function(){ this.onSelect(1); }, this);
        CommonUtils.addClickEvent(this.m_ui.chip2, function(){ this.onSelect(2); }, this);
        CommonUtils.addClickEvent(this.m_ui.chip3, function(){ this.onSelect(3); }, this);
        CommonUtils.addClickEvent(this.m_ui.chip4, function(){ this.onSelect(4); }, this);
        CommonUtils.addClickEvent(this.m_ui.chip5, function(){ this.onSelect(5); }, this);
    }

    private onSelect(idx:number) {
        this.selectedIndex = idx; 
        this.m_ui.hilightSpr.position = this.m_ui["chip"+idx].position;
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
                var name = CommonUtils.getFrameName("common/imgs/chip/chip_"+values[i-1]);
                self.m_ui["chip"+i].getComponent(cc.Button).normalSprite = atlas.getSpriteFrame(name);
                self.m_ui["chip"+i].getComponent(cc.Button).hoverSprite = atlas.getSpriteFrame(name);
                self.m_ui["chip"+i].getComponent(cc.Button).pressedSprite = atlas.getSpriteFrame(name);
                self.m_ui["chip"+i].getComponent(cc.Button).disabledSprite = atlas.getSpriteFrame(name);
            }
        });
    }

}
