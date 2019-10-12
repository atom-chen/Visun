//---------------------------------
// landLords响应句柄
//---------------------------------
import { landlord_msgs } from "../../../../common/script/proto/net_landLords"

var proxy_landlord = {

    [landlord_msgs.GameLandLordsEnter] : function(param: any) {
        var sss = 0;
    },

    [landlord_msgs.GameLandLordsPlayer] : function(param: any) {

    },

    [landlord_msgs.GameLandLordsBegins] : function(param: any) {

    },

    [landlord_msgs.GameLandLordsOutcard] : function(param: any) {

    },

    [landlord_msgs.GameLandLordsOperate] : function(param: any) {

    },

    [landlord_msgs.GameLandLordsAward] : function(param: any) {

    },

    [landlord_msgs.GameLandLordsCheckout] : function(param: any) {

    },

}

export default proxy_landlord;
