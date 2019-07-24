const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends cc.Component {

    @property(cc.Button)
    btn_close: cc.Button = null;
    @property(cc.Button)
    btn_help: cc.Button = null;

    
    start () {
        this.btn_close.node.on("click", function(){
			this.node.destroy();
        }, this);
    }
    
}
