import GameConfig from "../definer/GameConfig";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import ModelBase from "../../../kernel/model/ModelBase";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import LoginMgr from "./LoginMgr";
import { gamecomm_request } from "../proto/net_gamecomm";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import EventDefine from "../definer/EventDefine";
import { login } from "../../../../declares/login";
import { login_request } from "../proto/net_login";
import { isEmpty, newHandler } from "../../../kernel/utils/GlobalFuncs";
import TimerManager from "../../../kernel/basic/timer/TimerManager";
import AudioManager from "../../../kernel/audio/AudioManager";


//游戏管理器
export default class GameManager extends ModelBase {
	private static _instance:GameManager;
	public static getInstance() : GameManager {
		if(!GameManager._instance){ GameManager._instance = new GameManager; }
		return GameManager._instance;
	}
	public static delInstance() : void {
		if(GameManager._instance) {
			GameManager._instance.clear();
			GameManager._instance = null;
		}
	}
	public on_clear() {
		if(this.gameModal) {
			this.gameModal.delInstance();
		}
	}

	private constructor() {
		super();
		EventCenter.getInstance().listen(EventDefine.reconn_succ, function(){
			// if(SceneManager.curSceneName === KernelUIDefine.GameScene.name && LoginMgr.getInstance().checkLogin(false)) {
			// 	this.enterGame(this.getGameId());
			// }
		}, this);
	}

	//------------------------------------------------------------------------------

	private roomsInfo:Array<login.IRoomInfo> = [];
	private gameArr:{[key:number]:Array<login.IGameItem>} = {};
	private gameId:number = 0;
	private enterData = null;
	private gameModal = null;

	public pullAll() {
		var roomsInfo = this.getRoomsInfo();
		if(roomsInfo) {
			for(var i in roomsInfo) {
				login_request.EnterRoomReq({
					RoomNum: roomsInfo[i].RoomNum,
					RoomKey: roomsInfo[i].RoomKey
				});
			}
		}
	}

	public setRoomsInfo(info:Array<login.IRoomInfo>) {
		this.roomsInfo = info;
	}

	public getRoomsInfo() : Array<login.IRoomInfo> {
		return this.roomsInfo;
	}

	public setGameArr(roomNum:number, data:Array<login.IGameItem>) {
		this.gameArr[roomNum] = data;
	}

	public getGameArr(roomNum:number) : Array<login.IGameItem> {
		return this.gameArr[roomNum];
	}

	public getGameList() : Array<login.IGameItem> {
		var data = [];
		for(var n in this.gameArr) {
			for(var j in this.gameArr[n]) {
				data.push(this.gameArr[n][j]);
			}
		}
		return data;
	}

	public gamesByKindId() : {[key:number]:Array<login.IGameItem>} {
		var gameList = this.getGameList();
		var tbl = {};
		for(var i in gameList) {
			tbl[gameList[i].Info.KindID] = tbl[gameList[i].Info.KindID] || [];
			tbl[gameList[i].Info.KindID].push(gameList[i]);
		}
		return tbl;
	}

	public getGameData(gameId:number) : login.IGameItem {
		for(var n in this.gameArr) {
			for(var j in this.gameArr[n]) {
				if(gameId == this.gameArr[n][j].ID) {
					return this.gameArr[n][j]
				}
			}
		}
		return null;
	}

	public getRunningGameData() : login.IGameItem {
		if(isEmpty(this.gameId)) {
			return null;
		}
		return this.getGameData(this.gameId);
	}

	

	//获取子游戏的客户端配置
	public clientConfig(gameType:string|number) : any{
		return GameConfig[gameType];
	}

	
	//游戏是否已下载好
	public isGameExist(gameKind:string|number) : boolean {
		return true;
	}

	//获取子游戏热更器
	public getUpdator(gameKind:string|number) : HotUpdator {
		if(!GameConfig[gameKind]) {
			return null;
		}
		return HotUpdator.create(gameKind.toString(), "", (bSucc:boolean)=>{}, null);
	}

	//检测是否可进入某游戏
	public canEnterGame(gameType:string|number) : boolean {
		var cfg = this.clientConfig(gameType);
		if(!cfg) {
			UIManager.toast("敬请期待");
			return false;
		}
		var updator = this.getUpdator(cfg.GameKind);
		if(updator) {
			if(updator.isUpdating()) {
				UIManager.toast("正在更新中，请稍等");
				return false;
			}
		}
		if(!this.isGameExist(cfg.GameKind)) {
			UIManager.toast("游戏不存在 "+cfg.GameKind);
			return false;
		}
		return LoginMgr.getInstance().checkLogin(true);
	}


	//退出游戏的唯一出口
	public quitGame(bForce?:boolean) {
		gamecomm_request.ExitGameReq({GameID:this.gameId});
		if(bForce) {
			SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
		} else {
		//	SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
		}
	}

	public setGameId(v:number) {
		this.gameId = v;
	}

	public getGameId() : number {
		return this.gameId;
	}

	public setEnterData(data:any) {
		this.enterData = data;
	}

	public getEnterData() : any {
		return this.enterData;
	}

	public registGameModel(cls:any) {
		if(!cls.delInstance) { cc.error("no delInstance", cls); }
		this.unregistGameModel();
        this.gameModal = cls.getInstance();
		cc.log("regist game model ");
    }

    public unregistGameModel() {
        if(this.gameModal) {
            this.gameModal.getInstance().clear();
			this.gameModal.delInstance();
			this.gameModal = null;
            cc.log("unregist game model");
        }
    }
	
	//进入游戏的唯一入口
	public enterGame(gameType:number) {
		// if( !this.canEnterGame(gameType) ) {
		// 	return;
		// }
		cc.log("enterGame: ", gameType)

		this.setGameId(gameType);

		gamecomm_request.EnterGameReq({
            GameID: gameType
        });
	}

	//跳转到游戏场景
	public enterGameScene(gameType) {
		var cliCfg = this.clientConfig(gameType);
		if(!cliCfg) {
			cc.warn("no client config");
			return;
		}
		if(isEmpty(cliCfg.viewpath)) {
			UIManager.toast("敬请期待");
			return;
		}
		SceneManager.turn2Scene(KernelUIDefine.GameScene.name, ()=>{
			var viewpath = cliCfg.viewpath;
			UIManager.openPanel(viewpath, null);
			TimerManager.delayFrame(5, newHandler(function(){
				AudioManager.getInstance().playMusicAsync("appqp/audios/music_bg", true);
			}, this));
		});
	}

	public static isInGameScene() : boolean {
		return SceneManager.curSceneName === KernelUIDefine.GameScene.name;
	}

}
