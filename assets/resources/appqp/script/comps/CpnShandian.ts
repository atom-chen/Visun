
const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnShandian extends cc.Component {
    private graDraw = null;
    private curDetail = 30;
    private x1 = 0;
    private x2 = 0;
    private y1 = 0;
    private y2 = 0;
    private displace = 0;

    onLoad () {
        this.graDraw = this.node.getComponent(cc.Graphics); // 获取本节点的Graphics组件
        this.curDetail = 30; // 这个参数影响闪电每一段的长度，值越小，闪电越细腻
    }

    // 画一条线段。线段的宽度、颜色等参数在外面Graphics面板设置好了。
    private drawLine(x1, y1, x2, y2) {
        this.graDraw.moveTo(x1, y1); // 设置路径起点
        this.graDraw.lineTo(x2, y2); // 终点
        this.graDraw.stroke(); // 填充路径
    }

    // 画一条闪电。闪电由多条线段组成。参数displace影响闪电的剧烈程度，值越大越剧烈。
    private drawLighting(x1, y1, x2, y2, displace) {
        if (displace < this.curDetail) {
            this.drawLine(x1, y1, x2, y2);
        } else {
            let mid_x = (x1 + x2) / 2;
            let mid_y = (y1 + y2) / 2;
            mid_x += (Math.random() - 0.5) * displace;
            mid_y += (Math.random() - 0.5) * displace;
            this.drawLighting(x1, y1, mid_x, mid_y, displace / 2);
            this.drawLighting(x2, y2, mid_x, mid_y, displace / 2);
        }
    }

    setLighting(x1, y1, x2, y2, displace) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.displace = displace;
    }

    // 每帧刷新
    update(dt) {
        this.graDraw.clear();
        this.drawLighting(this.x1, this.y1, this.x2, this.y2, this.displace);
    }
}
