export default class LoadCenter {
	public static loadRes(url: string, type: typeof cc.Asset, completeCallback:((resource: any) => void), progressCallback:((completedCount: number, totalCount: number, item: any) => void)|null)
	{
		if (!url || !type || !completeCallback) {
            cc.log("参数错误");
            return;
		}
		if(progressCallback===null){
			progressCallback = function(completedCount: number, totalCount: number, item: any){ }
		}
		cc.loader.loadRes(url, type, progressCallback, (err: Error, resobj: any)=>{
			if (err) {
                cc.log(`[资源加载] 错误 ${err}`);
                return;
			}
			completeCallback(resobj);
		});
	}
}