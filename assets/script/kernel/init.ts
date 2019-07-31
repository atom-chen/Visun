import DataProcessor from "./codec/DataProcessor";
import JsonCodec from "./codec/JsonCodec";
import ProtobufCodec from "./codec/ProtobufCodec";
import AudioManager from "./manager/AudioManager";
import LoadCenter from "./manager/LoadCenter";
import UIManager from "./manager/UIManager";
import HttpCore from "./net/HttpCore";
import WsSocket from "./net/WsSocket";
import TcpSocket from "./net/TcpSocket";
import HttpRequests from "./net/HttpRequests";
import HttpResponds from "./net/HttpResponds";
import Caller from "./promise/Caller";
import Procedure from "./promise/Procedure";
import PlayUnit from "./promise/PlayUnit";
import CommonUtils from "./utils/CommonUtils";

window["vsun"] = {};

//codec
//(window["vsun"] as any).DataProcessor = DataProcessor;
(window["vsun"] as any).JsonCodec = JsonCodec;
(window["vsun"] as any).ProtobufCodec = ProtobufCodec;

//manager
(window["vsun"] as any).AudioManager = AudioManager;
(window["vsun"] as any).LoadCenter = LoadCenter;
(window["vsun"] as any).UIManager = UIManager;

//net
(window["vsun"] as any).HttpCore = HttpCore;
(window["vsun"] as any).WsSocket = WsSocket;
(window["vsun"] as any).TcpSocket = TcpSocket;
(window["vsun"] as any).HttpRequests = HttpRequests;
(window["vsun"] as any).HttpResponds = HttpResponds;

//promise
(window["vsun"] as any).Caller = Caller;
(window["vsun"] as any).Procedure = Procedure;
(window["vsun"] as any).PlayUnit = PlayUnit;

//utils
(window["vsun"] as any).CommonUtils = CommonUtils;
