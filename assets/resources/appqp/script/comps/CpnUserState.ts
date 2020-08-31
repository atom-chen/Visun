//-----------------------------
//玩家状态组件：弃牌/跟注/加注/...
//-----------------------------
const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnUserState extends cc.Component {

    @property(cc.SpriteFrame)
    Frames: cc.SpriteFrame[] = [];

    private _originY = 0;

    onLoad() {
        this._originY = this.node.y;
    }

    private _st = 0;

    private setState(st:number) {
        this._st = st;
        if(st < 0) {
            this.getComponent(cc.Sprite).spriteFrame = null;
        } else {
            this.getComponent(cc.Sprite).spriteFrame = this.Frames[st];
            this.node.stopAllActions();
            this.node.y = this._originY - 50;
            this.node.runAction(cc.moveTo(0.2, cc.v2(this.node.x, this._originY)));
        }
    }

    idle() {
        this.setState(-1);
    }

    genzhu() {
        this.setState(0);
    }

    jiazhu() {
        this.setState(1);
    }

    guopai() {
        this.setState(2);
    }

    qipai() {
        this.setState(3);
    }

    suoha() {
        this.setState(4);
    }

    bipaishu() {
        this.setState(5);
    }

    yikanpai() {
        this.setState(6);
    }

}
