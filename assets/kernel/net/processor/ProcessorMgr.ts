import IProcessor from "./IProcessor";
import JsonProcessor from "./JsonProcessor";
import ProtobufProcessor from "./ProtobufProcessor";
import { ProcessorType } from "../../looker/KernelDefine";

//-----------------------------------------
// 消息处理器总管
//-----------------------------------------
export default class ProcessorMgr {
    private static _instance:ProcessorMgr = null;

    private _all_processors:{[key: string]: IProcessor;} = {};

    public static instance() : ProcessorMgr {
        if(!ProcessorMgr._instance) { ProcessorMgr._instance = new ProcessorMgr; }
        return ProcessorMgr._instance;
    }

    private constructor() {

    }

    public createProcessor(key:string, type:ProcessorType) : IProcessor
    {
        if(!this._all_processors[key]) {
            if(type == ProcessorType.Json) 
            {
                this._all_processors[key] = new JsonProcessor();
            }
            else if(type == ProcessorType.Protobuff) 
            {
                this._all_processors[key] = new ProtobufProcessor();
            }
        }
        return this._all_processors[key];
    }

    public getProcessor(key:string) : IProcessor {
        return this._all_processors[key];
    } 
}
