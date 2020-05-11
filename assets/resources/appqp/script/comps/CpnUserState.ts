//-----------------------------
//玩家状态组件：弃牌/跟注/加注/...
//-----------------------------
const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnUserState extends cc.Component {

    @property(cc.SpriteFrame)
    Frames: cc.SpriteFrame[] = [];

    private _st = 0;

    setState(st:number) {
        this._st = st;
        this.getComponent(cc.Sprite).spriteFrame = this.Frames[st];
    }

}
