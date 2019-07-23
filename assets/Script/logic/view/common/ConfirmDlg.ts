const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmDlg extends cc.Component {

	@property(cc.Label)
	labelContent: cc.Label = null;

	@property(cc.Label)
	labelTitle: cc.Label = null;

	@property(cc.Button)
	btn_ok: cc.Button = null;

	@property(cc.Button)
	btn_no: cc.Button = null;

	private _callback:Function = null;

	onLoad() {
		var self = this;
		this.btn_ok.node.on("click", function(){
			self._callback(1);
			self.node.destroy();
		})
		this.btn_no.node.on("click", function(){
			self._callback(0);
			self.node.destroy();
		})
	}

	
	public reflesh(callback:Function, content:string, title:string, okTxt:string, cancelTxt:string) 
	{
		this._callback = callback;
		this.labelContent.string = content;
		this.labelTitle.string = title;
	}
}
