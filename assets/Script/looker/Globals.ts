import WsSocket from "../kernel/net/WsSocket";

export default class Globals {
    public static IP:string = "127.0.0.1";
    public static PORT:number = 5040;
    public static CurScene:cc.Scene = null;
    public static g_ws:WsSocket = null;
}