import BaseComp from "../../../../../Script/launcher/view/BaseComp";
import CommonUtils from "../../../../../Script/kernel/utils/CommonUtils";

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

    start () {
        this.setChipValues([1,3,5,300,800]);

        cc.loader.loadRes("lobby/music/denglu", cc.AudioClip, (err, audioclip) => {
            if (err) {
                cc.log("音频加载失败"+err);
                return;
            }
            cc.log("播放音频：", audioclip)
            cc.audioEngine.playMusic(audioclip, true);
        });
    }

    public setChipValues(values:number[]) {
        var self = this
        cc.loader.loadRes("lobby/imgs/poker/chip", cc.SpriteAtlas, function (err, atlas) {
            if(err) { cc.log("error: "+err); return; }
            for(var i=1; i<=5; i++){
                var name = CommonUtils.getFrameName("lobby/imgs/poker/chip/chip_"+values[i-1]);
                self["chip"+i].normalSprite = atlas.getSpriteFrame(name);
                self["chip"+i].hoverSprite = atlas.getSpriteFrame(name);
                self["chip"+i].pressedSprite = atlas.getSpriteFrame(name);
                self["chip"+i].disabledSprite = atlas.getSpriteFrame(name);
            }
        });
    }
    // update (dt) {}
}
