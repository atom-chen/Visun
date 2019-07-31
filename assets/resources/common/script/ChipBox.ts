import BaseComp from "../../../script/launcher/view/BaseComp";
import CommonUtils from "../../../script/kernel/utils/CommonUtils";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipBox extends BaseComp {
    @property(cc.Button)
    chip1: cc.Button = null;
    @property(cc.Button)
    chip2: cc.Button = null;
    @property(cc.Button)
    chip3: cc.Button = null;
    @property(cc.Button)
    chip4: cc.Button = null;
    @property(cc.Button)
    chip5: cc.Button = null;
    @property(cc.Sprite)
    hilightSpr: cc.Sprite = null;

    private selectedIndex:number = 1;

    onLoad() {
        this["chip1"].node.on("click", function(){ this.onSelect(1); }, this);
        this["chip2"].node.on("click", function(){ this.onSelect(2); }, this);
        this["chip3"].node.on("click", function(){ this.onSelect(3); }, this);
        this["chip4"].node.on("click", function(){ this.onSelect(4); }, this);
        this["chip5"].node.on("click", function(){ this.onSelect(5); }, this);
    }

    private onSelect(idx:number) {
        this.selectedIndex = idx; 
        this.hilightSpr.node.parent = this["chip"+idx].node;
    }

    public getButton(idx:number) : cc.Node {
        return this["chip"+idx].node;
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
                self["chip"+i].normalSprite = atlas.getSpriteFrame(name);
                self["chip"+i].hoverSprite = atlas.getSpriteFrame(name);
                self["chip"+i].pressedSprite = atlas.getSpriteFrame(name);
                self["chip"+i].disabledSprite = atlas.getSpriteFrame(name);
            }
        });
    }

}
