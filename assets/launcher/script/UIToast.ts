import BaseComponent from "../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIToast extends BaseComponent {
    @property(cc.RichText)
    label_cont: cc.RichText = null;

    public setContent(content:string) {
        this.label_cont.string = content;
    }
}
