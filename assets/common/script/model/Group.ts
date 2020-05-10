export default class Group {
	private GroupId:number = 0;
	private GroupName:string = "";
	private HostID:number = 0;
	private Timestamp:number = 0;
	private AdminList:Array<number>;
	private MemberList:Array<number>;
	private BannedList:Array<number>;

	constructor(id:number, name:string, hostId:number, timest:number) {
		this.GroupId = id;
		this.GroupName = name;
		this.HostID = hostId;
		this.Timestamp = timest;
		this.MemberList = [];
		this.AdminList = [];
		this.BannedList = [];
	}

	getId() : number {
		return this.GroupId;
	}

	addMember(uid:number, info:any) {

	}

	delMember(uid:number) {
		
	}
}