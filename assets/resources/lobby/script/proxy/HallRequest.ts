//---------------------------------------------------------
// 该文件自动生成，不要手动更改
//---------------------------------------------------------
import HttpCore from "../../../../script/kernel/net/HttpCore";
export default class HallRequest{
public static req_youke_login( tParams:{ deviceID:string, platformId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_youke_login', tParams, tAddrParams, unsafeCallback); }
public static req_userinfo( tParams:{ userId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_userinfo', tParams, tAddrParams, unsafeCallback); }
public static req_ranklist( tParams:{ type:number, userID:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_ranklist', tParams, tAddrParams, unsafeCallback); }
public static req_game_aicive_notice( tParams:{ sid:string }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_game_aicive_notice', tParams, tAddrParams, unsafeCallback); }
public static req_get_kefu( tParams:{ type:string }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_get_kefu', tParams, tAddrParams, unsafeCallback); }
public static req_safebox( tParams:{ type:string, coin:number, userId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_safebox', tParams, tAddrParams, unsafeCallback); }
public static req_spread_myshare( tParams:{ userId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_spread_myshare', tParams, tAddrParams, unsafeCallback); }
public static req_spread_mycommission( tParams:{ userId:number, type:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_spread_mycommission', tParams, tAddrParams, unsafeCallback); }
public static req_spread_myteam( tParams:{ userId:number, type:number, page:number, size:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_spread_myteam', tParams, tAddrParams, unsafeCallback); }
public static req_spread_mywithdraw( tParams:{ userId:number, type:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_spread_mywithdraw', tParams, tAddrParams, unsafeCallback); }
public static req_record_fight( tParams:{ userId:number, pageSize:number, pageNo:number, gameId:string, channelId:number, tableType:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_record_fight', tParams, tAddrParams, unsafeCallback); }
public static req_game_list( tParams:{ sid:string }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_game_list', tParams, tAddrParams, unsafeCallback); }
public static req_room_select_info( tParams:{ gameId:string, channelId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_room_select_info', tParams, tAddrParams, unsafeCallback); }
public static req_enter_br_room( tParams:{ sid:string, gameId:string, tableType:number, gameType:number, clientVersion:string, channelId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_enter_br_room', tParams, tAddrParams, unsafeCallback); }
public static req_enter_coin_room( tParams:{ sid:string, gameId:string, tableType:number, gameType:number, clientVersion:string, channelId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_enter_coin_room', tParams, tAddrParams, unsafeCallback); }
}
