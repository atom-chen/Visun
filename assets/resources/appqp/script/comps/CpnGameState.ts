//-----------------------------
//游戏状态组件：下注中/开奖中/...
//-----------------------------
import Preloader from "../../../../kernel/utils/Preloader";


const State2Res = [
    "appqp/imgs/games/gst2d_zbz",
    "appqp/imgs/games/gst2d_fpz",
    "appqp/imgs/games/gst2d_xzz",
    "appqp/imgs/games/gst2d_kpz",
    "appqp/imgs/games/gst2d_pjz",
]

const State3Res = [
    "appqp/imgs/games/gst3d_zhunbeizhong",
    "appqp/imgs/games/gst3d_fapaizhong",
    "appqp/imgs/games/gst3d_xiazhuzhong",
    "appqp/imgs/games/gst3d_kaipaizhong",
    "appqp/imgs/games/gst3d_paijiangzhong",
]


const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnGameState extends cc.Component {
    @property(cc.SpriteFrame)
    Frames: cc.SpriteFrame[] = [];

    private _st = 0;


    onDestroy() {
        Preloader.resDispatcher.removeByTarget(this);
    }

    private setCurState(st:number, b2d:boolean) {
        this._st = st;
        if(st < 0) {
            this.getComponent(cc.Sprite).spriteFrame = null;
        } else {
            var respath = State3Res[st];
            if(b2d) {
                respath = State2Res[st];
            }
            Preloader.setNodeSprite(this.getComponent(cc.Sprite), respath, this);
        }
    }

    setZhunbei(b2d:boolean = false) {
        this.setCurState(0, b2d);
    }

    setQiangzhuang(b2d:boolean = false) {
        this.setCurState(-1, b2d);
    }

    setJiaofen(b2d:boolean = false) {
        this.setCurState(-1, b2d);
    }

    setFapai(b2d:boolean = false) {
        this.setCurState(1, b2d);
    }

    setXiazhu(b2d:boolean = false) {
        this.setCurState(2, b2d);
    }

    setKaipai(b2d:boolean = false) {
        this.setCurState(3, b2d);
    }

    setPaijiang(b2d:boolean = false) {
        this.setCurState(4, b2d);
    }

}
