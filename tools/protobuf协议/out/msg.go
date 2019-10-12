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
}
