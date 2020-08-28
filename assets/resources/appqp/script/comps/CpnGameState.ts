//-----------------------------
//游戏状态组件：下注中/开奖中/...
//-----------------------------
const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnGameState extends cc.Component {

    @property(cc.SpriteFrame)
    Frames: cc.SpriteFrame[] = [];

    private _st = 0;

    setState(st:number) {
        this._st = st;
        this.getComponent(cc.Sprite).spriteFrame = this.Frames[st];
    }

    setZhunbei() {
        this.setState(0);
    }

    setFapai() {
        this.setState(1);
    }

    setXiazhu() {
        this.setState(2);
    }

    setKaipai() {
        this.setState(3);
    }

    setPaijiang() {
        this.setState(4);
    }

}
