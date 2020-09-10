//-----------------------------
//玩家状态组件：弃牌/跟注/加注/...
//-----------------------------
import Preloader from "../../../../kernel/utils/Preloader";

const State2Res = [
    "appqp/imgs/games/ust_genzhu",
    "appqp/imgs/games/ust_jiazhu",
    "appqp/imgs/games/ust_guopai",
    "appqp/imgs/games/ust_qipai",
    "appqp/imgs/games/ust_suoha",
    "appqp/imgs/games/ust_bishu",
    "appqp/imgs/games/ust_yizhunbei",
]


const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnUserState extends cc.Component {
    @property(cc.SpriteFrame)
    Frames: cc.SpriteFrame[] = [];

    private _originY = 0;
    private _st = 0;

    onLoad() {
        this._originY = this.node.y;
    }

    onDestroy() {
        Preloader.resDispatcher.removeByTarget(this);
    }

    private setCurState(st:number) {
        this._st = st;
        if(st < 0) {
            this.getComponent(cc.Sprite).spriteFrame = null;
        } else {
            Preloader.setNodeSprite(this.getComponent(cc.Sprite), State2Res[st], this);
            // this.getComponent(cc.Sprite).spriteFrame = this.Frames[st];
            this.node.stopAllActions();
            this.node.y = this._originY - 50;
            this.node.runAction(cc.moveTo(0.2, cc.v2(this.node.x, this._originY)));
        }
    }

    idle() {
        this.setCurState(-1);
    }

    genzhu() {
        this.setCurState(0);
    }

    jiazhu() {
        this.setCurState(1);
    }

    guopai() {
        this.setCurState(2);
    }

    qipai() {
        this.setCurState(3);
    }

    suoha() {
        this.setCurState(4);
    }

    bipaishu() {
        this.setCurState(5);
    }

    yizhunbei() {
        this.setCurState(6);
    }

}
