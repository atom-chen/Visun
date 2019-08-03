import BaseComp from "../../../script/launcher/view/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HandCard extends BaseComp {
	private _touchBegan:cc.Vec2;
	private _touchMoved:cc.Vec2;

	onLoad() {
		this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved, this);
	}

	_getCardForTouch (touch) {
		var cardArr = this.node.children;
        for (var k in cardArr) {
			var box:cc.Rect = cardArr[k].getBoundingBox();   //获取card覆盖坐标范围
            if (box.contains(touch)) {      //判断触摸的点，是否在当前牌的范围内
                cardArr[k].getComponent("PokerCard").state = 1;
			}
        }
    }

	/**
     * 开始点击  TOUCH_START回调函数
     * */
    private touchBegan(event):void {
        cc.log("Touch begin");
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        cc.log("touch begin location: "+touchLoc);
        this._touchBegan = this.node.convertToNodeSpace(touchLoc);
		this._getCardForTouch( this._touchBegan);
    }

    /**
     * 移动  TOUCH_MOVE回调函数
     * */
    touchMoved (event):void {
        cc.log("Touch move");
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpace(touchLoc);
        this._getCardForTouch(this._touchMoved);
        
    }

    touchCancel () {

    }

    /**
     * 点击结束  TOUCH_END回调函数
     * */
    touchEnd (event) {
        cc.log("Touch end");
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        
	}
	
}
