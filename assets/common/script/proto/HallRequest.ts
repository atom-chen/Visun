//---------------------------------------------------------
// 该文件自动生成，不要手动更改
//---------------------------------------------------------
import HttpCore from "../../../kernel/net/HttpCore";

export default class HallRequest{
public static req_youke_login( tParams:{ deviceID:string, platformId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_youke_login', tParams, tAddrParams, unsafeCallback); }
public static req_userinfo( tParams:{ userId:number }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_userinfo', tParams, tAddrParams, unsafeCallback); }
public static req_get_kefu( tParams:{ type:string }, tAddrParams?:any[], unsafeCallback?:(data:any)=>void) : void { HttpCore.request('req_get_kefu', tParams, tAddrParams, unsafeCallback); }
}
