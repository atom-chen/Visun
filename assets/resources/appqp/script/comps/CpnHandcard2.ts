import { PokerCode } from "../../../../common/script/definer/PokerDefine";
import CpnPoker from "./CpnPoker";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnHandcard2 extends cc.Component {
    @property(cc.Prefab)
    pokerTemplate: cc.Prefab = null;

    private xSpace:number = 50;

    public setXSpace(v:number) {
        this.xSpace = v;
        this.fixPos();
    }

    public clearCards() {
        this.node.removeAllChildren();
    }
    
    public resetCards(cards:Array<PokerCode>|Uint8Array) {
        this.clearCards();
        if(cards===null || cards===undefined) {
            return;
        }
        for(var i=0, len=cards.length; i<len; i++) {
            this.addCard(cards[i]);
        }
    }

    public delCards(cards:Array<PokerCode>) {
        if(cards===null || cards===undefined) {
            return;
        }
        for(var i in cards) {
            this.delCard(cards[i]);
        }
    }

    public addCards(cards:Array<PokerCode>) {
        if(cards===null||cards===undefined) {
            return;
        }
        for(var i in cards) {
            this.addCard(cards[i]);
        }
    }

    public playOpen() {
        var childs = this.node.children;
        for(var i=0, len=childs.length; i<len; i++) {
            childs[i].getComponent(CpnPoker).playFlip(i*0.1);
        }
    }

    private addCard(cardV:PokerCode) : CpnPoker {
        var card = cc.instantiate(this.pokerTemplate);
        var comp:CpnPoker = card.getComponent(CpnPoker);
        comp.setCode(cardV);
        this.node.addChild(card);
        this.fixPos();
        return comp;
    }

    private delCard(cardV:PokerCode) {
        var childs = this.node.children;
        for(var i in childs) {
            if(childs[i].getComponent(CpnPoker).getCode()==cardV) {
                childs[i].destroy();
                break;
            }
        }
        this.fixPos();
    }

    private fixPos() {
        var childs = this.node.children;
        var cnt = childs.length;
        if(cnt < 1) { return; } 
        var mid = (cnt-1)/2;
        var itemW = childs[0].width/2;
        if(Math.abs(this.node.anchorX-0.5) <= 0.01) {
            for(var i=cnt-1; i>=0; i--) {
                childs[i].x = (i-mid) * this.xSpace;
            }
        }
        else if(this.node.anchorX < 0.3) {
            for(var i=cnt-1; i>=0; i--) {
                childs[i].x = itemW + i * this.xSpace;
            }
        }
        else {
            for(var i=cnt-1; i>=0; i--) {
                childs[i].x = -(itemW + (cnt-1-i) * this.xSpace);
            }
        }
    }

    public getPosByIndex(idx:number) : cc.Vec2 {
        var cnt = this.node.children.length;
        if(cnt <1 ){ return cc.v2(0,0); }
        var x = 0;
        if(Math.abs(this.node.anchorX-0.5) <= 0.01) {
            x = ( idx-(cnt-1)/2 ) * this.xSpace;
        }
        else if(this.node.anchorX < 0.3) {
            x = this.node.children[0].width/2 + this.xSpace*idx;
        }
        else {
            x = -(this.node.children[0].width/2 + this.xSpace*(cnt-1-idx));
        }
        return cc.v2(x, 0);
    }

}
