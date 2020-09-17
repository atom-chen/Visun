import ModelBase from "../../../kernel/model/ModelBase";
import { isEmpty, isNil } from "../../../kernel/utils/GlobalFuncs";

export class NoticeInfo {
	Content: string;
	bForever: boolean;
	public constructor(txt:string, bForever:boolean) {
		this.Content = txt;
		this.bForever = bForever;
	}
}

export default class NoticeMgr extends ModelBase {
	private static _instance:NoticeMgr = null;
    public static getInstance() : NoticeMgr {
        if(!NoticeMgr._instance) { NoticeMgr._instance = new NoticeMgr; }
        return NoticeMgr._instance;
	}
	public static delInstance() : void {
		if(NoticeMgr._instance) {
			NoticeMgr._instance.clear();
			NoticeMgr._instance = null;
		}
	}

	on_clear(): void {
		this._noticeList.length = 0;
	}

	private _noticeList:Array<NoticeInfo> = [];

	addNotice(txt:string, bForever:boolean) {
		if(isEmpty(txt)) { return; }
		var info = new NoticeInfo(txt, bForever);
		this._noticeList.push(info);
	}

	clearNotice() {
		this._noticeList.length = 0;
	}

	getNotice() : NoticeInfo {
		var first = this._noticeList[0];
		if(first) {
			this._noticeList.splice(0, 1);
			if(first.bForever) {
				this._noticeList.push(first);
			}
		}
		return first;
	}

}