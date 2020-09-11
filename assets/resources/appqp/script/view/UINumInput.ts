import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UINumInput extends BaseComponent {

    private _cb:Function = null;

    onLoad() {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvent();
    }

    setViewData(cb:Function) {
        this._cb = cb;
    }

    private addV(v:string|number) {
        var s:string = this.m_ui.labValue.getComponent(cc.Label).string;

        if(s == "0" && v != ".") {
            s = "";
        }

        var dotPos = s.indexOf(".");
        if(dotPos >= 0 && (v == "." || s.length >= dotPos+3)) {
            return;
        }
        
        if(v=="." && s == "") {
            s = "0";
        }
        
        this.m_ui.labValue.getComponent(cc.Label).string = s + v;
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_ok, function(){
            var v = this.m_ui.labValue.getComponent(cc.Label).string;
            var flag = this._cb(v);
            if(flag) {
                CommonUtil.safeDelete(this);
            }
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_del, function(){
            var s:string = this.m_ui.labValue.getComponent(cc.Label).string;
            this.m_ui.labValue.getComponent(cc.Label).string = s.substring(0, s.length-1);
        }, this);

        CommonUtil.addClickEvent(this.m_ui.btn_dot, function(){
            this.addV(".");
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_0, function(){
            this.addV(0);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_1, function(){
            this.addV(1);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_2, function(){
            this.addV(2);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_3, function(){
            this.addV(3);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_4, function(){
            this.addV(4);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_5, function(){
            this.addV(5);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_6, function(){
            this.addV(6);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_7, function(){
            this.addV(7);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_8, function(){
            this.addV(8);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_9, function(){
            this.addV(9);
        }, this);
    }

}
