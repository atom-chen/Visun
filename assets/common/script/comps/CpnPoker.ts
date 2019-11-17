const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnPoker extends cc.Component {

    private _code:number = 0;
    private _state:number = 0;
    private _curFace:boolean = true;

    setCode(v:number) {
        this._code = v;
    }

    getCode() : number {
        return this._code;
    }

    public setFace(bFront:boolean, duradion:number=0) {
        if(duradion <= 0) {
            this._curFace = bFront;
            if(bFront) {
    
            }
            else {
    
            }
        }
    }
    

    setState(v:number) {
        this._state = v;
        if(v===0) {
            this.node.color = new cc.Color(255, 255, 255, 255);
        }
        else{
            this.node.color = new cc.Color(5, 255, 5, 255);
        }
    }

    getState() : number {
        return this._state;
    }

    public toggleState() : void {
        if(this._state===0) {
            this.setState(1);
        }
        else {
            this.setState(0);
        }
    }

}
