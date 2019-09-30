import AudioManager from "../audio/AudioManager";

if(cc.sys.isNative) 
{

if(cc.Button["hook_onTouchEnded"]) {
    cc.Button["hook_onTouchEnded"]( ()=>{
        AudioManager.getInstance().playEffectSync("");
    } );
}

}
else 
{

if(!cc.Button.prototype["_onTouchEnded_origin"]) {
    cc.Button.prototype["_onTouchEnded_origin"] = cc.Button.prototype["_onTouchEnded"];
    cc.Button.prototype["_onTouchEnded"] = function (event) {
        if (!this.interactable || !this.enabledInHierarchy) return;
        cc.log("------- overrided button click")
        cc.Button.prototype["_onTouchEnded_origin"].call(this, event);
        AudioManager.getInstance().playEffectSync("");
    }
}
    
}