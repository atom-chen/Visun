import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPlayer extends BaseComponent {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_id: cc.Label = null;

    private _userId:number = 0;
    private _clickCallback:Function = null;

    onLoad () {
        CommonUtil.addClickEvent(this.node, function(){ 
            cc.log("click"); 
            if(this._clickCallback) {
                this._clickCallback();
            }
        }, this);
    }

    public setClickCallback(callback:Function) {
        this._clickCallback = callback;
    }

    public getUserId() : number {
        return this._userId;
    }

    public setUserId(uid:number) {
        this._userId = uid;
        this.label_id.string = uid.toString();
    }

    public setName(name:string) {
        this.label_name.string = name;
    }

}
