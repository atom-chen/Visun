//-----------------------------------
// 实体：角色
//-----------------------------------
import RoleAgent from "../../../../../kernel/behaviour/RoleAgent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";

export default class RoleEntity extends RoleAgent {
	protected uid:number;
	protected typeId:number;
	protected roleType:number;
	protected shapeId:number;
	protected userName:string;
	protected nick:string;
	protected curExp:number;
	protected grade:number;
	protected vipLevel:number;
	protected money:number;
	protected diamond:number;
	protected equip:string;

	protected RushSpeed:number;
	protected RunSpeed:number;
	protected WalkSpeed:number;

	protected posX:number;
	protected posY:number;
	protected posH:number;
	protected curDir:number;
	protected curMoveSpeed:number;
	protected curSkySpeed:number;

	public addMoney(v:number) : number {
		this.money = this.money + v;
		return this.money;
	}

	public addDiamond(v:number) : number {
		this.diamond = this.diamond + v;
		return this.diamond;
	}

}