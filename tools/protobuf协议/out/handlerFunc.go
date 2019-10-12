//-----------------------------------------------
//login文件生成的代码
//-----------------------------------------------
// 
func handleRegister(args []interface{}) {
    m := args[0].(*protoMsg.Register)
    a := args[1].(gate.Agent)
    log.Debug("[receive]Register:->%v", m)

}

// 
func handleRegisterResult(args []interface{}) {
    m := args[0].(*protoMsg.RegisterResult)
    a := args[1].(gate.Agent)
    log.Debug("[receive]RegisterResult:->%v", m)

}

// 
func handleLogin(args []interface{}) {
    m := args[0].(*protoMsg.Login)
    a := args[1].(gate.Agent)
    log.Debug("[receive]Login:->%v", m)

}

// 
func handleResResult(args []interface{}) {
    m := args[0].(*protoMsg.ResResult)
    a := args[1].(gate.Agent)
    log.Debug("[receive]ResResult:->%v", m)

}

// 
func handleTaskItem(args []interface{}) {
    m := args[0].(*protoMsg.TaskItem)
    a := args[1].(gate.Agent)
    log.Debug("[receive]TaskItem:->%v", m)

}

// 
func handleTaskList(args []interface{}) {
    m := args[0].(*protoMsg.TaskList)
    a := args[1].(gate.Agent)
    log.Debug("[receive]TaskList:->%v", m)

}

// 
func handleGameList(args []interface{}) {
    m := args[0].(*protoMsg.GameList)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameList:->%v", m)

}

// 
func handleUserInfo(args []interface{}) {
    m := args[0].(*protoMsg.UserInfo)
    a := args[1].(gate.Agent)
    log.Debug("[receive]UserInfo:->%v", m)

}

// 
func handleRoomInfo(args []interface{}) {
    m := args[0].(*protoMsg.RoomInfo)
    a := args[1].(gate.Agent)
    log.Debug("[receive]RoomInfo:->%v", m)

}

// 
func handleGameBaseInfo(args []interface{}) {
    m := args[0].(*protoMsg.GameBaseInfo)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBaseInfo:->%v", m)

}

// 
func handleGameItem(args []interface{}) {
    m := args[0].(*protoMsg.GameItem)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameItem:->%v", m)

}

// 
func handleMasterInfo(args []interface{}) {
    m := args[0].(*protoMsg.MasterInfo)
    a := args[1].(gate.Agent)
    log.Debug("[receive]MasterInfo:->%v", m)

}

// 
func handleReqEnterRoom(args []interface{}) {
    m := args[0].(*protoMsg.ReqEnterRoom)
    a := args[1].(gate.Agent)
    log.Debug("[receive]ReqEnterRoom:->%v", m)

}

// 
func handleReqEnterGame(args []interface{}) {
    m := args[0].(*protoMsg.ReqEnterGame)
    a := args[1].(gate.Agent)
    log.Debug("[receive]ReqEnterGame:->%v", m)

}

// 
func handleReqExitGame(args []interface{}) {
    m := args[0].(*protoMsg.ReqExitGame)
    a := args[1].(gate.Agent)
    log.Debug("[receive]ReqExitGame:->%v", m)

}

//-----------------------------------------------
//gamecomm文件生成的代码
//-----------------------------------------------
// 
func handlePlayerInfo(args []interface{}) {
    m := args[0].(*protoMsg.PlayerInfo)
    a := args[1].(gate.Agent)
    log.Debug("[receive]PlayerInfo:->%v", m)

}

// 
func handleUserList(args []interface{}) {
    m := args[0].(*protoMsg.UserList)
    a := args[1].(gate.Agent)
    log.Debug("[receive]UserList:->%v", m)

}

// 
func handlePlayerRecord(args []interface{}) {
    m := args[0].(*protoMsg.PlayerRecord)
    a := args[1].(gate.Agent)
    log.Debug("[receive]PlayerRecord:->%v", m)

}

// 
func handleGameReady(args []interface{}) {
    m := args[0].(*protoMsg.GameReady)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameReady:->%v", m)

}

// 
func handleGameBet(args []interface{}) {
    m := args[0].(*protoMsg.GameBet)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBet:->%v", m)

}

// 
func handleGameBetResult(args []interface{}) {
    m := args[0].(*protoMsg.GameBetResult)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBetResult:->%v", m)

}

// 
func handleGameHost(args []interface{}) {
    m := args[0].(*protoMsg.GameHost)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameHost:->%v", m)

}

// 
func handleGameSuperHost(args []interface{}) {
    m := args[0].(*protoMsg.GameSuperHost)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameSuperHost:->%v", m)

}

// 
func handleGameRecord(args []interface{}) {
    m := args[0].(*protoMsg.GameRecord)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameRecord:->%v", m)

}

// 
func handleGameRecordList(args []interface{}) {
    m := args[0].(*protoMsg.GameRecordList)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameRecordList:->%v", m)

}

// 
func handleGameResult(args []interface{}) {
    m := args[0].(*protoMsg.GameResult)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameResult:->%v", m)

}

//-----------------------------------------------
//baccarat文件生成的代码
//-----------------------------------------------
// 
func handleGameBaccaratEnter(args []interface{}) {
    m := args[0].(*protoMsg.GameBaccaratEnter)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBaccaratEnter:->%v", m)

}

// 
func handleGameBaccaratHost(args []interface{}) {
    m := args[0].(*protoMsg.GameBaccaratHost)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBaccaratHost:->%v", m)

}

// 
func handleGameBaccaratSuperHost(args []interface{}) {
    m := args[0].(*protoMsg.GameBaccaratSuperHost)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBaccaratSuperHost:->%v", m)

}

// 
func handleGameBaccaratBet(args []interface{}) {
    m := args[0].(*protoMsg.GameBaccaratBet)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBaccaratBet:->%v", m)

}

// 
func handleGameBaccaratBetResult(args []interface{}) {
    m := args[0].(*protoMsg.GameBaccaratBetResult)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBaccaratBetResult:->%v", m)

}

// 
func handleGameBaccaratOver(args []interface{}) {
    m := args[0].(*protoMsg.GameBaccaratOver)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameBaccaratOver:->%v", m)

}

//-----------------------------------------------
//fishLord文件生成的代码
//-----------------------------------------------
// 
func handleGameFishLordEnter(args []interface{}) {
    m := args[0].(*protoMsg.GameFishLordEnter)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameFishLordEnter:->%v", m)

}

// 
func handleGameFishLordPlaying(args []interface{}) {
    m := args[0].(*protoMsg.GameFishLordPlaying)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameFishLordPlaying:->%v", m)

}

// 
func handleGameFishLordBetResult(args []interface{}) {
    m := args[0].(*protoMsg.GameFishLordBetResult)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameFishLordBetResult:->%v", m)

}

// 
func handleGameFishLordOver(args []interface{}) {
    m := args[0].(*protoMsg.GameFishLordOver)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameFishLordOver:->%v", m)

}

//-----------------------------------------------
//landLords文件生成的代码
//-----------------------------------------------
// 
func handleGameLandLordsEnter(args []interface{}) {
    m := args[0].(*protoMsg.GameLandLordsEnter)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameLandLordsEnter:->%v", m)

}

// 
func handleGameLandLordsPlayer(args []interface{}) {
    m := args[0].(*protoMsg.GameLandLordsPlayer)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameLandLordsPlayer:->%v", m)

}

// 
func handleGameLandLordsBegins(args []interface{}) {
    m := args[0].(*protoMsg.GameLandLordsBegins)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameLandLordsBegins:->%v", m)

}

// 
func handleGameLandLordsOutcard(args []interface{}) {
    m := args[0].(*protoMsg.GameLandLordsOutcard)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameLandLordsOutcard:->%v", m)

}

// 
func handleGameLandLordsOperate(args []interface{}) {
    m := args[0].(*protoMsg.GameLandLordsOperate)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameLandLordsOperate:->%v", m)

}

// 
func handleGameLandLordsAward(args []interface{}) {
    m := args[0].(*protoMsg.GameLandLordsAward)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameLandLordsAward:->%v", m)

}

// 
func handleGameLandLordsCheckout(args []interface{}) {
    m := args[0].(*protoMsg.GameLandLordsCheckout)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameLandLordsCheckout:->%v", m)

}

//-----------------------------------------------
//mahjong文件生成的代码
//-----------------------------------------------
// 
func handleGameMahjongEnter(args []interface{}) {
    m := args[0].(*protoMsg.GameMahjongEnter)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameMahjongEnter:->%v", m)

}

// 
func handleGameMahjongPlayer(args []interface{}) {
    m := args[0].(*protoMsg.GameMahjongPlayer)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameMahjongPlayer:->%v", m)

}

// 
func handleGameMahjongBegins(args []interface{}) {
    m := args[0].(*protoMsg.GameMahjongBegins)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameMahjongBegins:->%v", m)

}

// 
func handleGameMahjongOutcard(args []interface{}) {
    m := args[0].(*protoMsg.GameMahjongOutcard)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameMahjongOutcard:->%v", m)

}

// 
func handleGameMahjongOperate(args []interface{}) {
    m := args[0].(*protoMsg.GameMahjongOperate)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameMahjongOperate:->%v", m)

}

// 
func handleGameMahjongAward(args []interface{}) {
    m := args[0].(*protoMsg.GameMahjongAward)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameMahjongAward:->%v", m)

}

// 
func handleGameMahjongCheckout(args []interface{}) {
    m := args[0].(*protoMsg.GameMahjongCheckout)
    a := args[1].(gate.Agent)
    log.Debug("[receive]GameMahjongCheckout:->%v", m)

}

