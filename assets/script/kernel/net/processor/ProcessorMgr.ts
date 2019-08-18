import IProcessor from "./IProcessor";
import JsonProcessor from "./JsonProcessor";
import ProtobufProcessor from "./ProtobufProcessor";
import { ProcessorType } from "../Define";

//-----------------------------------------
// 消息处理器总管
//-----------------------------------------
export default class ProcessorMgr {
    private static _instance:ProcessorMgr = null;

    private _all_processors:object = {};

    public static instance() : ProcessorMgr {
        if(!ProcessorMgr._instance) { ProcessorMgr._instance = new ProcessorMgr; }
        return ProcessorMgr._instance;
    }

    private constructor() {

    }

    public create(key:string, type:ProcessorType, pbPackage:any, responder:object) : IProcessor
    {
        if(!this._all_processors[key]) {
            if(type == ProcessorType.Json) 
            {
                this._all_processors[key] = new JsonProcessor(pbPackage, responder);
            }
            else if(type == ProcessorType.Protobuff) 
            {
                this._all_processors[key] = new ProtobufProcessor(pbPackage, responder);
            }
        }
        return this._all_processors[key];
    }

    public get(key:string) : IProcessor {
        return this._all_processors[key];
    } 
}
