import UIManager from "../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnvelopeScene extends cc.Component {

    onLoad () {
        UIManager.openPanel("appenvelope/prefabs/UIMain", null);
    }

}
