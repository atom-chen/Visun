
const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPaixing extends cc.Component {
    private px = 0;

    setPaixing(v:number) {
        this.px = v;
        this.node.getChildByName("sprPx").getComponent(cc.Sprite).spriteFrame = null;
        this.node.getChildByName("labPx").getComponent(cc.Label).string = ""+v;
    }

    getPaixing() : number {
        return this.px;
    }

}
