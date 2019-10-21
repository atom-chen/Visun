import { gamecomm_msgs } from "../proto/net_gamecomm";
import UIManager from "../../../kernel/view/UIManager";

//---------------------------------
// gamecomm响应句柄
//---------------------------------

var proxy_gamecomm = {

    [gamecomm_msgs.PlayerInfo] : function(param: any) {

    },

    [gamecomm_msgs.ErrorResult] : function(param:any) {
        UIManager.toast(param.Hints)
    }

}

export default proxy_gamecomm;
