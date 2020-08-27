//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    FighterInfo = 83,
}

export var zhajinhua_packet_define = {
    83: new LeafWsPacket(83, zhajinhua.FighterInfo, "zhajinhua.FighterInfo"),
}

export class zhajinhua_request {
    public static FighterInfo( data:{ UserId:number, SeatId:number, FightState:number, IsSee:any, RecentBetMoney:number, TotalBetMoney:number, Cards:any } ) { zhajinhua_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
}

