import { isNil, isEmpty } from "../../../../kernel/utils/GlobalFuncs";
import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPaixing extends cc.Component {
    private gameType:GameKindEnum = GameKindEnum.BrCowCow;
    private pt = 0;
    private pv = 0;

    setGameType(v:GameKindEnum) {
        this.gameType = v;
    }

    private getTypeName():string {
        if(this.gameType == GameKindEnum.BrCowCow) {
            if(isEmpty(this.pv)) {
                return "没牛";
            }
            if(this.pv == 10) {
                return "牛牛";
            }
            return "牛"+this.pv;
        }
        return "未知牌型"
    }

    setCardType(tp:number, v:number) {
        this.pt = tp;
        this.pv = v;
        if(isNil(this.pt) || isNil(this.pv) || this.pt==-1 || this.pv===-1) {
            this.node.active = false;
            return;
        }
        this.node.active = true;
        this.node.getChildByName("sprPx").getComponent(cc.Sprite).spriteFrame = null;
        this.node.getChildByName("labPx").getComponent(cc.Label).string = this.getTypeName();
    }

    getCardType() : number {
        return this.pt;
    }

    getCardValue() : number {
        return this.pv;
    }

}
