const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipSpr extends cc.Component {
    _value: number = 1;

    set value(v:number) {
        this._value = v;
    }

    get value() : number {
        return this._value;
    }

    reuse() {

    }

    unuse() {

    }
}
