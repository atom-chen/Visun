//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
package gate

import (
    "github.com/appqp/game"
    "github.com/appqp/login"
    "github.com/appqp/msg"
    protoMsg "github.com/appqp/msg/go"
)

//路由模块分发消息【模块间使用 ChanRPC 通讯，消息路由也不例外】
//注:需要解析的结构体才进行路由分派，即用客户端主动发起的)
func init() {

    //login文件生成的代码
    msg.ProcessorProto.SetRouter(&protoMsg.Register{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.RegisterResult{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.Login{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.ResResult{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.TaskItem{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.TaskList{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameList{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.UserInfo{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.RoomInfo{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBaseInfo{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameItem{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.MasterInfo{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.ReqEnterRoom{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.ReqEnterGame{}, login.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.ReqExitGame{}, login.ChanRPC)

    //gamecomm文件生成的代码
    msg.ProcessorProto.SetRouter(&protoMsg.PlayerInfo{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.UserList{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.PlayerRecord{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameReady{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBet{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBetResult{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameHost{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameSuperHost{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameRecord{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameRecordList{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameResult{}, game.ChanRPC)

    //baccarat文件生成的代码
    msg.ProcessorProto.SetRouter(&protoMsg.GameBaccaratEnter{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBaccaratHost{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBaccaratSuperHost{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBaccaratBet{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBaccaratBetResult{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameBaccaratOver{}, game.ChanRPC)

    //fishLord文件生成的代码
    msg.ProcessorProto.SetRouter(&protoMsg.GameFishLordEnter{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameFishLordPlaying{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameFishLordBetResult{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameFishLordOver{}, game.ChanRPC)

    //landLords文件生成的代码
    msg.ProcessorProto.SetRouter(&protoMsg.GameLandLordsEnter{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameLandLordsPlayer{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameLandLordsBegins{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameLandLordsOutcard{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameLandLordsOperate{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameLandLordsAward{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameLandLordsCheckout{}, game.ChanRPC)

    //mahjong文件生成的代码
    msg.ProcessorProto.SetRouter(&protoMsg.GameMahjongEnter{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameMahjongPlayer{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameMahjongBegins{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameMahjongOutcard{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameMahjongOperate{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameMahjongAward{}, game.ChanRPC)
    msg.ProcessorProto.SetRouter(&protoMsg.GameMahjongCheckout{}, game.ChanRPC)
}

