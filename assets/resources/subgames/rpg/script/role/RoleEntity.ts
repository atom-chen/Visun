//-----------------------------------
// 实体：角色
//-----------------------------------
import RoleAgent from "../../../../../kernel/behaviour/RoleAgent";

export default class RoleEntity extends RoleAgent {
	protected uid:number;
	protected hp:number;
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

	protected posX:number;
	protected posY:number;
	protected posH:number;

	protected RushSpeed:number;
	protected RunSpeed:number;
	protected WalkSpeed:number;
	
	protected curDir:number;
	protected curMoveSpeed:number;
	protected curSkySpeed:number;

	

}