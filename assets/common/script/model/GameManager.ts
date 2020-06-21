import GameConfig from "../definer/GameConfig";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import ModelBase from "../../../kernel/model/ModelBase";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import LoginMgr from "./LoginMgr";
import { IS_DANJI_MODE } from "../definer/ConstDefine";
import { gamecomm_request } from "../proto/net_gamecomm";
import { isNil } from "../../../kernel/utils/GlobalFuncs";

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
		// if(IS_DANJI_MODE && isNil(this.roomsInfo) || this.roomsInfo.length<=0) {
		// 	this.roomsInfo = [
		// 		{RoomName:"百人房",RoomNum:"1",RoomKey:"000"},
		// 		{RoomName:"对战房",RoomNum:"1",RoomKey:"000"},
		// 		{RoomName:"街机房",RoomNum:"1",RoomKey:"000"},
		// 	]
		// }
		return this.roomsInfo;
	}

	public setGameArr(data) {
		this.gameArr = data;
	}

	public getGameArr() : any {
		// if(IS_DANJI_MODE && isNil(this.gameArr) || this.gameArr.length<=0) {
		// 	this.gameArr = [
		// 		{ID:101,Info:{Name:"牛牛",EnterScore:10,Level:0}},
		// 		{ID:102,Info:{Name:"金花",EnterScore:10,Level:0}},
		// 		{ID:103,Info:{Name:"德州",EnterScore:10,Level:0}},
		// 		{ID:104,Info:{Name:"斗地主",EnterScore:10,Level:0}},
		// 		{ID:105,Info:{Name:"二十一点",EnterScore:10,Level:0}},
		// 	]
		// }
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
		if(!LoginMgr.getInstance().checkLogin(true)) {
			return IS_DANJI_MODE;
		}
		return true;
	}


	//退出游戏的唯一出口
	public quitGame(bForce?:boolean) {
		gamecomm_request.ReqExitGame({GameID:this.gameId});
		if(IS_DANJI_MODE || bForce) {
			SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
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
		if( !this.canEnterGame(gameType) ) {
			return;
		}
		cc.log("enterGame: ", gameType)
	//	gamecomm_request.ReqEnterGame({GameType:gameType});
		if(IS_DANJI_MODE) {
			this.enterGameScene(gameType);
		}
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
		if(IS_DANJI_MODE && (!this._gameList || this._gameList.length <= 0)) {
			var testList = [];
			for(var k in GameConfig) {
				var info = {
					GameKind : GameConfig[k].GameKind,
					Name : GameConfig[k].name,
					State : 2,
				};
				testList.push(info);
			}
			return testList;
		}
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
		if(IS_DANJI_MODE && !this._roomList[gameKind]) {
			var testList = [];
			var cfg = GameConfig[gameKind];
			for(var i=1; i<=4; i++) {
				var info = {
					GameKind : cfg.GameKind,
					GameType : cfg.GameKind+i,
					Name : cfg.name,
				}
				testList.push(info);
			}
			this.setRoomList(gameKind, testList);
			return testList;
		}
		return this._roomList[gameKind];
	}

}
