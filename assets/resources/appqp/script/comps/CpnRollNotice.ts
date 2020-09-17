import NoticeMgr from "../../../../common/script/model/NoticeMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnRollNotice extends cc.Component {
    private spaceX = 100;
    private noticeColor = cc.color(200,200,200,255);
    
    update (dt) {
        var childs = this.node.children;
        for(var i in childs) {
            childs[i].x -= 1;
        }

        if(childs[0]) {
            if(childs[0].x+childs[0].width < 0) {
                childs[0].destroy();
                return;
            }
        }
        
        if(childs[childs.length-1]) {
            var last = childs[childs.length-1];
            if(last.x + last.width + this.spaceX > this.node.width) {
                return;
            }
        }

        var info = NoticeMgr.getInstance().getNotice();
        if(info) {
            var nd = new cc.Node();
            var cpn = nd.addComponent(cc.Label);
            nd.anchorX = 0;
            nd.anchorY = 0.5;
            nd.x = this.node.width;
            nd.color = this.noticeColor;
            cpn.fontSize = 24;
            cpn.verticalAlign = cc.Label.VerticalAlign.CENTER;
            cpn.string = info.Content;
            this.node.addChild(nd);
        }
    }
}
