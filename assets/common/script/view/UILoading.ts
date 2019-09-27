import EventCenter from "../../../kernel/event/EventCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label)
    labelProgress: cc.Label = null;

    onLoad () {
        EventCenter.getInstance().listen("loading", this.onProgress, this);
    }

    private onProgress(sub:number, total:number) {
        this.labelProgress.string = sub + "/" + total;
    }

    onDestroy() {
        EventCenter.getInstance().removeByTarget(this);
    }
}
