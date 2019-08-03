const {ccclass, property} = cc._decorator;

@ccclass
export default class PokerCard extends cc.Component {
    private _code:number = 0;
    private _state:number = 0;
    private _curFace:boolean = true;

    set code(v:number) {
        this._code = v;
    }

    get code() : number {
        return this._code;
    }

    set state(v:number) {
        this._state = v;
        if(v===0) {
            this.node.color = new cc.Color(255, 255, 255, 255);
        }
        else{
            this.node.color = new cc.Color(5, 255, 5, 255);
        }
    }

    get state() : number {
        return this._state;
    }

    setFace(bFront:boolean, duradion:number=0) {
        if(duradion <= 0) {
            this._curFace = bFront;
            if(bFront) {
    
            }
            else {
    
            }
        }
    }
    
}
