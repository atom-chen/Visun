import { PokerCode } from "../../../../../common/script/definer/PokerDefine";

export default class DdzPlayer {
	UserID : number = 0; 		//ID
    Name : string = ""; 		//账号
    Age : number = 0; 			//年龄
    Sex : number = 0; 			//性别
    Gold : number = 0; 			//金币 *100
    VipLevel : number = 0; 		//vip级别
    Account : string  = ""; 	// 账号(手机号码/邮箱/真名)
    Sate : number = 0; 			// 状态 0:旁观 1:坐下 2:同意  3:站起
    PlatformID : number = 0; 	// 平台ID 0:无效
    RoomNum : number = 0; 		// 房间号 0:无效
    GameID : number = 0; 		// 所在游戏ID 0:无效
    TableID : number = 0; 		// 所在桌号ID 0:无效
    ChairID : number = 0; 		// 所在椅子ID 0:无效

    CardsLen: number = 0;
    Cards: Array<PokerCode> = [];  
}