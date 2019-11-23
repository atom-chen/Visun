import { PokerCode } from "../definer/PokerDefine";
import CpnPoker from "./CpnPoker";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnHandcard extends cc.Component {
    @property(cc.Prefab)
    pokerTemplate: cc.Prefab = null;

    private _touchBegan:cc.Vec3;
    private _touchMoved:cc.Vec3;
    private _nowState:number = 0;

	onLoad() {
		this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved, this);
    }

    public clearCards() {
        this.node.removeAllChildren();
    }
    
    public resetCards(cards:Array<PokerCode>) {
        this.clearCards();
        if(cards===null || cards===undefined) {
            return;
        }
        for(var i=0, len=cards.length; i<len; i++) {
            this.addCard(cards[i]).playFlip(i*0.1);;
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

    private addCard(cardV:PokerCode) : CpnPoker {
        var card = cc.instantiate(this.pokerTemplate);
        var comp:CpnPoker = card.getComponent(CpnPoker);
        comp.setCode(cardV);
        this.node.addChild(card);
        return comp;
    }

    private delCard(cardV:PokerCode) {
        var childs = this.node.children;
        for(var i in childs) {
            if(childs[i].getComponent(CpnPoker).getCode()==cardV) {
                childs[i].removeFromParent(true);
                break;
            }
        }
    }

	private _findTouchedCards (touch:cc.Vec3) : void {
		
    }

    private touchBegan(event:any) : void {
        if(this._nowState===0) this._nowState = 1; else this._nowState = 0;
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchBegan = this.node.convertToNodeSpaceAR(touchLoc);
		this._findTouchedCards( this._touchBegan);
    }

    private touchMoved (event:any) : void {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
    }

    private touchEnd (event:any) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
    }
    
    private touchCancel(event:any) : void {

    }
    
}
