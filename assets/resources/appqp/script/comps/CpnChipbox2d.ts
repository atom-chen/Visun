//-----------------------------
//筹码盒组件
//-----------------------------
import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import GameUtil from "../../../../common/script/utils/GameUtil";
import AudioManager from "../../../../kernel/audio/AudioManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnChipbox2d extends BaseComponent {

    private selectedIndex:number = 1;
    private _values:Array<number> = null;
    private chipPathFlag:boolean = false;

    onLoad() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.addClickEvent(this.m_ui.chip0, function(){ this.onSelect(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip1, function(){ this.onSelect(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip2, function(){ this.onSelect(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip3, function(){ this.onSelect(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.chip4, function(){ this.onSelect(4); }, this);
        this.setSelectedIndex(1);
    }

    private onSelect(idx:number) {
        this.selectedIndex = idx; 
        this.m_ui.hilightSpr.x = this.m_ui["chip"+idx].x;
        AudioManager.getInstance().playEffectAsync("appqp/audios/selectchip",false);
    }

    public getChipNode(idx:number) : cc.Node {
        return this.m_ui["chip"+idx];
    }

    public getChipNodeByValue(v:number) : cc.Node {
        var idx = this._values.indexOf(v);
        if(idx >= 0) {
            return this.m_ui["chip"+idx];
        } else {
            return this.m_ui.chip0;
        }
    }

    public getSelectedIndex() : number {
        return this.selectedIndex;
    }

    public setSelectedIndex(v:number) {
        this.selectedIndex = v;
        this.onSelect(v);
    }

    public getIndexByMoney(v:number) : number {
        for(var i=this._values.length-1; i>=0; i--) {
            if(v == this._values[i]) {
                return i+1;
            }
        }
        return -1;
    }
    
    public getSelectValue() : number {
        return this._values[this.selectedIndex];
    }

    public getSelectedNode() : cc.Node {
        return this.m_ui["chip"+this.selectedIndex];
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
        var respath = GameUtil.chipPath(v, this.chipPathFlag);
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
