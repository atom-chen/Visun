import SimplePlayer from "./SimplePlayer";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import { isNil } from "../../../kernel/utils/GlobalFuncs";

export default class Group {
	GroupId:number = 0;
	GroupName:string = "";
	HostID:number = 0;
	Timestamp:number = 0;

	private MemberList:{[key:number]:SimplePlayer};
	private AdminList:Array<number>;
	private BannedList:Array<number>;

	constructor(id:number, name:string, hostId:number, timest:number) {
		this.GroupId = id;
		this.GroupName = name;
		this.HostID = hostId;
		this.Timestamp = timest;
		this.MemberList = {};
		this.AdminList = [];
		this.BannedList = [];
	}

	getId() : number {
		return this.GroupId;
	}

	resetMemberList(members) {
		this.MemberList = {};
		for(var i in members) {
			var m = new SimplePlayer();
			CommonUtil.simpleCopy(m, members[i]);
			this.MemberList[m.UserID] = m;
		}
	}

	resetAdminList(members) {
		this.AdminList.length = 0;
		for(var i in members) {
			this.AdminList.push(members[i]);
		}
	}

	resetBannedList(members) {
		this.BannedList.length = 0;
		for(var i in members) {
			this.BannedList.push(members[i]);
		}
	}

	addMember(uid:number, info:any) {
		if(isNil(this.MemberList[uid])) {
			this.MemberList[uid] = new SimplePlayer();
		}
		this.MemberList[uid].UserID = uid;
		CommonUtil.simpleCopy(this.MemberList[uid], info);
	}

	delMember(uid:number) {
		this.MemberList[uid] = null;
	}

	getMember(uid:number) : SimplePlayer {
		if(!isNil(this.MemberList[uid])) {
			return this.MemberList[uid];
		}
		return null;
	}

	isAdmin(uid:number) : boolean {
		return this.AdminList.indexOf(uid) >= 0;
	}

	isBanned(uid:number) : boolean {
		return this.BannedList.indexOf(uid) >= 0;
	}
	
}