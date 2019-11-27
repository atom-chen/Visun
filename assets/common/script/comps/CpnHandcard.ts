import { PokerCode } from "../definer/PokerDefine";
import CpnPoker from "./CpnPoker";
import RuleDdz from "../../../resources/subgames/ddz/script/rule/RuleDdz";
import DDzMgr from "../../../resources/subgames/ddz/script/model/DDzMgr";
import SlidePicker from "../../../resources/subgames/ddz/script/rule/SlidePicker";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnHandcard extends cc.Component {
    @property(cc.Prefab)
    pokerTemplate: cc.Prefab = null;

    private _touchBegan:cc.Vec3;
    private _touchMoved:cc.Vec3;
    private _selectFlag:Array<boolean> = [];
    private _slideEnabled:boolean = true;
    private _touchEndCallback: Function;

	onLoad() {
		
    }

    public clearCards() {
        this.node.removeAllChildren();
        this.initSelectflag();
    }
    
    public resetCards(cards:Array<PokerCode>) {
        this.clearCards();
        if(cards===null || cards===undefined) {
            return;
        }
        for(var i=0, len=cards.length; i<len; i++) {
            this.addCard(cards[i]).playFlip(i*0.1);;
        }
        this.initSelectflag();
    }

    public delCards(cards:Array<PokerCode>) {
        if(cards===null || cards===undefined) {
            return;
        }
        for(var i in cards) {
            this.delCard(cards[i]);
        }
        this.initSelectflag();
    }

    public addCards(cards:Array<PokerCode>) {
        if(cards===null||cards===undefined) {
            return;
        }
        for(var i in cards) {
            this.addCard(cards[i]);
        }
        this.initSelectflag();
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

    public unSelectAll() {
        for(var i in this.node.children) {
            this.node.children[i].getComponent(CpnPoker).setSelected(false);
        }
        this.initSelectflag();
    }

    public getSelectedCards() : Array<PokerCode>
    {
        var arr = [];
        if(this._selectFlag.length != this.node.children.length) { 
            cc.error("bug了");
            return null; 
        }
        for(var i = this.node.children.length-1; i>=0; i--) {
            if(this.node.children[i].getComponent(CpnPoker).isSelected()) {
                arr.push( this.node.children[i].getComponent(CpnPoker).getCode() )
            }
        }
        return arr;
    }

    public sortCards() {
        var sortFunc = RuleDdz.sortCardsMax2Min
        var arr = [];
        for(var i in this.node.children) {
            arr.push(this.node.children[i].getComponent(CpnPoker).getCode());
        }
        sortFunc(arr);
        for(var i in this.node.children) {
            this.node.children[i].getComponent(CpnPoker).setCode(arr[i]);
        }
        this.initSelectflag();
    }

    public getCards() : Array<PokerCode> {
        var arr = [];
        for(var i in this.node.children) {
            arr.push(this.node.children[i].getComponent(CpnPoker).getCode());
        }
        return arr;
    }



    public initSlideTouch() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved, this);
    }

    public setSlideEnabled(flag:boolean) {
        this._slideEnabled = flag;
    }

    public setTouchEndCallback(f:Function) {
        this._touchEndCallback = f;
    }

	private _findTouchedCardIndex (touch:cc.Vec3) : number {
		var target = -1;
		var cardArr = this.node.children;
        for (var k=0; k<cardArr.length; k++) {
            var box:cc.Rect = cardArr[k].getBoundingBox();
            if (box.contains(cc.v2(touch.x, touch.y))) {
                if(k<cardArr.length-1){
                    if(cardArr[k+1].getBoundingBox().xMin > touch.x){
                        target = k;
                        break;
                    }
                }
                else {
                    target = k;
                    break;
                }
			}
        }
        return target;
    }

    private initSelectflag() {
        this._selectFlag.length = this.node.childrenCount;
        for(var i in this.node.children) {
            this._selectFlag[i] = this.node.children[i].getComponent(CpnPoker).isSelected();
        }
    }

    private addSelectedCards(cards: Array<PokerCode>) {
        cards = cards || []
        for(var i in this.node.children) {
            if(cards.indexOf(this.node.children[i].getComponent(CpnPoker).getCode()) >= 0) {
                this.node.children[i].getComponent(CpnPoker).setSelected(true);
            }
        }
    }

    private toggleSelecteds() {
        var firstIdx = this._findTouchedCardIndex(this._touchBegan);
        var lastIdx = this._findTouchedCardIndex(this._touchMoved);

        var collects = [];
        var contains = [];
        if(firstIdx>=0 && lastIdx>=0) {
            if(firstIdx>lastIdx) {
                var tmp = firstIdx;
                firstIdx = lastIdx;
                lastIdx = tmp;
            }

            for(var i=0; i<this.node.children.length; i++) {
                if(i>=firstIdx && i<=lastIdx) {
                    this.node.children[i].getComponent(CpnPoker).setSelected( !this._selectFlag[i] );
                    if(this.node.children[i].getComponent(CpnPoker).isSelected()) {
                        contains.push( this.node.children[i].getComponent(CpnPoker).getCode() );
                    }
                    collects.push( this.node.children[i].getComponent(CpnPoker).getCode() );
                }
                else {
                    this.node.children[i].getComponent(CpnPoker).setSelected( this._selectFlag[i] );
                }
            }
        }

        var preOuts = DDzMgr.getInstance().getPreout();

        if(preOuts === null || preOuts === undefined || preOuts.length <= 0) {
            var tips = SlidePicker.draw(collects);
            cc.log("智能抽取： ", RuleDdz.printCards(collects) + "  |  " + RuleDdz.printCards(tips));
            if(tips && tips.length > 0) {
                this.unSelectCards(collects);
                this.addSelectedCards(tips);
            }
        } else {
            var tips = SlidePicker.pick(this.getCards(), preOuts, contains);
            cc.log("智能提示： ", RuleDdz.printCards(contains) + "  |  " + RuleDdz.printCards(tips));
            if(tips && tips.length > 0) {
                this.addSelectedCards(tips);
            }
        }
    }

    private unSelectCards(cards:Array<PokerCode>) {
        cards = cards || [];
        for(var i in this.node.children) {
            if(cards.indexOf(this.node.children[i].getComponent(CpnPoker).getCode()) >= 0) {
                this.node.children[i].getComponent(CpnPoker).setSelected(false);
            }
        }
    }

    private touchBegan(event:any) : void {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchBegan = this.node.convertToNodeSpaceAR(touchLoc);
        this._touchMoved = this._touchBegan;
        if(this._slideEnabled) {
            this.initSelectflag();
            this.toggleSelecteds();
        }
    }

    private touchMoved (event:any) : void {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        if(this._slideEnabled) {
            this.toggleSelecteds();
        }
    }

    private touchEnd (event:any) {
        if(this._touchEndCallback) {
            this._touchEndCallback();
        }
    }
    
    private touchCancel(event:any) : void {

    }
    
}
