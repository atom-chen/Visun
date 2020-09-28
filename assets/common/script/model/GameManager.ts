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
import { isEmpty, isNil, newHandler } from "../../../kernel/utils/GlobalFuncs";
import TimerManager from "../../../kernel/basic/timer/TimerManager";
import AudioManager from "../../../kernel/audio/AudioManager";
import { HOT_FAIL_REASON, HOT_STATE } from "../../../kernel/basic/defines/KernelDefine";


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
	private gameId:number = -1;
	private enterData = null;
	private gameModal = null;
	private willGame = -1;
	private loginEnter = -1;

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
		if(this.loginEnter > 0) {
			var serverData = this.getGameData(this.loginEnter);
			if(serverData) {
				var ttt = this.loginEnter;
				this.loginEnter = -1;
				this.enterGame(ttt);
			}
		}
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

	public setLoginEnter(gameId:number) {
		this.loginEnter = gameId;
	}

	//------------------------------------------------------------------------

	//获取子游戏的客户端配置
	public clientConfig(gameKind:number|string) : any {
		return GameConfig[gameKind];
	}

	//游戏是否存在
	public isGameExist(gameKind:number|string) : boolean {
		var cfg = this.clientConfig(gameKind);
		if(!cfg) {
			return false;
		}
		if(isEmpty(cfg.viewpath)) {
			return false;
		}
		return true;
	}

	//游戏是否已下载好
	public isGameDownloaded(gameKind:number|string) : boolean {
		var cfg = this.clientConfig(gameKind);
		if(!cfg) { return false; }
		if(isEmpty(cfg.viewpath)) { return false; }
		return !isNil(cc.loader.getRes(cfg.viewpath, cc.Prefab));
	}

	//获取子游戏热更器
	public getUpdator(gameKind:number|string) : HotUpdator {
		return HotUpdator.create(gameKind.toString(), "", 
		(bSucc:boolean, reason:number)=>{
			cc.log("热更完成回调：", bSucc, reason);
			if(!bSucc) {
				if(reason==HOT_FAIL_REASON.not_need_update) {
					GameManager.getInstance().doEnter();
				} else {
					if(reason==HOT_FAIL_REASON.err_no_local_manifest) {
						GameManager.getInstance().doEnter();
					} else {
						var gamename = GameManager.getInstance().clientConfig(gameKind).name;
						UIManager.openDialog("hotfailenter", gamename+"更新失败，是否依然进入游戏 reason:"+reason, 2, function(mnuId:number){
							if(mnuId == 1){
								GameManager.getInstance().doEnter();
							}
						});
					}
				}
			}
		},
		(nowState:HOT_STATE, progressByFile:number, progressByBytes:number)=>{
			cc.log(gameKind, nowState, progressByFile, progressByBytes);
			EventCenter.getInstance().fire(EventDefine.down_progress, gameKind, progressByFile, progressByBytes);
		});
	}

	getDownProgress(gameKind:number|string) : number {
		if(cc.sys.isNative) {
			var updator = HotUpdator.getUpdator(gameKind.toString());
			if(!updator){ return 0; }
			return updator.getProgress();
		} else {
			return this.downProgress[gameKind] || 0;
		}
	}

	isDowning(gameKind:number|string) : boolean {
		if(cc.sys.isNative) {
			var updator = HotUpdator.getUpdator(gameKind.toString());
			if(!updator){ return false; }
			return updator.isUpdating();
		} else {
			return this.downings[gameKind] === true;
		}
	}

	private downings = {};
	private downProgress = {};
	public downGame(gameKind:number|string) {
		if(this.isGameDownloaded(gameKind)) { 
			return; 
		}

		if(cc.sys.isNative) {
			var updator = this.getUpdator(gameKind);
			updator.beginUpdate();
		} else {
			if(!this.downings[gameKind]) {
				this.downings[gameKind] = true;
				this.downProgress[gameKind] = 0;
				var cfg = this.clientConfig(gameKind);
				cc.loader.loadRes(cfg.viewpath, cc.Prefab, (curCnt, totalCnt)=>{
					if(totalCnt==0) {
						this.downProgress[gameKind] = 0;
					} else {
						this.downProgress[gameKind] = curCnt/totalCnt;
					}
					EventCenter.getInstance().fire(EventDefine.down_progress, gameKind, curCnt, totalCnt);
				}, (err,rsc)=>{
					GameManager.getInstance().doEnter();
					GameManager.getInstance().downings[gameKind] = false;
				});
			}
		}
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
	
	//退出游戏的唯一出口
	public quitGame(bForce?:boolean) {
		gamecomm_request.ExitGameReq({GameID:this.gameId});
		if(bForce) {
			SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name, 0);
		} else {
		//	SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
		}
	}
	
	//进入游戏的唯一入口
	public enterGame(gameId:number) {
		if(!LoginMgr.getInstance().checkLogin(true)) {
			return;
		}
		
		var serverData = this.getGameData(gameId);

		if(isNil(serverData)) {
			return;
		}

		this.willGame = gameId;

		var gameKind = serverData.Info.KindID;
		cc.log("enterGame: ", gameId, gameKind);

		if(!this.isGameExist(gameKind)) {
			UIManager.toast("敬请期待");
			return;
		}

		if(!this.isGameDownloaded(gameKind)) {
			cc.log("正在下载中，请耐心等待");
			this.downGame(gameKind);
			return;
		}

		var updator = this.getUpdator(gameKind);
		if(updator.isUpdating()) {
			UIManager.toast("正在更新中，请耐心等待");
			return;
		}

		this.doEnter();
	}

	public doEnter() {
		if(this.willGame > 0) {
			this.gameId = this.willGame;
			gamecomm_request.EnterGameReq({
				GameID: this.gameId
			});
		}
	}

	//跳转到游戏场景
	public enterGameScene(gameKind:number|string) {
		if(!this.isGameExist(gameKind)) { 
			UIManager.toast("敬请期待");
			return; 
		}
		var cliCfg = this.clientConfig(gameKind);
		SceneManager.turn2Scene(KernelUIDefine.GameScene.name, 0, ()=>{
			var viewpath = cliCfg.viewpath;
			UIManager.openPanel(viewpath, null);
			TimerManager.delayFrame(5, newHandler(function(){
				if(isEmpty(cliCfg.bgm_music)) {
					AudioManager.getInstance().playMusicAsync("appqp/audios/music_game", true);
				} else {
					AudioManager.getInstance().playMusicAsync(cliCfg.bgm_music, true);
				}
			}, this));
		});
	}

	public static isInGameScene() : boolean {
		return SceneManager.curSceneName === KernelUIDefine.GameScene.name;
	}

}
