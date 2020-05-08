import { PokerCode } from "../definer/PokerDefine";

export default class GamePlayer {
	UserID : number = 1; 		//ID
    Name : string = ""; 		//账号
    Age : number = 3; 			//年龄
    Sex : number = 4; 			//性别
    Gold : number = 5; 			//金币 *100
    VipLevel : number = 6; 		//vip级别
    Account : string  = ""; 	// 账号(手机号码/邮箱/真名)
    Sate : number = 8; 			// 状态 0:旁观 1:坐下 2:同意  3:站起
    PlatformID : number = 9; 	// 平台ID 0:无效
    RoomNum : number = 10; 		// 房间号 0:无效
    GameID : number = 11; 		// 所在游戏ID 0:无效
    TableID : number = 12; 		// 所在桌号ID 0:无效
    ChairID : number = 13; 		// 所在椅子ID 0:无效

    CardsLen: number = 0;
    Cards: Array<PokerCode> = [];  
}