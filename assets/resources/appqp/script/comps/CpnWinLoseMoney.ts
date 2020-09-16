const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnWinLoseMoney extends cc.Component {

    onLoad () {

    }

    playMoney(v:number, deltaY:number, keepTime:number) {
        var dstNode:cc.Node = null;
        if(v >= 0) {
            this.node.getChildByName("labLose").active = false;
            dstNode = this.node.getChildByName("labWin");
        } else {
            this.node.getChildByName("labWin").active = false;
            dstNode = this.node.getChildByName("labLose");
        }
        var strV = v.toString();
        if(v>0) {
            strV = "+"+v;
        }
        dstNode.active = true;
        dstNode.getComponent(cc.Label).string = strV;
        cc.log("play money change: ", strV);
        dstNode.stopAllActions();
        dstNode.y = 0;
        if(keepTime > 0) {
            dstNode.runAction(cc.sequence(
                cc.show(),
                cc.moveBy(0.3, cc.v2(0,deltaY)), 
                cc.delayTime(keepTime),
                cc.hide()
            ));
        } else {
            dstNode.runAction(cc.sequence(
                cc.show(),
                cc.moveBy(0.3, cc.v2(0,deltaY))
            ));
        }
    }

    stopPlay() {
        this.node.getChildByName("labLose").stopAllActions();
        this.node.getChildByName("labLose").active = false;
        this.node.getChildByName("labWin").stopAllActions();
        this.node.getChildByName("labWin").active = false;
    }

}
