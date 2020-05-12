import SimplePlayer from "./SimplePlayer";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import { isNil } from "../../../kernel/utils/GlobalFuncs";

export default class Group {
	GroupId:number = 0;
	GroupName:string = "";
	HostID:number = 0;
	Timestamp:number = 0;

	private AdminList:Array<number>;
	private MemberList:{[key:number]:SimplePlayer};
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

	addMember(info:any) {

	}

	delMember(uid:number) {
		
	}

	getMember(uid) : SimplePlayer {
		if(!isNil(this.MemberList[uid])) {
			return this.MemberList[uid];
		}
		return null;
	}
	
}