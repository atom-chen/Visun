const {ccclass, property} = cc._decorator;

@ccclass
export default class Toast extends cc.Component {
    @property(cc.RichText)
    label_cont: cc.RichText = null;

    public setContent(content:string) {
        this.label_cont.string = content;
    }
}
