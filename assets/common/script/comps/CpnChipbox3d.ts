import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import GameUtil from "../utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnChipbox3d extends BaseComponent {

    private selectedIndex:number = 1;
    private _values = null;

    onLoad() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.addClickEvent(this.m_ui.chip1, function(){ this.onSelect(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip2, function(){ this.onSelect(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip3, function(){ this.onSelect(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip4, function(){ this.onSelect(4); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip0, function(){ this.onSelect(0); }, this);
        this.setSelectedIndex(1);
    }

    private onSelect(idx:number) {
        this.selectedIndex = idx; 
        this.m_ui.hilightSpr.x = this.m_ui["chip"+idx].x;
    }

    public getChipNode(idx:number) : cc.Node {
        return this.m_ui["chip"+idx];
    }

    public getSelectedIndex() : number {
        return this.selectedIndex;
    }

    public setSelectedIndex(v:number) {
        this.selectedIndex = v;
        this.onSelect(v);
    }

    
    public setChipValues(values:number[]) {
        if(!this._values) {
            CommonUtil.traverseNodes(this.node, this.m_ui);
        }

        this._values = values; 

        for(var i=0; i<5; i++){
            this.setChipValue(i, values[i]);
        }
    }

    private setChipValue(index:number, v:number) {
        var respath = GameUtil.chipPath(v, false);
        var res = cc.loader.getRes(respath, cc.SpriteFrame);
        if(res){ 
            this.m_ui["chip"+index].getComponent(cc.Sprite).spriteFrame = res;
        } else {
            cc.loader.loadRes( respath, cc.SpriteFrame, function(err, rsc){
                if(err) { cc.log("error: "+err); return; }
                if(cc.isValid(this)) {
                    this.m_ui["chip"+index].getComponent(cc.Sprite).spriteFrame = rsc;
                }
            }.bind(this) );
        }
    }

}
