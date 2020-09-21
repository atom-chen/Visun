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
            if(this.pt == 13) {
                return "五小牛";
            }
            else if(this.pt == 12) {
                return "炸弹";
            }
            else if(this.pt == 11) {
                return "五花牛";
            }

            if(isEmpty(this.pv)) {
                return "没牛";
            }

            if(this.pv == 10) {
                return "牛牛";
            }
            
            return "牛"+this.pv;
        }
        else if(this.gameType == GameKindEnum.Zhajinhua) {
            if(this.pt==0) {
                return "散牌";
            } else if(this.pt==1) {
                return "对子";
            } else if(this.pt==2) {
                return "顺子";
            } else if(this.pt==3) {
                return "金花";
            } else if(this.pt==4) {
                return "顺金";
            } else if(this.pt==5) {
                return "豹子";
            }
        }
        return "未知牌型"
    }

    setCardType(tp:number, v:number) {
        this.pt = tp;
        this.pv = v;
        if( (isNil(this.pt) && isNil(this.pv)) || (this.pt==-1 && this.pv===-1) ) {
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
