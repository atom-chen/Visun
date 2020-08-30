import GameConfig from "../definer/GameConfig";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import ModelBase from "../../../kernel/model/ModelBase";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import LoginMgr from "./LoginMgr";
import { gamecomm_request } from "../proto/net_gamecomm";


//游戏管理器
export default class GameManager extends ModelBase {
	private static _instance:GameManager;
	private constructor() {
		super();
	}
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
		
	}

	//------------------------------------------------------------------------------

	private roomsInfo = [];
	private gameArr = [];
	private gameId = 0;

	public setRoomsInfo(info:any) {
		this.roomsInfo = info;
	}

	public getRoomsInfo() : any {
		return this.roomsInfo;
	}

	public setGameArr(data) {
		this.gameArr = data;
	}

	public getGameArr() : any {
		return this.gameArr;
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
	
	//进入游戏的唯一入口
	public enterGame(gameType:number) {
		// if( !this.canEnterGame(gameType) ) {
		// 	return;
		// }
		cc.log("enterGame: ", gameType)
	//	gamecomm_request.ReqEnterGame({GameType:gameType});

		this.setGameId(gameType);

		gamecomm_request.EnterGameReq({
            GameID: gameType
        });
	}

	//跳转到游戏场景
	public enterGameScene(gameType) {
		if(!this.clientConfig(gameType)) {
			cc.warn("no client config");
			return;
		}
		SceneManager.turn2Scene(KernelUIDefine.GameScene.name, ()=>{
			var viewpath = this.clientConfig(gameType).viewpath;
			UIManager.openPanel(viewpath, null);
		});
	}

	//------------------------------------------------------------------------------

	private _gameList = [];		//服务器游戏列表
	private _roomList = {};		//服务器房间列表
	private _allRooms = {}		//根据游戏ID索引游戏数据
	//存储服务器下发的游戏列表
	public setGameList(data) {
		this._gameList = data;
		this._gameList.sort((a,b)=>{
			return a.GameKind-b.GameKind
		})
	}
	//获取服务器下发的游戏列表
	public getGameList() : any[] {
		return this._gameList;
	}
	//存储服务器下发的房间列表
	public setRoomList(gameKind, data) {
		this._roomList[gameKind] = data
		for(var i in data) {
			this._allRooms[data[i].GameType] = data[i];
		}
	}
	//获取服务器下发的房间列表
	public getRoomList(gameKind) {
		return this._roomList[gameKind];
	}

}
