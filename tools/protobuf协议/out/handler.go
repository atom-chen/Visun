
    //login文件生成的代码
    handleMsg(&protoMsg.Register{}, handleRegister)
    handleMsg(&protoMsg.RegisterResult{}, handleRegisterResult)
    handleMsg(&protoMsg.Login{}, handleLogin)
    handleMsg(&protoMsg.ResResult{}, handleResResult)
    handleMsg(&protoMsg.TaskItem{}, handleTaskItem)
    handleMsg(&protoMsg.TaskList{}, handleTaskList)
    handleMsg(&protoMsg.GameList{}, handleGameList)
    handleMsg(&protoMsg.UserInfo{}, handleUserInfo)
    handleMsg(&protoMsg.RoomInfo{}, handleRoomInfo)
    handleMsg(&protoMsg.GameBaseInfo{}, handleGameBaseInfo)
    handleMsg(&protoMsg.GameItem{}, handleGameItem)
    handleMsg(&protoMsg.MasterInfo{}, handleMasterInfo)
    handleMsg(&protoMsg.ReqEnterRoom{}, handleReqEnterRoom)
    handleMsg(&protoMsg.ReqEnterGame{}, handleReqEnterGame)
    handleMsg(&protoMsg.ReqExitGame{}, handleReqExitGame)

    //gamecomm文件生成的代码
    handleMsg(&protoMsg.PlayerInfo{}, handlePlayerInfo)
    handleMsg(&protoMsg.UserList{}, handleUserList)
    handleMsg(&protoMsg.PlayerRecord{}, handlePlayerRecord)
    handleMsg(&protoMsg.GameReady{}, handleGameReady)
    handleMsg(&protoMsg.GameBet{}, handleGameBet)
    handleMsg(&protoMsg.GameBetResult{}, handleGameBetResult)
    handleMsg(&protoMsg.GameHost{}, handleGameHost)
    handleMsg(&protoMsg.GameSuperHost{}, handleGameSuperHost)
    handleMsg(&protoMsg.GameRecord{}, handleGameRecord)
    handleMsg(&protoMsg.GameRecordList{}, handleGameRecordList)
    handleMsg(&protoMsg.GameResult{}, handleGameResult)

    //baccarat文件生成的代码
    handleMsg(&protoMsg.GameBaccaratEnter{}, handleGameBaccaratEnter)
    handleMsg(&protoMsg.GameBaccaratHost{}, handleGameBaccaratHost)
    handleMsg(&protoMsg.GameBaccaratSuperHost{}, handleGameBaccaratSuperHost)
    handleMsg(&protoMsg.GameBaccaratBet{}, handleGameBaccaratBet)
    handleMsg(&protoMsg.GameBaccaratBetResult{}, handleGameBaccaratBetResult)
    handleMsg(&protoMsg.GameBaccaratOver{}, handleGameBaccaratOver)

    //fishLord文件生成的代码
    handleMsg(&protoMsg.GameFishLordEnter{}, handleGameFishLordEnter)
    handleMsg(&protoMsg.GameFishLordPlaying{}, handleGameFishLordPlaying)
    handleMsg(&protoMsg.GameFishLordBetResult{}, handleGameFishLordBetResult)
    handleMsg(&protoMsg.GameFishLordOver{}, handleGameFishLordOver)

    //landLords文件生成的代码
    handleMsg(&protoMsg.GameLandLordsEnter{}, handleGameLandLordsEnter)
    handleMsg(&protoMsg.GameLandLordsPlayer{}, handleGameLandLordsPlayer)
    handleMsg(&protoMsg.GameLandLordsBegins{}, handleGameLandLordsBegins)
    handleMsg(&protoMsg.GameLandLordsOutcard{}, handleGameLandLordsOutcard)
    handleMsg(&protoMsg.GameLandLordsOperate{}, handleGameLandLordsOperate)
    handleMsg(&protoMsg.GameLandLordsAward{}, handleGameLandLordsAward)
    handleMsg(&protoMsg.GameLandLordsCheckout{}, handleGameLandLordsCheckout)

    //mahjong文件生成的代码
    handleMsg(&protoMsg.GameMahjongEnter{}, handleGameMahjongEnter)
    handleMsg(&protoMsg.GameMahjongPlayer{}, handleGameMahjongPlayer)
    handleMsg(&protoMsg.GameMahjongBegins{}, handleGameMahjongBegins)
    handleMsg(&protoMsg.GameMahjongOutcard{}, handleGameMahjongOutcard)
    handleMsg(&protoMsg.GameMahjongOperate{}, handleGameMahjongOperate)
    handleMsg(&protoMsg.GameMahjongAward{}, handleGameMahjongAward)
    handleMsg(&protoMsg.GameMahjongCheckout{}, handleGameMahjongCheckout)
