//-----------------------------
//文本组件（数字渐变）
//-----------------------------
import { isNil } from "../../../kernel/utils/GlobalFuncs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnJumpLabel extends cc.Component {

    private _value:number = 0;
    private _fromV:number = 0;
    private _tic:number = 0;
    private _label:cc.Label = null;
    private _bUpdating:boolean = false;

    public changeValue(toV : number, fromV ?: number) {
        if(this._bUpdating){
            this.unschedule(this.frameUpdate);
        }

        if(isNil(fromV)) { fromV = this._value; }
        this._value = toV;
        this._fromV = fromV;
        var fix = Math.ceil( Math.abs( (toV-fromV)/128 ) );
        if(fix < 1) { fix = 1; }
        this._tic = fix;
        if(toV-fromV<0) {
            this._tic = -this._tic;
        }
        this._label = this.getComponent(cc.Label);
        this._label.string = fromV.toString();

        this._bUpdating = true;
        this.schedule(this.frameUpdate.bind(this), 0);
    }

    private frameUpdate(dt:number) {
        this._fromV += this._tic;
        var m = this._value - this._fromV;
        if(m < 1 && m > -1){
            this._fromV = this._value;
        }
        this._label.string = this._fromV.toString();
        if(m < 1 && m > -1){
            this._bUpdating = false;
            this.unschedule(this.frameUpdate);
        }
    }

}
