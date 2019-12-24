import AudioManager from "../audio/AudioManager";

if(cc.sys.isNative) 
{
	
	if(cc.Button["hook_onTouchEnded"]) {
		cc.Button["hook_onTouchEnded"]( ()=>{
			AudioManager.getInstance().playEffectAsync("");
		} );
	}

}
else 
{

	if(cc.Button.prototype["_registerNodeEvent_origin"]===null || cc.Button.prototype["_registerNodeEvent_origin"]===undefined) {
		cc.Button.prototype["_registerNodeEvent_origin"] = cc.Button.prototype["_registerNodeEvent"];
		cc.Button.prototype["_registerNodeEvent"] = function () {
			cc.Button.prototype["_registerNodeEvent_origin"].call(this);
	
			this.node.on("touchend", function(){
				if (!this.interactable) {
                    return
				}
				
				if(this.node._touchHook) {
				//	cc.log("------- touch hook -------");
					this.node._touchHook();
				} else {
				//	cc.log("------- default click -------");
				//	AudioManager.getInstance().playEffectAsync("", true);
				}
			}, this);
		}
	}
	
}