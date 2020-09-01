import EventCenter from "../basic/event/EventCenter";

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
}