import EventCenter from "./EventCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        cc.game.on(cc.game.EVENT_HIDE, ()=>{
            console.log("游戏进入后台");
            EventCenter.instance().fire("EVT_ENTER_BACKGROUND");
        });
        cc.game.on(cc.game.EVENT_SHOW, ()=>{
            console.log("游戏进入前台");
            EventCenter.instance().fire("EVT_ENTER_FOREGROUND");
        });
    }

}
