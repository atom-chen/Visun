import CHandler from "../basic/datastruct/CHandler";

//---------------------------------
// cc.load封装
//---------------------------------
/*
load(resources, progressCallback, completeCallback)
loadRes(url, type, progressCallback, completeCallback)
loadResArray(urls, type, progressCallback, completeCallback)
loadResDir(url, type, progressCallback, completeCallback)
*/
export default class LoadCenter {
	private static _instance: LoadCenter = null;
	private static _enableGC: boolean = false;

	static getInstance(): LoadCenter {
		if (LoadCenter._instance) { return LoadCenter._instance; }
		LoadCenter._instance = new LoadCenter();
		return LoadCenter._instance;
	}
	private constructor() { 

	}
	
	public static dump(level:number) : void {
		cc.log("-----------------------begin", LoadCenter.getInstance().getCacheCount());
		for (var kk in cc.loader["_cache"]) {
			cc.log(kk);
			cc.log(cc.loader["_cache"][kk]);
		}
		
		cc.log("-----------------------end", LoadCenter.getInstance().getCacheCount());
	}

	public getCacheCount() {
		return Object.keys(cc.loader["_cache"]).length;
	}

	//-----------------------------------------------------------------------------------
	private _frameListeners : {[key:string]:Array<any>} = {};
	changeSpriteFrame(comp:cc.Sprite, frameName:string) {
		let sf0 = cc.loader.getRes(frameName, cc.SpriteFrame);
        if(sf0) {
            comp.spriteFrame = sf0;
            return;
		}
		
		let onSpriteFrameLoaded = function(err, sf1){
			if(err) { cc.warn("error: "+err); return; }
			if(this._frameListeners[frameName]) {
				var fnList = this._frameListeners[frameName];
				for(var i in fnList) {
					fnList[i].target.spriteFrame = sf1;
				}
				this._frameListeners[frameName].length = 0;
			}
		}
		this._frameListeners[frameName] = this._frameListeners[frameName] || [];
		this._frameListeners[frameName].push({ target:comp });
        cc.loader.loadRes(frameName, cc.SpriteFrame, onSpriteFrameLoaded.bind(this));
	}
	removeListenerByTarget(comp:cc.Sprite) {
		for(var frameName in this._frameListeners) {
			var fnList = this._frameListeners[frameName];
			for(var i = fnList.length; i >= 0; i--) {
				if(fnList[i].target === comp) {
					fnList[i].splice(i, 1);
				}
			}
		}
	}

	//-----------------------------------------------------------------------------------

	retatinRes(res: string) {
		if (!cc.loader["_cache"][res]) {
			return;
		}

		if (!cc.loader["_cache"][res].bk_count) {
			cc.loader["_cache"][res].bk_count = 0;
		}
		cc.loader["_cache"][res].bk_count += 1;
	//	cc.log("retatinRes ++++", res, cc.loader["_cache"][res].bk_count);
	}

	releaseRes(res: string) {
		if (!cc.loader["_cache"][res]) {
			return;
		}

		if (!cc.loader["_cache"][res].bk_count) {
			cc.loader["_cache"][res].bk_count = 0;
		}
		cc.loader["_cache"][res].bk_count -= 1;
	//	cc.log("releaseRes ----", res, cc.loader["_cache"][res].bk_count);
	}

	retainArrayRes(res: string[]) {
		res.forEach((item) => {
			this.retatinRes(item);
		});
	}

	releaseArrayRes(res: string[]) {
		res.forEach((item) => {
			this.releaseRes(item);
		});
	}

	retainNodeRes(node: cc.Node) {
		this._parserNodeRes(node, 1);
	}

	releaseNodeRes(node: cc.Node) {
		this._parserNodeRes(node, -1);
	}

	gc()
	{
		if(!LoadCenter._enableGC){ return; }
		var texturesInCache = cc.loader["_cache"];
		var release_key = [];
		for (var asset in texturesInCache) {
			if (texturesInCache[asset].uStatic) {
				continue;
			}
			if (texturesInCache[asset].bk_count <= 0) {
				release_key.push(texturesInCache[asset].url);
				cc.log(`释放资源:${texturesInCache[asset].url}`);
				cc.loader.release(texturesInCache[asset].url);
			}
		}

		if (release_key.length > 0) {
			this._depthGC(release_key);
		}
	}

	private _depthGC(strs: Array<string>) {
		if(!LoadCenter._enableGC){ return; }
		var texturesInCache = cc.loader["_cache"];
		var release_json = [];
		for (var asset in texturesInCache) {
			if (texturesInCache[asset].dependKeys && texturesInCache[asset].dependKeys.length > 0) {
				var is_release = false;
				for (var i = 0; i < texturesInCache[asset].dependKeys.length; i++) {
					if (strs.indexOf(texturesInCache[asset].dependKeys[i]) !== -1) {
						is_release = true;
					}
				}
				if (is_release /*&& texturesInCache[asset].bk_count <= 0*/) {
					release_json.push(texturesInCache[asset].url);
					cc.log(`释放资源:${texturesInCache[asset].url}`);
					cc.loader.release(texturesInCache[asset].url);
				}
			}
		}

		if (release_json.length > 0) {
			this._depthGC(release_json);
		}
	}

	//------------------------------------------------------------------------------

	// 进行引用计数管理
	loadStaticRes(url: string, type: typeof cc.Asset, tag: string, callback:Function) {
		if (!url || !type || !callback) {
			cc.warn("参数错误");
			return;
		}
		cc.loader.loadRes(url, type, (err, asset) => {
			callback(asset);
			this._parseStaticRes(asset, tag);
		});
	}

	// 进行引用计数管理
	loadStaticResArr(paths: Array<string>, tag: string, callfun: Function) {
		if (!paths || !tag || !callfun) {
			cc.log("参数错误");
			return;
		}

		cc.loader.loadResArray(paths, function(err, assets){
			if (err) {
				cc.log(err);
				return;
			}
			callfun(assets);
			assets.forEach((asset) => {
				this._parseStaticRes(asset, tag);
			});
		}.bind(this));
	}

	// 进行引用计数管理
	releaseStaticRes(tag: string): void {
		var texturesInCache = cc.loader["_cache"];
		var release_key = [];
		for (var asset in texturesInCache) {
			if (tag && texturesInCache[asset].uTag !== tag) {
				continue;
			}
		   
			if (texturesInCache[asset].bk_count > 0 && texturesInCache[asset].uStatic) {
				// 移除 Static 标识, 
				texturesInCache[asset].uStatic == null;
				delete texturesInCache[asset].uStatic;
				continue;
			}

			if (texturesInCache[asset].bk_count <= 0) {
				release_key.push(texturesInCache[asset].url);
				cc.log(`释放资源:${texturesInCache[asset].url}`);
				cc.loader.release(texturesInCache[asset].url);
			}
		}

		if (release_key.length > 0) {
			this._depthGC(release_key);
		}
	}

	// 进行引用计数管理
	updateSpriteTexture(target: cc.Node, spriteFrame: cc.SpriteFrame) {
		if (!target || !spriteFrame || !target.getComponent(cc.Sprite)) {
			return;
		}
		let sprite = target.getComponent(cc.Sprite);
		this._replaceTagetTexture(sprite, "spriteFrame", spriteFrame);
	}

	// 进行引用计数管理
	updateButtonTexture(target: cc.Node, normalSprite?: cc.SpriteFrame, pressedSprite?: cc.SpriteFrame, hoverSprite?: cc.SpriteFrame, disabledSprite?: cc.SpriteFrame) {
		if (!target || !normalSprite) {
			cc.log("参数错误")
			return;
		}

		if (!target.getComponent(cc.Button)) {
			cc.log("目标节点没有Button组件");
			return;
		}

		let button = target.getComponent(cc.Button);

		if (normalSprite) {
			this._replaceTagetTexture(button, "normalSprite", normalSprite);
		}

		if (pressedSprite) {
			this._replaceTagetTexture(button, "pressedSprite", pressedSprite);
		}

		if (hoverSprite) {
			this._replaceTagetTexture(button, "hoverSprite", hoverSprite);
		}

		if (disabledSprite) {
			this._replaceTagetTexture(button, "disabledSprite", disabledSprite);
		}
	}


	//------------------------------------------------------------------------------


	private _replaceTagetTexture(target: any, attrName: string, newNormalSprite: cc.SpriteFrame) {
		if (target[attrName] === newNormalSprite) {
			return;
		}
		if (target[attrName]) {
			this.releaseRes(target[attrName]._textureFilename);
		}
		this.retatinRes(newNormalSprite["_textureFilename"]);
		target[attrName] = newNormalSprite;
	}

	private _parseStaticRes(item:  typeof cc.Asset, tag: string) {
		if (item instanceof cc.Texture2D) {
			cc.loader["_cache"][item.url].uStatic = true;
			cc.loader["_cache"][item.url].uTag = tag;
		} else if (item instanceof cc.SpriteFrame) {
			cc.loader["_cache"][item["_textureFilename"]].uStatic = true;
			cc.loader["_cache"][item["_textureFilename"]].uTag = tag;
		} else if (item instanceof cc.Prefab) {
			this._parseStaticPrefab(item, tag);
		} else if (item instanceof cc.BitmapFont) {
			cc.loader["_cache"][item["spriteFrame"]._textureFilename].uStatic = true;
			cc.loader["_cache"][item["spriteFrame"]._textureFilename].uTag = tag;
		} else if (item instanceof cc.SpriteAtlas) {
			var keys = Object.keys(item["_spriteFrames"])
			keys.forEach((key) => {
				cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uStatic = true;
				cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uTag = tag;
			});
		} else if (item instanceof cc.AnimationClip) {
			cc.log('AnimationClip 资源加载未做处理');
		} else if (item instanceof Object && item["name"]) {
			cc.log('Object 资源加载未做处理');
		}
	}

	private _parseStaticPrefab(node, tag: string) {
		var prefab = node;
		if (node.data) {
			prefab = node.data;
		}
	
		if (!(prefab instanceof cc.Scene)) {
			this._parseStaticNode(prefab, tag);
		}
		let children = prefab._children;
		children.forEach((child) => {
			this._parseStaticNode(child, tag);
			this._parseStaticPrefab(child, tag);
		});
	}

	private _retatinStaticRes(res: string, tag: string) {
		if (!cc.loader["_cache"][res]) {
			return;
		}

		if (!cc.loader["_cache"][res].bk_count) {
			cc.loader["_cache"][res].bk_count = 0;
		}
		cc.loader["_cache"][res].uStatic = true;
		cc.loader["_cache"][res].uTag = tag;
	}

	private _parseStaticNode(node: cc.Node, tag: string) {
		// sprite 组件
		let sprite = node.getComponent(cc.Sprite);
		if (sprite && sprite.spriteFrame) {
			this._retatinStaticRes(sprite.spriteFrame["_textureFilename"], tag);
		}
	
		// button 组件
		let button = node.getComponent(cc.Button);
		if (button && button.normalSprite) {
			this._retatinStaticRes(button.normalSprite["_textureFilename"], tag);
		}
		if (button && button.pressedSprite) {
			this._retatinStaticRes(button.pressedSprite["_textureFilename"], tag);
		}
		if (button && button.hoverSprite) {
			this._retatinStaticRes(button.hoverSprite["_textureFilename"], tag);
		}
		if (button && button.disabledSprite) {
			this._retatinStaticRes(button.disabledSprite["_textureFilename"], tag);
		}
		
		// label 组件
		let label = node.getComponent(cc.Label);
		if (label && label.font && label.font instanceof cc.BitmapFont && label.font["spriteFrame"]) {
			this._retatinStaticRes(label.font["spriteFrame"]._textureFilename, tag);
		}
	
		// richText 组件
		let richText = node.getComponent(cc.RichText);
		if (richText && richText.imageAtlas) {
			let keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
			if (keys.length > 0) {
				this._retatinStaticRes(richText.imageAtlas["_spriteFrames"][keys[0]]._textureFilename, tag);
			}
		}

		// particleSystem 组件
		let particleSystem = node.getComponent(cc.ParticleSystem);
		if (particleSystem && particleSystem["_texture"]) {
			this._retatinStaticRes(particleSystem["_texture"], tag);
		}
	
		// pageViewIndicator 组件
		let pageViewIndicator = node.getComponent(cc.PageViewIndicator);
		if (pageViewIndicator && pageViewIndicator.spriteFrame) {
			this._retatinStaticRes(pageViewIndicator.spriteFrame["_textureFilename"], tag);
		}
	
		// editBox 组件
		let editBox = node.getComponent(cc.EditBox);
		if (editBox && editBox.backgroundImage) {
			this._retatinStaticRes(editBox.backgroundImage["_textureFilename"], tag);
		}
		// if(editBox && editBox.background && editBox.background.spriteFrame) {
		// 	this._retatinStaticRes(editBox.background.spriteFrame["_textureFilename"], tag);
		// }
	
		// Mask
		let mask = node.getComponent(cc.Mask);
		if (mask && mask.spriteFrame) {
			this._retatinStaticRes(mask.spriteFrame["_textureFilename"], tag);
		}
	}


	//------------------------------------------------------------------------


	private _parserNodeRes(node: cc.Node, num: number) {
		let children = node.children;
		this._parserNodeComponentRes(node, num);
		children.forEach((child) => {
			this._parserNodeRes(child, num);
		});
	}

	private _parserNodeComponentRes(node: cc.Node, num: number) {
		this._parserComponentSprite(node, num);
		this._parserComponentButton(node, num);
		this._parserComponentLabel(node, num);
		this._parserComponentRichText(node, num);
		this._parserComponentParticleSystem(node, num);
		this._parserComponentPageViewIndicator(node, num);
		this._parserComponentEditBox(node, num);
		this._parserComponentMask(node, num);
	}

	private _parserComponentSprite(node: cc.Node, num: number) {
		let sprite = node.getComponent(cc.Sprite);
		if (!sprite || !sprite.spriteFrame) {
			return;
		}

		if (num > 0) {
			this.retatinRes(sprite.spriteFrame["_textureFilename"]);
			return;
		}
		this.releaseRes(sprite.spriteFrame["_textureFilename"]);
	}

	private _parserComponentButton(node: cc.Node, num: number) {
		let button = node.getComponent(cc.Button);
		if (!button) {
			return;
		}

		if (button.normalSprite) {
			if (num > 0) {
				this.retatinRes(button.normalSprite["_textureFilename"]);
			} else {
				this.releaseRes(button.normalSprite["_textureFilename"]);
			}
		}

		if (button.pressedSprite) {
			if (num > 0) {
				this.retatinRes(button.pressedSprite["_textureFilename"]);
			} else {
				this.releaseRes(button.pressedSprite["_textureFilename"]);
			}
		   
		}

		if (button.hoverSprite) {
			if (num > 0) {
				this.retatinRes(button.hoverSprite["_textureFilename"]);
			} else {
				this.releaseRes(button.hoverSprite["_textureFilename"]);
			}
		}

		if (button.disabledSprite) {
			if (num > 0) {
				this.retatinRes(button.disabledSprite["_textureFilename"]);
			} else {
				this.releaseRes(button.disabledSprite["_textureFilename"]);
			}
		}
	}

	private _parserComponentLabel(node: cc.Node, num: number) {
		let label = node.getComponent(cc.Label);
		if (!label || !label.font || !(label.font instanceof cc.BitmapFont) || !label.font["spriteFrame"]) {
			return;
		}

		if (num > 0) {
			this.retatinRes(label.font["spriteFrame"]["_textureFilename"]);
			return;
		}
		this.releaseRes(label.font["spriteFrame"]["_textureFilename"]);
	}

	private _parserComponentRichText(node: cc.Node, num: number) {
		let richText = node.getComponent(cc.RichText);
		if (!richText || !richText.imageAtlas) {
			return;
		}

		let keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
		if (keys.length <= 0) {
			return;
		}

		if (num > 0) {
			this.retatinRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
			return;
		}
		this.releaseRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
	}

	private _parserComponentParticleSystem(node: cc.Node, num: number){
		let particleSystem = node.getComponent(cc.ParticleSystem);
		if (!particleSystem || !particleSystem["_texture"]) {
			return;
		}

		if (num > 0) {
			this.retatinRes(particleSystem["_texture"]);
			return;
		}
		this.releaseRes(particleSystem["_texture"]);
	}

	private _parserComponentPageViewIndicator(node: cc.Node, num: number) {
		let pageViewIndicator = node.getComponent(cc.PageViewIndicator);
		if (!pageViewIndicator || !pageViewIndicator.spriteFrame) {
		   return;
		}

		if (num > 0) {
			this.retatinRes(pageViewIndicator.spriteFrame["_textureFilename"]);
			return;
		}
		this.releaseRes(pageViewIndicator.spriteFrame["_textureFilename"]);
	}

	private _parserComponentEditBox(node: cc.Node, num: number) {
		let editBox = node.getComponent(cc.EditBox);
		if (!editBox || !editBox.backgroundImage) {
			return;
		}

		if (num > 0) {
			this.retatinRes(editBox.backgroundImage["_textureFilename"]);
			// if(editBox && editBox.background && editBox.background.spriteFrame) {
			// 	this.retatinRes(editBox.background.spriteFrame["_textureFilename"]);
			// }
			return;
		}
		this.releaseRes(editBox.backgroundImage["_textureFilename"]);
		// if(editBox && editBox.background && editBox.background.spriteFrame) {
		// 	this.releaseRes(editBox.background.spriteFrame["_textureFilename"]);
		// }
	}

	private _parserComponentMask(node: cc.Node, num: number) {
		let mask = node.getComponent(cc.Mask);
		if (!mask || !mask.spriteFrame) {
			return;
		}

		if (num > 0) {
			this.retatinRes(mask.spriteFrame["_textureFilename"]);
			return;
		}
		this.releaseRes(mask.spriteFrame["_textureFilename"]);
	}

}
