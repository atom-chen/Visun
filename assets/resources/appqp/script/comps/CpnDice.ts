import Preloader from "../../../../kernel/utils/Preloader";
import BaseComponent from "../../../../kernel/view/BaseComponent";

var DICEIMGS = ["dice1", "dice24", "dice36", "dice48", "dice60", "dice6", 
	"dice84", "dice96", "dice167", "dice189", "dice211", "dice317", "dice418", 
	"dice4", "dice620", "dice721", "dice822", "dice5", "dice1910", "dice2", 
	"dice2113", "dice2214", "dice2315", "dice3" ];


const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnDice extends BaseComponent {
    private curFrame:number = 0;
    private totalFrame:number = DICEIMGS.length-1;
    private stepLen:number = 2;
    private diceValue:string|number = 0;
    private bFinished:boolean = false;

    setDiceValue(v:string|number, bAni:boolean) {
        this.diceValue = v;
        if(bAni) {
            this.curFrame = 0;
            this.bFinished = false;
            Preloader.setNodeSprite(this.node.getComponent(cc.Sprite), "appqp/imgs/mj_dice/"+DICEIMGS[this.curFrame], this);
        } else {
            this.curFrame = this.totalFrame;
            this.bFinished = true;
            Preloader.setNodeSprite(this.node.getComponent(cc.Sprite), "appqp/imgs/mj_dice/dice"+this.diceValue, this);
        }
    }

    update (dt) {
        if(this.bFinished){ return; }
        this.stepLen--;
        if(this.stepLen > 0) { return; }
        this.stepLen = 2;
        this.curFrame++;
        if(this.curFrame >= this.totalFrame) {
            this.curFrame = this.totalFrame;
            this.bFinished = true;
            Preloader.setNodeSprite(this.node.getComponent(cc.Sprite), "appqp/imgs/mj_dice/dice"+this.diceValue, this);
        } else {
            Preloader.setNodeSprite(this.node.getComponent(cc.Sprite), "appqp/imgs/mj_dice/"+DICEIMGS[this.curFrame], this);
        }
    }

}
