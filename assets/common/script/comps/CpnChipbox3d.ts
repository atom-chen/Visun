import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import GameUtil from "../utils/GameUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnChipbox3d extends BaseComponent {

    private selectedIndex:number = 1;

    onLoad() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.addClickEvent(this.m_ui.chip1, function(){ this.onSelect(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip2, function(){ this.onSelect(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip3, function(){ this.onSelect(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip4, function(){ this.onSelect(4); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip5, function(){ this.onSelect(5); }, this);
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

    private _values = null;
    public setChipValues(values:number[]) {
        if(!this._values) {
            CommonUtil.traverseNodes(this.node, this.m_ui);
        }
        this._values = values; 

        for(var i=0; i<5; i++){
            var respath = GameUtil.chipPath(this._values[i], true);
            var res = cc.loader.getRes(respath, cc.SpriteFrame);
            if(res) {
                this.onResLoaded(null, res);
                return;
            }
            cc.loader.loadRes(respath, cc.SpriteFrame, this.onResLoaded.bind(this));
        }
    }

    private onResLoaded(err, sprFrame){
        if(err) { cc.log("error: "+err); return; }
    }

}
