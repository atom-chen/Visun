const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipBox extends cc.Component {
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

    start () {
        // cc.loader.loadRes("lobby/imgs/poker/chip/chip_300")
        // this.chip1.normalSprite = new cc.SpriteFrame("lobby/imgs/poker/chip/chip_300.png");
        // this.chip2.normalSprite = new cc.SpriteFrame("lobby/imgs/poker/chip/chip_50000.png");
        // this.chip3.normalSprite = new cc.SpriteFrame("lobby/imgs/poker/chip/chip_8000.png");
        // this.chip4.normalSprite = new cc.SpriteFrame("lobby/imgs/poker/chip/chip_80000.png");
        // this.chip5.normalSprite = new cc.SpriteFrame("lobby/imgs/poker/chip/chip_800000.png");
    }

    public setChipValues(values:number[]) {

    }
    // update (dt) {}
}
