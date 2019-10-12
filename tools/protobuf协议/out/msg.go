//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
package msg
import (
    "fmt"
    "reflect"
    "sync"
    protoMsg "github.com/appqp/msg/go"
    jsonMsg "github.com/appqp/msg/json"
    "github.com/leaf/network/json"
    "github.com/leaf/network/protobuf"
    "github.com/golang/protobuf/proto"
)

// 使用默认的 JSON 消息处理器（默认还提供了 protobuf 消息处理器）
var ProcessorJson = json.NewProcessor()
var ProcessorProto = protobuf.NewProcessor()

//对外接口 【这里的注册函数并非线程安全】
func RegisterMessage(message proto.Message) {
    var wg sync.WaitGroup
    wg.Add(1)
    ProcessorProto.Register(message)
    wg.Done()
}

func init() {

    //login文件生成的代码
    RegisterMessage(&protoMsg.Register{})
    RegisterMessage(&protoMsg.RegisterResult{})
    RegisterMessage(&protoMsg.Login{})
    RegisterMessage(&protoMsg.ResResult{})
    RegisterMessage(&protoMsg.TaskItem{})
    RegisterMessage(&protoMsg.TaskList{})
    RegisterMessage(&protoMsg.GameList{})
    RegisterMessage(&protoMsg.UserInfo{})
    RegisterMessage(&protoMsg.RoomInfo{})
    RegisterMessage(&protoMsg.GameBaseInfo{})
    RegisterMessage(&protoMsg.GameItem{})
    RegisterMessage(&protoMsg.MasterInfo{})
    RegisterMessage(&protoMsg.ReqEnterRoom{})
    RegisterMessage(&protoMsg.ReqEnterGame{})
    RegisterMessage(&protoMsg.ReqExitGame{})

    //gamecomm文件生成的代码
    RegisterMessage(&protoMsg.PlayerInfo{})
    RegisterMessage(&protoMsg.UserList{})
    RegisterMessage(&protoMsg.PlayerRecord{})
    RegisterMessage(&protoMsg.GameReady{})
    RegisterMessage(&protoMsg.GameBet{})
    RegisterMessage(&protoMsg.GameBetResult{})
    RegisterMessage(&protoMsg.GameHost{})
    RegisterMessage(&protoMsg.GameSuperHost{})
    RegisterMessage(&protoMsg.GameRecord{})
    RegisterMessage(&protoMsg.GameRecordList{})
    RegisterMessage(&protoMsg.GameResult{})

    //baccarat文件生成的代码
    RegisterMessage(&protoMsg.GameBaccaratEnter{})
    RegisterMessage(&protoMsg.GameBaccaratHost{})
    RegisterMessage(&protoMsg.GameBaccaratSuperHost{})
    RegisterMessage(&protoMsg.GameBaccaratBet{})
    RegisterMessage(&protoMsg.GameBaccaratBetResult{})
    RegisterMessage(&protoMsg.GameBaccaratOver{})

    //fishLord文件生成的代码
    RegisterMessage(&protoMsg.GameFishLordEnter{})
    RegisterMessage(&protoMsg.GameFishLordPlaying{})
    RegisterMessage(&protoMsg.GameFishLordBetResult{})
    RegisterMessage(&protoMsg.GameFishLordOver{})

    //landLords文件生成的代码
    RegisterMessage(&protoMsg.GameLandLordsEnter{})
    RegisterMessage(&protoMsg.GameLandLordsPlayer{})
    RegisterMessage(&protoMsg.GameLandLordsBegins{})
    RegisterMessage(&protoMsg.GameLandLordsOutcard{})
    RegisterMessage(&protoMsg.GameLandLordsOperate{})
    RegisterMessage(&protoMsg.GameLandLordsAward{})
    RegisterMessage(&protoMsg.GameLandLordsCheckout{})

    //mahjong文件生成的代码
    RegisterMessage(&protoMsg.GameMahjongEnter{})
    RegisterMessage(&protoMsg.GameMahjongPlayer{})
    RegisterMessage(&protoMsg.GameMahjongBegins{})
    RegisterMessage(&protoMsg.GameMahjongOutcard{})
    RegisterMessage(&protoMsg.GameMahjongOperate{})
    RegisterMessage(&protoMsg.GameMahjongAward{})
    RegisterMessage(&protoMsg.GameMahjongCheckout{})
}
