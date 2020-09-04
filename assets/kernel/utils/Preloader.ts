import EventCenter from "../basic/event/EventCenter";
import CommonUtil from "./CommonUtil";

export default class Preloader {
	static resDispatcher = new EventCenter();

	static setNodeSprite(spr:cc.Sprite, respath:string, delegateObj:any) {
		var rsc = cc.loader.getRes(respath, cc.SpriteFrame);
        if(rsc) {
			spr.spriteFrame = rsc;
			return;
		}
		this.resDispatcher.listen(respath, function(sf){ 
			spr.spriteFrame = sf;
		}, delegateObj);
		cc.loader.loadRes(respath, cc.SpriteFrame, (err, r)=>{
			if(err){ cc.log(err); return; }
			Preloader.resDispatcher.triger(respath, r);
		});
	}

	/*
	listeners.on_start = function(sk, trackEntry) { }
	listeners.on_interrupt = function(sk, trackEntry) { }
	listeners.on_end = function(sk, trackEntry) { }
	listeners.on_dispose = function(sk, trackEntry) { }
	listeners.on_complete = function(sk, trackEntry) { }
	listeners.on_event = function(sk, trackEntry) { }
	*/
	private static showSpineSync(obj:cc.Node, sk:sp.Skeleton, rsc:any, trackIndex:number, aniName:string, loopTimes:number, listeners?:any) {
		sk.skeletonData = rsc;
		sk.premultipliedAlpha = false;
		
		if(loopTimes==1) {
			sk.setAnimation(trackIndex, aniName, false);
		} else {
			sk.setAnimation(trackIndex, aniName, true);
		}
		
		if(loopTimes>0 || (listeners && listeners.on_complete)) {
			sk.setCompleteListener((trackEntry) => {
				var animationName = trackEntry.animation ? trackEntry.animation.name : "";
				var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd); 
				cc.log("[track %s][animation %s] complete: %s", trackEntry.trackIndex, animationName, loopCount);
				if(listeners && listeners.on_complete){ listeners.on_complete(sk, trackEntry); }
				if(loopTimes>0 && loopCount>=loopTimes) {
					CommonUtil.safeDelete(obj);
				}
			});
		}

		if(!listeners) { return; }
		
		if(listeners.on_start) {
			sk.setStartListener(trackEntry => {
				var animationName = trackEntry.animation ? trackEntry.animation.name : "";
				cc.log("[track %s][animation %s] start.", trackEntry.trackIndex, animationName);
				listeners.on_start(sk, trackEntry);
			});
		}
		if(listeners.on_interrupt) {
			sk.setInterruptListener(trackEntry => {
				var animationName = trackEntry.animation ? trackEntry.animation.name : "";
				cc.log("[track %s][animation %s] interrupt.", trackEntry.trackIndex, animationName);
				listeners.on_interrupt(sk, trackEntry)
			});
		}
		if(listeners.on_end) {
			sk.setEndListener(trackEntry => {
				var animationName = trackEntry.animation ? trackEntry.animation.name : "";
				cc.log("[track %s][animation %s] end.", trackEntry.trackIndex, animationName);
				listeners.on_end(sk, trackEntry)
			});
		}
		if(listeners.on_dispose) {
			sk.setDisposeListener(trackEntry => {
				var animationName = trackEntry.animation ? trackEntry.animation.name : "";
				cc.log("[track %s][animation %s] will be disposed.", trackEntry.trackIndex, animationName);
				listeners.on_dispose(sk, trackEntry)
			});
		}
		// if(listeners.on_complete) {
		// 	sk.setCompleteListener((trackEntry) => {
		// 		var animationName = trackEntry.animation ? trackEntry.animation.name : "";
		// 		var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd); 
		// 		cc.log("[track %s][animation %s] complete: %s", trackEntry.trackIndex, animationName, loopCount);
		// 		listeners.on_complete(sk, trackEntry);
		// 		if(loopTimes>0 && loopCount>=loopTimes) {
		// 			obj.removeFromParent(true);
		// 		}
		// 	});
		// }
		if(listeners.on_event) {
			sk.setEventListener((trackEntry, event) => {
				var animationName = trackEntry.animation ? trackEntry.animation.name : "";
				cc.log("[track %s][animation %s] event: %s, %s, %s, %s", trackEntry.trackIndex, animationName, event.data.name, event.intValue, event.floatValue, event.stringValue);
				listeners.on_event(sk, trackEntry)
			});
		}
	}
	public static showSpineAsync(respath:string, trackIndex:number, aniName:string, loopTimes:number, parent:cc.Node, info:any, listeners?:any) : cc.Node
	{
		var obj = new cc.Node();
		var sk = obj.addComponent(sp.Skeleton);
		parent.addChild(obj);

		if(info) {
			for(var k in info) {
				obj[k] = info[k];
			}
		}

		var huancun = cc.loader.getRes(respath, sp.SkeletonData);
		if(huancun) {
			Preloader.showSpineSync(obj, sk, huancun, trackIndex, aniName, loopTimes, listeners);
			return obj;
		}

		cc.loader.loadRes(respath, sp.SkeletonData, function(err, rsc){
			if(err) { 
				cc.log( '载入spine失败:' + err ); 
				return; 
			}
			if(!cc.isValid(parent)) {
				cc.log("parent已经释放");
				return;
			}

			Preloader.showSpineSync(obj, sk, rsc, trackIndex, aniName, loopTimes, listeners);
		});

		return obj;
	}
	
}