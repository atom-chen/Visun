import BaseComp from "../../../script/kernel/gui/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HandCard extends BaseComp {
	private _touchBegan:cc.Vec2;
    private _touchMoved:cc.Vec2;
    private _nowState:number = 0;

	onLoad() {
		this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved, this);
	}

	private _findTouchedCards (touch:cc.Vec2) : void {
		var cardArr = this.node.children;
        for (var k=0; k<cardArr.length; k++) {
            var box:cc.Rect = cardArr[k].getBoundingBox();
            if (box.contains(touch)) {
                if(k<cardArr.length-1){
                    if(cardArr[k+1].getBoundingBox().xMin > touch.x){
                        cardArr[k].getComponent("PokerCard").state = this._nowState;
                    }
                }
                else {
                    cardArr[k].getComponent("PokerCard").state = this._nowState;
                }
			}
        }
    }

    touchBegan(event:any) : void {
        if(this._nowState===0) this._nowState = 1; else this._nowState = 0;
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchBegan = this.node.convertToNodeSpaceAR(touchLoc);
		this._findTouchedCards( this._touchBegan);
    }

    touchMoved (event:any) : void {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
    }

    touchEnd (event:any) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
    }
    
    touchCancel(event:any) : void {

    }
	
}
