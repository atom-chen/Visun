import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import LogicCenter from "../model/LogicCenter";

//---------------------------------
// login响应句柄
//---------------------------------

var proxy_login = {

    [login_msgs.RegisterResult] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.ResResult] : function(param: any) {
        LogicCenter.getInstance().clear();
        LogicCenter.getInstance().init();
        UIManager.toast("登录成功");
    },

    [login_msgs.UserInfo] : function(param: any) {
        CommonUtil.simpleCopy(LoginUser.getInstance(), param);
    },

}

export default proxy_login;
