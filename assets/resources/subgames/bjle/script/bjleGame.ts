import ModelBase from "../../../../kernel/model/ModelBase";

export default class bjleGame extends ModelBase {
    private static _instance:bjleGame = null;
    private constructor() {
        super();
    }
    public static getInstance() : bjleGame{
        if(!bjleGame._instance) { bjleGame._instance = new bjleGame; }
        return bjleGame._instance;
    }
    public static delInstance() {
        if(bjleGame._instance) { 
            bjleGame._instance.clear(); 
            bjleGame._instance = null;
        } 
    }
    on_clear(): void {
        
    }

    //-------------------------------------------------------------

    private _players : {};

    public initPlayers(richManList:any[]) {
        for(var i=0, len=richManList.length; i<len; i++) {
            var info = richManList[i];
            this._players[info.userId] = info;
        }
    }

}
