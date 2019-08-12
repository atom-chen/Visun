
export default class bjleGame {

    private static _instance:bjleGame = null;
    private constructor() {}
    public static instance() : bjleGame{
        if(!bjleGame._instance) { bjleGame._instance = new bjleGame; }
        return bjleGame._instance;
    }
    public static destroy() {
        
    }

    private _players : {};

    public initPlayers(richManList:any[]) {
        for(var i=0, len=richManList.length; i<len; i++) {
            var info = richManList[i];
            this._players[info.userId] = info;
        }
    }

    

}
